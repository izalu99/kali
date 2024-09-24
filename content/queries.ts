import { HeroQuery, SearchQuery } from "@/types";
import { contentGqlFetcher } from "./fetch";


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