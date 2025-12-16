import { fastify } from "fastify"
import fastifyCors from "@fastify/cors"
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider
} from "fastify-type-provider-zod"
import { create } from "domain"
import { createAccount } from "./routes/auth/create-account"

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors) //permite que qualquer pessoa/frontend consiga acessar a aplicação

// para configuração do Zod
app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

// AUTH
app.register(createAccount)

app.listen({ port: 3333 }).then(() => {
  console.log("🚀 HTTP server running at localhost:3333")
})