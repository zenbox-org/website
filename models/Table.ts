import { z } from 'zod'
import { ZodType, ZodTypeDef } from 'zod/lib/types'
import { TableRowSchema } from './TableRow'

export const TableSchema = <Output, Def extends ZodTypeDef = ZodTypeDef, Input = Output>(DataSchema: ZodType<Output, Def, Input>) => <Output, Def extends ZodTypeDef = ZodTypeDef, Input = Output>(ActionSchema: ZodType<Output, Def, Input>) => z.object({
  rows: z.array(TableRowSchema(DataSchema)(ActionSchema)),
}).describe('Table')
