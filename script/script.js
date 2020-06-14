
document
    .querySelector("button.fat") // Buscanto do botão da class fat
    .addEventListener("click", function () {
        document
            .querySelector("#footer") // Função para fazer sumir e aprecer o Footer
            .classList
            .toggle("hide")
    }) // Gerando um ouvidor de eventos "gatilho" apos o clique.