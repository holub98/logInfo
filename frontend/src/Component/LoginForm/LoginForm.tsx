import { Lock, Person, Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LoginSchemaType, loginSchema } from './LoginSchema'
import { zodResolver } from '@hookform/resolvers/zod'

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  })

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleChangeVisibility = () => setShowPassword(!showPassword)

  const onSubmit = (data: LoginSchemaType) => console.log('zalogowano', data)

  return (
    <Stack gap={4} component="form">
      <Typography variant="h6" fontWeight="bold" color="text.secondary">
        Login to your account
      </Typography>
      <TextField
        required
        label="User name"
        {...register('username')}
        sx={{ width: 400 }}
        InputProps={{
          startAdornment: <Person />,
        }}
      />
      <TextField
        required
        label="Password"
        type={showPassword ? ' text' : 'password'}
        sx={{ width: 400 }}
        {...register('password')}
        InputProps={{
          startAdornment: <Lock />,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleChangeVisibility}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        variant="text"
        size="large"
        type="submit"
        onClick={handleSubmit(onSubmit)}
      >
        Login
      </Button>
    </Stack>
  )
}
