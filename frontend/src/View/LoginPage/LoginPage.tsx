import { Paper, Stack } from '@mui/material'
import { LoginForm } from '../../Component'
import { cyan } from '@mui/material/colors'

export const LoginPage = () => {
  return (
    <Paper elevation={3} sx={{ height: '100%', display: 'flex' }}>
      <Stack
        sx={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          background: `${cyan[900]}`,
        }}
        borderRadius="4px 0px 0px 4px"
      >
        <img
          src="/logo-login.png"
          style={{
            width: '600px',
            height: '600px',
          }}
        />
      </Stack>
      <Stack
        sx={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        gap={4}
      >
        <LoginForm />
      </Stack>
    </Paper>
  )
}
