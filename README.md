# csv-file-uploder
csv-file-uploder is a web application that allows users to upload and parse CSV files. The application is built with Node.js and Express, and it provides a simple and user-friendly interface for managing CSV data.

## Installation
To install csv-file-uploder, please follow these steps:

Clone this repository using the following command:
```
$ git clone https://github.com/ramprogrammer3/csv-file-uploder
```
Install the required dependencies using the following command:
```
$ npm install 
```
Start the application using the following command:
```
$ npm start 
```
Open the application in your web browser by visiting the following URL:
```
$ http://localhost:8080 
```

## Features
* CSV file upload: Users can upload CSV files with a simple web form.
* CSV parsing: The application parses the CSV data and displays it in a table.
* Searching: Users can search data in the table.

## API Reference
csv-file-uploder provides a simple API for uploading and parsing CSV files. The API supports the following endpoints:

* POST /upload: Uploads a CSV file and parses the data.
* GET /data: Returns the parsed CSV data as JSON.

## Folder Structure
```
csv-file-uploder/
|── |assets/
│   |      ├── css/
│   │      |     ├── styles.css
│   |      ├── js/
│   |            ├── script.js
│   ├── uploads/
│   ├── index.html
|   |
├── routes/
│   ├── csvRoutes.js
|   |
├── controllers/
│   ├── csvController.js
|   |
├── models/
│   ├── csvModel.js
|   |
├── .gitignore
├── package.json
├── README.md

```


