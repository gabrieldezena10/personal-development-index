# Testes Funcionais de Software

## 2.2 Conceitos Básicos de Testes de Software 

- **Plano de testes**: Representa a composição de requisitos de testes, caso de de testes, cenários de teste a serem utilizados.
- **Requisito de Teste**: são requisitos específicos de teste. Um requisito de teste deve gerar um ou mais casos de teste.
- **Metodologia de Teste**: é um conjunto de técnicas, métodos e estratégias que se volta para a criação d/ou execução de um "sistema" qualquer, que em geral pode ser um ou mais produtos.
- **Script de Teste**: é um conjunto de açõs ou passos que são executados em uma ferramenta de automação de execução de testes automatizados.
- **Cenário de teste**: é um conjunto de casos de teste, ou scripts, a serem executados em uma ordem qualquer com intuito de caracterizar uma grande situação de teste.
- **Metodologia de teste**: é um conjunto de técnicas, métodos e estratégias que se volta para a criação e/ou execução de um "sistema" qualquer, podendo ser um ou mais serviços.


## 2.3 Principais Tipos de Teste

- *Testes Funcionais*: Mostra se a aplicação funciona corretamente ou não em tudo aquilo que ela se propõe a atender em termos de funcionalidade. O teste funcional, ou de caixa-preta, é baseado nos requisitos funcionais do software. Esta técnica não está preocupada com o comportamento interno do sistema durante a execução do teste, mas sim com a saída gerada após a entrada dos dados especificados.


- *Testes de Performance*: É qualquer tipo de teste que tenha como foco a análise de performance de um sistema. Consiste em simular, num ambiente controlado e monitorado, um volume de transações ou usuários simultâneos, a fim de verificar como as aplicações, serviços, servidores, gateways e demais componentes da infraestrutura irão se comportar e se atenderão aos requisitos de desempenho definidos.


- *Testes de Usabilidade*: É uma técnica de pesquisa utilizada para avaliar um produto ou serviço. Os testes são realizados com usuários representativos do público-alvo. Cada participante tenta realizar tarefas típicas enquanto o analista observa, ouve e anota.”


- *Testes de Unidade*: Um teste de unidade é um tipo de teste automatizado que verifica uma parte específica de um código de maneira rápida e isolada. O objetivo de um teste de unidade é garantir que o código esteja funcionando corretamente e que esteja fazendo o que é esperado dele.

- *Testes de Integração*: É quando os módulos (unidades de código) são testados em grupo para garantir que não haja nenhuma quebra naquilo que foi feito unitariamente e naquilo que está sendo integrado junto, **visando garantir que um ou mais componentes combinados funcionam corretamente**. O cenário ideal é que sejam feitos testes de unidades primeiro e, depois disso, seja feito o teste de integração que busca compreender se os módulos funcionarão juntos. 

- *Testes de UAT(Aceitação do Usuário)*:  é a última fase do processo de teste de software. Durante o UAT, os usuários reais do software testam o software para garantir que ele possa lidar com as tarefas necessárias em cenários do mundo real, de acordo com as especificações. O UAT é um dos procedimentos finais e mais críticos do projeto de software que deve ocorrer antes que o software recém-desenvolvido seja lançado no mercado.O UAT também é conhecido como teste beta, teste de aplicativo ou teste do usuário final.

- *Testes de Regressão*: É normalmente um tipo de teste de software usado para confirmar que o programa mais recente ou as alterações relacionadas ao código não afetaram os recursos existentes de maneira adversa. Durante o teste de regressão, é determinado que o software ou aplicativo funciona bem em relação às novas alterações e correções de bugs. O teste de regressão trata principalmente da reexecução dos casos de teste já executados para confirmar se o aplicativo está funcionando adequadamente.

- *Testes de Aplicação Web*: São testes realizados em ambiente Web e, em aplicações web.

### Importância Estratégica de Testes Funcionais ####

O teste funcional é realizado, principalmente, olhando o software apenas através de suas interfaces, testando, portanto, suas funcionalidades. Em termos gerais, testa as funcionalidades presentes na documentação, verificando se funcionam ou não como especificado.
Incluem-se as regras de negócio, requisitos e tudo mais que se caracterizar como necessidade funcional.
Tudo aquilo que uma aplicação se propõe a realizar, em termos de caracterísitcas funcionais, deve ser validado e verificado via testes funcionais.


## Planejamento de Testes

- Importância estratégica do Planejamento de Testes

