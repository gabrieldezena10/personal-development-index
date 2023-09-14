# Extreme Programming

## 1. Coding Practices

### 1.1 Code and design simply

**Goal: to produce software that's easy to change** <br/>
Flexibility is the goal. Simple designs are easier to understand and to explain. Simple code is easier to test, maintain, and change.

- XP(Extremme Programming) says: "Change is inevitable, so plan to adapt"

This focus on simplicity warn against adding feature that **might** be used in the future. Every unrequested feature has a cost, taking time and resources from the custumer's curent need.
Unecessary features complicate the system. The desire to add them comes from the fear that future changes will be difficult and expensive. 
While flexibility is a virtue in programming, XP achieves that flexibility through simplicity. It prefers to produce maintainable code by testing it continually, cleaning it regularly, and always seeking the simplest solution.

### 1.2 Refactor Mercilessly

**Goal: to find the code's optimal design**

- Refactor is improving the desgn of existing code without changing its behavior

Refactoring shoul simplify the overall design. Refactoring shoul change only the structured of the code, leaving its external behavior untouched.
Ideally, a test that passes before a reffactoring will also pass after that refactoring without modification. By relying on tests, you can simplify your code while retaining its necessary behavior.

Refactor regularly and don't spend all your time looking for the best possible design. **Make it work, make it simpler, and move on**

### 1.3 Develop Coding Standards

**Goal: to communicate ideas clearly through code** <br/>
- Develop coding standards to help developers communicate through their code; The best coding standards are guidelines.

Examples: brace placemente, identation, tab stops, naming standards and API conventions.
Agreeing on a naming standard can prevent the same method from being written multiple times.

### 1.4 Develop a common vocabulary

**Goal: to communicate ideas about code clearly**
Develop a commom vocabulary to describe your project as it evolves. This vocabulary will likely come from a metaphor with well-understood relationships.

Your vocabulary should describe each major component in he project. Keep it expressive and approachable because you 'll share it with the customer.

Regularly review your vocabulary to ensure it represents the project accurately. As the project matures, it will take on new characteristics. 
Your understanding of the architecture will change. A good vocabulary clarifies and explains. Be concise.

## 2. Developer Practices
XP devotes several ptractices to improving teamwork

### 2.1 Adopt Test-Driven Development

**Goal: to prove that the code works as it should**

Write a test that fails. Write code that pass the test. Check that the test passes. Refactor the code. Automate your tests. Use failing tests to prompt your code. This cycle produces a natural rhythm of rapid feedback

**A feature is finished when all of its tests pass. Untestet features do not exist**

- Run your test at every opportunity, its easier to find a bug along with the changes.
- Use a good test framework.
- Automate your tests.
- Good tests explore one thing at a time.

Tests fall into two categories:
- **Unit tests (or developer tests)**: explore the behavior of individual pieces of code and check implementations.
- **Acceptance tests (or customer tests)** verify that the requested features match the business requirements and expectations of the customer.

  If you're fixing a bug, write a test that exposes the bug before you fix it. Exercice the proper behavior of the feature.

  ...page 27
