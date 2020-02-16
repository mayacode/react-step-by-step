# Lesson 7 - static code analysis - eslint

[eslint](https://eslint.org/) is a library, which analyses the code and reports
problems.

In [package.json](package.json) file is a new script created, ro run it use:<br />
`npm run dev-client-eslint`
<br/>
It returns now no problem, so to see how it work in Header.js file in line 2
after react import create not used variable a with any value `const a = 6;`.
Save the file and run `dev-client-eslint` again.

The error report looks like this:
```
/home/maja/projects/react-step-by-step/client/src/components/Header/Header.js
  2:7  error  'a' is assigned a value but never used  no-unused-vars

✖ 1 problem (1 error, 0 warnings)
```

After the file path are lines with errors. First information shows line
and column `2:7`. Next says if this is an error or warning. Next shows what
is exactly wrong. Last one gives the violated rule name.

In [.eslintrc](.eslintrc) file is the configuration. In `rules` specific rules
could be turn on or off or changed to warning. In this configuration
`no-console` is turned off.
