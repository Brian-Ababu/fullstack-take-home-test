import React, {useState} from 'react';
import {Alert, Container, Snackbar, Typography} from '@mui/material';
import ReadingList from '../components/ReadingList';

const ReadingListView = ({ readingList, removeFromReadingList }) => {

    const [alert, setAlert] = useState({ open: false, message: '', severity: 'success' });

    const handleRemoveFromReadingList = (book) => {
        try {
            removeFromReadingList(book);
            setAlert({ open: true, message: `${book.title} has been removed from reading list`, severity: 'success' });
        } catch (err) {
            console.error('Error adding book to reading list:', err);
            setAlert({ open: true, message: 'There was an error removing the book from your list', severity: 'error' });
        }
    };

    const handleCloseAlert = () => {
        setAlert({ ...alert, open: false });
    };

    return (
        <Container>
            <Snackbar
                open={alert.open}
                autoHideDuration={6000}
                onClose={handleCloseAlert}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={handleCloseAlert} severity={alert.severity} sx={{ width: '100%' , backgroundColor: '#FFE6DC' }}>
                    {alert.message}
                </Alert>
            </Snackbar>
            <Typography variant="h4" gutterBottom divider>
                Reading List
            </Typography>
            <ReadingList
                readingList={readingList}
                removeFromReadingList={handleRemoveFromReadingList}
            />
        </Container>
    );
};

export default ReadingListView;
