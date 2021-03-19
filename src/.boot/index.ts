/**
 * Core App (not only Vue related) setup, initialize logic point.
 */
import { applyPlugins } from '@/plugins'

export const afterCreatedApp = ({ installPlugin }: ModuleRegisterParams) => {
  applyPlugins({ install: installPlugin })
}
