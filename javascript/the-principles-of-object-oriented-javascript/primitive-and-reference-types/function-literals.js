function reflect(value) {
    return value;
}

// is the same as
//

var reflect = new Function("value", "return value;");
