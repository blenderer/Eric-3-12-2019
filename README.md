# Eric Harrison - 3-12-19
## Installation
```
yarn install
npm run server

// open a new tab
yarn start

// to run tests:
npm test
```


## Security
- Coverage:
  - file type checking is handled on the "backend" via [magic number checking](https://en.wikipedia.org/wiki/Magic_number_(programming))
  - XSS prevention via [React](https://reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks)
- Not covered:
  - DDOS attacks. The backend does not have throttling or any sort of DDOS protection
  - package dependancy attacks. I have not audited any of the dependancies to reduce attacks. I have however made sure most of the packages installed are well known, so in the case a vulenrability is discovered- it will be known to the community historically quite fast.
## Improvements
- Backend is an express server, but for production ready APIs, I would create a separate deployment so it could run somewhere other than a local development environment
- Better error reporting and validation
  - Error Reporting: Right now the application has `alert` calls for reporting errors and the `App.js` component has scattered `try/catch` calls. If I chose to put it more time, I would create an API service that would handle errors in a single spot and pass error information into the App. I would also expand the backend to report more detailed error messages.
  - Validation: I would use Material UI's built-in [Error Feature] to report file size + file type errors before they uploaded to the backend
- Better testing: I am still pretty new to React testing, so I would set aside some time to look at production open-source apps in the wild and emulate their testing methods and strategies. My testing strategies we're to unit test small display components to make sure any business logic (conditional) wouldn't break on regressions.
- Better styling:
  - I would swap out the wireframe look w/ Material Design Cards.
  - I would add in the actual photos to the Cards themselves
  - I would add in Loading States to hook up to the API service and display a spinner when there is any API call happening
- Remove state from the API: Currently, the API loses all data when the server goes down. I would upload the files to a database for persistance so they could stay in between api restarts


## Libraries
UI:
- @material-ui/core
  - nice button / textfield styling. Also adds support for JSS CSS styling
- jest-dom
  - extra testing utilities for Jest testing

API:
- multer
  - easy express middleware for multipart/form-data uploads
- body-parser
  - enables JSON parsing for express
- cors
  - not entirely sure if this is needed because I set up a proxy, but most likely needed if I were to deploy to a separate server
- express
  - needed to run the mock-server api
- file-type
  - has magic-number checking for file types, to stop malicious attempts at uploading malcious files disguised as images
- fuse.js
  - simple, light weight fuzzy search util

## API 
- it's a mock server for proof-of-concept
- It's [stateful](http://wiki.apidesign.org/wiki/Stateful)
- it handles file size validation as well as file type validation via magic number checking
- create-react-app's ability to proxy it's endpoints instead of having to deal with CORS 


### GET /files
- Get the entire list of files
- grabs all or a filtered list of files (via fuzzy search)
- Returns: JSON with a key `files` that has an array of File objects
- this endpoint accepts the `q` query param optionally

### POST /files
- Upload a file to the api server
- uploads a multipart form file, validates file size and file type, then returns a list of every file
- Returns: JSON with a key `files` that has an array of File objects, it will return status code: 400 on bad validations
- this endpoint requires a `multipart/form-data` body with a key `file` and the value a javascript file

### DELETE /files
- Deletes a file from the api server
- finds the file id provided in the list, removes it
- Returns: JSON with a key `files` that has an array of File objects with the specific file removes
- this endpoint requires an `id` key/value as part of the body to, this id represents the file to delete