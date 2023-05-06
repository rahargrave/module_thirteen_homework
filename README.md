## ECOMMERCE BACKEND ORGANIZER

[![Video of Functions](https://internbridge.com/wp-content/uploads/2019/01/click-here-to-watch-video.jpg)](https://drive.google.com/file/d/1NrVXWX-YEocpY9enLZOiAXwMWVyH8QAj/view)

Click on the image above to watch the video.


ECOMMERCE BACKEND ORGANIZER is an Express.js API that connects to a MySQL database using Sequelize. This project allows users to perform CRUD (create, read, update, delete) operations on categories, products, and tags.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation
To install the dependencies for this project, run the following command:

```bash
npm install
```

Before running the application, you will need to set up environment variables in a `.env` file at the root of the project with your MySQL connection details in the following format:

```
DB_NAME=your_database_name
DB_USER=your_mysql_username
DB_PW=your_mysql_password
```

To create the development database and seed it with test data, run the following commands:

```bash
npm run schema
npm run seed
```

These commands will execute the SQL schema and seed files located in the `db/` directory.

## Usage
To start the server and sync the Sequelize models to the MySQL database, run the following command:

```bash
npm start
```

This will start the server listening on port 3001 by default. Once the server is running, you can make requests to the following endpoints:

### Categories
- GET `/api/categories` - returns all categories
- POST `/api/categories` - creates a new category
- PUT `/api/categories/:id` - updates the category with the specified ID
- DELETE `/api/categories/:id` - deletes the category with the specified ID

### Products
- GET `/api/products` - returns all products
- POST `/api/products` - creates a new product
- PUT `/api/products/:id` - updates the product with the specified ID
- DELETE `/api/products/:id` - deletes the product with the specified ID

### Tags
- GET `/api/tags` - returns all tags
- POST `/api/tags` - creates a new tag
- PUT `/api/tags/:id` - updates the tag with the specified ID
- DELETE `/api/tags/:id` - deletes the tag with the specified ID

You can use Insomnia Core or any other API testing tool to make requests to these endpoints. The responses will be in JSON format.

## Contributing
Contributions are welcome! If you would like to contribute, please fork the repository and create a branch for your feature or bug fix. Please make sure that your code passes the existing tests and add tests as needed. When you are done, submit a pull request and someone will review your changes.

## License
This project is licensed under the MIT License.