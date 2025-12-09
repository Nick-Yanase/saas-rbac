import { defineAbilityFor } from '@saas/auth'
import { projectSchema } from '@saas/auth/src/models/project'
const ability = defineAbilityFor({ id: 'userID', role: 'MEMBER' })
const project = projectSchema.parse({id: 'projectId', ownerId: 'userID'})

console.log(ability.can('delete', project))