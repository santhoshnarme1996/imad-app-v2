// counter code
var button = document.getElementById('counter');
button.onClick = function() {
  counter += 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};