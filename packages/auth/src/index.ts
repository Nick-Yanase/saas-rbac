import {
  createMongoAbility,
  ForcedSubject,
  CreateAbility,
  MongoAbility,
  AbilityBuilder,
} from '@casl/ability'

const actions = ['manage', 'invite', 'delete'] as const
const subjects = ['User', 'all'] as const
type AppAbilities = [
  (typeof actions)[number],
  (
    | (typeof subjects)[number]
    | ForcedSubject<Exclude<(typeof subjects)[number], 'all'>>
  ),
]

export type AppAbility = MongoAbility<AppAbilities>
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>

const { build, can, cannot } = new AbilityBuilder(createAppAbility)

can('invite', 'User') // falando que usuario pode convidar outro usuario
cannot('delete', 'User') // fica meio redundante, pois se eu não coloquei que o can(delete, user), então pnão precisaria dessa linha

export const ability = build()
