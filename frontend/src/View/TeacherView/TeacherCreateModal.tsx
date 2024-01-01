import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import { TeacherForm } from '../../Component'
import { Add } from '@mui/icons-material'
import { useState } from 'react'

export const TeacherCreateModal = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <Button startIcon={<Add />} onClick={handleOpen}>
        Add teacher
      </Button>
      <Dialog open={open}>
        <DialogTitle>Add new teacher</DialogTitle>
        <DialogContent>
          <TeacherForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button color="success" onClick={handleClose}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
