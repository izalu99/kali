import { HeroQuery } from "@/types";
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
        throw new Error('Failed to get content');
    }

    return data;

}