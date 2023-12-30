import { Delete, Edit, LockReset } from '@mui/icons-material'
import {
  Chip,
  IconButton,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from '@mui/material'
import { useState } from 'react'

type ClassType = {
  id: number
  className: string
}

type SubjectType = {
  id: number
  name: string
  type: string
}

type Props = {
  teachers: {
    id: number
    firstName: string
    lastName: string
    password: string
    subject: SubjectType[]
    tutor: boolean
    classes: ClassType[]
  }[]
  countTeachers: number
}

const subjectType = (type: string) => {
  switch (type) {
    case 'humanistic':
      return 'success'
    case 'science':
      return 'warning'
    default:
      return 'secondary'
  }
}

const classType = (className: string) => {
  const splitName = className.split('')
  switch (splitName[0]) {
    case '1':
      return 'success'
    case '2':
      return 'warning'
    default:
      return 'secondary'
  }
}
export const TeachersTableView = ({ teachers, countTeachers }: Props) => {
  const [page, setPage] = useState<number>(1)
  const rowsPerPage = 14
  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage)
  }
  const countPages = Math.ceil(countTeachers / rowsPerPage)
  return (
    <>
      <TableContainer sx={{ height: 720 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: '250px' }}>Name</TableCell>
              <TableCell>Subjects</TableCell>
              <TableCell align="right">Classes</TableCell>
              <TableCell sx={{ width: '120px' }} align="right">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers
              .slice(
                (page - 1) * rowsPerPage,
                (page - 1) * rowsPerPage + rowsPerPage,
              )
              .map((teacher) => {
                return (
                  <TableRow>
                    <TableCell sx={{ width: '250px' }}>
                      {teacher.firstName} {teacher.lastName}
                    </TableCell>
                    <TableCell>
                      {teacher.subject.map((it) => {
                        return (
                          <>
                            <Chip
                              label={it.name}
                              color={subjectType(it.type)}
                            />{' '}
                          </>
                        )
                      })}
                    </TableCell>
                    <TableCell align="right">
                      {teacher.classes.map((it) => {
                        return (
                          <>
                            {' '}
                            <Chip
                              label={it.className}
                              variant="outlined"
                              color={classType(it.className)}
                            />{' '}
                          </>
                        )
                      })}
                    </TableCell>
                    <TableCell sx={{ width: '120px' }} align="right">
                      <Tooltip title="Generate new password">
                        <IconButton>
                          <LockReset />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Edit">
                        <IconButton>
                          <Edit />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton>
                          <Delete />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {countTeachers > rowsPerPage && (
        <Pagination
          count={countPages}
          onChange={handleChangePage}
          sx={{
            display: 'flex',
            flexDirection: 'row-reverse',
            marginTop: '16px',
          }}
        />
      )}
    </>
  )
}
