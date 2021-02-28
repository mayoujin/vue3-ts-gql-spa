import { useEmitMetadata } from '@/tools'
import { metadata } from './config'

/**
 *
 */
export const setup = (props, context) => {
  useEmitMetadata(metadata, context)
  return {}
}
