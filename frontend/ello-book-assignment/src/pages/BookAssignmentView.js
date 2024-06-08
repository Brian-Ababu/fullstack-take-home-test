import React, { useState, useEffect } from 'react';
import { Container, Typography, Snackbar, Alert } from '@mui/material';
import useBooks from '../hooks/useBooks';
import BookSearch from '../components/BookSearch';
import BookList from '../components/BookList';

const BookAssignmentView = ({ addToReadingList }) => {
    const { loading, error, books } = useBooks();
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [alert, setAlert] = useState({ open: false, message: '', severity: 'success' });

    useEffect(() => {
        setFilteredBooks(books);
    }, [books]);

    const handleAddToReadingList = (book) => {
        try {
            addToReadingList(book);
            setAlert({ open: true, message: `${book.title} has been added to your reading list`, severity: 'success' });
        } catch (err) {
            console.error('Error adding book to reading list:', err);
            setAlert({ open: true, message: 'There was an error adding the book to your reading list.', severity: 'error' });
        }
    };

    const handleCloseAlert = () => {
        setAlert({ ...alert, open: false });
    };

    if (loading) return <div>Loading...</div>;
    if (error) {
        console.error('Error fetching books:', error);
        return <div>Error loading books.</div>;
    }

    return (
        <Container>
            <Snackbar
                open={alert.open}
                autoHideDuration={6000}
                onClose={handleCloseAlert}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseAlert} severity={alert.severity} sx={{ width: '100%', backgroundColor: '#4AA088', color: '#FFFFFF' }}>
                    {alert.message}
                </Alert>
            </Snackbar>
            <Typography variant="h4" gutterBottom>
                Book Assignment
            </Typography>
            <BookSearch books={books} setFilteredBooks={setFilteredBooks} />
            <BookList books={filteredBooks.length > 0 ? filteredBooks : books} addToReadingList={handleAddToReadingList} />
        </Container>
    );
};

export default BookAssignmentView;
