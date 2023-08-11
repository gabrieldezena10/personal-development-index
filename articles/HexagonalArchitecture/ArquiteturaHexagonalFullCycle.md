# Arquitetura Hexagonal - Vídeo

Separation of technical complexity and business rules complexity;

## Project Cycle

In this text, the author discusses the evolution of software architecture and the challenges that arise as systems grow and evolve. The primary focus is on the importance of sustainable software development and the concept of hexagonal architecture, also known as ports and adapters.
- Sustainable growth;
- Software needs to be paid off along the time;
- Software must be strucured by you and not by your framework;
- Pieces needs to fit and eventualy be replaced.

### 1. The Importance of Software Architecture

Software architecture is crucial for achieving sustainable growth and maintaining software quality over time. The author emphasizes that software should be designed to evolve and improve gradually without accumulating technical debt. The ultimate goal is to create software that adds value and pays off for the organization over its lifetime.

### Avoiding Framework-Centric Thinking

The text highlights the issue of becoming overly dependent on frameworks when developing software. While frameworks are useful tools, they should not dictate the entire software design. The complexity of the business problem should be separated from the technical complexity introduced by a framework.

### Designing for Change and Modularity

Effective software architecture aims to create a modular system that can adapt to changes without causing extensive rework. The analogy of building with Lego bricks is used to emphasize the importance of creating well-designed, interchangeable components.

### Software Architecture for the Future

The author stresses that architectural decisions are made with the future of the software in mind. While CRUD (Create, Read, Update, Delete) operations are common, software architecture goes beyond these basic functions. It involves solving complex business problems, and architecture should be designed accordingly.

### 2. The Evolution of Software Development

The text presents a hypothetical software development scenario that goes through various phases, from initial development to adopting new technologies and architectures:

- Initial development with basic features, validation, and authentication.
- Adding business rules, APIs, and authorization.
- Scaling the software vertically and horizontally.
- Implementing caching, working with external APIs, and addressing scalability issues.
- Introducing containerization, CI/CD, and scaling challenges.
- Incorporating GraphQL and microservices architecture.
- Dealing with inconsistencies, performance, and Kubernetes adoption.
- Challenges with resilience, messaging queues, and consulting.
- The final stage and the continued complexity.

### Challenges and Lessons Learned

The author illustrates how software can become increasingly complex and challenging to maintain as it evolves. Various factors contribute to these challenges, including changing technologies, shifting requirements, and architectural decisions. The key takeaway is the importance of designing a sustainable architecture that considers future growth and changes.
- Future vision;
- Well-defined bounderies;
- Exchange and addition of components;
- Scalability;
- Frequent optimizations;
- Preparing for changes;

---

## Architecture and Design: Distinct or Interrelated?

In this text, the author delves into the debate over whether software architecture and design are separate concepts or intertwined. The central question posed is whether architecture and design in software development are distinct entities or essentially the same thing. The author shares a paragraph from Elemar Jr., a well-known figure in the community and a Microsoft MVP, which succinctly outlines the relationship:

> "Activities related to software architecture are always about design. However, not all design activities are about architecture. The primary goal of software architecture is to ensure that quality attributes, high-level constraints, and business objectives are met by the system. Any design decision unrelated to this goal isn't an architectural decision. Design decisions for a component that aren't 'visible' outside it usually aren't architectural either."

The text then embarks on a reflection, aligning with Elemar's view that architecture and design are distinct entities. Architecture is positioned at a higher level than design, wherein design operates within the framework of architecture. The author explains how architectural decisions can sometimes lead to design decisions, emphasizing that architecture tends to indirectly influence design choices. A practical example illustrates this: envisioning a high-level requirement for a logging system. The architectural vision involves distributing logs, and design decisions follow, including how logs are outputted to the terminal rather than being saved as files.

The distinction between architecture and design is further emphasized. Although architectural discussions often encompass design, not all design discussions concern architecture. A classic example of software design rules, like SOLID principles, is presented, emphasizing their micro-level nature compared to broader architectural considerations.

While design decisions can occasionally impact architectural choices, they don't always overlap. Architecture deals with broader software quality and business objectives, whereas design focuses on how software mechanics fulfill those objectives.

The concluding message reinforces the separation between architecture and design. Not all design choices influence architecture, and vice versa. The author emphasizes that placing design and architecture in the same category might not be appropriate. Architectural decisions are usually more abstract, while design encompasses practical implementation choices.

In summary, the author asserts that architecture and design are distinct yet interrelated aspects of software development. The exploration of these concepts sets the stage for the upcoming discussion on hexagonal architecture.

### Arquitetura vs Design
O design de software refere-se às decisões e detalhes específicos relacionados à implementação de componentes e funcionalidades do software. Isso envolve escolhas como a estrutura interna das classes, métodos, nomeação de variáveis, padrões de codificação, entre outros. O design está mais focado nos aspectos práticos e técnicos da construção do software.
**Exemplo:**
Imagine que você está construindo um sistema de gerenciamento de tarefas. No nível de design de software, você decide como implementar a funcionalidade de adicionar uma nova tarefa. Você escolhe como a classe Task será estruturada, quais métodos ela terá (como adicionarTarefa()), como as informações da tarefa serão armazenadas e manipuladas dentro da classe, e qual será o formato do objeto de tarefa.

A arquitetura de software, por outro lado, trata-se das decisões de alto nível que moldam a estrutura geral e a organização do sistema. Isso inclui definir a divisão em módulos, as interações entre eles, as responsabilidades de cada componente e as diretrizes que garantem a qualidade, escalabilidade e atendimento aos objetivos do negócio. A arquitetura lida com as decisões mais amplas e estratégicas que guiam o desenvolvimento do software.
**Exemplo:**
Agora, no nível de arquitetura de software, você está definindo a estrutura geral do sistema. Você decide que o sistema será dividido em três camadas: Interface do Usuário, Lógica de Negócios e Armazenamento de Dados. Você determina como essas camadas se comunicarão entre si, talvez usando um padrão de arquitetura como a Arquitetura Hexagonal. Além disso, você estabelece que as tarefas serão armazenadas em um banco de dados relacional e que o sistema deve ser escalável para lidar com um grande número de usuários simultâneos.

Em resumo, o design de software se concentra nos detalhes e na implementação de partes específicas do sistema, enquanto a arquitetura de software trata das decisões de alto nível que moldam a estrutura e organização geral do software. Ambos são importantes e interdependentes, mas operam em diferentes níveis de abstração e escopo.
