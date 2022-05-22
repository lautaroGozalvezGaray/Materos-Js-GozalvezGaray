
localStorage.clear()

//array donde se van almacenar los objetos del storage

let arrayProductos = [];

const agregarALocalStorage = (producto) => {
    // Obtenemos los productos del localStorage

    const stock = localStorage.getItem("productos");

    stock !== null && (arrayProductos = JSON.parse(stock));

    // Agregamos el nuevo producto al localStorage

    arrayProductos.push(producto);

    // Setear el localStorage

    localStorage.setItem("productos", JSON.stringify(arrayProductos));
}

//CREAMOS UNA FUNCION QUE VA CALCULAR EL TOTAL DEPENDIENDO LOS OBJ QUE HAY EN EL STORAGE

let total="";


const sumarTotal = () => {
    for (const costo of arrayProductos){
        total=parseInt(total+costo.precio);
    }
    let p = document.getElementById("total");
    
    p.innerText=`El total de su compra es de $ ${total}`;

    btnTotal.setAttribute("disabled","false");//desactivar boton de total
}

//FUNCION PARA VACIAR CARRITO Y PONER EN 0 EL TOTAL
const clearBuy = () => {
    total=0;
    arrayProductos=[];
    btnTotal.removeAttribute("disabled");//activar boton de total
    localStorage.clear();
    let pb = document.getElementById("total");
    pb.innerText="";

    let table=document.getElementById("productoSeleccionados");
    while(table.lastChild){
        table.removeChild(table.lastChild);
    }
}

//FUNCION CAMBIAR COLOR DEL BOTON DEL CARRITO SI SE LE AGREGA ELEMENTOS.
let btnBuy = document.getElementById("btnBuy");
const changeColor = () =>{
    btnBuy.className = "btnBuy btn btn-danger";
}


//BOTON CALCULAR TOTAL

let btnTotal = document.getElementById("btnTotal");
btnTotal.addEventListener("click", (e) => {
    sumarTotal();
    btnFinalizar.removeAttribute("disabled");//activar boton de total
})

//BOTON FINALIZAR COMPRA

let btnFinalizar = document.getElementById("btnFinalizar");
btnFinalizar.setAttribute("disabled","false");//el Boton finalizar esta desactivado hasta que se calcule el total
btnFinalizar.addEventListener("click", (e) => {
    AlertEndBuy();
    clearBuy();
    btnBuy.className="btnBuy btn btn-success";
    btnFinalizar.setAttribute("disabled","false");

    
})

//BOTON BORRAR TOTAL. PERMITE AGREGAR NUEVOS PRODUCTOS Y CALCULAR DE NUEVO EL TOTAL

let btnborrar = document.getElementById("btnborrar");
btnborrar.addEventListener("click", (e) => {
    clearBuy();
    alertClearBuy()
    btnFinalizar.setAttribute("disabled","false");//el Boton finalizar esta desactivado hasta que se calcule el total
    btnBuy.className="btnBuy btn btn-success";
}) 

//BOTONES DE PRODUCTOS

const table = document.getElementById("productoSeleccionados");

//funcion que agrega al localstorage y añade el elemento al carrito
const btnProduct = (producto) => {
    agregarALocalStorage(producto);
    // Crear columnas
    const td = document.createElement("tr");
    td.innerHTML = `<td>${producto.categoria}</td> <td>${producto.tipo}</td> <td>$${producto.precio}*</td>`;
    // agregando columnas a tabla
    table.append(td);
    return producto;
}

let btn1 = document.getElementById("btn1");
btn1.addEventListener('click', (e) => {
    btnProduct(producto=stock[0]);
    AlertAddBuy();
    changeColor();
})

let btn2 = document.getElementById("btn2");
btn2.addEventListener('click', (e) => {
    btnProduct(producto=stock[1]);
    AlertAddBuy();
    changeColor();
})

let btn3 = document.getElementById("btn3");
btn3.addEventListener('click', (e) => {
    btnProduct(producto=stock[2]);
    AlertAddBuy();
    changeColor();
})

let btn4 = document.getElementById("btn4");
btn4.addEventListener('click', (e) => {
    btnProduct(producto=stock[3]);
    AlertAddBuy();
    changeColor();
})

let btn5 = document.getElementById("btn5");
btn5.addEventListener('click', (e) => {
    btnProduct(producto=stock[4]);
    AlertAddBuy();
    changeColor();
})

let btn6 = document.getElementById("btn6");
btn6.addEventListener('click', (e) => {
    btnProduct(producto=stock[5]);
    AlertAddBuy();
    changeColor();
})

let btn7 = document.getElementById("btn7");
btn7.addEventListener('click', (e) => {
    btnProduct(producto=stock[6]);
    AlertAddBuy();
    changeColor();
})

let btn8 = document.getElementById("btn8");
btn8.addEventListener('click', (e) => {
    btnProduct(producto=stock[7]);
    AlertAddBuy();
    changeColor();
})

let btn9 = document.getElementById("btn9");
btn9.addEventListener('click', (e) => {
    btnProduct(producto=stock[8]);
    AlertAddBuy();
    changeColor();
})

let btn10 = document.getElementById("btn10");
btn10.addEventListener('click', (e) => {
    btnProduct(producto=stock[9]);
    AlertAddBuy();
    changeColor();
})

let btn11 = document.getElementById("btn11");
btn11.addEventListener('click', (e) => {
    btnProduct(producto=stock[10]);
    AlertAddBuy();
    changeColor();
})

let btn12 = document.getElementById("btn12");
btn12.addEventListener('click', (e) => {
    btnProduct(producto=stock[11]);
    AlertAddBuy();
    changeColor();
})

let btn13 = document.getElementById("btn13");
btn13.addEventListener('click', (e) => {
    btnProduct(producto=stock[12]);
    AlertAddBuy();
    changeColor();
})

let btn14 = document.getElementById("btn14");
btn14.addEventListener('click', (e) => {
    btnProduct(producto=stock[13]);
    AlertAddBuy();
    changeColor();
})

let btn15 = document.getElementById("btn15");
btn15.addEventListener('click', (e) => {
    btnProduct(producto=stock[14]);
    AlertAddBuy();
    changeColor();
})




