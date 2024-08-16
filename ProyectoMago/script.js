// Define la función preguntar que se ejecutará cuando sea llamada
function preguntar() {
    // Obtiene el elemento con id 'preguntaEntrada' del DOM y lo asigna a la variable 'pregunta'
    var pregunta = document.getElementById('preguntaEntrada');
    
    // Obtiene el elemento con id 'respuesta' del DOM y lo asigna a la variable 'respuesta'
    let respuesta = document.getElementById('respuesta');
    
    // Obtiene el texto del elemento 'pregunta', elimina espacios en blanco al principio y al final, y lo asigna a 'preguntaTexto'
    var preguntaTexto = pregunta.value.trim();
    
    // Verifica si el texto de la pregunta está vacío
    if (preguntaTexto.length === 0) {
        // Muestra una alerta si no se ha escrito ninguna pregunta
        alert("DALEee... escribi una pregunta...");
        // Sale de la función sin hacer nada más
        return;
    }

    // Define un array de posibles respuestas
    var respuestas = [
        "Si.",
        "No.",
        "Puede Ser.",
        "Probablemente no.",
        "Probablemente si.",
        "Definitivamente no.",
        "Definitivamente si.",
        "No te voy a decir.",
        "Aaah te haces el vivo.",
        "No jodas.",
        "Put0 el q pregunta.",
        "Hola mundo!."
    ];

    // Muestra un mensaje de espera en el elemento 'respuesta'
    respuesta.textContent = "Estoy Pensando...";

    // Establece un retraso de 1300 milisegundos antes de ejecutar la función dentro de setTimeout
    setTimeout(function () {
        // Genera un índice aleatorio dentro del rango del array 'respuestas'
        var randomIndex = Math.floor(Math.random() * respuestas.length);
        
        // Selecciona una respuesta aleatoria del array utilizando el índice generado
        var randomRespuesta = respuestas[randomIndex];
        
        // Actualiza el texto del elemento 'respuesta' con la respuesta aleatoria seleccionada
        respuesta.textContent = randomRespuesta;
        
        // Devuelve el enfoque al campo de entrada de la pregunta para que el usuario pueda escribir otra pregunta si lo desea
        pregunta.focus();
    }, 1300); // El tiempo de espera en milisegundos (1300 ms)
}
