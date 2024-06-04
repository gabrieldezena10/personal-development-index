# Chapter 1 - What is Software Engineering?
## Differences Between Programming and Software Engineering

We see three critical differences between programming and software engineering: **time**, **scale**, and the **trade-offs** at play.

### Time
On a software engineering project, engineers need to be more concerned with the passage of time and the eventual need for change.

### Scale
In a software engineering organization, there is a greater focus on scale and efficiency, both for the software produced and the organization producing it.

### Trade-offs
Software engineers are required to make more complex decisions with higher-stakes outcomes, often based on imprecise estimates of time and growth.

### Software Engineering at Google
Within Google, we sometimes say, “Software engineering is programming integrated over time.” Programming is a significant part of software engineering as it is how new software is generated. However, software engineering encompasses more than just development, it includes development, modification, and maintenance. The addition of time introduces a crucial new dimension to programming. Just as cubes aren’t squares and distance isn’t velocity, software engineering isn’t just programming.


### Definition of Sustainability
Sustainability in software means your project can react to valuable changes over its expected lifespan, whether for technical or business reasons. This capability is crucial—even if you choose not to upgrade due to lack of value or other priorities. Inability to adapt to changes in technology or product direction is a high-risk bet, safe for short-term projects but risky over decades.

### Scale in Software Engineering
Scale is a key aspect of software engineering:
- **Team Involvement**: Software engineering involves many people collaborating on development and maintenance over time, unlike programming which is often an individual effort.
- **Team Collaboration**: This presents new challenges but also more potential for valuable systems than any single programmer could achieve.

An early definition of software engineering highlights this: “The multiperson development of multiversion programs,” emphasizing the importance of both time and people.

### Team Organization and Project Composition
The complexity of software engineering is influenced by:
- **Team Organization**: How teams are structured and collaborate.
- **Project Composition**: The makeup of projects.
- **Policies and Practices**: How policies and workflows impact efficiency as the organization and projects grow.

### Scale Issues
- **Efficiency**: As organizations and projects grow, does efficiency in producing software increase?
- **Workflow Efficiency**: Do development workflows improve, or do version control policies and testing strategies become costlier?
- **Communication and Human Scaling**: These issues, discussed since the early days of software engineering (e.g., the Mythical Man Month), are often policy-related and fundamental to software sustainability.

The key question of software sustainability is how much it will cost to repeatedly do necessary tasks.

### Complexity of Decisions
Software engineering involves more complex decisions than programming. Engineers often need to evaluate trade-offs between multiple paths forward, dealing with high stakes and imperfect value metrics.

### Role of Software Engineers
The role of a software engineer or a software engineering leader includes:
- **Aiming for Sustainability**: Ensuring long-term viability of the product and processes.
- **Managing Scaling Costs**: Balancing the costs of scaling the organization, the product, and the development workflow.

### Evaluating Trade-offs
When making decisions, consider the following:
- **Inputs**: Organizational needs, product requirements, and workflow efficiency.
- **Rational Decision-Making**: Evaluate trade-offs with a clear understanding of deferred costs.

### Deferred Maintenance and Policies
Sometimes, it is necessary to:
- **Defer Maintenance Changes**: Postpone updates with a plan to address them later.
- **Embrace Non-Scalable Policies**: Implement temporary solutions with the knowledge that they will need revisiting.

## Time and Change

### Novice Programming
- **Short Life Span**: Code written by novices typically lasts for hours or days.
- **Assignments and Exercises**: These are usually write-once, with minimal refactoring and no long-term maintenance.
- **Limited Use**: Programs are often not rebuilt or executed again after initial production, especially in educational settings.

### Educational Projects
- **Team Projects and Theses**: In secondary or post-secondary education, team projects or theses may have a longer life span, but usually not beyond a month.
- **Refactoring**: Students might refactor code in response to changing requirements, but broader environmental changes are rare.

### Maintenance Expectations
- **Short-Term Tasks**: For tasks with an expected life span of hours, minimal maintenance is expected. For example, if a new OS version is released while working on a one-time Python script, upgrading is unnecessary.
- **Long-Term Projects**: Conversely, for long-term projects like Google Search, being stuck on an outdated OS version (e.g., from the 1990s) would be problematic.

