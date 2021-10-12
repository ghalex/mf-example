import config from '@/config'
import axios from 'axios'

const fetchDashboard = (projectId: string) => {
  const url = config.API_URL + '/dashboard?project=' + projectId

  return axios.get(url)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err.response.data.message)
    })
}

export { fetchDashboard }
