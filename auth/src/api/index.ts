import config from '@/config'
import axios from 'axios'
import { User, LoginData, SignupData, TokenData, ProjectData } from '@/types'

const signIn = (data: LoginData): Promise<LoginData> => {
  const url = config.API_URL + '/auth/login'

  return axios.post(url, data)
    .then((res) => {
      const user = res.data.data
      localStorage.setItem('tesara-user', JSON.stringify(user))

      return user
    })
    .catch((err) => {
      throw new Error(err.response.data.message)
    })
}

const signOut = (): void => {
  localStorage.removeItem('tesara-user')
  localStorage.clear()
}

const register = (data: SignupData): Promise<User> => {
  const url = config.API_URL + '/auth/register'

  return axios.post(url, data)
    .then((res) => {
      const user = res.data.data as User
      localStorage.setItem('tesara-user', JSON.stringify(user))

      return user
    })
    .catch((err) => {
      if (err.response.status === 401) {
        throw new Error(err.response.data.message)
      } else {
        throw new Error('Server error')
      }
    })
}

const confirmEmail = ({ token, tokenId }: TokenData): Promise<void> => {
  throw new Error('not implemented')
}

const resetPassword = (email: string): Promise<void> => {
  throw new Error('not implemented')
}

const changePassword = (token: string, tokenId: string, password: string): Promise<void> => {
  throw new Error('not implemented')
}

const currentUser = (): User | null => {
  const str = localStorage.getItem('tesara-user')

  if (str) {
    const user = JSON.parse(str) as User
    return user
  }

  return null
}

const isAuthenticated = (): boolean => {
  return currentUser() !== null
}

const createProject = (data: ProjectData): Promise<any> => {
  const url = config.API_URL + '/project'

  return axios.post(url, data)
    .then((res) => {
      return data
    })
    .catch((err) => {
      if (err.response.status === 401) {
        throw new Error(err.response.data.message)
      } else {
        throw new Error('Server error')
      }
    })
}

export { signIn, signOut, register, resetPassword, changePassword, confirmEmail, currentUser, isAuthenticated, createProject }
