import { defineAbilityFor } from '@saas/auth'
const ability = defineAbilityFor({ role: 'MEMBER' })
const userCanInveiteSomeoneElse = ability.can("invite", "User")
const userCanInveiteSomeoneElse2 = ability.can("delete", "User")
const userCanInveiteSomeoneElse3 = ability.cannot("delete", "User")
console.log(userCanInveiteSomeoneElse)
console.log(userCanInveiteSomeoneElse2)
console.log(userCanInveiteSomeoneElse3)