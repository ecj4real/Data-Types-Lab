module.exports = {
  dataTypes: function(arg) {
    if (arg === null || arg === undefined)
      return 'no value';
    else if (typeof arg === "boolean")
      return arg;
    else if (typeof arg === "number") {
      if (arg < 100)
        return 'less than 100';
      else if(arg === 100)
        return 'equal to 100';
      else
        return 'more than 100';
    }
    else if (typeof arg === "string")
      return arg.length
    else if (typeof arg === "object") {
      if (arg.length > 2)
        return arg[2];
      else
        return undefined;
    }
    else if (typeof arg == "function")
    {
      return arg(true);
    }
  }
}