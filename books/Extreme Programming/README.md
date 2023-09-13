# Extreme Programming

## Coding Practices

### 1. Code and design simply

**Goal: to produce software that's easy to change**
Flexibility is the goal. Simple designs are easier to understand and to explain. Simple code is easier to test, maintain, and change.

- XP(Extremme Programming) says: "Change is inevitable, so plan to adapt"

This focus on simplicity warn against adding feature that **might** be used in the future. every unrequested feature has a cost, taking time and resources from the custumer's curent need.
Unecessary features complicate the system. The desire to add them comes from the fear that future changes will be difficult and expensive. 
While flexibility is a virtue in programming, XP achieves that flexibility through simplicity. It prefers to produce maintainable code by testing it continually, cleaning it regularly, and always seeking the simplest solution.

### 2. Refactor Mercilessly

**Goal: to find the code's optimal design**

- Refactor is improving the desgn of existing code without changing its behavior

Refactoring shoul simplify the overall design. Refactoring shoul change only the structured of the code, leaving its external behavior untouched.
Ideally, a test that passes before a reffactoring will also pass after that refactoring without modification. By relying on tests, you can simplify your code while retaining its necessary behavior.

Refactor regularly and don't spend all your time looking for the best possible design. **Make it work, make it simpler, and move on**

### 3. Develop Coding Standards

...
