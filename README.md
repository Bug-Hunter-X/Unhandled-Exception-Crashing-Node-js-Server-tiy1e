# Unhandled Exception Crashing Node.js Server

This repository demonstrates a common error in Node.js applications: unhandled exceptions causing server crashes. The `bug.js` file contains a server that throws an unhandled exception, leading to its immediate termination. The `bugSolution.js` file shows how to implement proper error handling to prevent this crash.

## Bug

The `bug.js` file creates a simple HTTP server. However, it throws an unhandled exception, causing the server to crash without any graceful handling or logging of the error.

## Solution

The `bugSolution.js` file addresses this issue by using a `try...catch` block to handle potential errors within the server's request listener. This prevents the server from crashing and allows for logging or other error handling mechanisms.
