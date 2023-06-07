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
1. Organização
2. Objetividade
3. Previsibilidade
4. Gerenciamento do processo de testes

O planejamento de testes tem como obstáculos:
1. O perfil do elaborador de  testes ou de quem planejará os testes
2. A limitação do prazo força uma limitação do escopo
3. A fragilidade dos requerimentos de testes pode implicar a redefinição de metas de teste


### Problemas do Planejamento de Testes
1. Indefinição dos requerimentos
2. Prazo apertado
3. Planejamento falho por fraco conhecimento de testes ou pouco conhecimento do negócio
4. Planejamento pouco abrangente
5. Planejamento com baixo acoplamento com os requisitos por estes estarem errados ou mudando constantemente de forma radical
6. Planejamento de risco alto onde os requisitos a serem testados são por demais estratégicos, tendo também um alto risco associado. Neste caso, qualquer bug descoberto será de alta prioridade

## 4. Entendendo os Testes Funcionais

### Visão Intermediária

Os testes funcionais tem como objetivo testar as funções de software ou de um componente de sotware. Ele é o tipo de teste que visa medir a qualidade funcional de componentes de um sistema.
