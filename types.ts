export type GQLContext = {
    user?: any = { id: string; email: string } | null
}