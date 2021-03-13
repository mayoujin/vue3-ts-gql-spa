/**
 * Links compilation point.
 * HttpLink, ErrorLink, AuthLink etc. are connected here.
 */
import { from as fromArray } from '@apollo/client'
import httpLink from './http'

export default fromArray([httpLink])
