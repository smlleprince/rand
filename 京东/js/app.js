           
           
           
           // ---------------上边左中轮播图-------------------


const arr = [
    {url:'img/tp1.jpg'},
    {url:'img/tp2.jpg'},
    {url:'img/tp3.jpg'},
    {url:'img/tp4.jpg'},
    {url:'img/tp5.webp'},
    {url:'img/tp6.jpg'},
    {url:'img/tp7.webp'},
    {url:'img/tp8.jpg'}
]
let img = document.querySelector('.big img')
let img1= document.querySelector('.zt')
let img2= document.querySelector('.yt')
let big= document.querySelector('.big')
let i=0
console.log(arr.color)
// 自动播放函数
function genghuan(){
    // 直接调用右侧按钮功能，操作简便
    img2.click()
}




// 左侧按钮功能
img1.addEventListener('click',function a(){
     if(i<=0)
    i=8
    console.log('向左滑动')
    i--
    img.src = arr[i].url
    document.querySelector('ul .gl').classList.remove('gl')
    document.querySelector(`.big ul li:nth-child(${i+1})`).classList.add('gl')
    console.log(i)
   
    // clearInterval(timer)
})



// 右侧按钮功能
img2.addEventListener('click',function b(){
    if(i>7)
    i=0
    console.log('向右滑动')
    img.src = arr[i].url
    document.querySelector('ul .gl').classList.remove('gl')
    document.querySelector(`.big ul li:nth-child(${i+1})`).classList.add('gl')
    console.log(i)
    i++
    // clearInterval(timer)
})




// 经过和离开大盒子，开关定时器功能
let timer = setInterval(genghuan,3000)
big.addEventListener('mouseenter',function(){
    clearInterval(timer)
    console.log('关闭了')
})
big.addEventListener('mouseleave',function(){
    timer = setInterval(genghuan,3000)
    console.log('开启了')
})



// ----------------广告------------
let gg=document.querySelector('.gg img')
gg.addEventListener('click',function(){
    gg.style.display = none
    console.log('1')
})


