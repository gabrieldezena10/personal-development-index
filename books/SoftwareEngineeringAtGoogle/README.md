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


#### Test Behaviors, Not Methods:
For example, consider the snippet of code in the example below, which displays the results of a transaction

```java
public void displayTransactionResults(User user, Transaction transaction) {
 ui.showMessage("You bought a " + transaction.getItemName());
 if (user.getBalance() < LOW_BALANCE_THRESHOLD) {
 ui.showMessage("Warning: your balance is low!");
 }
}
```
It wouldn’t be uncommon to find a test covering both of the messages that might be shown by the method,

```java
// a method-driven test
@Test
public void testDisplayTransactionResults() {

 transactionProcessor.displayTransactionResults( newUserWithBalance( LOW_BALANCE_THRESHOLD.plus(dollars(2))),
 new Transaction("Some Item", dollars(3)));

 assertThat(ui.getText()).contains("You bought a Some Item");
 assertThat(ui.getText()).contains("your balance is low");
}
```
With such tests, it’s likely that the test started out covering only the first method. Later, an engineer expanded the test when the second message was
added (violating the idea of unchanging tests that we discussed earlier). This modification sets a bad precedent: as the method under test becomes more
complex and implements more functionality, its unit test will become increasingly convoluted and grow more and more difficult to work with.

- Rather than writing a test for each method, **write a test for each behavior**.
- Behaviors can often be expressed using the words **"given,"** **"when,"** and **"then"**:
    - *“**Given** that a bank  account is empty, **when** attempting to withdraw money from it, **then** the transaction is rejected."*

- The mapping between methods and behaviors is **many-to-many**:
    - Most nontrivial methods implement **multiple behaviors**, and some behaviors rely on the interaction of **multiple methods**.
      
It can often be worth violating the [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) principle if it leads to **clearer tests**.  

The previous example can be rewritten using behavior-driven tests, as presented below:
```java
//A behavior-driven test
@Test
public void displayTransactionResults_showsItemName() {
 transactionProcessor.displayTransactionResults(new User(), new Transaction("Some Item"));
 assertThat(ui.getText()).contains("You bought a Some Item");
}

@Test
public void displayTransactionResults_showsLowBalanceWarning() {
 transactionProcessor.displayTransactionResults(newUserWithBalance(LOW_BALANCE_THRESHOLD.plus(dollars(2))),
 new Transaction("Some Item", dollars(3)));
 assertThat(ui.getText()).contains("your balance is low");
}
```

Behavior-driven tests tend to be clearer than method-oriented tests for several reasons. First, they read more like natural language, allowing them to be naturally understood rather than requiring laborious mental parsing. Second, they more clearly express cause and effect because each test is more limited in scope.
Finally, the fact that each test is short and descriptive makes it easier to see what functionality is already tested and encourages engineers to add new streamlined test methods instead of piling onto existing methods.

#### Structure Tests to emphasize Behaviors:
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

#### Name Tests After the Behavior Being Tested
Method-oriented tests are usually named after the method being tested (e.g., a test for the updateBalance method is usually called testUpdateBalance ). With more focused behavior-driven tests, we have a lot more flexibility and the chance to convey useful information in the test’s name.
A test’s name should summarize the behavior it is testing. A good name describes both the actions that are being taken on a system and the expected outcome.

- If you need to use the word “and” in a test name, there’s a good chance that you’re actually testing multiple behaviors and should be writing multiple tests!

#### Don’t Put Logic in Tests
Clear tests are trivially correct upon inspection; that is, it is obvious that a test is doing the correct thing just from glancing at it.
Complexity is most often introduced in the form of logic. Logic is defined via the imperative parts of programming languages such as operators, loops, and conditionals. When a piece of code contains logic, you need to do a bit of mental computation to determine its result instead of just reading it off of the
screen.

