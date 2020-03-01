# Lesson 8 - routing in application

Most of web applications have different urls for different parts of application. I. e. on
almost every web page `contact` or `about` page could be found. They have separate urls, like:
 - `/contact.html` specific file (`html`, `php`, `jsp`, ...)
 - `/somepage?id=contact` or `somepage#contact`
 - `/contact`
 
 Reloading the page doesn't change the content. The url specifies what will be seen on the page.
 
 In react applications most commonly used library for implementing routing is `react-router`.
 For web applications is prepared `react-router-dom` library which contains browser specific
 components for routes definition and implementation.
 
 The main component, imported from `react-router-dom` is called `BrowserRouter`.
 It should wrap the whole application tree which will need an access to the router information.
 `Switch` is needed if there is a need of exclusive rendering. So if there is a `/about` route
 component from `/` should not be rendered.
 
 `Route` is needed for specific path.
 
 Please take a look on [react-router-web](https://reacttraining.com/react-router/web/guides/quick-start)
 page.
 