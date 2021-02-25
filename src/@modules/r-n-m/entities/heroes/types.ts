// @ts-ignore
import { Character as CharacterFull, Location } from '@/types/api'

enum CharacterNamesEnum {
  ID = 'id',
  NAME = 'name',
  SPECIES = 'species',
  TYPE = 'type',
  IMAGE = 'image',
}

export type Character = Pick<CharacterFull, CharacterNamesEnum> & {
  location?: Pick<Location, 'name'>
}

// export type Heroes = Map<string, Character>
export type Heroes = Character[]
export type Characters = Character[]
