import { z } from "zod"
import { organizationSchema } from "../models/organization"

// TUPLE: quando é um array somente com 2 posições
export const organizationSubject = z.tuple([
  // UNION é usado quando temos "OU", então a posição 0 desse array pode ser create ou delete etc 
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('create'),
    z.literal('delete'),
    z.literal('update'),
    z.literal('transfer_onwership'),

  ]),
  z.union([z.literal('Organization'), organizationSchema])
])

export type OrganizationSubject = z.infer<typeof organizationSubject>