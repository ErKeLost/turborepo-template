export function Accumulation() {
    var value = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        value[_i] = arguments[_i];
    }
    return value.reduce(function (t, v) { return t + v; }, 0);
}
export function Multiplication() {
    var value = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        value[_i] = arguments[_i];
    }
    return value.reduce(function (t, v) { return t * v; }, 1);
}
