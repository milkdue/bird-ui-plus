const isType = function (type: string): (o: any) => boolean {
    return function (obj: any) {
        return Object.prototype.toString.call(obj) === `[object ${type}]`;
    }
}

const isString = isType("String");
const isArray = isType("Array");
const isObject = isType("Object");
const isFunction = isType("Function");
const isNumber = isType("Number");
const isBoolean = isType("Boolean");

export {
    isType,
    isString,
    isArray,
    isObject,
    isFunction,
    isNumber,
    isBoolean
}
