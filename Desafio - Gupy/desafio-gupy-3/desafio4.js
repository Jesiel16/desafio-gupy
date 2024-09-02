async function fetchFaturamentoData() {
    try {
        const response = await fetch('faturamento.json');
        if (!response.ok) throw new Error('Erro ao carregar o arquivo JSON');
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

function calculateFaturamento() {
    fetchFaturamentoData().then(faturamentos => {
        if (faturamentos.length === 0) {
            document.getElementById('result').textContent = 'Não foi possível carregar os dados de faturamento.';
            return;
        }

        const valores = faturamentos
            .map(item => item.faturamento)
            .filter(f => f > 0);

        if (valores.length === 0) {
            document.getElementById('result').textContent = 'Não há dados de faturamento para calcular.';
            return;
        }

        const minFaturamento = Math.min(...valores);
        const maxFaturamento = Math.max(...valores);

        const totalFaturamento = valores.reduce((acc, val) => acc + val, 0);
        const mediaFaturamento = totalFaturamento / valores.length;

        const diasAcimaMedia = valores.filter(val => val > mediaFaturamento).length;

        const result = `
            Menor valor de faturamento: R$ ${minFaturamento.toFixed(2)}\n
            Maior valor de faturamento: R$ ${maxFaturamento.toFixed(2)}\n
            Número de dias com faturamento acima da média: ${diasAcimaMedia}
        `;

        document.getElementById('result').textContent = result;
    });
}