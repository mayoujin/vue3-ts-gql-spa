import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type ReactiveFunction<TParam> = () => TParam
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
}

export interface Query {
  __typename?: 'Query'
  /** Get a specific character by ID */
  character?: Maybe<Character>
  /** Get the list of all characters */
  characters?: Maybe<Characters>
  /** Get a list of characters selected by ids */
  charactersByIds?: Maybe<Array<Maybe<Character>>>
  /** Get a specific locations by ID */
  location?: Maybe<Location>
  /** Get the list of all locations */
  locations?: Maybe<Locations>
  /** Get a list of locations selected by ids */
  locationsByIds?: Maybe<Array<Maybe<Location>>>
  /** Get a specific episode by ID */
  episode?: Maybe<Episode>
  /** Get the list of all episodes */
  episodes?: Maybe<Episodes>
  /** Get a list of episodes selected by ids */
  episodesByIds?: Maybe<Array<Maybe<Episode>>>
}

export interface QueryCharacterArgs {
  id: Scalars['ID']
}

export interface QueryCharactersArgs {
  page?: Maybe<Scalars['Int']>
  filter?: Maybe<FilterCharacter>
}

export interface QueryCharactersByIdsArgs {
  ids: Array<Scalars['ID']>
}

export interface QueryLocationArgs {
  id: Scalars['ID']
}

export interface QueryLocationsArgs {
  page?: Maybe<Scalars['Int']>
  filter?: Maybe<FilterLocation>
}

export interface QueryLocationsByIdsArgs {
  ids: Array<Scalars['ID']>
}

export interface QueryEpisodeArgs {
  id: Scalars['ID']
}

export interface QueryEpisodesArgs {
  page?: Maybe<Scalars['Int']>
  filter?: Maybe<FilterEpisode>
}

export interface QueryEpisodesByIdsArgs {
  ids: Array<Scalars['ID']>
}

export interface Character {
  __typename?: 'Character'
  /** The id of the character. */
  id?: Maybe<Scalars['ID']>
  /** The name of the character. */
  name?: Maybe<Scalars['String']>
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status?: Maybe<Scalars['String']>
  /** The species of the character. */
  species?: Maybe<Scalars['String']>
  /** The type or subspecies of the character. */
  type?: Maybe<Scalars['String']>
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender?: Maybe<Scalars['String']>
  /** The character's origin location */
  origin?: Maybe<Location>
  /** The character's last known location */
  location?: Maybe<Location>
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image?: Maybe<Scalars['String']>
  /** Episodes in which this character appeared. */
  episode?: Maybe<Array<Maybe<Episode>>>
  /** Time at which the character was created in the database. */
  created?: Maybe<Scalars['String']>
}

export interface Location {
  __typename?: 'Location'
  /** The id of the location. */
  id?: Maybe<Scalars['ID']>
  /** The name of the location. */
  name?: Maybe<Scalars['String']>
  /** The type of the location. */
  type?: Maybe<Scalars['String']>
  /** The dimension in which the location is located. */
  dimension?: Maybe<Scalars['String']>
  /** List of characters who have been last seen in the location. */
  residents?: Maybe<Array<Maybe<Character>>>
  /** Time at which the location was created in the database. */
  created?: Maybe<Scalars['String']>
}

export interface Episode {
  __typename?: 'Episode'
  /** The id of the episode. */
  id?: Maybe<Scalars['ID']>
  /** The name of the episode. */
  name?: Maybe<Scalars['String']>
  /** The air date of the episode. */
  air_date?: Maybe<Scalars['String']>
  /** The code of the episode. */
  episode?: Maybe<Scalars['String']>
  /** List of characters who have been seen in the episode. */
  characters?: Maybe<Array<Maybe<Character>>>
  /** Time at which the episode was created in the database. */
  created?: Maybe<Scalars['String']>
}

export interface FilterCharacter {
  name?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  species?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  gender?: Maybe<Scalars['String']>
}

export interface Characters {
  __typename?: 'Characters'
  info?: Maybe<Info>
  results?: Maybe<Array<Maybe<Character>>>
}

export interface Info {
  __typename?: 'Info'
  /** The length of the response. */
  count?: Maybe<Scalars['Int']>
  /** The amount of pages. */
  pages?: Maybe<Scalars['Int']>
  /** Number of the next page (if it exists) */
  next?: Maybe<Scalars['Int']>
  /** Number of the previous page (if it exists) */
  prev?: Maybe<Scalars['Int']>
}

export interface FilterLocation {
  name?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  dimension?: Maybe<Scalars['String']>
}

export interface Locations {
  __typename?: 'Locations'
  info?: Maybe<Info>
  results?: Maybe<Array<Maybe<Location>>>
}

export interface FilterEpisode {
  name?: Maybe<Scalars['String']>
  episode?: Maybe<Scalars['String']>
}

export interface Episodes {
  __typename?: 'Episodes'
  info?: Maybe<Info>
  results?: Maybe<Array<Maybe<Episode>>>
}

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

export type CharactersQueryVariables = Exact<{ [key: string]: never }>

export type CharactersQuery = { __typename?: 'Query' } & {
  characters?: Maybe<
  { __typename?: 'Characters' } & {
    results?: Maybe<
    Array<
    Maybe<
    { __typename?: 'Character' } & Pick<
    Character,
    'id' | 'name' | 'species' | 'type' | 'image'
    > & {
      location?: Maybe<
      { __typename?: 'Location' } & Pick<Location, 'name'>
      >
    }
    >
    >
    >
  }
  >
}

export const CharactersDocument = gql`
  query Characters {
    characters {
      results {
        id
        name
        location {
          name
        }
        species
        type
        image
      }
    }
  }
`
