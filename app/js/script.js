const setDarkMode = () => {
  document.querySelector("body").classList = "dark";
};

const setLightMode = () => {
  document.querySelector("body").classList = "light";
};

const setColorMode = () => {
  if (localStorage.getItem("colorMode") == "dark") {
    setDarkMode();
    document.getElementById("dark").checked = true;
  } else {
    setLightMode();
    document.getElementById("dark").checked = false;
  }
};

setColorMode();

const radioButton = document.querySelectorAll(".toggle__dark");
for (let i = 0; i < radioButton.length; i++) {
  radioButton[i].addEventListener("click", (event) => {
    if (document.getElementById("dark").checked) {
      localStorage.setItem("colorMode", "light");
      setLightMode();
    } else {
      localStorage.setItem("colorMode", "dark");
      setDarkMode();
    }
  });
}
