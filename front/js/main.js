(function init100vh(){
    function setHeight() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setHeight();
    window.addEventListener('resize', setHeight);
})();

window.addEventListener("orientationchange", () => {
    location.reload(true)
});

// padding no-ios
document.addEventListener("DOMContentLoaded", function() {
    let bannerDetDate = document.querySelector('.banner__details-date');
    let bannerDetTime = document.querySelector('.banner__details-time');

    if (!/iPad|iPhone|iPod|Mac/.test(navigator.userAgent)) {
        bannerDetDate.classList.add('noios-padding');
        bannerDetTime.classList.add('noios-padding');
    }
});