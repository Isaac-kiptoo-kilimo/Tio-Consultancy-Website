
function openCloseMenu() {
  if (document.getElementById('menu-holder').classList.contains('open')) {
    document.getElementById('menu-holder').classList.remove('open');
    document.getElementById('menu-holder').classList.add('x-close');
  } else {
    document.getElementById('menu-holder').classList.remove('x-close');
    document.getElementById('menu-holder').classList.add('open');
  }
}

