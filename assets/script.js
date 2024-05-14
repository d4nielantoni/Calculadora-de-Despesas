function calcularSaldo() {
    var nome = document.getElementById('nome').value;
    var rendaInput = document.getElementById('renda').value;
    var luzInput = document.getElementById('luz').value;
    var telefoneInput = document.getElementById('telefone').value;
    var aguaInput = document.getElementById('agua').value;
    var transporteInput = document.getElementById('transporte').value;
    var alimentacaoInput = document.getElementById('alimentacao').value;

    if (!nome || !rendaInput || !luzInput || !telefoneInput || !aguaInput || !transporteInput || !alimentacaoInput) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var renda = parseFloat(rendaInput);
    var luz = parseFloat(luzInput);
    var telefone = parseFloat(telefoneInput);
    var agua = parseFloat(aguaInput);
    var transporte = parseFloat(transporteInput);
    var alimentacao = parseFloat(alimentacaoInput);
    
    var totalDespesas = luz + telefone + agua + transporte + alimentacao;
    var saldoRestante = renda - totalDespesas;

    var resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>Olá, ${nome}!</p>
                           <p>Sua renda é de <strong>R$ ${renda.toFixed(2)}</strong>.</p>
                           <p>Suas despesas totais são de <strong>R$ ${totalDespesas.toFixed(2)}</strong>.</p>
                           <p>Seu saldo restante é de <strong> R$ ${saldoRestante.toFixed(2)}</strong>.</p>`;

    var ctx = document.getElementById('graficoBarras').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Luz', 'Água', 'Telefone', 'Transporte', 'Alimentação'],
            datasets: [{
                label: 'Gastos',
                data: [luz, agua, telefone, transporte, alimentacao],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    font: {
                        family: 'Arial, sans-serif'
                    }
                },
                x: {
                    font: {
                        family: 'Arial, sans-serif'
                    }
                }
            }
        }
    });

    var ctx2 = document.getElementById('graficoPizza').getContext('2d');
    var myPieChart = new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: ['Luz', 'Água', 'Telefone', 'Transporte', 'Alimentação'],
            datasets: [{
                label: 'Gastos',
                data: [luz, agua, telefone, transporte, alimentacao],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    display: false
                }
            }
        }
    });
}

function limparCampos() {
    window.location.reload();
   
}