# Lesson 2

## Adding dependencies to the project

Mostly projects are build with use of many 3rd part libraries.
Those libraries needed for project are called `dependencies`.
All libraries are installed in `node_modules` directory. This directory
shouldn't be pushed to the repository, its name should be added to
`.gitignore` file. By default also `package-lock.json` file is created.
It contains list of libraries and their dependencies and is needed
as guarantees stable installation process.

There are 2 dependency groups: main called just `dependencies` and
needed only for development, tests or build process called
`devDependecies`.

`npm install react --save` adds library to `dependecies`

`npm install webpack --save-dev` adds library to `devDependencies`

`npm install` will always install all libraries listed in `dependecies`
to install `devDependencies` **NODE_ENV** variable must be different than
**production**. It means to build project using webpack and babel all
dependencies must be installed on not production environment.