#### Write Clear Failure Messages
A good failure message contains much the same information as the test’s name: it should clearly express the desired outcome, the actual outcome, and any relevant parameters.
- Here’s an example of a bad failure message: __Test failed: account is closed__
- A better failure message clearly distinguishes the expected from the actual state and gives more context about the result: __Expected an account in state CLOSED, but got account <{name: "my-account", state: "OPEN"}__

### Tests and Code Sharing: DAMP, Not DRY

**1. DRY Principle in Software Development**<br>
DRY stands for "Don't Repeat Yourself". It's a principle that encourages reducing code duplication and maintaining each concept in a single, canonical place.
DRY is beneficial in making software easier to maintain and change, as updates only need to be made in one place.
However, DRY can sometimes make code unclear, as it may require following chains of references to understand what the code is doing.

**2. DRY vs DAMP in Test Code**<br>
The cost/benefit analysis of DRY plays out differently in test code. Tests are designed to be stable and should break when the system being tested changes, so DRY doesn't have as much benefit in this context.
Test code should often strive to be DAMP, promoting "Descriptive And Meaningful Phrases". A bit of duplication is acceptable in tests if it makes the test simpler and clearer.

**3. DAMP is Complementary to DRY** <br>
DAMP is not a replacement for DRY; it is complementary to it. Helper methods and test infrastructure can still help make tests clearer by making them more concise, factoring out repetitive steps whose details aren’t relevant to the particular behavior being tested.
Refactoring should be done with an eye toward making tests more descriptive and meaningful, and not solely in the name of reducing repetition.

#### Shared Values in Tests
Many tests are structured by defining a set of shared values to be used by tests and then by defining the tests that cover various cases for how these values interact.
Using shared constants can make tests concise, but it can cause problems as the test suite grows. It can be difficult to understand why a particular value was chosen for a test.
A better way to accomplish this goal is to construct data using helper methods that require the test author to specify only values they care about, and setting reasonable defaults for all other values.

**1. Helper Methods for Constructing Test Data**<br>
Helper methods can be used to construct test data, allowing each test to create the exact values it needs without having to worry about specifying irrelevant information or conflicting with other tests.
These methods can wrap a constructor by defining arbitrary defaults for each of its parameters. Tests call the helper, specifying values for only the parameters that they care about.

#### Shared Setup
Many test frameworks allow engineers to **define methods to execute before each test in a suite is run**. These setup methods can make tests clearer and more concise by removing the need to repeat initialization logic.
However, if tests begin to depend on the particular values used in setup, it can lead to unclear tests. Tests that explicitly care about particular values should state those values directly, overriding the default defined in the setup method if necessary.

#### Shared Helpers and Validation in Tests
Helper methods can be a useful way for concisely constructing test values. However, other types of helper methods, such as those performing a common set of assertions against a system under test, can be dangerous as they make tests less behavior-driven and harder to understand.
- The extreme example is a **validate** method called at the end of every test method, which performs a set of fixed checks against the system under test. Such a validation strategy can be a bad habit to get into because tests using this approach are less behavior driven. 

More focused validation methods that assert a single conceptual fact about their inputs can be useful. These methods are particularly helpful when the condition they are validating is conceptually simple but requires complex logic to implement.

#### Defining Test Infrastructure
Test infrastructure refers to code shared across multiple test suites. It can make unit tests much easier to write in some circumstances.
Test infrastructure must be approached carefully as it can have many callers that depend on it and can be difficult to change without introducing breakages. It needs to be treated as its own separate product and must always have its own tests.
Most of the test infrastructure that engineers use comes in the form of well-known third-party libraries like JUnit. Standardizing on these libraries within an organization should happen as early and universally as possible.

### Conclusion
- Unit tests are powerful tools for ensuring that systems continue to work over time in the face of unanticipated changes.
- Careless use of unit testing can result in a system that requires much more effort to maintain and doesn't actually improve confidence in the system.
<br>

## Chapter 13. Test Doubles

