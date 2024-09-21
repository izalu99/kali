# Kali

## Overview

Kali is a web application designed to help users learn and translate the kankanaey dialect. The app provides a user-friendly interface for searching words and translations, and it leverages modern web technologies to deliver a seamless experience.

## Features

- **Search Functionality**: Quickly search for words and their translations.
- **Debounced Search**: Efficient search with debouncing to reduce server load.
- **Responsive Design**: Works on both desktop and mobile devices.
- **Admin Interface**: Manage translations and other data through an admin interface.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Next.js**: Framework for server-side rendering and static site generation.
- **Apollo Client**: State management library for GraphQL.
- **FontAwesome**: Icon library for adding icons.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **GraphQL**: Query language for your API.
- **Clerk**: Authentication and user management.
- **Contentful**: *Soon to be implemented* as our CMS

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. Clone the repository:

    ```sh
    git clone 
    cd whatever-name-you-want-to-name-it
    ```

2. Install dependencies:

    ```sh
    npm install
    # or
    yarn install
    ```

3. Set up environment variables:

    Create a `.env.local` file in the root directory and add the necessary environment variables. Example:

    ```env
    NEXT_PUBLIC_API_URL=https://api.yourdomain.com
    CLERK_FRONTEND_API=your-clerk-frontend-api
    ...
    ```

4. Run the development server:

    ```sh
    npm run dev
    # or
    yarn dev
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Search**: Use the search bar to find translations.
- **Admin**: Access the admin interface to manage translations. Atm, only Accessible by me.
- **Browse**: Click cta 'Dive into the alphabet' to look for words by the 'abakada' alphabet.

## License

*In progress...*
