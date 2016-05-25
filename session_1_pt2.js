var emailValidation = function(email){
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    return false;
  }else{
    return true;
  }
}

if(emailValidation('mary.ann@yahoo.com')){
  console.log("PASS");
}else{
  console.log("F");
}

if(emailValidation('mary.ann@yahoocom')){
  console.log("F");
}else{
  console.log("PASS");
}
