declare module 'auth/Main' {
  interface Options {
    history?: any
    initialPath: string
    onChildNavigate: (to, from) => void
  }

  interface MountReturn {
    onParentNavigate: (to, from) => void
  }

  const mount: (el: any, options: Options) => MountReturn

  export {
    mount
  }
}
