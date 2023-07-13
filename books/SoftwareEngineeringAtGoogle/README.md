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

### Designing a Test Suite
There are two distinct dimensions for every test case: size and scope. S
- **Size** refers to the resources that are required to run a test case: things like memory, processes, and time.
- **Scope** refers to the specific code paths we are verifying.

### Test Size
In brief, small tests run in a single process, medium tests run on a single machine, and large tests run wherever they want

![image](https://github.com/gabrieldezena10/personal-development-index/assets/86879421/df3b9946-345f-436a-b256-5a33566b93df)

Placing restrictions on small tests makes speed and determinism much easier to achieve. As test sizes grow, many of the restrictions are relaxed. 
- Small tests, regardless of the scope, are almost always faster and more deterministic than tests that involve more infrastructure or consume more resources.
- Medium tests have more flexibility but also more risk of nondeterminism.
- Larger tests are saved for only the most complex and difficult testing scenarios. 

At Google, they have three sizes of tests:
- **Small Tests**:
    - Must run in a **single process**.
    - At Google, they restrict this even further to say that the small tests must run on a **single thread**. This means that the code performing the test must run in the same process as the
code being tested. You can’t run a server and have a separate test process connect to it. It also means that you can’t run a third-party program such as a database as part of your test.
    - They aren’t allowed to sleep, **perform I/O operations** or make any other blocking calls. This means that small tests aren’t allowed to access the network or disk. Testing code that
relies on these sorts of operations requires the use of test doubles (see Chapter 13) to replace the heavyweight dependency with a lightweight,in-process dependency.
- **Medium Tests**:
    - Can span **multiple processes**, use threads and **can make blocking calls**, including **network calls**, to localhost. The only remaining restriction is that medium tests aren’t allowed to make network calls to any system other than localhost . In other words, the test must be contained within a single machine.
    - The ability to run multiple processes opens up a lot of possibilities. For example, you could run a database instance to validate that the code you’re testing integrates correctly in a more realistic setting. Or you could test a combination of web UI and server code.
    - Unfortunately, with increased flexibility comes increased potential for tests to become slow and nondeterministic. Tests that span processes or are allowed to make blocking calls are dependent on the operating system and third-party processes to be fast and deterministic, which isn’t something we can guarantee in general
- **Large Tests**:
    - Large tests **remove the localhost restriction** imposed on medium tests, allowing the test and the system being tested to span across multiple machines. We mostly reserve large tests for full-system end-to-end tests that are more about validating configuration than pieces of code, and for tests of legacy components for which it is impossible to use test doubles.
    - Teams at Google will frequently isolate their large tests from their small or medium tests, running them only during the build and release process so as not to impact developer workflow.

#### Properties commom to all test sizes
Tests should assume as little as possible about the outside environment, such as the order in which the tests are run. For example, they should not rely on a shared database.
A test should contain only the information required to exercise the behavior in question. Keeping tests clear and simple aids reviewers in verifying that the code does what it says it does.

__**Test sizes in practice**__
Having precise definitions of test sizes has allowed us to create tools to enforce them. Enforcement enables us to scale our test suites and still make certain guarantees about speed, resource utilization, and stability. The extent to which these definitions are enforced at Google varies by language. For example, we run all Java tests using a custom security manager that will cause all tests tagged as small to fail if they attempt to do something prohibited, such as establish a network connection.


Placing restrictions on small tests makes **speed** and **determinism** much easier to achieve.  

Larger tests are saved for only the most **complex** and **difficult** testing scenarios.  

### Test Scope
Test scope refers to how much code is being validated by a given test. 
- **Narrow-scoped** tests (commonly called “unit tests”) are designed to validate the logic in a small, focused part of the codebase, like an individual class or method.
- **Medium-scoped** tests (commonly called integration tests) are designed to verify interactions between a small number of components; for example, between a server and its database.
- **Large-scoped** tests (commonly referred to by names like functional tests, end-to-end tests, or system tests) are designed to validate the interaction of several distinct parts of the system, or emergent behaviors that aren’t expressed in a single class or method.

At Google, they tend to aim to have a mix of around:
- 80% of small tests
- 15% of medium tests
- 5% of large tests
  
Unit tests form an excellent base because they are fast, stable, and dramatically narrow the scope and reduce the cognitive load required to identify all the possible behaviors a class or function has.

Favoring unit tests gives us high confidence quickly, and early in the development process. Larger tests act as sanity checks as the product develops; they should not be viewed as a primary method for catching bugs. 

If you emphasize integration testing, you might discover that your test suites take longer to run but catch more issues between components. When you emphasize unit tests, your test suites can complete very quickly, and you will catch many common logic bugs. But, unit tests cannot verify the interactions between components

**The Beyoncé Rule**: *“If you liked it, then you shoulda put a test on it.”*  

### A Note on code Coverage
**Code coverage** is a measure of which lines of feature code are exercised by which tests.  

If you have 100 lines of code and your tests execute 90 of them, you have 90% code coverage.  

Code coverage only measures that a line was invoked, **not what happened as a result**.  

### Testing at Google Scale
The development environment at Google consists that most of Google’s code is kept in a single monolithic repository (monorepo).

### The Pitfalls of a Large Test Suite
When poorly written, automated tests can make it more difficult to make those changes. Brittle tests—those which over-specify expected outcomes or rely on extensive and complicated boilerplate—can actually resist change. These poorly written tests can fail even when unrelated changes are made.

## History of Testing at Google
- Google's approach to testing underwent a revolution from 2005 to 2006, driven by the success of the GWS project and the recognition of the power of automated testing.
- Orientation Classes were introduced during new hire orientation, educating engineers about the value and practices of automated testing.
- The Test Certified program provided a clear path for teams to improve their testing processes, with five levels of certification and concrete actions to achieve each level.
- Testing on the Toilet (TotT) was a unique initiative to raise awareness about testing by posting one-page flyers in restroom stalls, covering various testing topics.
- Testing culture at Google today is deeply embedded in the developer workflow, with every code change expected to include tests and undergo code review.
- Project Health (pH) is a tool that gathers metrics on project health, including test coverage and latency, to provide continuous feedback and improvement opportunities.
- Google emphasizes training, mentorship, and creating a clear expectation that testing is everyone's job, rather than mandating it through senior leadership.
- The focus has been on demonstrating the success of testing practices, allowing engineers to embrace the idea voluntarily and continue doing the right thing.

## The Limits of Automated Testing
- Automated testing may not be suitable for all testing tasks, such as evaluating the quality of search results or assessing audio and video performance.
- Human judgement is often necessary for evaluating nuances in audio and video quality, especially for telephony or video-calling systems.
- Humans excel in creative assessments, such as searching for complex security vulnerabilities, which can be added to automated security testing systems after discovery.
- Exploratory Testing is a creative approach where the application under test is treated as a puzzle, uncovering unknown problems through probing overlooked code paths or unusual responses.
- Once an issue is discovered through exploratory testing, automated tests should be added to prevent future regressions.
- Automated testing can cover well-understood behaviors, allowing human testers to focus on areas where they can provide the most value and avoid repetitive tasks.

 ## Chapter 12 - Unit Testing
**To recap, size refers to the resources consumed by a test and what it is allowed to do, and scope refers to how much code a test is intended to validate.**

Unit tests are usually **small** in size, but this isn’t always the case.  

After preventing bugs, the most important purpose of a test is to **improve productivity**.  

- Small tests are **fast and deterministic**, allowing developers to get immediate feedback
- They tend to be **easy to write** at the same time as the code they’re testing.  
- They tend to make it **easy to understand** what’s wrong when they fail.  

Google puts a lot of focus on test maintainability. Maintainable tests are ones that “just work”: after writing them, engineers don’t need to think about them again until they
fail, and those failures indicate real bugs with clear causes.

### The Importance of Maintainability

It is a helpfull thing when developers sets patterns and practices to alleviate the struggle of writing tests.

Imagine this scenario: Mary wants to add a simple new feature to the product and is able to implement it quickly, perhaps requiring only a couple dozen lines of code. But when she goes to check in her change, she gets a screen full of errors back from the automated testing system. She spends the rest of the day going through those failures one by one.

Broadly speaking, the issues encountered fall into two categories. 
- First, the tests she was working with were **brittle**: they broke in response to a harmless and unrelated change that introduced no real bugs.
- Second, the tests were **unclear**: after they were failing, it was difficult to determine what was wrong, how to fix it, and what those tests were supposed to be doing in the first place.

#### Preventing Brittle Tests

The ideal test is unchanging, requiring minimal updates unless the system's requirements change. Four types of changes engineers make to production code and how tests should respond:
1. **Pure refactorings**: Internal changes without modifying the system's interface shouldn't affect tests.
2. **New features**: Existing behaviors should remain unaffected, and new tests should cover the new features.
3. **Bug fixes**: Fixing a bug includes adding missing test cases, but existing tests usually don't need updates.
4. **Behavior changes**: Changing existing behavior requires updates to existing tests and coordination with users.
   
Changes to tests in the first three cases indicate unintended consequences or inappropriate test design. Behavior changes are more expensive as they break explicit contracts with users, while the previous cases break unintended contracts.

#### Writing Clear Tests
Test failures happen for one of two reasons:
- The system under test has a problem or is incomplete. This result is exactly what tests are designed for: alerting you of bugs so that you can fix them.
- The test itself is flawed. In this case, nothing is wrong with the system under test, but the test was specified incorrectly. If this was an existing test rather than one that you just wrote, this means that the test is brittle. The previous section discussed how to avoid brittle tests, but it’s rarely possible to eliminate them entirely.

> A  test is complete when its body contains all of the information a reader needs in order to **understand** how it arrives at its result.

> A test is concise when it contains **no other distracting or irrelevant information**.


**Test Behaviors, Not Methods**:
- Rather than writing a test for each method, **write a test for each behavior**.
- Behaviors can often be expressed using the words **"given,"** **"when,"** and **"then"**:
    - *“**Given** that a bank  account is empty, **when** attempting to withdraw money from it, **then** the transaction is rejected."*

- The mapping between methods and behaviors is **many-to-many**:
    - Most nontrivial methods implement **multiple behaviors**, and some behaviors rely on the interaction of **multiple methods**.
      
It can often be worth violating the [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) principle if it leads to **clearer tests**.  

Behavior-driven tests tend to be clearer than method-oriented tests for several reasons. First, they read more like natural language, allowing them to be naturally understood rather than requiring laborious mental parsing. Second, they more clearly express cause and effect because each test is more limited in scope.
Finally, the fact that each test is short and descriptive makes it easier to see what functionality is already tested and encourages engineers to add new streamlined test methods instead of piling onto existing methods.

**Structure Tests to emphasize Behaviors**:
Remember that every behavior has three parts: 
- a “given” component that defines how the system is set up;
- a “when” component that defines the action to be taken on the system;
- a “then” component that validates the result.

Example:
```java
@Test
public void transferFundsShouldMoveMoneyBetweenAccounts() {

// Given two accounts with initial balances of $150 and $20
        Account account1 = newAccountWithBalance(usd(150));
        Account account2 = newAccountWithBalance(usd(20));

// When transferring $100 from the first to the second account
        bank.transferFunds(account1, account2, usd(100));

// Then the new account balances should reflect the transfer
        assertThat(account1.getBalance()).isEqualTo(usd(50));
        assertThat(account2.getBalance()).isEqualTo(usd(120));
}
```

**Name Tests After the Behavior Being Tested**  
Method-oriented tests are usually named after the method being tested (e.g., a test for the updateBalance method is usually called testUpdateBalance ). With more focused behavior-driven tests, we have a lot more flexibility and the chance to convey useful information in the test’s name.
A test’s name should summarize the behavior it is testing. A good name describes both the actions that are being taken on a system and the expected outcome.

- If you need to use the word “and” in a test name, there’s a good chance that you’re actually testing multiple behaviors and should be writing multiple tests!

**Don’t Put Logic in Tests**
Continue here


### Testing Overview

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
