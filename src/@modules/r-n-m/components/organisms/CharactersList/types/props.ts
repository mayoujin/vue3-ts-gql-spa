import { Character } from '@modules/r-n-m/entities/types'
import { ToRefs, Ref } from 'vue'

export enum ComponentPropsEnum {
  CHARACTERS = 'characters',
  IS_LOADING = 'isLoading',
}

export interface ComponentProps {
  [ComponentPropsEnum.CHARACTERS]: Character[]
  [ComponentPropsEnum.IS_LOADING]: boolean
}

export type VueComponentProps = Readonly<ComponentProps>
export type RawBindings = ComponentProps & {}
