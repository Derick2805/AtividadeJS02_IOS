function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 11);
}

function jogoDeAdivinhacao() {
    const numeroSorteado = gerarNumeroAleatorio();
    let tentativas = 0;

    function tentarNovamente() {
        let chute = prompt("Digite um número de 0 a 10:");


        if (chute === null || isNaN(chute)) {
            alert("Por favor, digite um número válido de 0 a 10.");
            tentarNovamente();
            return;
        }

        chute = parseInt(chute);

        if (chute < 0 || chute > 10) {
            alert("Por favor, digite um número dentro do intervalo de 0 a 10.");
            tentarNovamente();
            return;
        }

        // Verifica se o usuário acertou
        if (chute === numeroSorteado) {
            alert(`Parabéns, você acertou! O número sorteado era ${numeroSorteado}. Você acertou em ${tentativas + 1} tentativa(s).`);
        } else {
            tentativas++;
            alert("Tente novamente.");
            tentarNovamente();
        }
    }
    tentarNovamente();
}

