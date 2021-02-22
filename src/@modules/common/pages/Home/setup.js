import { useEmitMetadata } from '@/tools'

import { metadata } from './config'

/**
 *
 */
export const useFetchData = () => {}

/**
 *
 */
const setup = (props, context) => {
  useEmitMetadata(metadata, context)

  return {}
}

export default {
  setup,
}
