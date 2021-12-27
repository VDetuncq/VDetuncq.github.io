var slide2 = new Array("abbeville0.JPG", "abbeville1.JPG", "abbeville2.JPG", "abbeville3.JPG", "abbeville4.JPG", "abbeville5.JPG", "abbeville6.JPG", "abbeville7.JPG");
var numero = 0;

function ChangeSlidetwo(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide2.length - 1;
    if (numero > slide2.length - 1)
        numero = 0;
    document.getElementById("slide2").src = slide2[numero];
}
