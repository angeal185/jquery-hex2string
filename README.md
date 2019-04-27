# jquery-hex2string
jQuery plugin for converting hex to string and string to hex.

### Installation

npm

```sh
$ npm install jquery-hex2string --save
```

#### browser

```html
<script src="./path-to/jquery.min.js"></script>
<script src="./dist/jq-hex2string.min.js"></script>
```

### info


```js
// demo

console.log($.str2hexSync('hello world!')); // returns '68656c6c6f20776f726c6421'
console.log($.hex2strSync('68656c6c6f20776f726c6421')); // returns 'hello world!'

$.str2hex('hello world!',function(i){
  console.log(i) // returns '68656c6c6f20776f726c6421'
});

$.hex2str('68656c6c6f20776f726c6421', function(i){
  console.log(i) // returns 'hello world!'
});

```
