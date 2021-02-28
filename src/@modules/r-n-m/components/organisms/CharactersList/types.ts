import { Characters } from '@modules/r-n-m/types/characters'

export enum ComponentPropsEnum {
  CHARACTERS = 'characters',
  IS_LOADING = 'isLoading',
}

export interface ComponentProps {
  [ComponentPropsEnum.CHARACTERS]: Characters
  [ComponentPropsEnum.IS_LOADING]: boolean
}

export type RawBindings = {
  [ComponentPropsEnum.CHARACTERS]: Characters
  [ComponentPropsEnum.IS_LOADING]: boolean
}

export type VueComponentProps = Readonly<ComponentProps>
