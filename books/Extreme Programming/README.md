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

**A feature is finished when all of its tests pass. Untested features do not exist**

- Run your test at every opportunity, its easier to find a bug along with the changes.
- Use a good test framework.
- Automate your tests.
- Good tests explore one thing at a time.

Tests fall into two categories:
- **Unit tests (or developer tests)**: explore the behavior of individual pieces of code and check implementations.
- **Acceptance tests (or customer tests)** verify that the requested features match the business requirements and expectations of the customer.

  If you're fixing a bug, write a test that exposes the bug before you fix it. Exercice the proper behavior of the feature.
  1. The test must fail to validate that the test CAN fail.
  2. Write the simplest code that could possibly pass the test.
  3. Run the test, when the test passes, refactor
 
**The tight test-driven cycles creates a natural rhythm of feedback loops, producing a comprehensive test suite that explores the essential behavior of the code.**

Every unique and identifiable piece of system deserves its own test case, they can serve as guide for future changes. Test-driven development forces you to work in small steps.

- Isolated test has a drawback, however. While individual units may pass all of their tests, the complete system may fail when run as a whole. Integration tests can fill in the gap by checking to see if all of the pieces fit together well.

**Tests are a safety net. They provide you immediate feedback about the project. They assume that the current code is sufficient to implement the required features. They allow refactoring and changes without fear.**

### 2.2 Practice Pair Programming
**Goal: to spread knowledge, experience and ideas**

Pairs generally work together for just one task, perhaps and entire afternoon, and then form other pairs with new partners. The person with the keyboard - *the driver* - focuses on the details of the task. The other person - *the navigator* - keeps the entire project in mind, ensuring that the task fits into the project as a whole.

Pair programming produces code through conversation, reinforcing good programming habits, with each partner exerting positive peer pressure on the other. It tends to produce fewer bugs, leadiing to cleaner code that fit the team coding standards.

Working in pairs and keeping the coding standards in mind also lessens the temptation to rewrite code for its own sake, it is an investment in continual training.

### 2.3 Adopt Collective Code Ownership
**Goal: to spread the responsability for the code to the whole team**

Adopt collective code ownership where the entire codebase belongs to the whole team. Any developer is free to change any piece of code as needed to complete a task

The alternative to collective code ownership is individual code ownership, where individual developers have complete responsability for certain subsystems. To make a change in one piece , you must ask permission of its owner. She may be the only person who understands that code. Collective code ownership gives you the power to make necessary changes yourself, wherever they are needed.

Collective code ownership requires teamwork. Pair programming makes two people responsible for each line of code in the system, increasing the sense if team ownership. Coding standards provide a vocabulary of coding idioms.


