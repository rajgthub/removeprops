# Introdction to Remove props module

#### This module (removeprops) can be used to remove falsy or unwanted props (key and value pair) of an object or array of objects. It now provides four methods: 
##### 1. removeFalsyProps(object) is to remove all falsy values (eg., 0, '', false, and so on).  
##### 2. removeOneOrManyProps(arrayOfObjects, key1[,manykeys]) is to remove any specified key from an array of bjects.
##### 3. removeOneOrManyFalsyProps is to remove a propery which has a falsy value (0, '', false, null and so on).
##### 4. countFalsy is to count number of keys with falsy values.


## Installation

```sh
$ npm install removeprops
Or
$ npm install removeprops --save
```

## Usage

```javascript
//
//Destructure exported methods 
const { removeFalsyProps, removeOneOrManyProps } = require("removeprops")

//removeFalsyProps

const obj = { k1: 2, k2: false, k3: "" };
console.log(removeFalsyProps(obj));
//output: { k1: 2 }

//removeOneOrManyProps

console.log(removeOneOrManyProps([{ k1: 1, k2: "4" }, { k1: 2, k2: "string value" }], 'k1'))
//output: [ { k2: '4' }, { k2: 'string value' } ]

console.log(removeOneOrManyProps([{ k1: 1, k2: "4" }, { k1: 2, k2: "string value" }], 'k1', 'k2'))
//output: [ {}, {} ]

console.log(removeOneOrManyFalsyProps([{ k1: 1, k2: "" }, { k1: "", k2: "hi" }], "k1"));
//output: [ { k1: 1, k2: '' }, { k2: 'hi' } ]

console.log(removeOneOrManyFalsyProps([{ k1: 1, k2: "" }, { k1: "", k2: "hi" }], "k1", "k2"))
//output: [ { k1: 1 }, { k2: 'hi' } ]

console.log(countFalsy({ k1: 2, k3: "something", k4: false, k5: "", k6: 0 }));
//output: 3

```
