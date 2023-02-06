document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    const telefono = "573123658301";
  
    const cliente = document.querySelector("#cliente").value;
    const Productos = document.querySelector("#Productos").value;
    const Cantidades = document.querySelector("#Cantidades").value;
    const Tintas = document.querySelector("#Tintas").value;
    const Cantidadtintas = document.querySelector("#Cantidadtintas").value;
    const Medidas = document.querySelector("#Medidas").value;
    const resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *EGC*%0A
          
          *¿Cuál es tu nombre?*%0A
          ${cliente}%0A
          *Quiero cotizar el siguiente Producto*%0A%0A
          ${Productos}%0A
          *Indica las Cantidades que utilizaras*%0A
          ${Cantidades}%0A
          *Que tipo de Tintas quieres que se utilizen?*%0A
          ${Tintas}%0A
          *Cuantas Tintas Manejaras(incluye pantones):*%0A
          ${Cantidadtintas}
          *Medidas(ien cm):*%0A
          ${Medidas}`;
          
  
    if (cliente === "" || Productos === "" || Cantidades === "") {
      resp.classList.add("fail");
      resp.innerHTML = `Faltan algunos datos, ${cliente}`;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;
  
    window.open(url);
  });
  