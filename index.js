const removeFalsyProps = (passedObj = {}) => {
    const modifiedObj = {};
    const keys = Object.keys(passedObj);
    if (passedObj.constructor !== Object || !keys.length) {
        return "Argument is not a valid object";
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
        return "Passed array or argument is not valid";
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
module.exports = { removeFalsyProps, removeOneOrManyProps };