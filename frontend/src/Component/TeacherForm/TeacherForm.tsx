import { Autocomplete, Stack, TextField } from '@mui/material'
import subjects from './subject.json'

export const TeacherForm = () => {
  return (
    <Stack>
      <Stack>
        <TextField required label="Firstname" />
        <TextField required label="Last name" />
      </Stack>
      <Autocomplete
        multiple
        options={subjects}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField {...params} label="Subjects" />}
      />
    </Stack>
  )
}
