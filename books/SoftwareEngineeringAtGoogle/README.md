# Tests
## Chapter 11 - Testing Overview

### Overview
Testing code is an essential practice that brings numerous advantages to developers and organizations. While some may perceive writing tests as time-consuming, it actually enhances productivity and velocity in software development. This document highlights the benefits of investing in software tests, drawing from Google's experience and practices.


As the first clients of your code, a test can tell you much about your **design choices**.  

The simple test is defined by: 

1. A single behavior you are testing, usually a method or API that you are calling
2. A specific input, some value that you pass to the API
3. An observable output or behavior
4. A controlled environment such as a single isolated process


As a codebase grows, the test suite will begin to face challenges like **instability** and **slowness**.  


### GWS - Google Web server

GWS is the web server responsible for serving Google Search queries. In 2005, the project grew, the productivity slowed and the releases were full of bugs, and it was taking longer and longer to push them out. Team members had little confidence when making changes to the service, and often found out something was wrong only when features stopped working in production.

If testing becomes a productivity sink, constantly inducing toil and uncertainty, engineers will lose trust and begin to find workarounds.  

**A bad test suite can be worse than no test suite at all.**


**In order to keep up with scalability, there is no way to manully validate every behaviour of large applications, therefore AUTOMATION is the answer**

**Benefits of Testing Code**:
- Less debugging
- Supporting the ability/confidence to change (new features, code refactoring, doing a large redesign)
- Improved documentation 
- Simpler reviews
- Thoughtful design
- Fast, high-quality releases  
- Preventing bugs
- Greater confidence in process scalability


1. Less Debugging
Tested code exhibits fewer defects during submission and throughout its lifespan. By catching most issues before code submission, tests prove invaluable in preventing costly defects and time-consuming debugging sessions. As code undergoes multiple modifications, including changes made by other teams or automated maintenance systems, tests continue to provide dividends by quickly detecting potential problems and allowing for swift rollbacks.

2. Increased Confidence in Changes
Software is subject to constant change, and teams with robust tests can review and accept changes with confidence. Comprehensive tests verify crucial behaviors of a project continuously, enabling teams to embrace refactoring. Ideally, changes that refactor code while preserving existing behavior should require no alterations to existing tests, ensuring the reliability and stability of the software.

3. Improved Documentation
Tests serve as executable documentation, offering clear and focused demonstrations of specific behaviors within the codebase. In contrast to traditional software documentation, which often lacks accuracy or fails to cover edge cases, tests provide an accurate reflection of the code's intended behavior. When requirements change and new code breaks an existing test, it serves as a clear signal that the "documentation" needs updating. Well-maintained tests, kept concise and coherent, significantly enhance the effectiveness of documentation.

4. Simpler Reviews
At Google, all code undergoes review by at least one other engineer before submission. Thorough tests accompanying code submissions simplify the review process by demonstrating code correctness, handling of edge cases, and error conditions. Reviewers can focus on verifying that each test case passes rather than mentally tracing code execution paths, reducing effort and improving efficiency.

5. Thoughtful Design
Writing tests for new code serves as a practical means of evaluating the code's API design. If the code is challenging to test, it often indicates that it carries excessive responsibilities or has complex dependencies. Well-designed code follows a modular approach, minimizing tight coupling and emphasizing specific responsibilities. By addressing design issues early on, developers can reduce the need for extensive rework in the future.

6. Fast, High-Quality Releases
Teams equipped with a robust automated test suite can confidently release new versions of their application. Even in large-scale projects with hundreds of engineers and thousands of daily code changes, a healthy test suite enables frequent releases. Automated testing empowers teams to maintain a swift development pace without compromising quality or stability.

Incorporating a strong testing culture yields tangible benefits for developer productivity, code quality, and the overall success of software projects. By investing time and effort into writing tests, organizations can significantly improve their development process, enhance software reliability, and enable rapid iteration and deployment.


### Testing Overview

> Our experience suggests that as you approach 1% flakiness, the tests begin to lose value.  

At Google, they have three sizes of tests:
- **Small Tests**:
    - Must run in a **single process**.
    - At Google, they restrict this even further to say that the small tests must run on a **single thread**.
    - They aren’t allowed to sleep, **perform I/O operations** or make any other blocking calls.
- **Medium Tests**:
    - Can span **multiple processes**, use threads and **can make blocking calls**, including **network calls**, to localhost.
- **Large Tests**:
    - Large tests **remove the localhost restriction** imposed on medium tests, allowing the test and the system being tested to span across multiple machines.  

Placing restrictions on small tests makes **speed** and **determinism** much easier to achieve.  

Larger tests are saved for only the most **complex** and **difficult** testing scenarios.  

At Google, they tend to aim to have a mix of around:
- 80% of small tests
- 15% of medium tests
- 5% of large tests  

**The Beyoncé Rule**: *“If you liked it, then you shoulda put a test on it.”*  

**Code coverage** is a measure of which lines of feature code are exercised by which tests.  

If you have 100 lines of code and your tests execute 90 of them, you have 90% code coverage.  

Code coverage only measures that a line was invoked, **not what happened as a result**.  

### Unit Testing  
Unit tests are usually **small** in size, but this isn’t always the case.  

After preventing bugs, the most important purpose of a test is to **improve productivity**.  

They tend to be **easy to write** at the same time as the code they’re testing.  

They tend to make it **easy to understand** what’s wrong when they fail.  

> A  test is complete when its body contains all of the information a reader needs in order to **understand** how it arrives at its result.

> A test is concise when it contains **no other distracting or irrelevant information**.

It can often be worth violating the [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) principle if it leads to **clearer tests**.  

**Test Behaviors, Not Methods**:
- Rather than writing a test for each method, **write a test for each behavior**.
- Behaviors can often be expressed using the words **"given,"** **"when,"** and **"then"**:
    - *“**Given** that a bank  account is empty, **when** attempting to withdraw money from it, **then** the transaction is rejected."*

- The mapping between methods and behaviors is **many-to-many**:
    - Most nontrivial methods implement **multiple behaviors**, and some behaviors rely on the interaction of **multiple methods**.  

**Don't put logic in tests**  

### Test Doubles
A test double is an object or function that can **stand in for a real implementation in a test**, similar to how a stunt double can stand in for an actor in a movie.  

For example: An in-memory database.  

Techniques for using test doubles:
- *Faking* (for example, an in-memory database)
- *Stubbing* (the process of giving behavior to a function that otherwise has no behavior on its own)
- *Interacting Testing* (how a function is called without actually calling the implementation of the function)  

A fake is often the ideal solution if a real implementation can’t be used in a test.  

### Larger Testing
Large tests provide more confidence that the **overall system** works as intended.  

- They may be **slow** (Google have tests that run for multiple hours or even days).
- They may be **nonhermetic**.
- They may be **nondeterministic**.  