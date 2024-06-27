let codigoPromocional = prompt("Informe o código promocional:");

let valorOriginal = 100; 
let valorComDesconto;

// Códigos promocionais (DESC1, DESC2, DESC3, DESC4 ou DESC5)

switch (codigoPromocional) {
    case "DESC1":
        valorComDesconto = valorOriginal * 0.95; 
        break;
    case "DESC2":
        valorComDesconto = valorOriginal * 0.90; 
        break;
    case "DESC3":
        valorComDesconto = valorOriginal * 0.85; 
        break;
    case "DESC4":
        valorComDesconto = valorOriginal * 0.80; 
        break;
    case "DESC5":
        valorComDesconto = valorOriginal * 0.75; 
        break;
    default:
      
        alert("Erro: Esse desconto n existe seu merda");
        break;
}

if (valorComDesconto !== undefined) {
    alert(`Valor original da paçoca do gustavo: R$ ${valorOriginal.toFixed(2)}\nValor com desconto: R$ ${valorComDesconto.toFixed(2)}`);
}
