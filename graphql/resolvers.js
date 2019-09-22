// Local imports
const Book = require('../model/Book');
const Author = require('../model/Author');

module.exports = {
  Query: {
    hello() {
      return 'Hello World';
    },

    async getBooks() {
      try {
        const books = await Book.find({});
        return books;
      } catch (err) {
        console.log(err);
      }
    },

    async getAuthors() {
      try {
        const authors = await Author.find({});
        return authors;
      } catch (err) {
        console.log(err);
      }
    },

    async getBook(_, { id }) {
      console.log(_);
      try {
        const book = await Book.findById(id);
        return book;
      } catch (err) {
        console.error(err);
      }
    },

    async getAuthor(_, { id }) {
      try {
        const author = await Author.findById(id);
        return author;
      } catch (err) {
        console.error(err);
      }
    }
  },

  Mutation: {
    async createAuthor(_, { input }) {
      input.dateOfBirth = new Date(input.dateOfBirth);
      try {
        let author = new Author(input);
        author = await author.save();
        return author;
      } catch (err) {
        console.log(err);
      }
    },

    async createBook(_, { input }) {
      input.published = new Date(input.published);
      try {
        let book = new Book(input);
        book = await book.save();
        return book;
      } catch (err) {
        console.log(err);
      }
    },

    async deleteBook(_, { id }) {
      try {
        return await Book.findOneAndDelete({ _id: id });
      } catch (err) {
        console.error(err);
      }
    },

    async deleteAuthor(_, { id }) {
      try {
        return await Author.findOneAndDelete({ _id: id });
      } catch (err) {
        console.error(err);
      }
    }
  },

  Book: {
    author: async ({ authorID }) => await Author.findById(authorID)
  },

  Author: {
    books: async ({ _id }) => await Book.find({ authorID: _id })
  }
};
