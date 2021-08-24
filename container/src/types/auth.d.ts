declare module 'auth/Main' {
  interface Options {
    history?: any
  }

  interface MountReturn {
    onParentNavigate: () => void
  }

  const mount: (el: Element, options: Options) => MountReturn

  export {
    mount
  }
}
