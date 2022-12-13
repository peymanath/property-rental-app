function $(Q){
    return document.querySelector(Q);
}

$('.Header__Body--HambergerMenu').addEventListener('click', ()=>{
    $('body').classList.toggle('MenuMobileShow');
})
