function confirmEnding(str, target) {

    var n = str.lastIndexOf(target);
    if (n === str.length)
    {return true}
  
  
    return false;
  }
  
  confirmEnding("Bastian", "n");