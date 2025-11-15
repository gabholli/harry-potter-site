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