__Test doubles are essential objects or functions used in place of actual implementations during testing. They are useful when real implementations would introduce complexity or unpredictability, such as in scenarios involving external servers or databases.__

Test Doubles and Mocks are both types of test objects used in unit testing, but they serve different purposes and have distinct characteristics:

**Test Doubles:**

- Test Doubles is a general term that encompasses various types of objects used to replace real dependencies in unit tests. It includes Mocks, Stubs, Fakes, and other types of objects that simulate the behavior of real dependencies without actually implementing their full functionality.
- Test Doubles are used to isolate the code under test and create controlled environments for testing specific scenarios. They help in avoiding side effects, improving test reliability, and making tests faster by removing external dependencies.
- Test Doubles do not enforce any expectations on how they are used; they are simply objects that behave similarly to the real dependencies.

**Mocks:**
- Mocks are a specific type of test doubles that are pre-programmed with expectations about the interactions they should have with the code under test. They are used for interaction testing, which involves verifying that specific methods are called with specific arguments during the test execution.
- Mocks allow the tester to set expectations on method calls and verify whether these expectations are met at the end of the test. If an expected method call is not made, the test using the mock will fail, indicating a deviation from the expected behavior.
- Mocking frameworks are often used to create mock objects quickly and easily, making it more convenient to define the expected behavior.
  
> In summary, while Test Doubles is a broad term covering various objects used in unit testing, Mocks are a specific type of Test Doubles that have pre-defined expectations about the interactions with the code under test. Mocks are particularly useful for interaction testing to ensure that specific methods are called with expected arguments during the test execution.

**The previous two chapters introduced the concept of small tests and discussed why they should comprise the majority of tests in a test suite. However, production code often doesn’t fit within the constraints of small tests due to communication across multiple processes or machines. Test doubles can be much more lightweight than real implementations, allowing you to write many small tests that execute quickly and are not flaky.**

#### The Need for Test Doubles<br>
Real-world systems often interact with external elements, such as servers or databases, which can complicate testing. Test doubles help overcome these challenges by standing in for real implementations, making tests easier to run and more reliable.

#### Types of Test Doubles<br>
Test doubles come in various forms, ranging from simple substitutes (like in-memory databases) to more sophisticated doubles capable of mimicking complex system behaviors.

#### The Impact of Test Doubles<br>
While test doubles can significantly boost engineering speed, their misuse can lead to brittle and ineffective tests. Key considerations include:

- Testability: Codebases must be designed to swap real implementations with test doubles, which often requires thoughtful design and potential refactoring.
- Applicability: Test doubles aren't always suitable, and sometimes using real implementations is preferable.
- Fidelity: The behavior of a test double should closely resemble that of the real implementation, but perfect fidelity may not always be feasible or necessary.

#### Seams and Testable Code<br>
A seam is a way to make code testable by allowing for the use of test doubles—it makes it possible to use different dependencies for the system under test rather than the dependencies used in a production environment. Dependency injection is a common technique for introducing seams.

Dependency injection is a common technique for introducing seams. In short, when a class utilizes dependency injection, any classes it needs to use (i.e.,
the class’s dependencies) are passed to it rather than instantiated directly, making it possible for these dependencies to be substituted in tests.

Dependency injection is a technique used to make code more flexible and testable by allowing the dependencies of a class to be provided externally, rather than being created internally in the class. This makes it easier to perform testing, as it is possible to inject simulated (fake) dependencies during testing, rather than relying on the actual implementations. However, in dynamically typed languages such as Python or JavaScript, the ability to dynamically override functions or methods makes it easier to create tests without the need to explicitly apply dependency injection.

```js
class Calculadora {
    somar(a, b) {
        return a + b;
    }
}
```
We can create a test for this class and dynamically replace the "somar" method with a different implementation just for the test:

