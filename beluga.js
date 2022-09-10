var randomChange= document.querySelector('html'),
images= ["images/foto1.jpg","images/foto2.jpg","images/foto3.jpg","images/foto4.jpg"]

var imgCount = images.length

//alert(imgCount)

var number = Math.floor(Math.random()* imgCount);

//alert(number)

window.onload =function(e){
    randomChange.style.background = 'url('+images[number]+')'

   
}