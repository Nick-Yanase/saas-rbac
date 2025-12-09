import type { AbilityBuilder } from "@casl/ability"
import type { User } from "./models/user"
import type { AppAbility } from "."
import type { Role } from "./roles"

type PermissionsByRole = (
  user: User,
  builder: AbilityBuilder<AppAbility>
) => void

export const permissions: Record<Role, PermissionsByRole> = {
  ADMIN: (_, { can }) => {
    can('manage', 'all')
  },
  MEMBER: (user, { can }) => {
    can(['create', 'get'], 'Project')
    can(['update', 'delete'], 'Project', {ownerId: {$eq: user.id}}), // usuario pode ATUALIZAR ou DELETAR um PROJETO, se ele for o DONO do projeto
    can('delete', "Organization", {ownerId: {$eq: user.id}})
  },
  BILLING: (_, { can }) => {
    can('create', 'Project')
  },
}
