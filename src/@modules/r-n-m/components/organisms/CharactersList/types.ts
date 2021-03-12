import { Characters } from '@modules/r-n-m/types/characters'
import { Ref } from 'vue'

export enum ComponentPropsEnum {
  CHARACTERS = 'characters',
  IS_LOADING = 'isLoading',
}

export interface ComponentProps {
  [ComponentPropsEnum.CHARACTERS]: Characters
  [ComponentPropsEnum.IS_LOADING]: boolean
}

export interface RawBindings {
  [ComponentPropsEnum.CHARACTERS]: Ref<Characters>
  [ComponentPropsEnum.IS_LOADING]: Ref<boolean>
  pagination: {
    onChange: (...args: any[]) => any
  }
}
