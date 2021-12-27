var slide2 = new Array("noel_2021_Christ.jpg", "noel_2021_arc.jpg", "noel_2021_cible.jpg", "noel_2021_grpe1.jpg", "noel_2021_rob.jpg", "noel_2021_tir.jpg", "noel_2021_tir2.jpg");
var numero = 0;

function ChangeSlide2(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide2").src = slide[numero];
}