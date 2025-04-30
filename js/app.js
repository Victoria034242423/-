const upBtn=document.querySelector('.up-button')
const downBtn=document.querySelector('.down-button')
const sideba= document.querySelector('.sideba')
const containe=document.querySelector('.containe')
const mainSlide=document.querySelector('.main-slide')
const slidesCount=mainSlide.querySelectorAll('div').length

let activeSlideIndex=0

sideba.style.top=`-${(slidesCount -1)*100}vh`

upBtn.addEventListener('click',()=>{
changeSlide('up')
})

downBtn.addEventListener('click',()=>{
changeSlide('down')
})


function changeSlide(direction){
 if(direction ==='up') {
     activeSlideIndex++
     if(activeSlideIndex ===slidesCount)
     {
         activeSlideIndex=0
 }
}else if(direction==='down') {
    activeSlideIndex--
    if(activeSlideIndex <0) {
        activeSlideIndex= slidesCount-1
        }
    }

    const height= containe.clientHeight

    mainSlide.style.transform=`translateY(-${activeSlideIndex * height}px)`

    sideba.style.transform=`translateY(${activeSlideIndex * height}px)`
    
}