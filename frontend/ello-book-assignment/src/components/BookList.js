import React, { useState } from 'react';
import { Grid, Button, Pagination, Typography, Box } from '@mui/material';

const BookList = ({ books, addToReadingList }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 16;

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

    return (
        <>
            <Grid container spacing={3}>
                {currentBooks.map((book, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <img src={book.coverPhotoURL} alt={book.title} style={{ width: '100%', height: 'auto' }} />
                            <Box sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" sx={{ color: '#53C2C2', marginTop: '8px' }}>
                                    {book.title}
                                </Typography>
                                <Typography variant="subtitle1" sx={{ color: '#335C6E' }}>
                                    by {book.author}
                                </Typography>
                            </Box>
                            <Button
                                variant="contained"
                                style={{ backgroundColor: '#4AA088' }}
                                onClick={() => addToReadingList(book)}
                                sx={{ marginTop: 'auto' }}
                            >
                                Add to Reading List
                            </Button>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Pagination
                count={Math.ceil(books.length / booksPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
            />
        </>
    );
};

export default BookList;
