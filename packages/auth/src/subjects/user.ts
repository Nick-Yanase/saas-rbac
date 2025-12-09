import { z } from "zod"

// TUPLE: quando é um array somente com 2 posições
export const userSubject = z.tuple([
  // UNION é usado quando temos "OU", então a posição 0 desse array pode ser create ou delete etc 
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('delete'),
    z.literal('update'),

  ]),
  z.literal('User')
])

export type UserSubject = z.infer<typeof userSubject>