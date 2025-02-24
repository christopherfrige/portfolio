function clickExperienceListener(experienceClassName) {
    document.querySelector(`.${experienceClassName}`).addEventListener("click", () => {
        document.querySelector(`.activeExperienceDescription`).classList.remove("activeExperienceDescription")
        document.querySelector(`.activeExperience`).classList.remove("activeExperience")

        document.querySelector(`.${experienceClassName}`).classList.add("activeExperience")
        document.querySelector(`.${experienceClassName}-description`).classList.add("activeExperienceDescription")
    })
}

export function startClickExperienceListeners() {
    clickExperienceListener("neogrid")
    clickExperienceListener("exa")
    clickExperienceListener("zax")
    clickExperienceListener("datainfo")
    clickExperienceListener("trackcash")
}
