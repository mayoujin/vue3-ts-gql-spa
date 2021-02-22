import { gql } from '@apollo/client'

const argRead = (key: string) => gql`{ ${key} @client }`

const argReadCache = (key: string) => {
  return { query: argRead(key) }
}

const argWriteCache = (key: string, value: any) => {
  return { data: { [key]: value } }
}

export const readCache = (cache: any, key: string) => {
  return cache.readQuery(argReadCache(key))[key]
}

export const writeCache = (cache: any, key: string, value: any) => {
  return cache.writeData(argWriteCache(key, value))
}

export const argMutate = (mutation: string) => {
  return {
    mutation: gql`mutation { ${mutation} @client }`,
  }
}

export const apolloState = (key: string) => {
  return {
    query: argRead(key),
    loadingKey: 'loading',
  }
}
