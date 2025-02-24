import translationEnUs from "./translation/en_US.js";
import translationPtBr from "./translation/pt_BR.js";

const switchLanguage = (code) => {
  const languages = {
    en_US: translationEnUs,
    pt_BR: translationPtBr
  };

  const selectedLanguage = languages[code];

  Object.keys(selectedLanguage).forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = selectedLanguage[id];
    }
  });

  localStorage.setItem("selectedLanguage", code);

}

export function startSwitchLanguage () {
  const languageToggle = document.getElementById('language-toggle');
  
  let currentLanguage = localStorage.getItem("selectedLanguage") || "en_US"; 
  if (currentLanguage === "pt_BR") {
    languageToggle.checked = true;
    button.classList.add("active");
  }
  switchLanguage(currentLanguage);
  
  languageToggle.addEventListener("click", function () {
    if (currentLanguage === 'en_US') {
      currentLanguage = 'pt_BR'
    } else {
      currentLanguage = 'en_US'
    }
    switchLanguage(currentLanguage)
  });
}
