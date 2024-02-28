document.addEventListener('DOMContentLoaded', () => {
    const navElement = document.querySelector('.nav-bottom')
    showHideFunc()
    window.addEventListener('scroll', function (e) {
        showHideFunc()
    })

    function showHideFunc() {
        const { scrollTop } = document.documentElement;
        if (scrollTop < 100) {
            navElement.classList.add("remove")
            navElement.classList.remove("show")
        } else {
            navElement.classList.remove("remove")
            navElement.classList.add("show")
        }
    }
})