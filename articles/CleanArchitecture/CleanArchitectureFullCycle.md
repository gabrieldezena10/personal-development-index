# Clean Architecture

## 1.1 Origin of the Clean Architecture
Clean Architecture is a smart way to design software, thought up by Robert C. Martin (also known as Uncle Bob). The main idea is to make sure your code is easy to read and fix. It started as a blog post and grew into a whole book.

People often link Clean Architecture with other ways to design software, like Hexagonal Architecture and Onion Architecture. All of these aim to keep the important parts of the software safe. But Clean Architecture gives very clear instructions while still letting you be flexible in how you do things.

Imagine Clean Architecture as a cake with different layers. Each layer has its own job, and they talk to each other using special rules to keep things simple.

Clean Architecture pays a lot of attention to how people will use the software. It's all about what people want to do with it. They say it's important to write down and plan for these uses in the design, so that when you look at the design, it's really obvious what the software is supposed to do.

If you understand Clean Architecture, you won't be someone who just puts files in folders without knowing why. The book about Clean Architecture is like a treasure trove of useful information that helps you really get how it works.

In the end, Clean Architecture is a really good way to make software. It helps you write code that's easy to understand and fix, and it keeps everything neat and organized.

## 1.2 Important points about Architecture

Architecture is like the blueprint for software. Just as a building needs a clear structure to work well, software needs a well-defined "shape" to function properly.

When the design of software is well thought-out, it's easier to separate the different parts. Each part of the software should have its own place and clear boundaries, kind of like the different levels of a building.

In architecture, it's important that different parts can communicate with each other. It's like how the floors of a building are connected by stairs or elevators.

Having a good architecture plan helps with creating the software. When you know how the parts fit together and their limits, you can develop things faster without messing up the other parts.

The architecture plan also needs to think about how the software will actually be set up (deployed). If the software is designed well from the beginning, it's easier to set up and take into account different situations.

The architecture should also consider what kind of information can be gathered from the software (observability). When it's planned properly, you can easily keep track of what's happening using things like logs.

The architecture plan should work for every step of the software's life: when it's being developed, set up, used, and looked after.

A good architecture should also make it easy to add new things and change stuff later on. It gives you flexibility and helps you avoid making rushed decisions.

In the end, clean architecture is a smart way to make quality software that's easy to develop, set up, use, and take care of. Planning things out right from the start and thinking about every part of the software's life is really important for this to work.

## 1.3 Keep options open

Creating a good software architecture is like having a smart plan that lets you delay decisions and keep your choices open. You do this by setting clear limits for how different parts of the system connect, so that one part doesn't depend directly on another.

The main goals of this plan are to make it easier to handle the system as it grows, help everyone understand how it works, make it simpler to build, take care of, and set up, reduce the overall cost of keeping the system going, and help programmers work faster.

When software isn't planned well, it can be a big expense for companies. They might have to redo a lot of things or even start from scratch. But with good planning, software can last longer and it's easier to update when new technologies come along.

Developers should worry more about the important rules of how the business works and not get too caught up in the technical details. The details should support the rules, not mess them up. You can swap out and replace technical details, like frameworks and databases, but the core of the software is how the business stuff is done.

In a book called "Domain Driven Design" by Eric Evans, he suggests that the trick is to deal with the tough parts of software right at its core. Things like frameworks, databases, and the way you connect to other software are just replaceable pieces that shouldn't mess with how the software actually works.

So, when you're making software, think about the important business rules early on. This gives you more freedom to change things later and stops you from having too many technical problems down the road.

## 1.4 Use Cases

Use cases represent an intention.

- **Use Cases**: Use cases are like the main purposes of the software, and they're easy to understand just by reading the code. Whenever the software does something, it's like an intention or goal, which is a use case. Clean Architecture says it's super important to know what each action of the software means. Also, when you're actually making these use cases, you can wait to decide on details like what kind of database to use, how things get queued, or whether to use REST or GRPC.

- **Single Responsibility Principle (SRP)**: This rule is closely linked to use cases. Even if it seems like a good idea to use the same code for similar things the software does, like putting in or changing data, each use case should be thought of as separate. They stand for different goals. Even if two use cases look the same right now, they might change for different reasons later, which is against the SRP.

- **DRY (Don't Repeat Yourself) vs. Accidental Duplication**: There's a difference between copying things on purpose, which you should try not to do and where the DRY rule helps, and copying things by accident. Accidental copying is when two similar bits of code might look like twins at first, but as the software grows, they could go their separate ways. In this case, it's actually okay and necessary to copy stuff.

So, the main idea is that each use case should stand alone and show one clear goal. You don't have to decide exactly how each use case works until later, so you can be more flexible. Also, it's important to tell the difference between real copying and accidental copying, so you can follow the DRY rule the right way.

## 1.5 Uses Cases flow

- Use Cases in Clean Architecture: Use Cases in Clean Architecture bring intentions to life by automating processes. Consider a simple task like creating a category – it's essentially about automating the process of taking data and saving it to a database.

- Implementing Automation: To put this automation into action, well-established business rules are crucial. These rules serve as the foundation for executing Use Cases. Every step, orchestration, and sequence of actions is mapped out through the Use Case.

- Orchestrating Software Flow: Building a Use Case might involve multiple calls and steps to streamline the software's flow. This is where the Use Case acts as the conductor of the application's activities. Imagine a loan application process – it goes through various validations and culminates in creating and activating a client's account.

- Use Case's Central Role: The primary role of a Use Case is to ensure the flow of operations unfolds seamlessly. It's the automation hub driven by business rules. The Use Case integrates and employs business rules to construct a coherent workflow aligned with the company's requirements. This is why Use Cases are pivotal – they define the software's automation and purpose.

- Business Rules and Entities: Business rules reside within entities, which serve as containers for these rules. While slightly different from Domain Driven Design (DDD), the concept remains intact. In a DDD context, the Use Case resembles an application layer – outlining how the software should function, while business rules are rooted in the domain, entities, and Enterprise Business Rules.

Summarized:

- Use Cases: Translate intentions into automated actions within software, dictating the sequence of events.
- Business Rules: Fundamental for automation and are wielded by Use Cases.
- Operation Flow: Illustrated through processes like loan estimation, where validations lead to actions. Use Cases guide this flow.
- Using Domain Driven Design (DDD): In Clean Architecture, business rules are separate from Use Case flow, akin to DDD's application layer. Use Cases leverage these rules to create a logical process tailored to the company's needs.
- Use Case's Significance: Defines software's automation and purpose. Business rules reside in entities, setting the "rules of the game."
- Entities: In Clean Architecture, entities house business rules.
- Differentiation: Use Cases and business rules differ – Use Cases manage the application of business rules, which reside in entities. In Domain Driven Design, business rules overlap with the domain, entities, and Enterprise Business Rules.
- In essence, Use Cases are responsible for structured execution of business logic, utilizing rules outlined by entities. They stand as a cornerstone in Clean Architecture, guiding software automation and intent.
