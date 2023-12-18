export type InstaDlResponse = {
    urls: string[];
    type: 'video' | 'image';
};
export declare function instaDl(url: string): Promise<InstaDlResponse>;
