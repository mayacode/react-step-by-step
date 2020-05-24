# Lesson 8 - express.js as a server

Very often it does not make any sense to hold the whole logic of different
APIs or databases in client part itself. The client part (a code downloaded
to the browser) should be dumb. It should show as less about our data sources
as possible.

To achieve this state creating a node based middleware is a quite popular
solution. It makes making requests to different APIs without setting CORS.
It also hides important API managing code, or some logic out of user's range.

The new directory `server` was created. It contains `webpack.dev.config.js`
and src with `index.js`. Some new libraries like `express.js` and `nodemon`
were installed. 2 new scripts for running in dev environment and building
server part were added.
