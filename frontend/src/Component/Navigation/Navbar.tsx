import { Button, Stack } from '@mui/material'
import { blue } from '@mui/material/colors'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <Stack
      direction="row"
      style={{
        height: '60px',
        background: `${blue[500]}`,
        paddingLeft: '64px',
        paddingRight: '64px',
      }}
      alignItems="center"
      justifyContent="space-between"
    >
      <Link to="/">
        <img src="logo-app.png" style={{ width: '120px' }} />
      </Link>
      <Stack direction="row" gap={3}>
        <Button
          variant="text"
          href="/"
          size="large"
          sx={{ fontWeight: 'bold', color: `${blue[50]}` }}
        >
          Messages
        </Button>
        <Button
          variant="text"
          href="/"
          size="large"
          sx={{ fontWeight: 'bold', color: `${blue[50]}` }}
        >
          Marks
        </Button>
        <Button
          variant="text"
          href="/"
          size="large"
          sx={{ fontWeight: 'bold', color: `${blue[50]}` }}
        >
          Attentions
        </Button>
        <Button
          variant="text"
          href="/"
          size="large"
          sx={{ fontWeight: 'bold', color: `${blue[50]}` }}
        >
          Time Table
        </Button>
        <Button
          variant="text"
          href="/login"
          size="large"
          sx={{ fontWeight: 'bold', color: `${blue[50]}` }}
        >
          Login
        </Button>
      </Stack>
    </Stack>
  )
}