1. Preparação: Garantir de forma coerente que todos os itens e aspectos necessários para executar um plano de testes estejam considerados.
2. Comunicação e Treinamento: Treinar quem preisa realmente realizar os testes.
3. Eficiência: Prover um mecanismo que permita perceber de forma clara as necessidades dos testes e as limitações com as devidas justificativas.
4. Prudência legal e bom senso: Referente a normas e regras que precisam ser respeitadas de acordo com a emrpesa.

### Verdades do Planejamento de testes

O planejamento de testes facilita/melhora a:
1. Organização;
2. Objetividade;
3. Previsibilidade;
4. Gerenciamento do processo de testes.

O planejamento de testes tem como obstáculos:
1. O perfil do elaborador de  testes ou de quem planejará os testes;
2. A limitação do prazo força uma limitação do escopo;
3. A fragilidade dos requerimentos de testes pode implicar a redefinição de metas de teste.


### Problemas do Planejamento de Testes
1. Indefinição dos requerimentos;
2. Prazo apertado;
3. Planejamento falho por fraco conhecimento de testes ou pouco conhecimento do negócio;
4. Planejamento pouco abrangente;
5. Planejamento com baixo acoplamento com os requisitos por estes estarem errados ou mudando constantemente de forma radical;
6. Planejamento de risco alto onde os requisitos a serem testados são por demais estratégicos, tendo também um alto risco associado. Neste caso, qualquer bug descoberto será de alta prioridade.

## 4. Entendendo os Testes Funcionais

### Visão Intermediária

Os testes funcionais tem como objetivo testar as funções de software ou de um componente de sotware. Ele é o tipo de teste que visa medir a qualidade funcional de componentes de um sistema.

- Como elaborar os testes?
Executar cada caso ou função e seus fluxox de uso, mediante a elaboração de casos e cenários de teste, utilizando dados válidos e inválidos para verificar se os resultados esperandos (comportamento e resposta de aplicação) ocorrem quando dados válidos (e inválidos) são usados. Deve-se verificar se as mensagens de erro apropriadas são indicadas quando dados ou ações inválidas são usados. Portanto, deve-se verificar se cada regra de negócio é corretamente aplicada.

### Importância de Testes Funcionais

Um sistema não testado corretamente, quando dá problemas em função do que foi projetado para funcionar, prejudica todas as partes envolvidas (tanto quem financiou o sistema, como quem o desenvolveu ou quem o testou).

Em um processo você define fases/etapas, responsabilidades, papéis, ações permitidas e não permitidas, produtos de entrada e saída, etc. Definir um processo é um trabalho puro e simples de LÓGICA.

Em qualidade de software usamos lógica de forma indireta (ou subjetiva) em:
- Levantamento e mapeamento de requisitos;
- Definição de cenários de teste e de casos de teste;
- Definição de processos que suportam as gerências de requisitos, testes e gerẽncia de configuração;
- Definição das ações dos itens de configuração suportados por um objeto;

#### Lógica Dedutiva
Se começarmos com um argumento válido, então, independente das premissas que forem acrescentadas, teremos um fim ou conclusão válida.

#### Lógica Indutiva
Se começarmos com um argumento forte ou válido, o mesmo pode se tornar inválido ou fraco a medida em que acrescentarmos premissas fracas.

**Criar casos de teste trabalha com dedução, detalhamento e entendimento, portanto com lógica.**

## 5. Como escrever Requisitos e Casos de Testes

### 5.2 Como levantar e escrever requisitos de testes

Existe uma diferença entre requisitos e casos de teste, isso depende diretamente do do grau de profundidade do plano de teste gerado.

1. De onde levantar os requisitos de teste
De documentos formais, especificações de usuários, necessidades de sistema, casos de uso (se estiver usando UML - Unified Modeling Language, ou Linguagem Unificada de Modelagem é, como o nome indica, uma linguagem de notação utilizada para modelar e documentar as diversas fases do desenvolvimento de sistemas orientados a objetos ), etc.

2. Como escrever requisitos de testes?
Ele deve ser escrito de forma clara, simples e objetiva. Ex: Teste de login de sistema, Teste de consulta XYZ, Teste de defeitos, Teste do defeito ABC123, Teste de inclusão de usuário

Quanto mais eu detalho um requisito, mais eu me aproximo dos casos de testes. Em termos formais, a estrutura de requisito de teste é composta pelas seguitnes informações:
**- Identificação do requisito de teste:** É um número ou identificador único do requisito de teste;
**- Descrição:** Resumido e detalhado;
**- Status:** É a posição atual no ciclo de vida de um requisito de teste (ex: criado, atualizado, finalizado, aprovado, implementado, fechado, etc);
**- Relacionamento e dependências:** Relacionamentos e dependências para com requisitos e casos de teste;

