// Função genérica para inicializar o listener no elemento com determinado nome de classe
function clickExperienceListener(experienceClassName) {
    document.querySelector(`.${experienceClassName}`).addEventListener("click", () => {
        document.querySelector(`.activeExperienceDescription`).classList.remove("activeExperienceDescription")
        document.querySelector(`.activeExperience`).classList.remove("activeExperience")

        document.querySelector(`.${experienceClassName}`).classList.add("activeExperience")
        document.querySelector(`.${experienceClassName}-description`).classList.add("activeExperienceDescription")
    })
}

// Inicializa os listeners de cliques nos botões de experiência profissional
export function startClickExperienceListeners() {
    clickExperienceListener("exa")
    clickExperienceListener("zax")
    clickExperienceListener("datainfo")
    clickExperienceListener("trackcash")
}
