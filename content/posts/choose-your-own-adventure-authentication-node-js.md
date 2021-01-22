---
title: 'Choose Your Own Adventure Authentication in Node.js: Part 1: The Backend'
date: '2021-01-18T15:00Z'
author: Nathan Chu
tags:
  - Choose Your Own Adventure
  - Authentication
  - Node
  - JavaScript
---

Authentication is always hard to code, here's my attempt at making it easier. Baisically, you decide what technologies you want to use to build your own authentication.

First, to set up, open your code editor into an empty folder and run:

```bash
npm init -y # or yarn init -y
```

This will get a package.json ready for you.

You might also want to install nodemon so you don't have to restart the server with every change:

```bash
npm install --save-dev nodemon # or yarn add --dev nodemon
```

# Express / Node.js HTTP

Express is a "Fast, unopinionated, minimalist web framework for Node.js." It has been used by large applications such as twitter. The other choice is Node.js HTTP, which express is based on.

## Express

First, install express by running:

```bash
npm install express # or yarn add express
```

After that, create and open an index.js and create an express app with:

```javascript
const express = require('express')
const app = express()
app.listen(process.env.port || 8080)
```

Now, start the server with

```bash
node index.js
# or with nodemon:
npx nodemon index.js # or yarn nodemon index.js
```

Now we're ready to start writing code. Add the following to the `index.js` to handle a user going to `/login` and `/signup`

```javascript
app.get('/login', async (req, res) => {
  res.send(`
    <form action="/login" method="post">
      Username: <input name="username">
      Password: <input name="password">
      <input type="submit" value="login">
    </form>
  `)
})
app.get('/signup', async (req, res) => {
  res.send(`
    <form action="/signup" method="post">
      Email: <input name="email">
      Username: <input name="username">
      Password: <input name="password">
      <input type="submit" value="login">
    </form>
  `)
})
```

Finally, Add some placeholders for the code in the next part of this series, databases.

```javascript
app.get('/', async (req, res) => {
  // Check if is Authenticated (isAuthenticated) and get profile data (profileData)
  if (isAuthenticated) {
    res.send(`
      Logged in. Your profile is:
      <br>
      <pre>
        ${JSON.stringify(profileData)}
      </pre>
    `)
  } else {
    res.send('Logged Out. <a href="/login">Login?</a>')
  }
})
app.post('/login', async (req, res) => {
  // Handle Login
})
app.post('/signup', async (req, res) => {
  // Handle Signup
})
```

Here's what the code should look like once you're done:

<details>
<summary>View Code</summary>

```javascript
const express = require('express')
const app = express()
app.listen(process.env.port || 8080)

app.get('/login', async (req, res) => {
  res.send(`
    <form action="/login" method="post">
      Username: <input name="username">
      Password: <input name="password">
      <input type="submit" value="login">
    </form>
  `)
})
app.get('/signup', async (req, res) => {
  res.send(`
    <form action="/signup" method="post">
      Email: <input name="email">
      Username: <input name="username">
      Password: <input name="password">
      <input type="submit" value="login">
    </form>
  `)
})

app.get('/', async (req, res) => {
  // Check if is Authenticated (isAuthenticated) and get profile data (profileData)
  if (isAuthenticated) {
    res.send(`
      Logged in. Your profile is:
      <br>
      <pre>
        ${JSON.stringify(profileData)}
      </pre>
    `)
  } else {
    res.send('Logged Out. <a href="/login">Login?</a>')
  }
})
app.post('/login', async (req, res) => {
  // Handle Login
})
app.post('/signup', async (req, res) => {
  // Handle Signup
})
```

</details>

All done! You can go to part 2 when it comes out.

## Node.js `http`

First, get started by creating a file, index.js

Inside that, put:

```javascript
const http = require('http')
http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    // Insert the rest of the code here
  })
  .listen(8080)
```

Now, add the following code (see the express section for explantions) where the comment is:

```javascript
if (req.path === '/login' && req.method === 'GET') {
  res.end(`
    <form action="/login" method="post">
      Username: <input name="username">
      Password: <input name="password">
      <input type="submit" value="login">
    </form>
  `)
} else if (req.path === '/signup' && req.method === 'GET') {
  res.end(`
    <form action="/signup" method="post">
      Email: <input name="email">
      Username: <input name="username">
      Password: <input name="password">
      <input type="submit" value="login">
    </form>
  `)
} else if (req.path === '/' && req.method === 'GET') {
  // Check if is Authenticated (isAuthenticated) and get profile data (profileData)
  if (isAuthenticated) {
    res.send(`
      Logged in. Your profile is:
      <br>
      <pre>
        ${JSON.stringify(profileData)}
      </pre>
    `)
  } else {
    res.send('Logged Out. <a href="/login">Login?</a>')
  }
} else if (req.path === '/login' && req.method === 'POST') {
  // Handle Login
} else if (req.path === '/signup' && req.method === 'POST') {
  // Handle Signup
}
```

Now, you're ready for the next part when it's released!
