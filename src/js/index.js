const openSocialMedia = document.getElementById("share")

const shareButon = document.getElementById("button")

button.addEventListener ("click", function () {
    if (openSocialMedia.classList.contains("active")) {
        openSocialMedia.classList.remove("active")
    } else {
        openSocialMedia.classList.add("active")
    }
})