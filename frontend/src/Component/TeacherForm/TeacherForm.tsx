import { Stack, TextField } from '@mui/material'

export const TeacherForm = () => {
  return (
    <Stack>
      <TextField required label="Firstname" />
      <TextField required label="Last name" />
    </Stack>
  )
}
