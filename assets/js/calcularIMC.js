function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const idade = parseFloat(document.getElementById('idade').value);

    if (isNaN(peso) || isNaN(altura) || isNaN(idade) || peso <= 0 || altura <= 0 || idade <= 0) {
        alert("Valores Inválidos. Digite Novamente!");
        return;
    }

    const imc = peso / (altura * altura);
    let categoria;
    let grauComorbidade;

    if (imc < 18.5) {
        categoria = "Baixo Peso";
        grauComorbidade = "Baixo";
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = "Normal";
        grauComorbidade = "Normal";
    } else if (imc >= 25 && imc < 29.9) {
        categoria = "Sobrepeso";
        grauComorbidade = "Aumentado";
    } else if (imc >= 30 && imc < 34.9) {
        categoria = "Obesidade";
        grauComorbidade = "Moderado";
    } else if (imc >= 35 && imc < 39.9) {
        categoria = "Obesidade Mórbida";
        grauComorbidade = "Grave";
    } else {
        categoria = "Obesidade Mórbida II";
        grauComorbidade = "Muito Grave";
    }
    
    window.location.href = "ResultadoIMC.html?imc=" + imc.toFixed(2) + "&categoria=" + categoria + "&grauComorbidade=" + grauComorbidade + "&idade=" + idade;
}