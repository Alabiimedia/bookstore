module.exports = `
    type Query {
        hello: String,
        getBooks: [Book],
        getAuthors: [Author],
        getBook(id: ID!): Book,
        getAuthor(id: ID): Author
    }

    type Mutation {
        createAuthor(input: AuthorInput): Author,
        createBook(input: BookInput): Book,
        deleteBook(id: ID!): Book,
        deleteAuthor(id: ID!): Author
    }

    input AuthorInput {
        title: String,
        firstname: String,
        lastname: String,
        dateOfBirth: String
    }

    input BookInput {
        name: String,
        authorID: ID!,
        genre: String,
        description: String,
        published: String,
        cover: String,
        revised: String
    }

    type Book {
        _id: ID!
        name: String,
        authorID: ID!,
        genre: String,
        description: String,
        published: String,
        cover: String,
        revised: String,
        author: Author
    }

    type Author {
        _id: ID!
        title: String,
        firstname: String,
        lastname: String,
        dateOfBirth: String,
        books: [Book]
    }
`;
