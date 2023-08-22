function loadJSON(callback) {
   
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  var listname = 'data/'+document.getElementById("list").value+'.json';
  xobj.open('GET', listname, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);

}

function init() {
loadJSON(function (response) {
  // Parse JSON string into object
  var word_data = JSON.parse(response);
  num = Math.floor(Math.random() * word_data.length);
 
  $("#vocab").html(word_data[num]["korean"]);
  $("#meaning").html(word_data[num]["romanized"]);
  $("#english").html(word_data[num]["english"]);
});
} 
setInterval(init, 7000);
window.onload = init;
