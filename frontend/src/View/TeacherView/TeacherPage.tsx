import { Stack, Typography } from '@mui/material'
import { TeachersTableView } from './TeachersTableView'
import teachers from './data.json'
import { TeacherCreateModal } from './TeacherCreateModal'

export const TeacherPage = () => {
  return (
    <Stack height="100%">
      <Stack justifyContent="space-between" direction="row">
        <Typography variant="h6">Teacher's list</Typography>
        <TeacherCreateModal />
      </Stack>
      <TeachersTableView teachers={teachers} countTeachers={teachers.length} />
    </Stack>
  )
}
