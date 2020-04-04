var hola =document.querySelectorAll("header");


hola.forEach(holis);


function holis(header)
{
header.addEventListener("click", mostrar)
};
             
function mostrar()
{
    console.log(this, "hola");
};




  
