function calculatePercentages() {
    // Definindo os valores de faturamento
    const faturamento = {
        'SP': 67836.43,
        'RJ': 36678.66,
        'MG': 29229.88,
        'ES': 27165.48,
        'Outros': 19849.53
    };

    // Calculando o valor total
    const totalFaturamento = Object.values(faturamento).reduce((acc, val) => acc + val, 0);

    // Calculando o percentual de representação de cada estado
    const percentuais = Object.entries(faturamento).map(([estado, valor]) => {
        const percentual = (valor / totalFaturamento * 100).toFixed(2);
        return `${estado}: ${percentual}%`;
    });

    // Exibindo o resultado
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Percentual de representação de cada estado:\n${percentuais.join('\n')}`;
}