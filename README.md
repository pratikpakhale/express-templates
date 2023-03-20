# Express REST API Templates

- This repository contains a collection of templates for building REST APIs with Express.

- Check the [base](https://github.com/pratikpakhale/express-templates/tree/main/base) directory for the base template.

- Access the directory of each template in [templates](https://github.com/pratikpakhale/express-templates/tree/main/templates) to see the README for that template.

## Express JS Production Best Practices

[Performance Best Practices Using Express in Production](https://expressjs.com/en/advanced/best-practice-performance.html)

---

# Folder Structure

```bash
/src
      ├── app.js
      ├── /api
      ├── /config
      ├── /controllers
      ├── /services
      ├── /models
      ├── /scripts
      ├── /subscribers
      ├── /docs
      └── /test
```

> **/API** (controller layer),  
> **/services,**
> /**models** (data access layers) represent the three layers we discussed in the previous section. **/scripts**  directory can be used to store workflow automation scripts for building (eg. deployment) pipelines and the 
> **/test** directory is used for storing test cases.
> We will look at the purpose of **/config** and **/subscriber** directories later in the post when we talk about configuration files, environment variables, and pub/sub-models.

---

# Coding Practices

## Package Manager

**yarn** -

[Home](https://yarnpkg.com/)

**pnpm -**

[Fast, disk space efficient package manager | pnpm](https://pnpm.io/)

---

## \***\*Asynchronous Code\*\***

use `async` `await` !

more on async await -

[Javascript Async/Await](https://scoutapm.com/blog/async-javascript)

---

## Dependency Injection

Dependency injection is a software design pattern that advocates passing (injecting) dependencies (or services) as parameters to modules instead of requiring or creating specific ones inside them. This is a fancy term for a fundamental concept that keeps your modules more flexible, independent, reusable, scalable, and easily testable across the application.

[Dependency injection - Wikipedia](https://en.wikipedia.org/wiki/Dependency_injection)

---

## Versioning

The big advantage is that we can work on new features or improvements on a new version while the clients are still using the current version and are not affected by breaking changes

`/api/v1/`

- put all the controllers and services in version dirs
- put only the routes
- put only the controllers and routes

---

## Configs and ENVs

```bash
/config
        ├── index.js
        ├── module1.js
        └── module2.js
```

```jsx
require('dotenv').config()

export default {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
}
```

---

## Linting and Formatting

### **ES Lint -**

[Find and fix problems in your JavaScript code - ESLint - Pluggable JavaScript Linter](https://eslint.org/)

### **Prettier -**

[Prettier · Opinionated Code Formatter](https://prettier.io/)

### **Style Guides** -

**Google -**

[Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)

**Airbnb -**

[https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)

### **\*\***\*\***\*\***Docs -**\*\***\*\***\*\***

[Index](https://jsdoc.app/)

---

## Global Error Handling

**article -**

[Building Robust Node Applications: Error Handling](https://strongloop.com/strongblog/robust-node-applications-error-handling/)

**errorHandler.js -**

```jsx
// 404 error handler
exports.get404 = (req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
}

// global error handler
exports.global = (error, req, res, next) => {
  const status = error.statusCode || 500
  const message = error.message
  const data = error.data
  res.status(status).json({ message: message, data: data })
}
```

---

## \***\*Logging\*\***

### Development

```jsx
// general information
console.log()
console.info()
console.debug()

// error logging
console.warn()
console.error()
```

### Production

**\*\*\*\***\*\***\*\*\*\***Winston -**\*\*\*\***\*\***\*\*\*\***

[winston](https://www.npmjs.com/package/winston)

**\*\***\*\*\*\***\*\***Bunyan -**\*\***\*\*\*\***\*\***

[bunyan](https://www.npmjs.com/package//bunyan)

**Winston vs Bunyan -**

[Comparing Winston and Bunyan Node.js Logging](https://strongloop.com/strongblog/compare-node-js-logging-winston-bunyan/)

**\*\***\*\*\*\***\*\***Morgan -**\*\***\*\*\*\***\*\***

[](https://www.npmjs.com/package/morgan)

---

## Testing

Jest -

[Mocha - the fun, simple, flexible JavaScript test framework](https://mochajs.org/)

Mocha

[Jest](https://jestjs.io/)

Jasmine -

[Jasmine Documentation](https://jasmine.github.io/)

---

# Production Setup

## Environment Variables

`NODE_ENV=production`

## Process Manager

### StrongLoop Process Manager -

[StrongLoop Process Manager](http://strong-pm.io/)

### PM2

[https://github.com/Unitech/pm2](https://github.com/Unitech/pm2)

### Forever

[forever](https://www.npmjs.com/package/forever)

## Using init System

Systems can still go down for a variety of reasons. To ensure that your app restarts if the server crashes, use the init system built into your OS. The two main init systems in use today are [systemd](https://wiki.debian.org/systemd)
 and [Upstart](http://upstart.ubuntu.com/)

## APM Tools

APM (Application Performance Monitoring) - basically the analytics for each of the request. They help you monitor the app performance continuously and detect errors or bottlenecks that hamper the user experience. And they also provide real-time insights.

---

# Optimizations

## Compression

compression -

[compression](https://www.npmjs.com/package/compression)

---

# Useful Packages

### `date-fns` - manage dates and time conveniently

[Modern JavaScript Date Utility Library](https://date-fns.org/)

### `cors` - cross origin resource sharing

[cors](https://www.npmjs.com/package/cors)

### `nodemon` - auto reload server

[nodemon](https://www.npmjs.com/package/nodemon)

### `agenda` - job scheduling

[@hokify/agenda](https://www.npmjs.com/package/@hokify/agenda)

### `express-validator` - validate req data

[Getting Started | express-validator](https://express-validator.github.io/docs/)

### `uuid` - generate random unique id(s)

[uuid](https://www.npmjs.com/package/uuid)

### `axios` - api calls

[Getting Started](https://axios-http.com/docs/intro)

### `bcrypt` - encrypt and compare passwords

[bcryptjs](https://www.npmjs.com/package/bcryptjs)

### `dotenv` - pass in env variables from a file

[dotenv](https://www.npmjs.com/package/dotenv)

### `jsonwebtoken` - create JWTs

[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

### `multer` - image handling

[multer](https://www.npmjs.com/package/multer)

### `serverless-http` - turn express into lambda

[serverless-http](https://www.npmjs.com/package/serverless-http)

### `socket io` - real-time communication

[Socket.IO](http://socket.io/)

### `puppeteer` - selenium but for javascript

[puppeteer](https://www.npmjs.com/package/puppeteer)

[https://github.com/puppeteer/puppeteer](https://github.com/puppeteer/puppeteer)

### `sharp` - image processing / converting

[sharp - High performance Node.js image processing](https://sharp.pixelplumbing.com/)

---

# Others

## HTTP Response Codes

[HTTP response status codes - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

## Templates

- User authentication (signup, login, logout, password reset, etc.)
- Authorization (e.g. role-based access control)
- Data validation using a library like express-validator
- CRUD operations for a database (e.g. MongoDB)
- CORS (Cross-Origin Resource Sharing) handling
- Error handling and logging.
- Email sending - Google?
- Scheduled tasks or cron jobs
- Search functionality.
- Image upload and processing, download
- Payment integration (Razorpay)
- Real-time updates using WebSockets
- Security best practices, such as input sanitization and output encoding, HTTPS, and HTTP header security.
- Different types of Oauth
- API rate limiting
