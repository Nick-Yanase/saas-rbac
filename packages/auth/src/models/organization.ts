import z from "zod"
/* 
  aqui eu NÃO vou colocar todas as colunas que possui dentro da entidade 'Organization'
  será adicionado SOMENTE campos que são relevantes para o PERMISSIONAMENTO
*/
export const organizationSchema = z.object({
  __typename: z.literal('Organization').default('Organization'), //esse campo existe para nós podmeos fazer condicionais dentro de permissions, ex: usario
  id: z.string(),
  ownerId: z.string()
})
export type Organization = z.infer<typeof organizationSchema>