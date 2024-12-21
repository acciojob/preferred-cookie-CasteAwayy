
const form = document.querySelector("form");
const inputFont = document.querySelector('[type="number"]');
const inputColor = document.querySelector('[type="color"]');

if (document.cookie) {
  let cookie = document.cookie;
  cookie = cookie.split("; ").join("=").split("=");
  const fontsize = parseInt(cookie[1]);
  const fontcolor = cookie[3];

  inputFont.value = fontsize;
  inputColor.value = fontcolor;

  document.documentElement.style.setProperty("--fontsize", fontsize + "px");
  document.documentElement.style.setProperty("--fontcolor", fontcolor);
}
form.onsubmit = function (e) {
  const formData = new FormData(this);
  const fontSize = formData.get("fontsize");
  const fontColor = formData.get("fontcolor");
  document.cookie = `fontsize=${fontSize}`;
  document.cookie = `fontcolor=${fontColor}`;
  e.preventDefault();
};
