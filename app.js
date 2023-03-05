var share = document.getElementById('share');
var tab = document.getElementById('tab');

var main = document.getElementById('main');
var tabPostion = share.getBoundingClientRect();

var hide = function () {
  tab.classList.add('hide');
};

var show = function () {
  tab.classList.add('show');
};

let removeClass = function () {
  tab.classList.remove('show');
  tab.classList.remove('hide');
};

function createDiv() {
  var tab2 = document.createElement('div');
  tab2.setAttribute('class', 'share-tab2');
  tab2.setAttribute('id', 'tab2');
  tab2.innerHTML = `<p>SHARE</p>
    <img src="images/icon-facebook.svg" alt="" />
    <img src="images/icon-twitter.svg" alt="" />
    <img src="images/icon-pinterest.svg" alt="" />`;
  main.appendChild(tab2);
}

window.onload = function () {
  if (window.innerWidth > 730) {
    createDiv();
    var tab2 = document.getElementById('tab2');
    tab.style.display = 'none';
    tab2.style.left =
      tabPostion.x - tab2.offsetWidth / 2 + share.offsetWidth / 2 + 'px';
    tab2.style.top = tabPostion.y - (tab2.offsetHeight + 40) + 'px';
    share.addEventListener('click', () => {
      tab2.classList.toggle('show2');
    });
  } else {
    tab.style.display = 'flex';
    share.addEventListener('click', () => {
      show();
      setTimeout(hide, 5000);
      setTimeout(removeClass, 6000);
    });
  }
};
