import { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

const BOOKS_QUERY = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

const useBooks = () => {
    const { loading, error, data } = useQuery(BOOKS_QUERY);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        try {
            if (data) {
                setBooks(data.books);
            }
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    }, [data]);

    return { loading, error, books };
};

export default useBooks;
