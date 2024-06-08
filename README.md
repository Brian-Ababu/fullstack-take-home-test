# Ello Web Viewer - Teacher View


## Overview

---

Hi 👋 ! This web viewer is a teacher-facing UI component for the Ello web viewer product, designed to allow teachers to search for books and assign them to a reading list for their students. This project showcases the implementation of a responsive and visually appealing UI using React, Material-UI, and GraphQL.

## Features

---

- **Search Books**: A search bar to search for books by title.
- **Search Results**: Displays a list of search results with book titles, authors, cover photos, and an option to add the book to the reading list.
- **Reading List**: Displays the books added by the teacher, with an option to remove books from the list.
- **Responsive Design**: Ensures a seamless experience across different devices.

## Technologies Used

---

- **React**: For building the user interface.
- **Material-UI**: For styling and UI components.
- **GraphQL**: For fetching book data from a backend server.
- **Apollo Client**: For integrating GraphQL with React.
- **Google Fonts**: For typography.

## Installation

---

1. **Clone the repository**
   ```bash
   git clone https://github.com/Brian-Ababu/fullstack-take-home-test.git
   cd ello-book-assignment
2. **Install dependencies**
   ```bash
   npm install
3. **Run the application**
   ```bash
   npm start

The application will be available at http://localhost:3000.

## Components

---

- **BookList**: Displays a list of books with an option to add them to the reading list.
- **BookSearch**: A search bar component for searching books by title.
- **ReadingList**: Displays the books added by the teacher with an option to remove them from the list.

## Hooks

---

- **useBooks**: A custom hook to manage the state and logic for fetching books, searching, and managing the reading list.

## Pages

---

- **BookAssignmentView**: The main view that allows users to search and render a list of books to add to the reading list.
- **ReadingListView**: A view of all the books added by the teacher. It also allows the teacher to remove a book.

## Styling

---

- **Typography**: Uses the [Mulish Google Fonts](https://fonts.google.com/specimen/Mulish). 
- **Colors**: Uses a defined color palette for primary and secondary colors. 
- **Responsive Design**: Ensures the UI is responsive and looks good on different devices.

## GraphQL Integration

---

- **Apollo Client**: Used to integrate GraphQL with React.
- **GraphQL Query**: Fetches the list of books from the backend server.
   ```bash
   query Books {
  books {
    author
    coverPhotoURL
    readingLevel
    title
  }
## How to Use

---

1. Search for Books 
   - Type a book title in the search bar. 
   - View the search results below the search bar.
2. Add Books to Reading List 
   - Click the "Add" button next to a book in the search results to add it to the reading list.
3. Remove Books from Reading List
   - Click the "Remove" button next to a book in the reading list to remove it.

## Contributing

---

- Fork the repository
- Create a new branch: git checkout -b feature/your-feature-name
- Commit your changes: git commit -m 'Add some feature' 
- Push to the branch: git push origin feature/your-feature-name
- Open a pull request

## Acknowledgments

---

- [Material-UI](https://material-ui.com/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [GraphQL](https://graphql.org/)
- [Google Fonts](https://fonts.google.com/)

---
Feel free to contribute to this project by submitting issues or pull requests. Your feedback is highly appreciated!