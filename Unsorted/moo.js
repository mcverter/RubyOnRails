function appendChildren() {
  var allDivs = document.getElementsByTagName("div");

  for (var i = 0; i < allDivs.length; i++) {
    var newDiv = document.createElement("div");
    decorateDiv(newDiv);
    allDivs[i].appendChild(newDiv);
  }
}

// Mock of decorateDiv function for testing purposes
function decorateDiv(div) {}

Array.prototype.unshift
function log(phrase){
  console.log(phrase)
}

function csvParse(txt) {
  array = [];
  var start = 0,
    end = 0,
    i = 0;

  for (i=0; i<txt.length; i++) {
    if (txt[i]===',') {
      var sub = substr(start, txt[i-1]);
      var num = parseInt(sub);
      if(num) {
        array.push(num)
      } else {
        array.push(sub)
      }

      start = i+1;
    }
  }
}


