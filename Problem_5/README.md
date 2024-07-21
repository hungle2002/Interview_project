
<h1 align="center">
  <br>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLXABoaWdRilhbp3NA6z_voY5BsXxwU7pAA&s" alt="Markdownify" width="200">
  <br>
  Inventory
  <br>
</h1>

<h4 align="center">A CRUD api to manage products.</h4>

## Key Technologies
* Nodejs with ExpressJS and Typescript
* PostgreSQL for database
* Pnpm for managing node_modules
* Docker for handling two services (database and inventory)
* Prisma for ORM
* Knex for migration
* Joi for validation
* Swagger for API document

## Key Features

* Get the list of products with filter: name, minPrice, maxPrice, and pagination
* Create a product.
* Get details of a product
* Delete a product
* Update a product

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Install pnpm
$ npm install -g pnpm

# Clone this repository
$ git clone https://github.com/hungle2002/Le_Quoc_Hung

# Go into the repository
$ cd Le_Quoc_Hung/Problem_5

# Create a docker network
$ docker network create interview-v1-network

# Start project
$ docker-compose up

# Migrate database schema: create a new terminal and go to the inventory folder
$ cd Problem_5/inventory
$ pnpm run docker:db:migrate

# Run seed data
$ pnpm run docker:seed:dev

# Currently project can run on Docker since I already generate prisma in the Dockerfile, how ever we need to generate Prisma client in the source so that our code will not show an error lack of Prisma client
$ pnpm dlx prisma generate

```
## API document

After running the server, we can test the API by going to the URL in the browser
```bash
# Swagger API doc:
http://localhost:7002/api/v1/inventory/api-docs/

```

## Contact:
Email: lehung16082002@gmail.com



