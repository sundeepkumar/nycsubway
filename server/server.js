#!/usr/bin/env node
const { Mongoose } = require("mongoose");
const server = require("./app"); // load up the web server
const port = process.env.PORT || 3000; // the port to listen to for incoming requests
// call express's listen function to start listening to the port
const listener = server.listen(port, function () {
  console.log(`Server running on port: ${port}`);
});
// a function to stop listening to the port
const close = () => {
  listener.close();
};

module.exports = {
  close: close,
};
