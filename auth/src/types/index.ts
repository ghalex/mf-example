export interface User {
  token: string
  name: string
  email: string
  team: string
  profilePhotoUrl: string
}

export interface LoginData {
  email: string
  password: string
}

export interface SignupData extends LoginData {
  companyName: string
  companyType: string
  passwordConfirmation: string
  agreeTerms: boolean
  joinNewsletter: boolean
}

export interface ProjectData {
  name: string
  url: string
}

export interface TokenData {
  password: string
  confirmPassword: string
  token: string
  tokenId: string
}
