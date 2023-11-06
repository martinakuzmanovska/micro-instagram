export interface IPost{
    albumId: number;
    id: number;
    title: string;
    url?: string | File;
    thumbnailUrl?: string | File;
}