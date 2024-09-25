
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


export type HeaderQuery = {
    headerCollection: {
        items: {
            pagesCollection: {
                items: {
                    link: string
                    label: string
                }[]
            }
        }[]
    }    
};


export type BrowseQuery = {
    browseCollection: {
        items: {
        heading: string
        subHeading: string
        }[]
    }
}