```js
const calculadora = new Calculadora();

console.log(calculadora.somar(2, 3)); // Saída: 5

// Substituir dinamicamente o método "somar" por uma implementação diferente para o teste
calculadora.somar = function(a, b) {
    return a * b;
};

console.log(calculadora.somar(2, 3)); // Saída: 6 (resultado diferente da implementação original)
```

This flexibility of dynamically typed languages makes dependency injection less crucial, as we can easily override specific parts of a class just for testing purposes, without having to take a more formal approach to dependency injection. However, dependency injection can still be useful in more complex scenarios or when the structure of the code requires greater separation between dependencies and class logic.

#### Mocking Frameworks<br>
A mocking framework is a software library that makes it easier to create test doubles within tests; it allows you to replace an object with a mock, which is a test double whose behavior is specified inline in a test. While they reduce boilerplate code, overuse of these frameworks can complicate codebase maintenance.

This summary highlights the importance of using test doubles effectively in unit testing and the considerations involved, including the trade-offs between testability, applicability, and fidelity.

### Techniques for Using Test Doubles

Test doubles are used to replace real parts of the system with controlled replacements to isolate the code under test. These include various techniques like Faking, Stubbing, and Interaction Testing.
These techniques are used for isolating the code under test from its dependencies.

**1. Faking:**
Faking is a technique where a lightweight implementation of an API is created that behaves similarly to the actual implementation but isn't suitable for production.
Example: An in-memory database used during testing as a substitute for a real database.
Fakes are often faster to set up and can make tests run faster.
However, creating a fake can be challenging as it needs to mimic the real implementation’s behavior.

First, let's define the Database class that we want to fake.
```js
class Database {
  saveUser(user) {
    // Code that connects to a database and saves the user.
  }

  getUser(id) {
    // Code that connects to a database and fetches the user.
  }
}
```
Now, we'll create a FakeDatabase for our tests.

```js
class FakeDatabase {
  constructor() {
    this.users = {};
  }

  saveUser(user) {
    this.users[user.id] = user;
  }

  getUser(id) {
    return this.users[id] || null;
  }
}

// And then we can use the `FakeDatabase` in our tests:

test('should save and retrieve a user', () => {
  const fakeDatabase = new FakeDatabase();
  const userService = new UserService(fakeDatabase);

  const user = { id: 1, name: 'John' };
  userService.saveUser(user);
  const retrievedUser = userService.getUser(1);

  expect(retrievedUser).toEqual(user);
});
```


**2. Stubbing:**
Stubbing involves specifying the exact return values of a function that otherwise has no behavior of its own.
Stubs are typically created using mocking frameworks, reducing the boilerplate code that would be necessary for creating new classes to hardcode return values.
Limitations include over-specified tests, where the test knows too much about the inner workings of the function under test, leading to brittle tests.

Continuing with the example:
We can stub the getUser method of the Database class in our test:

```js
test('should return the user data', () => {
  const database = new Database();
  const userService = new UserService(database);

  const user = { id: 1, name: 'John' };

  // Stub the `getUser` method
  database.getUser = jest.fn().mockReturnValue(user);

  const retrievedUser = userService.getUser(1);

  expect(retrievedUser).toEqual(user);
  expect(database.getUser).toHaveBeenCalledWith(1);
});
```

**3. Interaction Testing:**
Interaction testing validates how a function is called without actually executing the implementation. This is used to check if a function is called the right way, i.e., correct number of times, with the correct arguments.
Mocking frameworks are often used for interaction testing, reducing boilerplate code and improving readability.
The term "interaction testing" is preferred over "mocking" to avoid confusion with mocking frameworks, which can be used for stubbing as well.
Overuse can result in brittle tests that break with minor changes in implementation.
Note that these are all techniques for using test doubles, and the appropriate technique to use depends on the situation and the specific needs of the test.

Continuing with the example:
We'll test if the saveUser method is called correctly:

