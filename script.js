"use strict";

const form = document.querySelector("form");
const inputFont = document.querySelector('[type="number"]');
const inputColor = document.querySelector('[type="color"]');

if (localStorage.getItem("preference")) {
  const preference = JSON.parse(localStorage.getItem("preference"));
  const { fontSize, fontColor } = preference;
  inputFont.value = fontSize;
  inputColor.value = fontColor;
  document.documentElement.style.setProperty("--fontsize", fontSize + "px");
  document.documentElement.style.setProperty("--fontcolor", fontColor);
}
form.onsubmit = function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const fontSize = formData.get("fontsize");
  const fontColor = formData.get("fontcolor");

  localStorage.setItem(
    "preference",
    JSON.stringify({ fontSize: fontSize, fontColor: fontColor })
  );
};
