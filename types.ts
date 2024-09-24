

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
}