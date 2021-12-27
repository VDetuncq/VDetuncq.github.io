var slide2 = new Array("abbeville0.jpg", "abbeville1.jpg", "abbeville2.jpg", "abbeville3.jpg", "abbeville4.jpg", "abbeville5.jpg", "abbeville6.jpg", "abbeville7.jpg");
var numero = 0;

function ChangeSlide2(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide2").src = slide2[numero];
}