```js
test('should save the user data', () => {
  const database = new Database();
  const userService = new UserService(database);

  const user = { id: 1, name: 'John' };

  // Stub the `saveUser` method
  database.saveUser = jest.fn();

  userService.saveUser(user);

  // Check if `saveUser` was called correctly
  expect(database.saveUser).toHaveBeenCalledWith(user);
});
```
> In these examples, the UserService is using a Database (or a fake/stubbed version of it) to save and retrieve users. The tests then verify that this interaction is happening as expected. Note that in a real-world scenario, the Database class would be doing more complex work, and the fake/stubbed versions would need to mimic this behavior more closely.

Below is a basic conceptual diagram of these techniques:
 ```
                            |Test Doubles|
              -----------------------------------
             |                |                  |
           Faking           Stubbing      Interaction Testing
        (Lightweight     (Specifies return   (Checks how a
      Implementation)      values of a         function is 
                            function)          called)

```

### Real Implementations
Although test doubles can be invaluable testing tools. At Google, **the first choice for tests is to use the real implementations of the system under test’s dependencies; that is, the same implementations that are used in production code.** Tests have higher fidelity when they execute code as it will be executed in production, and using real implementations helps accomplish this.

### 1 - Faking
If using a real implementation is not feasible within a test, the best option is often to use a fake in its place. A fake is preferred over other test double
techniques because it behaves similarly to the real implementation: the system under test shouldn’t even be able to tell whether it is interacting with a real implementation or a fake.

#### Why Are Fakes Important?
- Fakes can be a powerful tool for testing: they execute quickly and allow you to effectively test your code without the drawbacks of using real implementations.
- They provide an enormous boost to engineering velocity across a software organization.

#### When Should Fakes Be Written?
- A fake requires effort and domain experience to create, as it needs to behave similarly to the real implementation.
- Maintenance is required whenever the behavior of the real implementation changes.
- The team responsible for the real implementation should write and maintain the fake.
- The decision to create a fake depends on the trade-off between productivity improvements and the costs of creating and maintaining it.

#### The Fidelity of Fakes
- Fidelity refers to how closely the behavior of a fake matches the real implementation.
- Perfect fidelity is not always feasible, but a fake should maintain fidelity to the API contracts of the real implementation.
- A fake might not need to have 100% functionality if not required by most tests, but it should fail fast in such cases to communicate its limitations.

#### Fakes Should Be Tested
- A fake must have its own tests to ensure it conforms to the API of its corresponding real implementation.
- Contract tests can be written against the API's public interface and run against both the real implementation and the fake.

#### What to Do If a Fake Is Not Available
- Request the API owners to create a fake if it is not available.
- If the owners are unwilling or unable to create a fake, consider writing a partial fake by wrapping calls to the API in a class that doesn't communicate with the API.
- Alternatively, use real implementations or other test double techniques as substitutes.

> In some cases, a fake can be seen as an optimization to speed up slow tests using a real implementation, but it's essential to weigh the benefits against the effort required to create and maintain the fake.

### 2 - Stubbing
Stubbing is a way for a test to hardcode behavior for a function that otherwise has no behavior on its own. It's a quick and easy way to replace a real implementation in a test.

Example of Using Stubbing to Simulate Responses:
```js
test('getTransactionCount', () => {
  const transactionCounter = new TransactionCounter(mockCreditCardServer);
  // Use stubbing to return three transactions.
  jest
    .spyOn(mockCreditCardServer, 'getTransactions')
    .mockReturnValue([TRANSACTION_1, TRANSACTION_2, TRANSACTION_3]);

  expect(transactionCounter.getTransactionCount()).toEqual(3);
});
```

#### The Dangers of Overusing Stubbing
- Tests become unclear: Stubbing involves extra code that can be difficult to understand and detracts from the test's intent.
- Tests become brittle: Stubbing exposes implementation details, requiring updates when the production code changes.
- Tests become less effective: Stubbing cannot guarantee that the function behaves like the real implementation, affecting the test's fidelity.such as in a statement like that shown in the following snippet that hardcodes part of the contract of the add() method (“If 1 and 2 are passed in, 3 will be returned”):
when(stubCalculator.add(1, 2)).thenReturn(3);

