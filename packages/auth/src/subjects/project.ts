import { z } from "zod"
import { projectSchema } from "../models/project"

// TUPLE: quando é um array somente com 2 posições
export const projectSubject = z.tuple([
  // UNION é usado quando temos "OU", então a posição 0 desse array pode ser create ou delete etc 
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('create'),
    z.literal('delete'),
    z.literal('update'),
  ]),
  z.union([z.literal('Project'), projectSchema])
])

export type ProjectSubject = z.infer<typeof projectSubject>