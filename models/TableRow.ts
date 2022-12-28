import { z } from 'zod'
import { ZodType, ZodTypeDef } from 'zod/lib/types'

export const TableRowSchema = <Output, Def extends ZodTypeDef = ZodTypeDef, Input = Output>(DataSchema: ZodType<Output, Def, Input>) => <Output, Def extends ZodTypeDef = ZodTypeDef, Input = Output>(ActionSchema: ZodType<Output, Def, Input>) => z.object({
  data: DataSchema,
  actions: z.array(ActionSchema),
}).describe('Table')
