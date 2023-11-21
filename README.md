# Somador de números divisíveis por 3 ou 5! 🔢

Esta função JavaScript calcula a soma de todos os valores inteiros divisíveis por 3 ou 5 que são menores que o número passado como parâmetro.

## ✍️ Sobre a função

A função `sumDivisibleNumbers` recebe um número inteiro positivo como argumento. Ela gera um array de números de 1 até esse número exclusivo usando `Array.from` e `length: num - 1`.

Depois, é feita uma filtragem no array para selecionar apenas os números divisíveis por 3 ou 5 usando o método `filter`.

Por fim, a função `reduce` é utilizada para calcular a soma dos números filtrados, retornando o valor total.

A implementação segue uma abordagem funcional usando métodos de array para gerar, filtrar e somar os números divisíveis por 3 ou 5 de forma eficiente

## 🚀 Rodando o projeto 

1. **Clone o Repositório:**

   ```bash
   git clone https://github.com/omatheusant/teste-tecnico-escribo
   
(Se preferir, você também pode optar por realizar o download dos arquivos pelo próprio GitHub.)

2. **Abra o Arquivo `sumDivisibleNumbers.js` para Ver a Implementação da função `sumDivisibleNumbers`.**

3. **Testando a função:**

Você pode testar a função da seguinte maneira:

```javascript
const result = sumDivisibleNumbers(10);
console.log(result); // Saída esperada: 23
```

Lembre-se de alterar o número `10` por outros valores para testar diferentes casos.

## 📄 Licença

Este projeto está licenciado sob a MIT License

