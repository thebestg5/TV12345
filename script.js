window.onload = function () {
    // 🎨 Cambiar color del botón cada 2 segundos
    function cambiarColorBoton() {
        let boton = document.getElementById("botonNormal");
        let colores = ["#008cba", "#e74c3c", "#f39c12", "#2ecc71", "#9b59b6"];
        let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        boton.style.backgroundColor = colorAleatorio;
    }
    setInterval(cambiarColorBoton, 2000);

    // 📝 Función para escribir mensaje letra por letra
    function escribirMensaje(texto, elemento, velocidad) {
        let i = 0;
        elemento.innerHTML = "";
        function escribir() {
            if (i < texto.length) {
                elemento.innerHTML += texto.charAt(i);
                i++;
                setTimeout(escribir, velocidad);
            }
        }
        escribir();
    }

    // 🌙 Cambiar tema oscuro/claro
    function cambiarTema() {
        document.body.classList.toggle("dark-mode");
    }

    // 💥 Efecto de explosión en el botón
    function explotarBoton() {
        let boton = document.getElementById("botonNormal");
        boton.style.transform = "scale(2) rotate(360deg)";
        boton.style.opacity = "0";
        
        setTimeout(() => {
            boton.style.transform = "scale(1) rotate(0deg)";
            boton.style.opacity = "1";
        }, 3000);
    }

    document.getElementById("botonNormal").addEventListener("click", explotarBoton);

    // ⏰ Saludo según la hora
    function mostrarSaludo() {
        let hora = new Date().getHours();
        let saludo = "";

        if (hora >= 5 && hora < 12) {
            saludo = "🌞 Good Morning!";
        } else if (hora >= 12 && hora < 18) {
            saludo = "☀️ Good Afternoon!";
        } else {
            saludo = "🌙 Good Evening!";
        }

        document.getElementById("saludo").innerText = saludo;
    }

    mostrarSaludo();

    // 😂 Botón escurridizo
    function moverBoton(event) {
        let boton = event.target;
        let anchoVentana = window.innerWidth - boton.offsetWidth;
        let altoVentana = window.innerHeight - boton.offsetHeight;

        let nuevaX = Math.random() * anchoVentana;
        let nuevaY = Math.random() * altoVentana;

        boton.style.position = "absolute";
        boton.style.left = nuevaX + "px";
        boton.style.top = nuevaY + "px";
    }

    let botonEscurridizo = document.getElementById("botonEscurridizo");
    if (botonEscurridizo) {
        botonEscurridizo.addEventListener("mouseover", moverBoton);
    } else {
        console.error("No se encontró el botón escurridizo");
    }

    // 🖊️ Mostrar mensaje con el nombre del usuario
    function mostrarMensaje() {
        let nombre = prompt("What's your name?");
        
        if (nombre) {
            let mensajeElemento = document.getElementById("mensaje");
            if (mensajeElemento) {
                let texto = `Hello, ${nombre}! Welcome to my website.`;
                escribirMensaje(texto, mensajeElemento, 100);
            } else {
                console.error("No se encontró el elemento con id 'mensaje'");
            }
        }
    }

    let botonNormal = document.getElementById("botonNormal");
    if (botonNormal) {
        botonNormal.addEventListener("click", mostrarMensaje);
    } else {
        console.error("No se encontró el botón normal");
    }

    // Variables para color y grosor
    let color = document.getElementById("color").value;
    let grosor = document.getElementById("grosor").value;

    // Detectar cambio de color
    document.getElementById("color").addEventListener("input", function() {
        color = this.value; // Actualizamos el color
    });

    // Detectar cambio de grosor
    document.getElementById("grosor").addEventListener("input", function() {
        grosor = this.value; // Actualizamos el grosor
    });

    const canvas = document.getElementById("lienzo");
    const ctx = canvas.getContext("2d");
    let dibujando = false;

    // Iniciar el dibujo
    canvas.addEventListener("mousedown", (e) => {
        dibujando = true;
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    });

    // Dibujar mientras se mueve el mouse
    canvas.addEventListener("mousemove", (e) => {
        if (dibujando) {
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.strokeStyle = color; // Usamos el color actualizado
            ctx.lineWidth = grosor; // Usamos el grosor actualizado
            ctx.lineCap = "round";
            ctx.stroke();
        }
    });

    // Dejar de dibujar
    canvas.addEventListener("mouseup", () => {
        dibujando = false;
    });

    // Botón para borrar
    document.getElementById("borrar").addEventListener("click", () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    // Botón para guardar el dibujo
    document.getElementById("guardar").addEventListener("click", () => {
        let enlace = document.createElement("a");
        enlace.href = canvas.toDataURL("image/png");
        enlace.download = "dibujo.png";
        enlace.click();
    });

    // Actualizar cuenta regresiva
    function actualizarCuentaRegresiva() {
        let fechaObjetivo = new Date("September 5, 2025 00:00:00").getTime();
        let ahora = new Date().getTime();
        let diferencia = fechaObjetivo - ahora;

        if (diferencia > 0) {
            let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
            let horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
            let segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

            document.getElementById("cuentaRegresiva").innerHTML =
                `⏳ There are ${dias} days, ${horas} hours, ${minutos} minutes and ${segundos} seconds until September 5th!`;
        } else {
            document.getElementById("cuentaRegresiva").innerHTML = "🎉 ¡Llegó el 5 de septiembre!";
        }
    }

    setInterval(actualizarCuentaRegresiva, 1000);

    // Modo oscuro/claro
    document.getElementById("modoBoton").addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        // Cambiar el texto y el ícono del botón
        if (document.body.classList.contains("dark-mode")) {
            this.innerHTML = "☀️ Modo Claro";
        } else {
            this.innerHTML = "🌙 Modo Oscuro";
        }
    });
};





