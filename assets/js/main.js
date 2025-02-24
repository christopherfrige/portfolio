import { startProgressiveWriting } from "./progressiveWriting.js"
import { setupMobileMenu } from "./mobileMenu.js"
import { startScrollRevealing } from "./scrollRevealing.js";
import { startClickExperienceListeners } from "./changeExperience.js";
import { startSwitchLanguage } from "./switchLanguage.js"

startSwitchLanguage()
setupMobileMenu()
startScrollRevealing()
startProgressiveWriting()
startClickExperienceListeners()
