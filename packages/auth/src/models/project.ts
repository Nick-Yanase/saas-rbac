import z from "zod"
/* 
  aqui eu NÃO vou colocar todas as colunas que possui dentro da entidade 'Project'
  será adicionado SOMENTE campos que são relevantes para o PERMISSIONAMENTO
*/
export const projectSchema = z.object({
  __typename: z.literal('Project').default('Project'), //esse campo existe para nós podmeos fazer condicionais dentro de permissions, ex: usario
  id: z.string(),
  ownerId: z.string()
})
export type Project = z.infer<typeof projectSchema>