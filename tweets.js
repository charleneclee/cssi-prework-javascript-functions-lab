//==============================================================================
// Resources
//==============================================================================
// Functions - http://www.w3schools.com/js/js_functions.asp
//==============================================================================
// #1 - String Property: countChars
//==============================================================================
// Given a string, return the number of characters in that string
function countChars(userString) {
  var charCount = userString.length
  return charCount;
  //your code here
  //don't forget to return the number of characters (use return!)
}

//==============================================================================
// #2 - String Methods: addHashtag
//==============================================================================
//Given a string, add " #yolo" to the end of that string
function addHashtag(userString) {
  var yoloGym = userString + " #yolo"
  return yoloGym;
  //your code here
  //don't forget to return the number of characters (use return!)
}
//==============================================================================

//==============================================================================
// #2 - String Methods: excitedTweet
//==============================================================================
//Given a string, uppercase it and add "!!!" to the end of that string
function excitedTweet(userString) {
  var excitement = userString.toUpperCase() + "!!!"
  return excitement;
  //your code here
  //don't forget to return the number of characters (use return!)
}
//==============================================================================
