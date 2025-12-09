import { z } from "zod"

// TUPLE: quando é um array somente com 2 posições
export const organizationSubject = z.tuple([
  // UNION é usado quando temos "OU", então a posição 0 desse array pode ser create ou delete etc 
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('create'),
    z.literal('delete'),
    z.literal('transfer_onwership'),

  ]),
  z.literal('organization')
])

export type OrganizationSubject = z.infer<typeof organizationSubject>