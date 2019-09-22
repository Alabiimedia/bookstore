# BOOKSTORE

An app to store books.

## Technologies

- NodeJS
- Express
  \_ GraphQL
- MongoDB / Mongoose ORM

## Usage

### Clone Repo

```
git clone https://github.com/Bobslegend61/bookstore.git
```

### Install Dependencies

```
npm install
```

### Create a .env file in the root dir

```env
PORT=3000
MONGO_uRI=<Your mongo connection string>
```

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
