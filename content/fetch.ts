import 'dotenv/config'

const contenfulId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const contentfulAccessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
const contentfulPreviewAccessToken = process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN

export const contentGqlFetcher = async <T>({
    query, variables={}, preview = false}: 
    {query:string, variables?: any, preview?: boolean}): Promise<T | undefined> => {
    
        console.log('fetching content')
        
        const res = await 
        fetch(`https://graphql.contentful.com/content/v1/spaces/${contenfulId}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': preview? `Bearer ${contentfulPreviewAccessToken}` : `Bearer ${contentfulAccessToken}`
                },
                body: JSON.stringify({
                    query,
                    variables
                })
            }
        )

        const {data, errors} = await res.json()

        if (errors) {
            console.log(errors)
            throw new Error('Failed to get content')
        }

        return data as T;
}