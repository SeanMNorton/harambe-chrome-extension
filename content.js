var images = document.getElementsByTagName("img");
var perfectAmount = Math.floor(images.length / 10 ) + 1

for(var i = 0; i < perfectAmount ; i++) {
  var rand = Math.floor(Math.random() * images.length)
  images[rand].className += " harambelives";
}

$(".harambelives").mouseover(function(){
  var src = $(this).attr('src');
  $(this).attr('src', "https://raw.githubusercontent.com/SeanMNorton/harambe-chrome-extension/master/img.jpg")
})
