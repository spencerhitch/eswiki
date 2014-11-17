// Restores articulos to saved values from localStorage.
function restore_saved() {
  var select = document.getElementById("articulos");
  chrome.storage.local.get(null, function(items) {
    for (item in items) {
      var regex = new RegExp('/wiki/([^\\s\"]+)');
      var match = regex.exec(items[item][0]);
      console.log(match[1]);
      select.innerHTML += "<li><a href=" + "\"" + items[item][0] + "\" >" + items[item][1] + "</a> </li>";
    }
    
  });
}

//Clears all saved links from local storage
function clearall() {
  chrome.storage.local.clear(); 
  location.reload();
}

//Load saved wiki articles on contenLoaded
//Could run this on tab active?
document.addEventListener('DOMContentLoaded', restore_saved);

//clear all saved when button clicked
document.querySelector('#clear').addEventListener('click', clearall);


//function set_display() {
//  var set = null;
//  document.getElementById("display").href = set;
//}

//set filepath to append *.html filelinkon button click
//document.querySelector('#setdisplay').addEventListener('click', setdisplay);

