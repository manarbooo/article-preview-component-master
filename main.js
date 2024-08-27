const shareSec = document.querySelector(".sharesection");
const shareBtn = document.querySelector(".shareBtn");

shareBtn.addEventListener('click', () => {

    shareSec.classList.toggle('show');

    shareBtn.classList.toggle('active');

    if (shareBtn.classList.contains('active')) {
        // Apply hover styles when the share section is active
        shareBtn.style.backgroundColor = 'var(--Desaturated_Dark_Blue)';
        shareBtn.querySelector('.shareicon path').style.fill = 'white';
    } else {
        // Revert to default styles when the share section is hidden
        shareBtn.style.backgroundColor = 'var(--Light_Grayish_Blue)';
        shareBtn.querySelector('.shareicon path').style.fill = 'var(--Desaturated_Dark_Blue)';
    }
});