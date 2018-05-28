//Imagina que estás pidiendo comida en un restaurante. Tu plato favorito es ceviche, así que lo elegirías si está en el menú. 
//Si no hay ceviche, elegirías tacos al pastor. 
//Si eso no está, te irías por empanada chilena. 
//En el caso raro que ninguna de esas opciones esté disponible, te irías por una hamburguesa. 
//Escribe una función, que de acuerdo a la disponibilidad de los platos en el menú, decidas qué ordenar.

window.onload = () => {

/*  const selection = (ceviche, tacosAlPastor, empanadaChilena, hamburguesa) => {
        if (ceviche) {
            console.log('que rico que hay ceviche');      
        }else if (tacosAlPastor) {
            console.log('igual son ricos los tacos al pastor');
        }else if (empanadaChilena) {
            console.log('ya entonces voy por una empanadita');      
        }else {
            console.log('mmmmm, una hamburguesa entonces');
        }
    }
*/   
    
    const selection = (selectOption) => {
        if (selectOption === "ceviche") {
            console.log("yuju, ya me merecia un cevichito");
        }else if (selectOption === "tacos al pastor") {
            console.log("igual son ricos los tacos al pastor");
        }else if (selectOption === "empanada chilena") {
            console.log("ya entonces voy por una empanada");
        }else {
            console.log("ya filo, una hamburguesa entonces");            
        }

    }





}



