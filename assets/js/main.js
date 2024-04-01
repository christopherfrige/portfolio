import { startProgressiveWriting } from "./progressiveWriting.js"
import { setupMobileMenu } from "./mobileMenu.js"
import { startScrollRevealing } from "./scrollRevealing.js";
import { startClickExperienceListeners } from "./changeExperience.js";
import { startContactForm } from "./contactForm.js";

// Inicializando e configurando reatividade e responsividade na página
setupMobileMenu()
startScrollRevealing()
startProgressiveWriting()
startClickExperienceListeners()
startContactForm()
