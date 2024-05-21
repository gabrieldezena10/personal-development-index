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
As classes e os objetos devem ter nomes substantivos ou sintagmas nominais, como Customer , WikiPage , Account e AddressParser . Evite palavras como Manager , Processor , Data ou Info no nome de uma classe. **O nome de uma classe não deve ser um verbo.**

#### Nomes de métodos
Os métodos devem ter nomes com verbos ou frases verbais, como postPayment , deletePage ou save . Acessores, mutadores e predicados devem ser nomeados de acordo com seu valor e pré-fixados com get , set e é de acordo com o padrão javabean.

```
string name = employee.getName();
customer.setName("mike");
if (paycheck.isPosted())...
```
Quando os construtores estiverem sobrecarregados, use métodos estáticos de fábrica com nomes que descrevam os argumentos. Por exemplo,
```
Complex fulcrumPoint = Complex.FromRealNumber(23.0);
```
é geralmente melhor que: 
```
Complex fulcrumPoint = new Complex(23.0);
```
Considere a possibilidade de impor seu uso tornando os construtores correspondentes privados.

## 3. Funções

A primeira regra das funções é que elas devem ser pequenas. As linhas não devem ter 150 caracteres. As funções não devem ter 100 linhas. As funções quase nunca devem ter 20 linhas.

A razão pela qual escrevemos funções é para decompor um conceito maior (por outras palavras, o nome da função) num conjunto de passos no nível de abstração seguinte.

#### One Level of Abstraction per Function
Para garantir que as nossas funções estão a fazer "uma coisa", temos de garantir que as instruções dentro da nossa função estão todas ao mesmo nível de abstração.

#### Reading Code from Top to Bottom: The Stepdown Rule
Queremos que o código seja lido como uma narrativa de cima para baixo. Queremos que cada função seja seguida pelas funções do nível seguinte de abstração, para que possamos ler o programa, descendo um nível de abstração de cada vez, à medida que vamos lendo a lista de funções. Chamo a isto a regra do "step-down".

#### Switch Statements
É difícil fazer uma declaração switch pequena. Mesmo uma instrução switch com apenas dois casos é maior do que eu gostaria que fosse um único bloco ou função. Também é difícil criar uma instrução switch que faça apenas uma coisa. Por sua natureza, as instruções switch sempre fazem N coisas. Infelizmente, nem sempre podemos evitar instruções switch, mas podemos garantir que cada instrução switch seja enterrada numa classe de baixo nível e nunca seja repetida. Fazemos isso, é claro, com polimorfismo.

