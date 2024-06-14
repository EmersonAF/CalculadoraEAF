function calcularPlanosA() {
    const urlParams = new URLSearchParams(window.location.search);
    const imc = parseFloat(urlParams.get('imc'));
    const idade = parseInt(urlParams.get('idade'));

    if (isNaN(imc) || isNaN(idade) || imc <= 0 || idade <= 0) {
        alert("Valores inválidos. Tente novamente!");
        return null;
    }

    const planoBasico = 100 + (idade * 10 * (imc / 10));
    const planoStandard = (150 + (idade * 15)) * (imc / 10);
    const planoPremium = (200 - (imc * 10) + (idade * 20)) * (imc / 10);

    return {
        planoBasico: planoBasico.toFixed(2),
        planoStandard: planoStandard.toFixed(2),
        planoPremium: planoPremium.toFixed(2)
    };
}

function calcularFatorDeComorbidade(imc) {
    if (imc < 18.5) {
        return 10;
    } else if (imc >= 18.5 && imc < 24.9) {
        return 1;
    } else if (imc >= 25 && imc < 29.9) {
        return 6;
    } else if (imc >= 30 && imc < 34.9) {
        return 10;
    } else if (imc >= 35 && imc < 39.9) {
        return 20;
    } else {
        return 30;
    }
}

function calcularPlanosB() {
    const urlParams = new URLSearchParams(window.location.search);
    const imc = parseFloat(urlParams.get('imc'));
    const idade = parseInt(urlParams.get('idade'));

    if (isNaN(imc) || isNaN(idade) || imc <= 0 || idade <= 0) {
        alert("Valores inválidos. Tente novamente!");
        return null;
    }

    const fatorDeComorbidade = calcularFatorDeComorbidade(imc);

    const planoBasico = 100 + (fatorDeComorbidade * 10 * (imc / 10));
    const planoStandard = (150 + (fatorDeComorbidade * 15)) * (imc / 10);
    const planoPremium = (200 - (imc * 10) + (fatorDeComorbidade * 20)) * (imc / 10);

    return {
        planoBasico: planoBasico.toFixed(2),
        planoStandard: planoStandard.toFixed(2),
        planoPremium: planoPremium.toFixed(2)
    };
}

document.addEventListener('DOMContentLoaded', function() {
    const resultadoA = calcularPlanosA();
    const resultadoB = calcularPlanosB();

    const resultadoPlanosAElement = document.getElementById('resultadoPlanosA');
    if (resultadoPlanosAElement && resultadoA) {
        resultadoPlanosAElement.innerHTML = `
            <p>Resultados dos Planos A:</p>
            <p>Plano Básico A: R$ ${resultadoA.planoBasico}</p>
            <p>Plano Standard A: R$ ${resultadoA.planoStandard}</p>
            <p>Plano Premium A: R$ ${resultadoA.planoPremium}</p>
        `;
    }

    const resultadoPlanosBElement = document.getElementById('resultadoPlanosB');
    if (resultadoPlanosBElement && resultadoB) {
        resultadoPlanosBElement.innerHTML = `
            <p>Resultados dos Planos B:</p>
            <p>Plano Básico B: R$ ${resultadoB.planoBasico}</p>
            <p>Plano Standard B: R$ ${resultadoB.planoStandard}</p>
            <p>Plano Premium B: R$ ${resultadoB.planoPremium}</p>
        `;
    }

    if (resultadoA && resultadoB) {
        setTimeout(() => {
            compararPlanos(resultadoA, resultadoB);
        }, 100); 
    }
});

function compararPlanos(planosA, planosB) {
    const totalA = parseFloat(planosA.planoBasico) + parseFloat(planosA.planoStandard) + parseFloat(planosA.planoPremium);
    const totalB = parseFloat(planosB.planoBasico) + parseFloat(planosB.planoStandard) + parseFloat(planosB.planoPremium);

    if (totalA < totalB) {
        alert('Os planos A são mais vantajosos no total.');
    } else if (totalB < totalA) {
        alert('Os planos B são mais vantajosos no total.');
    } else {
        alert('Os planos A e B têm o mesmo custo total.');
    }
}