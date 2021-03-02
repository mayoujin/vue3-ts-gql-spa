import { useEmitMetadata } from '@/tools'
import { metadata } from './config'

/**
 *
 */
export const setup = (_, context) => {
  useEmitMetadata(metadata, context)
  return {}
}
