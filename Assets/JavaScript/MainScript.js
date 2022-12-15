function $(Q) {
    return document.querySelector(Q);
}

$('.Header__Body--HambergerMenu').addEventListener('click', () => {
    $('body').classList.toggle('MenuMobileShow');
    
    if ($('.headermenu').hasAttribute('style')) {

        $('.headermenu').removeAttribute('style');
    } else {
        $('.headermenu').setAttribute('style', 'height:' + $('.headermenu__content').offsetHeight + 'px;');
    }

})

$('.bottomHeader__filter').addEventListener('click', () => {

    $('body').classList.toggle('headerFilterShow');

    const height = $('.bottomHeaderFilter__form').offsetHeight;
    
    if ($('.bottomHeaderFilter').hasAttribute('style')) {

        $('.bottomHeaderFilter').removeAttribute('style');
    } else {
        $('.bottomHeaderFilter').setAttribute('style', 'height:' + height + 'px;');
    }
})