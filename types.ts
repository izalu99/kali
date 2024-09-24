
/** types for cms queries */
export type HeroQuery = {
    heroCollection: {
        items: {
            heroHeading: string
            heroDescription: string
            preHeading: string
            callToActionCollection: {
                items: {
                label: string
                link: string
                }[]
            }
        }[]
    }
};


export type SearchQuery = {
    searchCollection: {
        items: {
            heading: string
            searchResultsHeading: string
        }[]
    }
};


export type WordOfTheDayQuery = {
        wordOfTheDayCollection: {
          items: {
            heading: string
          }[]
        }
};