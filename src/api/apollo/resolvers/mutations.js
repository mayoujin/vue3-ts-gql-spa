const mutations = new Map()

export const addClientMutation = (fns, updateNameTranscription) => {
  Object.entries(fns).forEach((args) => mutations.set(...args))
}

export const removeClientMutation = (fns) => {
  Object.entries(fns).forEach((args) => mutations.delete(...args))
}

export default new Proxy(Object.create(null), {
  get (target, prop) {
    return mutations.has(prop) ? mutations.get(prop) : () => null
  },
})
