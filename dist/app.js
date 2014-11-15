
var tabs = document.querySelector('paper-tabs');

tabs.addEventListener('core-select', function() {
  // console.log(tabs);
  // console.log("Selected: " + tabs.selected);
});



/* Add the following code: */
// var myApp = document.querySelector('my-app');
// console.log(myApp);

// console.log(list);



var myApp = document.querySelector('my-app');
//console.log(list);

var tabs = document.querySelector('paper-tabs');

tabs.addEventListener('core-select', function() {
  myApp.show = tabs.selected;
});









//var selected = 0;



// var map = document.querySelector('post-map');
// //console.log(map);
// list.addEventListener('find-on-map', function(event, detail, sender) {
//   //var post = event.detail.templateInstance.model.post;
//   //selected = post.uid;
//   //map.findByUid(post.uid);

//   var uid = event.detail.uid;
//   selected = uid;
//   // debugger;
//   //console.log(event);

//   //list.posts[4].selected = true;

//   // console
//   //console.log(event.detail.templateInstance.model.post);
// });
