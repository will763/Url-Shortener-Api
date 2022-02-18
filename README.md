# URL SHORTENER API

An api with the purpose of shortening a given link.

## Technologies

- NodeJs
- Typescript
- MongoDB
- Mongoose
- Express
- shortid
- Nodemon

## Endpoints

### /shorten

This route only supports the Post method, it receives a url to be shortened, if it already exists, it returns the shortened url, if not, it creates and stores it in the database. This route can return status 200 or 201. the body of the request has to be in json format and has to pass the originURL property with the url to be shortened.

### /:hash

This route only supports the Get method, it receives a hash per parameter of the request. a database search is performed
to be it already exists, if it exists, it redirects to the original url and returns the status 301. if it doesn't exist, it returns an error with status 400.
