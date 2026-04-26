export interface GameData {
    id: string,
    title: string,
    price: number,
    genres: string[],
    description: string,
    image: string,
    video: string,
}

export type GameStoreData = Array<GameData>