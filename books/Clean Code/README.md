# Clean Code - A handbook of agile software craftsmanship

## 2. Nomes com significado

#### Usar nomes que revelem a intenção

O nome de uma variável, função ou classe deve responder a todas as grandes questões. Ele deve dizer por que ele existe, o que ele faz e como ele é usado. Se um nome requer um comentário, então o nome não revela a sua intenção. 

```
int d; // elapsed time in days
```
O nome d não revela nada. Não evoca um sentido de tempo decorrido, nem de dias. Devemos escolher um nome que especifique o que está a ser medido e a unidade dessa medida:
```
int elapsedTimeInDays;
int daysSinceCreation;
int daysSinceModification;
int fileAgeInDays;
```
A escolha de nomes que revelem a intenção pode facilitar muito a compreensão e a alteração do código. Qual é o objetivo deste código?
```
 public List<int[]> getThem() {
 List<int[]> list1 = new ArrayList<int[]>();
 for (int[] x : theList)
 if (x[0] == 4) 
 list1.add(x);
 return list1;
 }
```
Porque é que é difícil dizer o que este código está a fazer? Não existem expressões complexas.
O espaçamento e a indentação são razoáveis. Há apenas três variáveis e duas constantes mencionadas. Nem sequer há classes sofisticadas ou métodos polimórficos, apenas uma lista de arrays (ou assim parece).
O problema não é a simplicidade do código, mas a implicidade do código (para usar uma frase): o grau em que o contexto não está explícito no próprio código. O código exige implicitamente que saibamos as respostas a perguntas como:

1. Que tipos de coisas estão na Lista?
2. Qual é o significado do subscrito zero de um item naLista?
3. Qual é o significado do valor 4?
4. Como é que eu utilizaria a lista devolvida?

Evitar a desinformação 
As respostas a estas perguntas não estão presentes na amostra de código, mas poderiam estar. Digamos que estamos a trabalhar num jogo de varredura de minas. Descobrimos que o tabuleiro é uma lista de células chamada theList. Vamos mudar o nome para gameBoard.
Cada célula do tabuleiro é representada por uma matriz simples. Descobrimos ainda que o subscrito zero é a localização de um valor de estado e que um valor de estado 4 significa "marcado". Apenas Só dando nomes a estes conceitos podemos melhorar consideravelmente o código:
```
 public List<int[]> getFlaggedCells() {
 List<int[]> flaggedCells = new ArrayList<int[]>();
 for (int[] cell : gameBoard)
 if (cell[STATUS_VALUE] == FLAGGED)
 flaggedCells.add(cell);
 return flaggedCells;
 }
```
Repare que a simplicidade do código não se alterou. Continua a ter exatamente o mesmo número de operadores e constantes, com exatamente o mesmo número de níveis de encaixe. Mas o código
tornou-se muito mais explícito.
Podemos ir mais longe e escrever uma classe simples para células em vez de utilizar uma matriz de ints.
Esta pode incluir uma função que revela a intenção (chamemos-lhe isFlagged) para esconder os números mágicos. O resultado é uma nova versão da função:
```
 public List<Cell> getFlaggedCells() {
 List<Cell> flaggedCells = new ArrayList<Cell>();
 for (Cell cell : gameBoard)
 if (cell.isFlagged())
 flaggedCells.add(cell);
 return flaggedCells;
 }
```
Com estas simples mudanças de nome, não é difícil perceber o que se está a passar. Este é o poder de escolher bons nomes.

#### Evitar a desinformação

Os programadores devem evitar deixar pistas falsas que obscureçam o significado do código. Devemos evitar palavras cujos significados arraigados variem do significado pretendido.

Não se refira a um agrupamento de contas como uma lista de contas, a menos que seja realmente uma lista. A palavra lista significa algo específico para programadores. Se o contentor que contém as contas não for de facto uma lista, pode levar a falsas conclusões. 1 Assim, seria melhor usar accountGroup ou bunchOfAccounts ou simplesmente accounts.

