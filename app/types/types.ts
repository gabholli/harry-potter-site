export interface BooksInterface {
    number: number
    title: string
    originalTitle: string
    releaseDate: string
    description: string
    pages: number
    cover: string
    index: number
}

export interface CharacterInterface {
    fullName: string
    nickname: string
    hogwartshouse: string
    interpretedBy: string
    children: string[]
    image: string
    birthdate: string
    index: number
}

export interface HouseInterface {
    house: string
    emoji: string
    founder: string
    colors: string[]
    animal: string
    index: number
}

export interface SpellInterface {
    spell: string
    use: string
    index: number
}

export interface BookDetailInterface {
    cover: string
    description: string
    index: number
    number: number
    originalTitle: string
    pages: number
    releaseDate: string
    title: string
}

export interface CharacterDetailInterface {
    birthdate: string
    children: string[]
    fullName: string
    hogwartsHouse: string
    image: string
    nickname: string
}

export interface HouseDetailInterface {
    animal: string
    colors: string[]
    emoji: string
    founder: string
    house: string
}