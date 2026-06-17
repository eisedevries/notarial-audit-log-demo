// Screen-size guard + React mount. Kept external (not inline) so the page can
// run under a strict CSP with script-src 'self' (no 'unsafe-inline').

function checkScreen() {
  var tooSmall = window.innerWidth < 1600 || window.innerHeight < 800;
  document.getElementById('screen-cover').style.display = tooSmall ? 'block' : 'none';
  if (!tooSmall && !window.__appStarted) {
    window.__startApp();
    window.__appStarted = true;
  }
}
document.getElementById('screen-cover-ignore').addEventListener('click', function () {
  document.getElementById('screen-cover').style.display = 'none';
  if (!window.__appStarted) {
    window.__startApp();
    window.__appStarted = true;
  }
});
window.addEventListener('resize', checkScreen);

const reactRoot = ReactDOM.createRoot(document.getElementById('root'));
window.__startApp = function () { reactRoot.render(React.createElement(window.App)); };
checkScreen();
