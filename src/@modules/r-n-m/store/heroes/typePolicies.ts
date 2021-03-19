export const extendTypePolicies = (typePolicies) => {
  typePolicies.Query.fields = {
    ...typePolicies.Query.fields,
    testHeroes: {
      read(): any {},
    },
  }
}
