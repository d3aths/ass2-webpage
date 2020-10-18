function showLogin() {
  let x = document.getElementById('triangleDiv') //setting triangeDiv as the target
  if (x.style.display === 'none') { //if div is hidden
    x.style.display = 'flex' //then show it
  } else {
    x.style.display = 'none' //if its not, then hide it
  }
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
} 
