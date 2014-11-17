var myApp = document.querySelector('my-app');
var tabs = document.querySelector('paper-tabs');

tabs.addEventListener('core-select', function() {
  myApp.show = tabs.selected;
  console.log("Selected: " + tabs.selected);
});
