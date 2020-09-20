window.onscroll = function() {
    scrollFunction()
};
function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400)
        document.getElementById("onlyJSyc").style.display = "block"
    else
        document.getElementById("onlyJSyc").style.display = "none"
}
function topFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.body.scrollTop -= 20
        document.documentElement.scrollTop -= 20
        setTimeout(function () {
            topFunction()
        }, 0)
    } else {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }
}