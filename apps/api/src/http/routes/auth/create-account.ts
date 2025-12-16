import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";

export async function createAccount(app: FastifyInstance){
  app.withTypeProvider<ZodTypeProvider>()
  .post("/users",{
    // Com esse schema com zod, se o body não tiver esses parametros ou estiverem errados, o fastify já retorna um erro 400 automaticamente e impoede o endpoint de executar
    schema: {
      body: z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
      })
    }
  }, () => {
    return "user created"
  })
}