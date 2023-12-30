import { z } from 'zod'

const subjectSchema = z.object({
  id: z.number(),
  name: z.string(),
})

const classesSchema = z.object({ id: z.number(), name: z.string() })

export const teacherSchema = z.object({
  id: z.number(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  password: z.string(),
  subjects: z.array(subjectSchema),
  tutor: z.boolean(),
  teachClases: z.array(classesSchema),
})

export type TeacherSchemaType = z.infer<typeof teacherSchema>
