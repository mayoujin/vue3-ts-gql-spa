/**
 * Common Apollo cache extensions
 */
import { TypePolicies } from '@apollo/client'

export const typePolicies = {
  Query: {
    fields: {},
  },
  Mutation: {
    fields: {},
  },
}

/**
 * Provides callback to extend initial typePolicies.
 * Used to add/extend initial typePolicies, primarily in modules.
 *
 * @param {Function} callback
 * @return void
 */
export const extendTypePolicies = (
  callback: (typePolicies: TypePolicies) => void,
) => {
  callback(typePolicies)
}

export default typePolicies
