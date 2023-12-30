import { z } from 'zod'

const subjectSchema = z.object({
  id: z.number(),
  name: z.string(),
})

export const teacherSchema = z.object({
  id: z.number(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  subjects: z.array(subjectSchema),
  tutor: z.boolean(),
  teachClases: z.array(z.string()),
})

export type TeacherSchemaType = z.infer<typeof teacherSchema>
