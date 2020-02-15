# Lesson 5 - component props (style)

Writing HTML we use attributes to specify tag properties. In React world
we use `props` for passing information to the component. Also standard HTML
attributes could be passed, for example: `style`. Styles can be passed
inline but must be in object. Object properties are names of styles in camel
case:

width => width<br />
text-align => textAlign

The values are strings or numbers:
```
const styleObj = {
  width: '100%',
  border: 0,
  textAlign: 'center'
};
<div style={styleObj}>Hello World</div>
```

```
<div style={{ textAlign: 'center' }}>Hello World</div>
```
