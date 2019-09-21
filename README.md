# BOOKSTORE

An app to store books.

## Technologies
- NodeJS
- Express
_ GraphQL
- MongoDB / Mongoose ORM

## DB Structure
### Book
```JSON
{
    "name": {
        "type": String,
        "required" : true
    },
    "authorID": {
        "type": Schema.objectID,
        "required": true
    },
    "genre": String,
    "description": String,
    "published": Date,
    "cover": String
}
```
### Author
```JSON
{
    "title": String,
    "firstname": String,
    "lastname": String,
    "dateOfBirth": Date
}
```

