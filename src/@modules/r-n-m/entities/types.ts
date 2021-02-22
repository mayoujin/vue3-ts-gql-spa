import { Character as CharacterFull, Location } from 'types/api'

enum CharacterNamesEnum {
  NAME = 'name',
  SPECIES = 'species',
  TYPE = 'type',
  IMAGE = 'image',
}

export type Character = Pick<CharacterFull, CharacterNamesEnum> & {
  location?: Pick<Location, 'name'>
}
