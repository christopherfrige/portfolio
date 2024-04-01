export function startContactForm() {
    document.getElementById(`contact-form-send`).addEventListener("click", () => {
        document.getElementById("form-fullname").value=""
        document.getElementById("form-email").value=""
        document.getElementById("form-message").value=""
    })
}