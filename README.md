# course-card-homework

Course Card homework assignment. Live demo can be seen here: http://demo.damirhara.com/courses

## Credits
Used https://github.com/AndrewTHuang/simple-react-webpack.git as a starting boilerplate for the mini-app.

## Tools
* React
* Webpack
  * including a small Express dev server
* Babel (to transpile ES6)
* SASS
* Axios (https://github.com/mzabriskie/axios)
* React Icons (http://gorangajic.github.io/react-icons/)
* Testing (Currently not used)
  * Karma
  * Mocha + Chai
  * [Enzyme](http://airbnb.io/enzyme/)
  * PhantomJS
* Hot-reloading

## Usage
```
> git clone https://github.com/AndrewTHuang/simple-react-webpack.git
> cd simple-react-webpack
> npm install
> npm start
```

There you go! You're up and running at ```localhost:3000```

## Production
To build a minified `bundle.min.js` production-ready file, simply run `> npm run deploy` and it will build it into `/dist`. This will also convert React to the production version. 😃
