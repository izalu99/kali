"use client"

import Header from "@/components/header";
import Headline from "@/components/headline";
import SearchBar from "@/components/searchbar";
import { ApolloProvider } from '@apollo/client';
import client from '@/apolloclient';

import React from 'react';
export default function Home() {


  

  return (
    <ApolloProvider client={client}>
      <main className="flex min-h-screen justify-between flex-col">
        <Header />
        <SearchBar />
        <Headline />
      </main>
    </ApolloProvider>
  );
}
