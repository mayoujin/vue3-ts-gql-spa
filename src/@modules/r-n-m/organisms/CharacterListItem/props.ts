import { Character, Location } from 'types/api'
import { ComponentPropsOptions } from 'vue'

enum PropsNamesEnum {
  NAME = 'name',
  SPECIES = 'species',
  TYPE = 'type',
  IMAGE = 'image',
}

export type CharacterProps = Pick<Character, PropsNamesEnum> & {
  location?: Pick<Location, 'name'>
}

export type ComponentProps = Readonly<ComponentPropsOptions<CharacterProps>>
