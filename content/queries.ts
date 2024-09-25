import { HeroQuery, SearchQuery, WordOfTheDayQuery, HeaderQuery, BrowseQuery, AboutQuery } from "@/types";
import { contentGqlFetcher } from "./fetch";

/** fetches content from cms */

export const getContentForHero = async () => {
    const query = `#graphql
    query HeroCollection {
        heroCollection {
            items {
                heroHeading
                heroDescription
                preHeading
                callToActionCollection {
                    items {
                    label
                    link
                    }
                }
            }
        }
    }
    `
    const data = await contentGqlFetcher<HeroQuery>({query});
    
    if(!data) {
        throw new Error('Failed to get hero content');
    }

    return data;

}


export const getContentForSearch = async () => {
    const query = `#graphql
        query SearchCollection {
            searchCollection {
                items {
                heading
                searchResultsHeading
                }
            }
        }
    `
    const data = await contentGqlFetcher<SearchQuery>({query});
    
    if(!data) {
        throw new Error('Failed to get search content');
    }

    return data;

}


export const getContentForWordOfTheDay = async () => {
    const query = `#graphql
        query WordOfTheDayCollection {
            wordOfTheDayCollection {
                items {
                heading
                }
            }
        }
    `
    const data = await contentGqlFetcher<WordOfTheDayQuery>({query});
    
    if(!data) {
        throw new Error('Failed to get word of the day content');
    }

    return data;

}


export const getContentForHeader = async () => {
    const query = `#graphql
        query HeaderCollection {
            headerCollection {
                items {
                    pagesCollection {
                        items {
                        link
                        label
                        }
                    }
                }
            }
        }
    `
    const data = await contentGqlFetcher<HeaderQuery>({query});
    
    if(!data) {
        throw new Error('Failed to get header content');
    }

    return data;

}


export const getContentForBrowse = async () => {
    const query = `#graphql
        query BrowseCollection {
            browseCollection {
                items {
                heading
                subHeading
                }
            }
        }
    `
    const data = await contentGqlFetcher<BrowseQuery>({query});
    if(!data) {
        throw new Error('Failed to get browse page content.');
    }

    return data;
}



export const getContentForAbout = async () => {
    const query = `#graphql
        query AboutCollection {
            aboutCollection {
                items {
                heading
                description
                }
            }
        }
    `
    const data = await contentGqlFetcher<AboutQuery>({query});
    if(!data) {
        throw new Error('Failed to get about page content.');
    }

    return data;
}



