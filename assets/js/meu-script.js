document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const imc = params.get('imc');
    const categoria = params.get('categoria');
    const grauComorbidade = params.get('grauComorbidade');

    document.getElementById('resultado').innerHTML = `
        <p>Seu IMC é: ${imc}</p>
        <p>Categoria: ${categoria}</p>
        <p>Grau de Comorbidade: ${grauComorbidade}</p>
    `;
});