- Stubbing is a poor choice if the system under test depends on the real implementation’s contract, because you will be forced to duplicate the details of the contract, and there is no way to guarantee that the contract is correct (i.e., that the stubbed function has fidelity to the real implementation).
- Additionally, with stubbing there is no way to store state, which can make it difficult to test certain aspects of your code. For example, if you call database.save(item) on either a real implementation or a fake, you might be able to retrieve the item by calling database.get(item.id()) given that both of these calls are accessing internal state, but with stubbing there is no way to do this.

An Example of Overusing Stubbing:
```js
test('creditCardIsCharged', () => {
  // Set up stubbing for test doubles created by a mocking framework.
  // ...
  // Call the system under test and verify the pay() method was called.
  expect(mockCreditCardServer.pay).toHaveBeenCalledWith(transaction, creditCard, 500);
});
```

Refactoring to Avoid Stubbing:
```js
test('creditCardIsCharged', () => {
  const paymentProcessor = new PaymentProcessor(creditCardServer, transactionProcessor);
  // Call the system under test.
  paymentProcessor.processPayment(creditCard, Money.dollars(500));
  // Query the credit card server state to see if the payment went through.
  expect(creditCardServer.getMostRecentCharge(creditCard)).toEqual(500);
});
```

#### When Is Stubbing Appropriate?
- Stubbing is appropriate when you need a function to return a specific value to get the system under test into a certain state.
- Each stubbed function should have a direct relationship with the test's assertions.
- Real implementations or fakes are preferred over stubbing because they provide more guarantees about the correctness of the code. However, stubbing can be used when necessary, as long as its usage is constrained to avoid overly complex tests.

### 3 - Interaction Testing

Interaction testing validates how a function is called without executing the actual implementation.
State testing, where you validate the output or system state, is preferred over interaction testing.

#### Advantages of State Testing
- State testing provides clearer and more resilient tests.
- Validates actual behavior by calling the system under test and checking the output or state changes.

#### Downsides of Interaction Testing
- Interaction testing can't guarantee that the system under test is working correctly.
- Relies on assumptions about the behavior of the code, making tests less reliable.
- Tests become brittle as they expose implementation details and fail with any code change.

#### When to Use Interaction Testing
- Use interaction testing when state testing is not feasible, like when a real implementation or a fake is unavailable.
- Also useful when you need to ensure specific function calls occur, e.g., to verify a caching feature.

#### Best Practices for Interaction Testing
- Focus on state-changing functions for interaction testing; avoid testing non-state-changing functions.
- Overspecifying interaction tests leads to brittleness; keep tests concise and clear.
- Split tests to validate specific behaviors, avoiding multiple behaviors in a single test.

## Conclusion
- Interaction testing has its place, but state testing is preferred for clear, reliable, and maintainable tests.
- Larger-scoped tests may also be necessary to supplement unit tests with state testing for risk mitigation.

### Chapter conclusion
- Test doubles are essential for engineering velocity, as they enable comprehensive testing and faster test execution.
- Misusing test doubles can lead to unclear, brittle, and less effective tests, causing a drain on productivity.
- Engineers should understand best practices for effectively applying test doubles to avoid potential pitfalls.
- While test doubles are useful for handling difficult dependencies in tests, larger-scope testing should also be considered to maximize code confidence.
- Choosing between real implementations and test doubles, as well as selecting the appropriate test double technique, may require trade-offs based on specific use cases.

## Chapter 14. Larger Testing


### Testing Overview

### Test Doubles

A fake is often the ideal solution if a real implementation can’t be used in a test.  

### Larger Testing
Large tests provide more confidence that the **overall system** works as intended.  

- They may be **slow** (Google have tests that run for multiple hours or even days).
- They may be **nonhermetic**.
- They may be **nondeterministic**.  
