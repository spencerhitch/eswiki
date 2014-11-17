var interwiki = null;

if (typeof document.getElementsByClassName('interwiki-es')[0] != "undefined") {
 interwiki = document.getElementsByClassName('interwiki-es')[0].innerHTML;
}

var regex = new RegExp('//es\.wikipedia\.org/[^\\s\"]+');
var match = regex.exec(interwiki);


if (match != null) {
  var url = "http:" + match[0];
  console.log(url);
  chrome.runtime.sendMessage(url);
}
