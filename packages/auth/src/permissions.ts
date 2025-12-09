import type { AbilityBuilder } from "@casl/ability"
import type { User } from "./models/user"
import type { AppAbility } from "."
import type { Role } from "./roles"

type PermissionsByRole = (
  user: User,
  builder: AbilityBuilder<AppAbility>
) => void

export const permissions: Record<Role, PermissionsByRole> = {
  ADMIN: (user, { can, cannot }) => {
    can('manage', 'all') //pode fazer tudo porém...
    cannot(['transfer_onwership', 'update'], "Organization")
    can(["transfer_onwership", 'update'], "Organization", {ownerId: { $eq : user.id }}) // usuario ADMIN pode ATUALIZAR ou TRANSFERIR O DONO de um PROJETO, se ele for o DONO do projeto
  },
  MEMBER: (user, { can }) => {
    can('get', 'User')
    can(['create', 'get'], 'Project')
    can(['update', 'delete'], 'Project', {ownerId: { $eq: user.id }})
  },
  BILLING: (_, { can }) => {
    can('manage', 'billing')
  },
}
