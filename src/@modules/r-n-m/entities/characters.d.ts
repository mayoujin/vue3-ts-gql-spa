import { Character as CharacterFull, Location } from '@/@types/api'

declare enum CharacterPropNamesEnum {
  ID = 'id',
  NAME = 'name',
  SPECIES = 'species',
  TYPE = 'type',
  IMAGE = 'image',
}

declare type Character = Required<
  Pick<CharacterFull, CharacterPropNamesEnum>
> & {
  location: Pick<Location, 'name'>
}

declare type Characters = Character[]
