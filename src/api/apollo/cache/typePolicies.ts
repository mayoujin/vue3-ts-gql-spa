import { TypePolicies } from '@apollo/client'

export const typePolicies = {
  Query: {
    fields: {},
  },
  Mutation: {
    fields: {},
  },
}

export default typePolicies

export const extendTypePolicies = (
  callback: (typePolicies: TypePolicies) => void,
) => {
  callback(typePolicies)
}
