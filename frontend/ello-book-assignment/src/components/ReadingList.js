import React from 'react';
import {Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Typography} from '@mui/material';

const ReadingList = ({ readingList, removeFromReadingList }) => {
    try {
        return (
            <>
                {readingList.length === 0 ? (
                    <Typography variant="body1">You do not have any books added to the reading list yet.</Typography>
                ) : (
                    <List>
                        {readingList.map((book, index) => (
                            <ListItem key={index} alignItems="flex-start" divider>
                                <ListItemAvatar>
                                    <Avatar src={book.coverPhotoURL} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={book.title}
                                    secondary={`Author: ${book.author}`}
                                    primaryTypographyProps={{ style: { color: '#335C6E' } }}
                                    secondaryTypographyProps={{ style: { color: '#53C2C2' } }}
                                />
                                <Button
                                    variant="contained"
                                    style={{ backgroundColor: '#F76434' }}
                                    onClick={() => removeFromReadingList(book)}
                                >
                                    Remove
                                </Button>
                            </ListItem>
                        ))}
                    </List>
                )}
            </>
        );
    } catch (error) {
        console.error('Error rendering ReadingList:', error);
        return <div>Something went wrong while displaying the reading list.</div>;
    }
};

export default ReadingList;
