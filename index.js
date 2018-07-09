const removeFalsyProps = (passedObj = {}) => {
    const modifiedObj = {};
    const keys = Object.keys(passedObj);
    if (passedObj.constructor !== Object || !keys.length) {
        throw new Error("Argument is not a valid object");
    }
    keys.forEach(key => {
        if (passedObj[key]) {
            modifiedObj[key] = passedObj[key];
        }
    });
    return modifiedObj;
};
const removeOneOrManyProps = (passedArray = [], ...args) => {
    if (
        passedArray.constructor !== Array ||
        !passedArray.every((ele) => 
            ele.constructor === Object) ||
        !passedArray.length ||
        !args.length
    ) {
        throw new Error("Passed array or argument is not valid");
    }
    return passedArray.map(obj => {
        let keys = Object.keys(obj);
        let newObj = {};
        keys.filter(key => !args.includes(key)).forEach(wantedkey => {
            newObj[wantedkey] = obj[wantedkey];
        });
        return newObj;
    });
};
const removeOneOrManyFalsyProps = (passedArray = [], ...args) => {
    if (
        passedArray.constructor !== Array ||
        !passedArray.length ||
        !passedArray.every((ele) => 
            ele.constructor === Object) ||
        !args.length
        
    ) {
        throw new Error("Passed array or argument is not valid");
    }
    return passedArray.map(obj => {
        for (let key in obj){
            args.forEach( arg => {
                if (arg === key && !obj[key]) {
                    delete obj[key]
                }
            })
            
        }
        return obj;
    });

}
const countFalsy = (passedObj = {}) => {
  const keys = Object.keys(passedObj);
  if (passedObj.constructor !== Object || !keys.length) {
    throw new Error("Argument is not a valid object");
  }
  let falsyCount = 0;
  keys.forEach(key => {
    if (!passedObj[key]) {
      falsyCount++
    }
  });
  return falsyCount;
};
console.log(removeOneOrManyFalsyProps([
    { k1: 1, k2: "" },
    { k1: "", k2: "hi" }
], "k1"));
console.log(removeOneOrManyFalsyProps([
    { k1: 1, k2: "" },
    { k1: "", k2: "hi" }
], "k1", "k2"))
console.log(countFalsy({ k1: 2, k3: "something", k4: false, k5: "", k6: 0 }));
module.exports = { removeFalsyProps,
                   removeOneOrManyProps, 
                   removeOneOrManyFalsyProps,
                   countFalsy
                 };
