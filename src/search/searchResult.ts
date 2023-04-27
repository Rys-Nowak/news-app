export type SearchResult = {
    name: string,
    url: string,
    description: string,
    provider: Array<Provider>;
    datePublished: string;
}

type Provider = {
    _type: string,
    name: string
}