import { Add } from '@mui/icons-material'
import { Button, Stack, Typography } from '@mui/material'
import { TeachersTableView } from './TeachersTableView'
import teachers from './data.json'

export const TeacherPage = () => {
  return (
    <Stack height="100%">
      <Stack justifyContent="space-between" direction="row">
        <Typography variant="h6">Teacher's list</Typography>
        <Button startIcon={<Add />}>Add teacher</Button>
      </Stack>
      <TeachersTableView teachers={teachers} countTeachers={teachers.length} />
    </Stack>
  )
}
