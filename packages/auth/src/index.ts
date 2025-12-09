import {
  createMongoAbility, CreateAbility,
  MongoAbility,
  AbilityBuilder
} from '@casl/ability'
import type { User } from './models/user'
import { permissions } from './permissions'
import { userSubject } from './subjects/user'
import { projectSubject } from './subjects/project'
import z from 'zod'
import { organizationSubject } from './subjects/organization'
import { inviteSubject } from './subjects/invite'
import { billingSubject } from './subjects/billing'

const appAbilitiesSchema = z.union([
  userSubject,
  projectSubject,
  organizationSubject,
  inviteSubject,
  billingSubject,
  z.tuple([ z.literal('manage'), z.literal('all') ])
])
type AppAbilities = z.infer<typeof appAbilitiesSchema>

export type AppAbility = MongoAbility<AppAbilities>
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>

export function defineAbilityFor(user: User) { // com essa função definimos o conjunto de permissões pra um usuario específico
  const builder = new AbilityBuilder(createAppAbility)

  if(typeof permissions[user.role] !== 'function') {
    throw new Error(`Permissions for role ${user.role} not found`)
  }

  permissions[user.role](user, builder) // função declarada em PERMISSIONS

  const ability = builder.build()

  return ability
  // can('invite', 'User') // falando que usuario pode convidar outro usuario
  // cannot('delete', 'User') // fica meio redundante, pois se eu não coloquei que o can(delete, user), então pnão precisaria dessa linha

  // export const ability = build()
}
