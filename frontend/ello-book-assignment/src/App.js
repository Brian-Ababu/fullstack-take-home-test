import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, Box } from '@mui/material';
import BookAssignmentView from './pages/BookAssignmentView';
import ReadingListView from './pages/ReadingListView';
import './styles.css';

const App = () => {
    const [readingList, setReadingList] = useState([]);

    const addToReadingList = (book) => {
        try {
            if (!readingList.some(b => b.title === book.title)) {
                setReadingList([...readingList, book]);
            }
        } catch (error) {
            console.error('Error adding to reading list:', error);
        }
    };

    const removeFromReadingList = (book) => {
        try {
            setReadingList(readingList.filter(b => b.title !== book.title));
        } catch (error) {
            console.error('Error removing from reading list:', error);
        }
    };

    return (
        <Router>

            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <AppBar position="static" style={{ backgroundColor: '#335C6E' }}>
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                            <Button color="inherit" component={Link} to="/" sx={{ mx: 1 }}>
                                Book Assignment
                            </Button>
                            <Button color="inherit" component={Link} to="/reading-list" sx={{ mx: 1 }}>
                                Reading List
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
                {''}
                <Routes>
                    <Route path="/" element={<BookAssignmentView addToReadingList={addToReadingList} />} />
                    <Route path="/reading-list" element={<ReadingListView readingList={readingList} removeFromReadingList={removeFromReadingList} />} />
                </Routes>
            </Container>
        </Router>
    );
};

export default App;
