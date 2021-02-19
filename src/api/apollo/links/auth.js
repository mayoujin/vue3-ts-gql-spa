import { setContext } from '@apollo/link-context'
import { getAuthFromStorage } from '@/auth/store'

const getAuthHeaders = () => {
  const { accessToken } = getAuthFromStorage()
  return accessToken ? { Authorization: `Bearer ${accessToken}` } : null
}

const authLink = setContext((operation, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      ...getAuthHeaders(),
    },
  }
})

/* const timeoutLink = new TimeoutLink(60000) */

export default authLink
