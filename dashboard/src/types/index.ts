export interface User {
  token: string
  name: string
  email: string
  team: string
  profilePhotoUrl: string
}

export interface ProjectData {
  name: string
  url: string
}
export type PromiseResult<T> = Promise<Result<T>>
