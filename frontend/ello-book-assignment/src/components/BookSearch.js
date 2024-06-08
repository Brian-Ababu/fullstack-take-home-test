import React, { useState } from 'react';
import {Autocomplete, TextField, Typography, Box, Avatar, ListItemAvatar} from '@mui/material';

const BookSearch = ({ books, setFilteredBooks }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event, value) => {
        try {
            const term = value ? value.title.toLowerCase() : '';
            setSearchTerm(term);
            const filtered = books.filter(book =>
                book.title.toLowerCase().includes(term)
            );
            setFilteredBooks(filtered);
        } catch (error) {
            console.error('Error during search:', error);
        }
    };

    return (
        <Autocomplete
            options={books}
            getOptionLabel={(option) => option.title}
            onInputChange={(event, value) => handleSearch(event, { title: value })}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search for books"
                    variant="outlined"
                    fullWidth
                />
            )}
            renderOption={(props, option) => (
                <Box component="li" {...props} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                    <ListItemAvatar>
                        <Avatar src={option.coverPhotoURL} />
                    </ListItemAvatar>
                    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                        <Typography variant="h6" sx={{ color: '#53C2C2' }}>
                            {option.title}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#335C6E' }}>
                            by {option.author}
                        </Typography>
                    </Box>
                </Box>
            )}
            value={searchTerm ? { title: searchTerm } : null}
        />
    );
};

export default BookSearch;
