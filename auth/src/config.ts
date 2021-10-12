import pk from '../package.json'

const config = {
  API_URL: process.env.VUE_APP_API as string,
  NAME: process.env.VUE_APP_NAME as string,
  VERSION: pk.version
}

export default config