Considerthe image below, which illustrates two software projects on opposite ends of the “expected life span” spectrum. For short-term tasks, critical upgrades are not necessary. However, for long-term, high-stakes projects, maintaining up-to-date environments is crucial.
![image](https://github.com/gabrieldezena10/personal-development-index/assets/86879421/5d322c68-e5e1-4f07-a710-4f68e9aef9be)

- **Transition Point**: There is a transition between one-off programs and projects that last for decades where a project must start reacting to external changes.

### Challenges of Unplanned Upgrades
For projects that did not plan for upgrades from the start, this transition can be painful due to:
1. **Hidden Assumptions**: Performing tasks that haven't been done before for the project can reveal many hidden assumptions.
2. **Lack of Experience**: Engineers may lack experience in performing such upgrades.
3. **Large Upgrades**: Upgrades are often larger than usual, encompassing several years' worth of changes instead of incremental updates.

### Achieving Sustainability
- **First Big Upgrade**: Successfully completing the initial large upgrade is crucial.
- **Staying Current**: Establishing a reliable process for ongoing upgrades is essential for long-term sustainability.

### Planning for Sustainability
- **Importance of Planning**: Sustainability requires careful planning and managing the impact of necessary changes.
- **Google's Approach**: At Google, achieving this sustainability has often been a result of trial and error.

### Hyrum’s Law
If you are maintaining a  project that is used by  other engineers, the most important lesson about “it works” versus “it is maintainable” is what we’ve come to call Hyrum’s Law:

**With a sufficient number of users of an API, it does not matter what you promise in the contract: all observable behaviors of your system will be depended on by somebody.**

- **Practical Knowledge**: Despite best intentions, top engineers, and solid code review practices, perfect adherence to published contracts or best practices cannot be assumed.
- **Flexibility and Freedom**: As an API owner, being clear about interface promises grants some flexibility, but complexity and change difficulty depend on user reliance on observable API behavior.

### Change Management
- **Impact of Changes**: If users don't depend on certain behaviors, the API is easier to change.
- **Inevitable Breakages**: Given enough time and users, even minor changes will break something.
- **Value Analysis**: Evaluate the value of changes by considering the difficulty in investigating, identifying, and resolving breakages.

### Programming vs. Software Engineering
- **Mentality Differences**: Code written with a “works now” versus a “works indefinitely” mentality shows clear relationships.
- **Code as an Artifact**: Viewing code with variable lifetime requirements helps categorize programming styles.
  - **Hacky or Clever Code**: Depends on brittle and unpublished dependency features.
  - **Clean and Maintainable Code**: Follows best practices and plans for the future.

### Code Style Selection
- **Purpose-Dependent**: Choose the appropriate style based on the expected lifespan of the code.
- **Cleverness**: “It’s programming if 'clever' is a compliment, but it’s software engineering if 'clever' is an accusation.”

## Scale and Efficiency

### Complexity of Google's System
**Scale and Complexity**: Google's production system is one of the most complex machines ever created.
**Expert Effort**: Building and maintaining this system requires extensive thought, discussion, and redesign by experts globally.

### Focus on Organizational Scale
- **Codebase Sustainability**: Defined as the ability to safely change everything that needs changing over the codebase's life.

### Costs and Scalability
- **Cost Considerations**: Capability discussions involve costs; high costs lead to deferred changes.
- **Non-Scalable Operations**: If costs grow superlinearly, the operation isn't scalable.
- **Handling Growth**: As the project scope doubles, necessary tasks should not become proportionally more labor-intensive.

### Scaling Resources
- **Finite Resources**: Human resources and other finite resources need to scale effectively.
- **Software Scalability**: Software must scale with traditional resources like compute, memory, storage, and bandwidth.
- **Development Scalability**: The development process must scale with human time involvement and the compute resources powering the workflow.
- **Codebase Scalability**: Finally, the most precious asset of a software organization—the codebase itself—also needs to scale.  If your build system or version control system scales superlinearly over time, perhaps as a result of growth and increasing changelog history, a point might come at which you simply cannot proceed.

### Factors that affect the flexibility of the codebase

- Expertise: if you have enough experts(willing to answer any questions), you have an army of expert developers working on the project.
- Stability: Adapt to newer releases frequently so that you won’t run into any breaking changes in future upgrades.
- Conformity: As the code has been upgraded frequently, there is less code that hasn’t been through upgrade already.
- Familiarity: As we start to do this frequently, we can spot the redundancies and attempt to automate.
- Policy: Ensure that we have automated tests in the CI pipeline so that we don’t need to worry about the unknown usage of the code.

### Shifting Left in the Developer Workflow

**Early Problem Detection**
- **Cost Reduction**: Finding problems earlier in the developer workflow usually reduces costs.
- **Workflow Timeline**: Features progress from conception and design, through implementation, review, testing, commit, canary, and production deployment.

**Shifting Left**
- **Early Detection**: Detecting problems earlier on the timeline (shifting left) makes them cheaper to fix.
- **Origin of Term**: The concept originated from the argument that security should not be deferred until the end of the development process, advocating to "shift left on security."

**Cost Implications**
- **Production Issues**: Security problems found after production deployment are very expensive.
- **Pre-Production Fixes**: Catching issues before production deployment is cheaper, though still potentially labor-intensive.
- **Pre-Commit Fixes**: Detecting problems before the original developer commits the flaw to version control is the cheapest. The developer can fix it more easily since they understand the feature and can revise it according to new constraints, avoiding the need for others to triage and fix it.
![image](https://github.com/gabrieldezena10/personal-development-index/assets/86879421/499bcdd3-ee9e-4b34-8dd5-2e6b70a5ded5)

## Trade-offs and Costs

### Decision-Making Culture at Google
- **Avoiding "Because I Said So"**: There is a strong distaste for decisions made without reason.
- **Decider and Escalation Paths**: It is important to have a decider for any topic and clear escalation paths for disagreements.
- **Consensus Over Unanimity**: The goal is consensus, not unanimity. Acceptance of different viewpoints is expected.
- **Reasoned Decisions**: Decisions should be based on clear reasoning, avoiding "just because," "because I said so," or "because everyone else does it this way," as these are often the roots of bad decisions.

In the end, decisions in an engineering group  should come down to very few things:

- We are doing this because we must (legal requirements, customer requirements).
- We are doing this because it is the best option (as determined by some appropriate decider) we can see at the time, based on current evidence.

**Decisions should not be “We are doing this because I said so.”**

### Revisiting Decisions and Making Mistakes

- **Admitting Mistakes**: A key benefit of a data-driven culture is the ability and necessity to admit mistakes.
- **Decision Basis**: Decisions are made based on available data, ideally good data with minimal assumptions.

- **New Data and Changing Contexts**: As new data comes in, contexts change, or assumptions are dispelled, previous decisions may be seen as errors or outdated.
- **Impact of Time**: Over time, not only technical dependencies and software systems change, but also the data used for decision-making.

- **Data-Informed Decisions**: We strongly believe in using data to inform decisions while recognizing that data evolves.
- **Revisiting Decisions**: For long-lived projects, the ability to revisit and change decisions is critical.
- **Admitting Mistakes**: Leaders must have the right to admit mistakes. Admitting mistakes enhances respect rather than diminishing it.

- **Value of Unmeasured Factors**: Be driven by evidence, but recognize that some valuable aspects cannot be measured.

## Software Engineering Versus Programming
Much of that difference stems from the management of code over time, the impact of time on scale, and decision making in the face of those ideas. Programming is the immediate act of producing code. Software engineering is the set of policies, practices, and tools that are necessary to make that code useful for as long as it needs to be used and allowing collaboration across a team.

#### **Programming**
Programming is the act of writing code to solve specific problems. It involves tasks such as:

- Writing Code: Implementing algorithms and features in a programming language.
- Debugging: Finding and fixing bugs in the code.
- Testing: Ensuring that the code works as expected.
- Optimization: Improving the efficiency and performance of the code.
In essence, programming focuses on creating functional pieces of software, often as standalone tasks or features.

#### **Software Engineering**
Software engineering, on the other hand, encompasses programming but extends beyond it to include the entire process of creating, maintaining, and improving software systems. It involves:

- Designing Systems: Planning and structuring software in a way that meets requirements and is scalable, maintainable, and reliable.
- Project Management: Coordinating tasks, managing timelines, and ensuring that the project stays on track.
- Collaboration: Working with other engineers, designers, product managers, and stakeholders to build software.
- Maintenance: Updating and improving software over time, fixing bugs, and adapting to new requirements.
- Quality Assurance: Implementing processes to ensure the software meets quality standards, such as code reviews, automated testing, and continuous integration.
- Documentation: Writing documentation for the software, including design documents, user guides, and API references.
- Deployment and Monitoring: Releasing software to users and monitoring its performance to ensure it operates smoothly.

##### Key Differences
- Scope: Programming focuses on writing code for specific tasks, while software engineering involves the entire lifecycle of software development.
- Collaboration: Software engineering requires more collaboration and communication among team members and stakeholders.
- Long-term Perspective: Software engineering considers the long-term maintenance and scalability of software, not just immediate functionality.
- Processes and Tools: Software engineers use a broader range of tools and processes to manage complex projects, ensure quality, and coordinate team efforts.

#### An Analogy
Think of building a house:

Programming is like constructing a specific part of the house, such as installing the plumbing.
Software Engineering is like being the architect and project manager who designs the house, oversees its construction, ensures it meets safety standards, and plans for future renovations.
In summary, while programming is a crucial part of software engineering, software engineering itself is a more comprehensive discipline that includes planning, designing, building, and maintaining software systems.

# Chapter 2 - How to Work Well on Teams

## Overcoming Insecurity in Software Development

### Fear of Judgment
- **Human Nature**: People fear others seeing and judging their work in progress. Insecurity stems from the dislike of criticism, especially for unfinished work.
- **Larger Problem**: This insecurity points to a broader issue within software development.

### Hiding Considered Harmful
- **Risk of Failure**: Working alone increases the risk of unnecessary failure and limits potential growth.
- **Balance**: Software development requires deep concentration and alone time, but this must be balanced with the value and necessity of collaboration and review.

### Early Detection
- **Hidden Ideas**: Keeping great ideas hidden until they are polished is risky.
- **Design Mistakes**: Fundamental design mistakes are easy to make early on.
- **Collaboration Benefits**: Hiding work forfeits collaboration benefits and risks reinventing the wheel.
- **Feedback Importance**: Soliciting feedback early lowers the risk of early missteps. The more feedback you get early, the lower the risk.

## It’s All About the Team

### Software engineering is a team endeavor.

This concept directly contradicts the inner Genius Programmer fantasy so many of us hold, but it’s not enough to be brilliant when you’re alone. You’re not going to change the world by hiding and preparing your secret invention. You need to work with other people. Share your vision. Divide the labor. Learn from others. Create a brilliant team.

- **Teamwork**: Essential for producing great software.
- **Building a Great Team**: To achieve effective collaboration, embrace the three pillars of social skills.
- 
### The Three Pillars of Social Interaction

1. **Humility**
   - **Self-Perception**: Recognize that you are not the center of the universe, nor is your code.
   - **Fallibility**: Accept that you are neither omniscient nor infallible.
   - **Openness**: Be open to self-improvement.
   
2. **Respect**
   - **Genuine Care**: Care about the people you work with.
   - **Kindness**: Treat colleagues kindly and appreciate their abilities and accomplishments.

3. **Trust**
   - **Belief in Competence**: Trust that others are competent and will do the right thing.
   - **Delegation**: Be comfortable letting others take the lead when appropriate.

### Learn to give and take criticism
In a professional software engineering environment, criticism is almost never personal—it’s usually just part of the process of making a better project. Learn to respect your peers and give constructive criticism politely. If you truly respect someone, you’ll be motivated to choose tactful, helpful phrasing—a skill acquired with much practice. 

- **Humility and Trust**: Accepting criticism involves being humble about your skills and trusting that others have your best interests and the project's interests at heart.
- **Positive Intent**: Believe that feedback is not a personal attack and that your peers do not think poorly of you.

- **Programming Practice**: Programming, like any other skill, improves with practice.
- **Constructive Feedback**: View feedback as a way to improve, similar to how you would accept tips to improve at other skills like juggling.

- **Self-Worth**: Your self-worth should not be tied to the code you write or any creative project you build.
- **Perspective**: Remember, you are not your code.

### Blameless Post-Mortem Culture

#### Learning from Mistakes
- **Documenting Failures**: Perform a root-cause analysis and write a "postmortem" to document failures.
- **Purpose of Postmortem**: Avoid creating a document full of apologies, excuses, or finger-pointing. **The goal is to explain what was learned and what will change as a result.**

#### Effective Postmortem Practices
- **Accessibility and Follow-Through**: Ensure the postmortem is accessible and that the team follows through on proposed changes.
- **Historical Reference**: Proper documentation helps others understand what happened and avoid repeating mistakes. Illuminate your tracks for others like a runway.

#### Components of a Good Postmortem
1. **Event Summary**: Provide a brief summary of the event.
2. **Event Timeline**: Detail the timeline from discovery through investigation to resolution.
3. **Primary Cause**: Identify the primary cause of the event.
4. **Impact Assessment**: Assess the impact and damage.
5. **Immediate Action Items**: List action items (with owners) to fix the problem immediately.
6. **Preventive Action Items**: List action items to prevent recurrence.
7. **Lessons Learned**: Summarize the lessons learned from the event.

### Learn patience
- Pair programming with different aproached: identify the bug, and then split up and attack the problem from two directions at once (top-down - wants to get the full lay of the land and dive into the implementation of almost every method on the call stack before proceeding to tackle the bug - and bottom-up -dive into the muck and dig my way out by trying a lot of things quickly and skimming over the details -) before coming back together with our findings.

### Be open to influence
-  it’s OK for someone else to change your mind

### Being Googley

“Googleyness”  is defined as a set of attributes and behaviors that we look for that represent strong leadership and exemplify “humility, respect, and trust”:

- **Thrives in ambiguity**: Can deal with conflicting messages or directions, build consensus, and make progress against a problem, even when the environment is constantly shifting.
- **Values feedback**: Has humility to both receive and give feedback gracefully and understands how valuable feedback is for personal (and team) development.
- **Challenges status quo**: Is able to set ambitious goals and pursue them even when there might be resistance or inertia from others.
- **Puts the user first**: Has empathy and respect for users of Google’s products and pursues actions that are in their best interests.
- **Cares about the team**: Has empathy and respect for coworkers and actively works to help them without being asked, improving team cohesion.
- **Does the right thing**: Has a strong sense of ethics about everything they do; willing to make difficult or inconvenient decisions to protect the integrity of the team and product.


# Chapter 3 - Knowledge Sharing

## Challenges to Learning

### Expertise Sharing Difficulties
- **Organizational Learning**: Sharing expertise across an organization is challenging, particularly without a strong culture of learning. Google has faced several challenges as the company has scaled.

## Identified Challenges

### Lack of Psychological Safety
- **Risk Aversion**: An environment where people fear taking risks or making mistakes due to potential punishment.
- **Transparency Avoidance**: Manifests as a culture of fear, leading to a tendency to avoid transparency.

### Information Islands
- **Knowledge Fragmentation**: Occurs when different parts of an organization do not communicate or use shared resources, leading to isolated knowledge pools.

#### Consequences of Information Islands
1. **Information Fragmentation**
   - **Incomplete Picture**: Each island has an incomplete understanding of the bigger whole.

2. **Information Duplication**
   - **Reinvention**: Each island develops its own way of doing things, leading to redundant efforts.

3. **Information Skew**
   - **Conflicting Methods**: Different islands might develop conflicting methods for the same tasks.

### Single Point of Failure (SPOF)
- **Critical Bottleneck**: Occurs when essential information is held by only one person, creating a dependency.

#### SPOFs Arising from Good Intentions
- **Short-Term Efficiency**: The habit of "Let me take care of that for you" optimizes for immediate efficiency but hampers long-term scalability and team learning.

### All-or-Nothing Expertise
- **Expertise Disparity**: A division between those who know everything and novices, with little middle ground.
- **Self-Reinforcing Problem**: Experts doing everything themselves without mentoring, leading to a persistent gap in expertise.

### Parroting
- **Mindless Mimicry**: Copying patterns or code without understanding their purpose, often assuming the code is necessary for unknown reasons.

### Haunted Graveyards
- **Fear-Induced Avoidance**: Areas in code or projects that people avoid because they fear something might go wrong.
- **Superstition**: Unlike parroting, this is characterized by avoidance due to fear and superstition.

## Philosophy
Software engineering is the multiperson development of multiversion programs. People are central to software engineering; code is just one part of product development.

### Importance of Growing Expertise
- **Novice to Expert**: Every expert was once a novice; organizational success relies on nurturing and investing in its people.

### Personalized Advice vs. Documentation
- **One-to-One Expertise**: Personalized advice from experts is invaluable but not scalable. The best expert to consult can vary depending on the question.
- **Scalability Issue**: If an expert is unavailable, the team may struggle.

### Benefits of Documented Knowledge
- **Scalability**: Documented knowledge can scale to the entire organization through mechanisms like a team wiki.
- **Trade-Offs**: Documentation may be more generalized, less applicable to individual situations, and requires maintenance to stay relevant.

### Tribal Knowledge
- **Definition**: The gap between individual knowledge and documented knowledge.
- **Importance**: Human experts hold unwritten knowledge that can be documented to benefit a wider audience.

### Complementary Nature of Knowledge Types
- Written knowledge and human expertise complement each other. Perfect documentation doesn't eliminate the need for human consultation. Experts can synthesize knowledge, assess applicability, and navigate documentation better than automated systems.

### Evolution of Institutional Knowledge
- **Adaptability**: Knowledge-sharing methods must adapt over time as the organization grows.
- **Training and Growth**: Focus on learning, growth, and building a team of experts; more engineering expertise is always beneficial.

### Setting the Stage: Psychological Safety

Psychological  safety is critical to  promoting a learning environment. To learn, you must first acknowledge that there are things you don’t understand. An enormous part of learning is being able to try things and feeling safe to fail. In a healthy environment, people feel comfortable asking questions, being wrong, and learning new things. 

## Growing Your Knowledge

- **Ask questions**: Embrace not knowing things as an area of opportunity rather than one to fear. It doesn’t matter whether you’re new to a team or a senior leader: you should always be in an environment in which there’s something to learn. On the receiving end, patience and kindness when answering questions fosters an environment in which people feel safe looking for help.  Making it easier to overcome the initial hesitation to ask a question sets the tone early: reach out to solicit questions, and make it easy for even “trivial” questions to get an answer.
  
- **Understand Context**: Learning is not just about understanding new things; it also includes developing an understanding of the decisions behind the design and implementation of existing things. For example, you are working in legacy codebase, the code is difficult to understand. It can be tempting to rewrite from scratch rather than spend time learning the existing code. But instead of thinking “I don’t get it” and ending your thoughts there, dive deeper: what questions should you be asking? **Before removing or changing something, first understand why it’s there.**

## Scaling Your Questions: You Always Have Something to Teach

- Teaching is not limited to experts, nor is expertise a binary state in which you are either a novice or an expert. Google engineers teach others in a variety of ways, such as office hours, giving tech talks, teaching classes, writing documentation, and reviewing code.

### Office Hours
- Office hours are a regularly scheduled (typically weekly) event during which one or more people make themselves available to answer questions about a particular topic.They are not the preferred method for knowledge sharing due to delays in getting urgent answers and the time and effort required to host and promote them.

### Tech Talks and Classes
- Tech talks typically consist of a speaker presenting directly to an audience.
- Classes, on the other hand, can have a lecture component but often center on in-class exercises and therefore require more active participation from attendees. As a result, instructor-led classes are typically more demanding and expensive to create and maintain than tech talks and are reserved for the most important or difficult topics.

### Documentation
- Documentation is written knowledge whose primary goal is to help its readers learn something. 

#### Updating documentation
- The first time you learn something is the best time to see ways that the existing documentation and training materials can be improved.  By the time you’ve absorbed and understood a new process or system, you might have forgotten what was difficult or what simple steps were missing from the “Getting Started” documentation. At this stage, if you find a mistake or omission in the documentation, fix it! 
#### Creating documentation
- As your proficiency grows, write your own documentation and update existing docs.  For example, if you set up a new development flow, document the steps. You can then make it easier for others to follow in your path by pointing them to your document. Even better, make it easier for people to find the document themselves. Any sufficiently undiscoverable or unsearchable documentation might as well not exist.
#### Promoting documentation
- Traditionally, encouraging engineers to document their work can be difficult. Writing documentation takes time and effort that could be spent on coding, and the benefits that result from  that work are not immediate and are mostly reaped by others. Asymmetrical trade-offs like these are good for the organization as a whole given that many people can benefit from the time investment of a few, but without good incentives.

## Scaling Your Organization’s Knowledge

The bad behavior of just a few individuals can make an entire team or community unwelcoming. In such an environment,  novices learn to take their questions elsewhere, and potential new experts stop trying and don’t have room to grow. In the worst cases, the group reduces to its most toxic members. It can be difficult to recover from this state.

Knowledge sharing can and should be done with kindness and respect.  In tech, tolerance—or worse, reverence—of the “brilliant jerk” is both  pervasive and harmful, but being an expert and being kind are not mutually exclusive.

## Readability: Standardized Mentorship Through Code Review

At Google, “readability” refers to more than just code  readability; it is a standardized,    Google-wide mentorship process for disseminating programming language best practices. Readability covers a wide breadth of expertise, including but not limited to language idioms, code structure, API design, appropriate use of common libraries, documentation, and test coverage.

# Chapter 11 - Testing Overview

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

# Chapter 12 - Unit Testing
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

# Chapter 13. Test Doubles

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

# Chapter 14. Larger Testing

#### Test Size at Google
- Small tests: Restricted to one thread, one process, one machine.
- Larger tests: Not restricted by the same constraints as small tests.

#### Test Scope at Google
- Unit tests: Smaller in scope compared to integration tests.
- Largest-scoped tests: Involve several real dependencies and fewer test doubles.

#### Characteristics of Larger Tests
- They may be slow.
- They may be nonhermetic (share resources with other tests and traffic).
- They may be nondeterministic. If a large test is nonhermetic it is almost impossible to guarantee determinism: other tests or user state may interfere with it.

#### Importance of Larger Tests
- Larger tests provide confidence that the overall system works as intended.
- They address fidelity, reflecting the real behavior of the system under test (SUT).
- Fidelity is crucial for accurate testing.

### Fidelity 
The primary reason larger tests exist is to address fidelity. Fidelity is the property by which a test is reflective of the real behavior of the system under test (SUT).
- Production environment offers the highest fidelity.
- Larger tests aim to find the proper balance between fidelity, cost, and risk.

![image](https://github.com/gabrieldezena10/personal-development-index/assets/86879421/7f1e89d9-aa77-45f1-93dd-3c3f33a44add)

### Test Content and Realism
Tests can also be measured in terms of how faithful the test content is to reality
- Hand-crafted large tests may be dismissed if the test data looks unrealistic.
- Test data copied from production is more faithful to reality.
- Creating realistic test traffic, especially in AI, can be challenging due to intrinsic bias in seed data.

### Fidelity Gap
- Most data for unit tests is handcrafted and may not cover all scenarios.
- Uncovered scenarios represent a fidelity gap in the tests.

### Common Gaps in Unit Tests

#### Unfaithful Doubles
- Unit tests use test doubles to replace heavyweight or hard-to-test dependencies.
- Test doubles (e.g., mocks) may not accurately represent the actual behavior of the replaced dependencies.
- Misunderstanding the behavioral contract between the unit under test and the dependencies can lead to invalid tests.
- Mocks can become stale if not updated alongside changes in the real implementation.

#### Configuration Issues
- Unit tests cover code within a binary but may not verify compatibility with deployment configurations or production instances.
- Configuration changes can cause major user issues, and failures in this area have led to significant outages at Google.
- Configuration should be version controlled to identify the source of bugs and integrate into larger tests.

#### Issues Under Load
- Unit tests are designed to be small and fast, making it difficult to test performance, load, and stress scenarios.
- Large volumes of traffic, such as thousands or millions of queries per second, are challenging to simulate in typical unit tests.

#### Unanticipated Behaviors, Inputs, and Side Effects
- Unit tests can only test for anticipated behaviors and inputs.
- Issues found by users are often unanticipated, requiring different testing techniques to identify such behaviors.
- The user contract applies to all visible behaviors, not just those specified in the public API.

#### Emergent Behaviors and the "Vacuum Effect"
- Unit tests have limited scope, especially when using test doubles, and may miss behavior changes outside of that scope.
- They deliberately eliminate real-world chaos like dependencies, network, and data, which may lead to missing certain defect categories.

### Why Not Have Larger Tests?

#### Constraints of Developer-Friendly Tests
- Reliable: Must not be flaky and should provide a clear pass/fail signal.
- Fast: Shouldn't interrupt the developer workflow.
- Scalable: Able to run efficiently for presubmits and postsubmits.

#### Challenges with Larger Tests
- Flakiness: Larger tests are often flakier due to increased infrastructure usage.
- Slower: Take longer to set up and run compared to small unit tests.
- Scalability Issues: Resource and time requirements, as well as lack of isolation, can lead to collisions.
- Ownership Challenge: Larger tests span multiple units, making it unclear who is responsible for maintenance and issue diagnosis.
- Lack of Standardization: Larger tests suffer from a lack of standardization in infrastructure, process, and implementation.
- Impact on Large-Scale Changes: The variety of ways larger tests are run can lead to skipping them during significant changes.
- Integration Challenges: Tests that involve multiple teams require unifying incompatible infrastructures.
- Difficulty in Teaching: Lack of standardization makes it challenging to teach a single approach to new engineers.

### Structure of a Large Test

Large tests usually consist of a workflow with the following phases: 
1. Obtain a System Under Test
2. Seed Necessary Test Data
3. Perform Actions Using the System Under Test
4. Verify Behaviors

#### The System Under Test (SUT)
- In large tests, the System Under Test (SUT) is a key component.
- Unlike unit tests that focus on one class or module in the same process, larger tests often involve one or more separate processes with test code (usually in its own process).

![image](https://github.com/gabrieldezena10/personal-development-index/assets/86879421/8ca56398-0609-4b31-a1d8-849f0ab69cc8)

### Types of SUTs (System Under Test) and Their Impact on Large Tests

#### Primary Factors for Judging SUTs
- Hermeticity: Isolation from interactions with sources other than the test.
- Fidelity: Accuracy in reflecting the production system being tested.

**Examples of SUTs:**

1. Single-process SUT:
   - Entire system under test packaged into a single binary.
   - Least faithful to production topology and configuration.

2. Single-machine SUT:
   - System under test consists of one or more separate binaries running on one machine.
   - Used for "medium" tests with increased fidelity using production launch configurations.

3. Multimachine SUT:
   - System under test distributed across multiple machines, similar to production cloud deployment.
   - Higher fidelity but can introduce network and machine flakiness in "large" tests.

4. Shared Environments (Staging and Production):
   - Test uses shared environments, low cost, but may conflict with other simultaneous uses.
   - Testing in production increases the risk of end-user impact.

5. Hybrids:
   - Mix of SUTs, may run some components explicitly but have them interact with shared environments.

#### Benefits of Hermetic SUTs
- Hermetic SUTs can minimize unreliability and long turnaround time in large tests.
- Production tests using the actual production system deployment are popular but have limitations in blocking code release.
- Creating a giant shared staging environment can help but still limits test execution to code availability.
- Cloud-isolated or machine-hermetic SUTs improve the situation by avoiding conflicts and reservation requirements for code release.

### Risks and Techniques in Large Test Design

#### Reducing SUT Size at Problem Boundaries
- Frontend and backend tests can become painful due to UI changes and asynchronous behaviors.
- Splitting tests at the UI/API boundary using public APIs is recommended for easier maintenance.
- Be cautious with third-party dependencies, as they may lack shared environments for testing.

### Test Data

#### Two Kinds of Data in Large Tests
1. Seeded data: Data preinitialized into the system under test reflecting its state at the inception of the test.
2. Test traffic: Data sent to the system under test by the test itself during its execution.

#### Complexity of Seeding the SUT State
- Seeding the SUT state in large tests is more complex than setup work in unit tests due to the larger and separate SUT.
- Domain data and a realistic baseline might be needed for accurate and realistic testing.

#### Data Generation Methods
- Handcrafted data: Test data created manually for larger tests, which may require significant setup work.
- Copied data: Data copied, typically from production, to provide a baseline for testing changes.
- Sampled data: A reduced volume of copied data to reduce test time and improve manageability.

#### Verification of SUT Behavior
- Manual Verification: Humans interact with the SUT to determine if it functions correctly, either through regression or exploratory testing.
- Assertions: Explicit checks about the intended behavior of the system.
- A/B Comparison (Differential Testing): Running two copies of the SUT, sending the same data, and comparing the output to identify unintended changes.

### Large Tests and the Developer Workflow

#### Integrating Large Tests into the Developer Workflow
- Large tests should be integrated into the developer workflow with automated mechanisms for presubmit and postsubmit execution.
- At Google, large tests are often run separately from unit tests, with separate post-submit continuous builds.
- Presubmit execution provides feedback directly to the author, but some large tests may run postsubmit or as part of the release process due to their size or complexity.

#### Authoring Large Tests
- Clear libraries, documentation, and examples are essential for creating large tests.
- Large tests are more expensive to maintain, but not all tests are created equal; A/B diff tests have less human cost in verification.
- Balancing the cost of maintaining the infrastructure and code with the benefits of test coverage is crucial.

#### Running Large Tests
- Large tests may require alternate continuous builds and presubmits, separate from unit tests.
- Engineers need familiar ways to run nonstandard tests and iterate on them.
- Techniques to speed up tests include reducing scope, splitting tests into smaller ones, and optimizing test build time.

#### Driving Out Flakiness
- Flakiness can make larger tests unusable, so removing it is a high priority.
- Reducing scope can help, but other flakiness issues can be mitigated through test design and implementation.
- Balancing test speed and tolerable system behavior for end users is crucial to handling flakiness.

#### Making Tests Understandable
- Tests must provide clear pass/fail signals and meaningful error output.
- For tests that require human investigation, like A/B diff tests, special handling is needed to ensure meaningful results.
- Tests should minimize the effort required to identify the root cause of failures and provide support and contact information for assistance.

## END
 