Cuidado com a utilização de nomes que variam pouco. Quanto tempo demora a detetar a diferença subtil entre um XYZControllerForEfficientHandlingOfStrings em um módulo e, em algum lugar um pouco mais distante, XYZControllerForEfficientStorageOfStrings ? As palavras têm formas assustadoramente semelhantes. Escrever conceitos semelhantes de forma semelhante é informação. Utilizar grafias inconsistentes é desinformação.

#### Fazer distinções com sentido

As palavras com ruído são outra distinção sem significado. Imagine que tem uma classe Produto. Se tiver outra classe chamada ProductInfo ou ProductData, os nomes são diferentes sem que tenham um significado diferente.

As palavras muito são redundantes. A palavra variável nunca deve aparecer no nome de uma variável. A palavra table nunca deve aparecer num nome de tabela. Como é que NameString é melhor do que Name? Um Name seria alguma vez um número de ponto flutuante? Se sim, isso quebra uma regra anterior sobre desinformação. Imagine encontrar uma classe chamada Customer e outra chamada CustomerObject . O que você deve entender como a distinção? Qual delas representará o melhor caminho para o histórico de pagamentos de um cliente?

Na ausência de convenções específicas, a variável moneyAmount é indistinguível de money , customerInfo é indistinguível de customer , accountData é indistinguível de account , e theMessage é indistinguível de message . Distinguir os nomes de forma a que o leitor saiba quais são as diferenças.

#### Use nomes pronunciáveis

Exmplo: variável chamada genymdhms (generation date, year, month, day, hour, minute, and second) sendo que a pronúncia fica "gen why emm dee aich emm ess". Observe a difereça que ocorre na refatoração abaixo:
```
class DtaRcrd102 {
private Date genymdhms;
private Date modymdhms;
private final String pszqint = "102";
/* ... */
};
```
para
```
class Customer {
private Date generationTimestamp;
private Date modificationTimestamp;;
private final String recordId = "102";
/* ... */
};
```

#### Utilizar nomes pesquisáveis
Os nomes de uma só letra e as constantes numéricas têm um problema particular que é o facto de não serem não são fáceis de localizar num corpo de texto.
É fácil procurar por MAX_CLASSES_PER_STUDENT , mas o número 7 pode ser mais problemático. As pesquisas podem encontrar o dígito como parte do nomes de arquivos, outras definições de constantes e em várias expressões onde o valor é utilizado com diferentes intenções. É ainda pior quando uma constante é um número longo e alguém pode ter transposto os dígitos, criando assim um bug e, ao mesmo tempo, evitando a busca do programador.

__Evitar codificações__
Se uma variável ou constante puder ser vista ou utilizada em vários locais num corpo de código, é imperativo dar-lhe um nome fácil de pesquisar. Mais uma vez, compare:

```
for (int j=0; j<34; j++) {
s += (t[j]*4)/5;
}
```
para
```
int realDaysPerIdealDay = 4;
const int WORK_DAYS_PER_WEEK = 5;
int sum = 0;
for (int j=0; j < NUMBER_OF_TASKS; j++) {
int realTaskDays = taskEstimate[j] * realDaysPerIdealDay;
int realTaskWeeks = (realdays / WORK_DAYS_PER_WEEK);
sum +=realTaskWeeks;
}
```

Note-se que sum , acima, não é um nome particularmente útil mas, pelo menos, é pesquisável. O código O código intencionalmente nomeado torna a função mais longa, mas considere como será muito mais fácil será encontrar WORK_DAYS_PER_WEEK do que encontrar todos os lugares onde 5 foi usado e filtrar a lista para apenas as instâncias com o significado pretendido.

#### Nomes de classes
As classes e os objetos devem ter nomes substantivos ou sintagmas nominais, como Customer , WikiPage , Account e AddressParser . Evite palavras como Manager , Processor , Data ou Info no nome de uma classe. O nome de uma classe não deve ser um verbo.
