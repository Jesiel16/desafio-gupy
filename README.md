# Desafio - Estágio ⌛

## Realizando o primeiro desafio do Estágio São Paulo:

#### Desafio Cálculo: 
O objetivo deste desafio é entender e calcular o valor final da variável SOMA após a execução de um trecho de código fornecido. O código envolve um loop que itera e acumula valores em uma variável de soma.

##### Trecho de código fornecido:

```java
int INDICE = 13, SOMA = 0, K = 0;
while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}
System.out.println(SOMA);
```

### Explicação do código:
Variáveis Iniciais:

* INDICE é definido como 13.
* SOMA é definido como 0.
* K é definido como 0.
* Loop while: O loop executa enquanto a condição K < INDICE é verdadeira.

* Dentro do loop, K é incrementado em 1 a cada iteração.
* SOMA é atualizado adicionando o valor de K a cada iteração.
* Saída: Após o loop terminar, o valor de SOMA é impresso.

### Execução do código

- `INDICE = 13`
- `SOMA = 0`
- `K = 0`

## Execução do Loop

#### Primeira Iteração:
- `K = 1`
- `SOMA = 1`

#### Segunda Iteração:
- `K = 2`
- `SOMA = 3`

#### Terceira Iteração:
- `K = 3`
- `SOMA = 6`

#### Quarta Iteração:
- `K = 4`
- `SOMA = 10`

#### Quinta Iteração:
- `K = 5`
- `SOMA = 15`

#### Sexta Iteração:
- `K = 6`
- `SOMA = 21`

#### Sétima Iteração:
- `K = 7`
- `SOMA = 28`

#### Oitava Iteração:
- `K = 8`
- `SOMA = 36`

#### Nona Iteração:
- `K = 9`
- `SOMA = 45`

#### Décima Iteração:
- `K = 10`
- `SOMA = 55`

#### Décima Primeira Iteração:
- `K = 11`
- `SOMA = 66`

#### Décima Segunda Iteração:
- `K = 12`
- `SOMA = 78`

#### Décima Terceira Iteração:
- `K = 13`
- `SOMA = 91`

### Saída Final

Após o loop terminar, `SOMA` tem o valor de `91`.

__________________________________________________________________________________________________________________________________________________________________________________________

## Resolvendo segundo desafio de código - Estágio São Paulo


## Desafio: Verificação de Pertinência à Sequência de Fibonacci

**Objetivo:** Verificar se um número informado pertence à sequência de Fibonacci.

### Código

```java
import java.util.Scanner;

public class FibonacciCheck {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Informe um número: ");
        int number = scanner.nextInt();
        scanner.close();

        if (isFibonacci(number)) {
            System.out.println(number + " pertence à sequência de Fibonacci.");
        } else {
            System.out.println(number + " não pertence à sequência de Fibonacci.");
        }
    }

    private static boolean isFibonacci(int n) {
        int a = 0, b = 1;
        while (a < n) {
            int temp = a;
            a = b;
            b = temp + b;
        }
        return a == n;
    }
```

### Descrição
Este programa verifica se um número informado pelo usuário pertence à sequência de Fibonacci. O código gera a sequência de Fibonacci até o número informado e verifica a presença do número na sequência

__________________________________________________________________________________________________________________________________________________________________________________________

## Resolvendo terceiro desafio de código - Estágio São Paulo

### Desafio: Análise de Faturamento Diário

### Objetivo: 
Calcular o menor e o maior valor de faturamento diário e o número de dias com faturamento superior à média mensal.

#### Código 
```java
public class PercentualEstados {
    public static void main(String[] args) {
        double sp = 67836.43;
        double rj = 36678.66;
        double mg = 29229.88;
        double es = 27165.48;
        double outros = 19849.53;

        double totalFaturamento = sp + rj + mg + es + outros;

        double percentualSp = (sp / totalFaturamento) * 100;
        double percentualRj = (rj / totalFaturamento) * 100;
        double percentualMg = (mg / totalFaturamento) * 100;
        double percentualEs = (es / totalFaturamento) * 100;
        double percentualOutros = (outros / totalFaturamento) * 100;

        System.out.printf("Percentual SP: %.2f%%\n", percentualSp);
        System.out.printf("Percentual RJ: %.2f%%\n", percentualRj);
        System.out.printf("Percentual MG: %.2f%%\n", percentualMg);
        System.out.printf("Percentual ES: %.2f%%\n", percentualEs);
        System.out.printf("Percentual Outros: %.2f%%\n", percentualOutros);
    }
}
```
## Descrição
Este programa lê dados de faturamento diário de um arquivo JSON e calcula o menor e maior valor de faturamento, além do número de dias com faturamento superior à média mensal.

__________________________________________________________________________________________________________________________________________________________________________________________

# Resolvendo o quarto desafio de código - Estágio São Paulo 

## Desafio: Cálculo do Percentual de Representação dos Estados

### Objetivo:
Calcular o percentual de representação de cada estado no faturamento total da distribuidora.

#### código:
```java
public class PercentualEstados {
    public static void main(String[] args) {
        double sp = 67836.43;
        double rj = 36678.66;
        double mg = 29229.88;
        double es = 27165.48;
        double outros = 19849.53;

        double totalFaturamento = sp + rj + mg + es + outros;

        double percentualSp = (sp / totalFaturamento) * 100;
        double percentualRj = (rj / totalFaturamento) * 100;
        double percentualMg = (mg / totalFaturamento) * 100;
        double percentualEs = (es / totalFaturamento) * 100;
        double percentualOutros = (outros / totalFaturamento) * 100;

        System.out.printf("Percentual SP: %.2f%%\n", percentualSp);
        System.out.printf("Percentual RJ: %.2f%%\n", percentualRj);
        System.out.printf("Percentual MG: %.2f%%\n", percentualMg);
        System.out.printf("Percentual ES: %.2f%%\n", percentualEs);
        System.out.printf("Percentual Outros: %.2f%%\n", percentualOutros);
    }
}
```
### Descrição
Este programa calcula o percentual de faturamento de cada estado em relação ao faturamento total da distribuidora.

_________________________________________________________________________________________________________________________________________________________________________________________

# Resolvendo o quinto desafio de código - Estágio São Paulo

## Desafio: Inversão de string 

### Objetivo: 
Inverter os caracteres de uma string sem usar funções prontas como reverse.

#### Código: 
```java
import java.util.Scanner;

public class InverterString {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Informe uma string: ");
        String input = scanner.nextLine();
        scanner.close();

        String reversed = reverseString(input);
        System.out.println("String invertida: " + reversed);
    }

    private static String reverseString(String str) {
        char[] chars = str.toCharArray();
        int left = 0;
        int right = chars.length - 1;

        while (left < right) {
            char temp = chars[left];
            chars[left] = chars[right];
            chars[right] = temp;
            left++;
            right--;
        }

        return new String(chars);
    }
}
```
### Descrição 
Este programa inverte os caracteres de uma string fornecida pelo usuário, sem utilizar funções prontas para reversão de string.

