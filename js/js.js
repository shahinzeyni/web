// const progres = document.querySelector('.progress-bar');

// window.addEventListener('scroll',() =>{
//     const winScroll = window.pageYOffset;
//     //
//     const height = document.documentElement.scrollHeight - window.innerHeight ;
//     // console.log(height)
//     const scroled = (winScroll/height)*100;
//     progres.style.width = `${scroled}%`
// })















const progres = document.querySelector('.progress-bar');

window.addEventListener('scroll',function(){
    const winScroll = window.pageYOffset;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (winScroll/height)*100;
    progres.style.width = `${scrolled}%`
})