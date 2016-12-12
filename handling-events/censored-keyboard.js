var field = document.getElementById('turk-input');

field.addEventListener("keypress", function (event) {
  if(event.charCode == 81 || event.charCode == 87 || event.charCode == 88) {
    event.preventDefault();
  }
});