Considere a Listagem 3-4. Esta lista mostra apenas uma das operações que podem depender do tipo de empregado.
![image](https://github.com/gabrieldezena10/personal-development-index/assets/86879421/d5b970ac-ccc6-4114-96f5-2a6f0e2d4347)

Há vários problemas com esta função. Em primeiro lugar, é grande e, quando forem acrescentados novos tipos de empregados, irá aumentar. Em segundo lugar, faz claramente mais do que uma coisa.
Em terceiro lugar, viola o Princípio da Responsabilidade Única (SRP) porque há mais do que uma razão para a sua alteração. Quarto, viola o Princípio Aberto e Fechado (OCP) porque tem de mudar sempre quando são adicionados novos tipos. Mas, possivelmente, o pior problema com esta função é o fato de haver um número ilimitado de outras funções que terão a mesma estrutura. Por exemplo, poderíamos ter:
```
isPayday(Employee e, Date date),
```
ou
```
deliverPay(Employee e, Money pay),
```

ou uma série de outros. Todos eles teriam a mesma estrutura deletéria.

A solução para esse problema (consulte a Listagem 3-5) é enterrar a instrução switch no porão de uma ABSTRACT FACTORY e nunca deixar que ninguém a veja. A fábrica usará a instrução switch para criar instâncias apropriadas dos derivados de Employee, e as várias funções, como calculatePay, isPayday e deliverPay, serão despachadas polimorficamente por meio da interface Employee. Minha regra geral para declarações switch é que elas podem ser toleradas se aparecerem apenas uma vez, forem usadas para criar objetos polimórficos e estiverem ocultas por trás de uma relação de herança, de modo que o resto do sistema não possa vê-las.
![image](https://github.com/gabrieldezena10/personal-development-index/assets/86879421/8caec9c7-d7db-4f9c-94f0-02cdb9e6354b)

### Function Arguments
**O número ideal de argumentos para uma função é zero (niládico). Em seguida, vem um (monádico), seguido de perto por dois (diádico). Três argumentos (triádico) devem ser evitados sempre que possível. Mais de três (poliádico) requer uma justificativa muito especial e, de qualquer forma, não deve ser usado.** 

Os argumentos são difíceis. Eles exigem muito poder conceitual. Considere, por exemplo, o StringBuffer do exemplo. Poderíamos tê-lo passado como um argumento em vez de torná-lo uma variável de instância, mas nossos leitores teriam que interpretá-lo cada vez que o vissem. Quando você está lendo a história contada pelo módulo, includeSetupPage() é mais fácil de entender do que includeSetupPageInto(newPageContent). O argumento está em um nível de abstração diferente do nome da função e o obriga a conhecer um detalhe (em outras palavras, StringBuffer) que não é particularmente importante nesse momento.

#### Funções monódicas (com um argumento)
Existem duas razões muito comuns para passar um único argumento para uma função. Você pode estar fazendo uma pergunta sobre esse argumento, como em **boolean fileExists("MeuArquivo")**. Ou você pode estar operando esse argumento, transformando-o em algo diferente e retornando-o. Por exemplo, **InputStream fileOpen("MeuArquivo")** transforma uma **String** de nome de arquivo em um valor de retorno **InputStream**. Esses dois usos são o que os leitores esperam ao ver uma função. Você deve escolher nomes que deixem a distinção clara e sempre usar as duas formas em um contexto consistente. (Veja a *Separação de Comando e Consulta* abaixo.)

Uma forma um tanto menos comum, mas ainda muito útil para uma função de único argumento, é um evento. Nesta forma, há um argumento de entrada, mas nenhum argumento de saída. O programa como um todo é destinado a interpretar a chamada de função como um evento e usar o argumento para alterar o estado do sistema, por exemplo, **void passwordAttemptFailedNtimes(int tentativas)**. Use esta forma com cuidado. Deve ser muito claro para o leitor que este é um evento. Escolha nomes e contextos cuidadosamente.

Tente evitar quaisquer funções monádicas que não sigam essas formas, por exemplo, **void includeSetupPageInto(StringBuffer textoDaPagina)**. Usar um argumento de saída em vez de um valor de retorno para uma transformação é confuso. Se uma função vai transformar seu argumento de entrada, a transformação deve aparecer como o valor de retorno. De fato, **StringBuffer transform(StringBuffer in)** é melhor do que **void transform-(StringBuffer out)**, mesmo que a implementação no primeiro caso simplesmente retorne o argumento de entrada. Pelo menos ainda segue a forma de uma transformação.

### Argumentos de Flag

Argumentos de flag são feios. Passar um booleano para uma função é uma prática verdadeiramente terrível. Isso imediatamente complica a assinatura do método, proclamando em voz alta que esta função faz mais de uma coisa. Ela faz uma coisa se a flag for verdadeira e outra se a flag for falsa! No exemplo do Listagem 3-7, não tivemos escolha porque os chamadores já estavam passando essa flag, e eu queria limitar o escopo da refatoração para a função e abaixo. Ainda assim, a chamada do método **render(true)** é simplesmente confusa para um pobre leitor. Passar o mouse sobre a chamada e ver **render(boolean isSuite)** ajuda um pouco, mas não muito. Deveríamos ter dividido a função em duas: **renderForSuite()** e **renderForSingleTest()**.

### Funções Diádicas (com dois argumentos)

Uma função com dois argumentos é mais difícil de entender do que uma função monádica. Por exemplo, **writeField(name)** é mais fácil de entender do que **writeField(output-Stream, name)**. Embora o significado de ambos seja claro, o primeiro desliza facilmente pelos olhos, depositando facilmente seu significado. O segundo requer uma pequena pausa até aprendermos a ignorar o primeiro parâmetro. E isso, é claro, eventualmente resulta em problemas porque nunca devemos ignorar nenhuma parte do código. As partes que ignoramos são onde os bugs vão se esconder.

Há momentos, é claro, em que dois argumentos são apropriados. Por exemplo, **Point p = new Point(0,0);** é perfeitamente razoável. Pontos cartesianos naturalmente recebem dois argumentos. De fato, ficaríamos muito surpresos em ver **new Point(0)**. No entanto, os dois argumentos neste caso são componentes ordenados de um único valor! Enquanto **outputStream** e **name** não têm nem uma coesão natural, nem uma ordenação natural.

Até funções diádicas óbvias como **assertEquals(esperado, real)** são problemáticas. Quantas vezes você colocou o real onde deveria estar o esperado? Os dois argumentos não têm uma ordenação natural. A ordenação esperada, real é uma convenção que requer prática para aprender.

Díades não são ruins, e certamente você terá que escrevê-las. No entanto, você deve estar ciente de que elas têm um custo e deve aproveitar quais mecanismos podem estar disponíveis para convertê-las em monadas. Por exemplo, você pode tornar o método **writeField** um membro de **outputStream** para que você possa dizer **outputStream.writeField(name)**. Ou você pode tornar o **outputStream** uma variável de membro da classe atual para que não precise passá-lo. Ou você pode extrair uma nova classe como **FieldWriter** que recebe o **outputStream** em seu construtor e tem um método de escrita.

### Triads

Funções que recebem três argumentos são significativamente mais difíceis de entender do que diádicas. As questões de ordenação, pausa e ignorância são mais do que dobradas. Sugiro que você pense muito cuidadosamente antes de criar uma tríade.

Por exemplo, considere a sobrecarga comum do assertEquals que recebe três argumentos: **assertEquals(message, expected, actual)**. Quantas vezes você leu a mensagem e pensou que era o esperado? Já tropecei e pausei sobre essa tríade muitas vezes. Na verdade, toda vez que a vejo, dou uma segunda olhada e depois aprendo a ignorar a mensagem.

Por outro lado, aqui está uma tríade que não é tão insidiosa: **assertEquals(1.0, amount, .001)**. Embora isso ainda exija uma segunda olhada, é uma que vale a pena dar. É sempre bom ser lembrado de que a igualdade de valores de ponto flutuante é uma coisa relativa.

### Objetos de Argumento

Quando uma função parece precisar de mais de dois ou três argumentos, é provável que alguns desses argumentos devam ser envolvidos em uma classe própria. Considere, por exemplo, a diferença entre as duas declarações a seguir:

```java
Circle makeCircle(double x, double y, double radius);
Circle makeCircle(Point center, double radius);
```

Reduzir o número de argumentos criando objetos a partir deles pode parecer trapaça, mas não é. Quando grupos de variáveis são passados juntos, como x e y no exemplo acima, eles provavelmente fazem parte de um conceito que merece um nome próprio.

### DRY - Don't Repeat Yourself - Não Repita a Si Mesmo

A duplicação pode ser a raiz de todos os males no software. Muitos princípios e práticas foram criados com o propósito de controlá-la ou eliminá-la. Considere, por exemplo, que todas as formas normais de banco de dados de Codd servem para eliminar a duplicação de dados. Considere também como a programação orientada a objetos serve para concentrar o código em classes base que de outra forma seriam redundantes. Programação estruturada, Programação Orientada a Aspectos, Programação Orientada a Componentes, todas são, em parte, estratégias para eliminar a duplicação. Parece que desde a invenção da sub-rotina, as inovações no desenvolvimento de software têm sido uma tentativa contínua de eliminar a duplicação de nosso código-fonte.


## 4. Comentários


### Nada pode ser tão útil quanto um comentário bem colocado. Nada pode bagunçar mais um módulo do que comentários dogmáticos frívolos. Nada pode ser tão prejudicial quanto um comentário velho e desleixado que propaga mentiras e desinformação.

Comentários não são como a Lista de Schindler. Eles não são "puro bem". De fato, os comentários são, no máximo, um mal necessário. Se nossas linguagens de programação fossem expressivas o suficiente, ou se tivéssemos o talento para utilizar essas linguagens de forma sutil para expressar nossa intenção, não precisaríamos de comentários muito - talvez nem um pouco.

O uso adequado de comentários é compensar nossa incapacidade de nos expressarmos em código. Note que usei a palavra incapacidade. Eu quis dizer isso. Comentários são sempre falhas. Devemos tê-los porque nem sempre conseguimos descobrir como nos expressar sem eles, mas seu uso não é motivo de comemoração.

Então, quando você se encontrar em uma posição em que precise escrever um comentário, pense sobre isso e veja se não há alguma maneira de virar o jogo e se expressar em código. Toda vez que você se expressar em código, deve se parabenizar. Toda vez que você escrever um comentário, deve fazer uma careta e sentir a falha de sua capacidade de expressão.

Por que estou tão desanimado com comentários? Porque eles mentem. Nem sempre, e não intencionalmente, mas com muita frequência. Quanto mais antigo um comentário é e quanto mais longe ele está do código que descreve, mais provável é que esteja completamente errado. O motivo é simples. Programadores não podem realisticamente mantê-los.

O código muda e evolui. Partes dele se movem daqui para lá. Essas partes se bifurcam, se reproduzem e se reúnem novamente para formar quimeras. Infelizmente, os comentários nem sempre os acompanham - não podem sempre acompanhá-los. E com muita frequência os comentários se separam do código que descrevem e se tornam trechos órfãos de precisão cada vez menor.

### Comentários Não Compensam um Código Ruim

Uma das motivações mais comuns para escrever comentários é o código ruim. Escrevemos um módulo e sabemos que é confuso e desorganizado. Sabemos que é uma bagunça. Então dizemos para nós mesmos: "Ooh, melhor comentar isso!" Não! Você deve limpar isso!

Código claro e expressivo com poucos comentários é muito superior a código bagunçado e complexo com muitos comentários. Em vez de gastar seu tempo escrevendo os comentários que explicam a bagunça que você fez, gaste-o limpando essa bagunça.
