'use client'
import { ApolloProvider } from '@apollo/client';
import client from '@/apolloclient';
import React, { ReactNode } from 'react';



interface Props {
    children: ReactNode
}


const ApolloProviderWrapper: React.FC<Props> = ({children}: Props) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}

export default ApolloProviderWrapper;