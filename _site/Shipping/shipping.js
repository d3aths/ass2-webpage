function showLogin() {
  let x = document.getElementById('triangleDiv') //setting triangeDiv as the target
  if (x.style.display === 'none') { //if div is hidden
    x.style.display = 'flex' //then show it
  } else {
    x.style.display = 'none' //if its not, then hide it
  }
}
