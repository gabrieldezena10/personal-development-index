# Clean Code - A handbook of agile software craftsmanship

## 2. Meaningful Names

#### Use Intention-revaling names

The name of a variable, function, or class, should answer all the big questions. It should tell you why it exists, what it does, and how it is used. If a name requires a comment, then the name does not reveal its intent. 
```
int d; // elapsed time in days
```
The name d reveals nothing. It does not evoke a sense of elapsed time, nor of days. We should choose a name that specifies what is being measured and the unit of that measurement:
```
int elapsedTimeInDays;
int daysSinceCreation;
int daysSinceModification;
int fileAgeInDays;
```
Choosing names that reveal intent can make it much easier to understand and change code. What is the purpose of this code?
```
 public List<int[]> getThem() {
 List<int[]> list1 = new ArrayList<int[]>();
 for (int[] x : theList)
 if (x[0] == 4) 
 list1.add(x);
 return list1;
 }
```
Why is it hard to tell what this code is doing? There are no complex expressions.
Spacing and indentation are reasonable. There are only three variables and two constants mentioned. There aren’t even any fancy classes or polymorphic methods, just a list of arrays (or so it seems).
The problem isn’t the simplicity of the code but the implicity of the code (to coin a phrase): the degree to which the context is not explicit in the code itself. The code implicitly requires that we know the answers to questions such as:

1. What kinds of things are in theList?
2. What is the significance of the zeroth subscript of an item in theList?
3. What is the significance of the value 4?
4. How would I use the list being returned?

Avoid Disinformation 
The answers to these questions are not present in the code sample, but they could have been. Say that we’re working in a mine sweeper game. We find that the board is a list of
cells called theList. Let’s rename that to gameBoard.
Each cell on the board is represented by a simple array. We further find that the zeroth subscript is the location of a status value and that a status value of 4 means “flagged.” Just
by giving these concepts names we can improve the code considerably:
```
 public List<int[]> getFlaggedCells() {
 List<int[]> flaggedCells = new ArrayList<int[]>();
 for (int[] cell : gameBoard)
 if (cell[STATUS_VALUE] == FLAGGED)
 flaggedCells.add(cell);
 return flaggedCells;
 }
```
Notice that the simplicity of the code has not changed. It still has exactly the same number of operators and constants, with exactly the same number of nesting levels. But the code
has become much more explicit.
We can go further and write a simple class for cells instead of using an array of ints.
It can include an intention-revealing function (call it isFlagged) to hide the magic numbers. It results in a new version of the function:
```
 public List<Cell> getFlaggedCells() {
 List<Cell> flaggedCells = new ArrayList<Cell>();
 for (Cell cell : gameBoard)
 if (cell.isFlagged())
 flaggedCells.add(cell);
 return flaggedCells;
 }
```
With these simple name changes, it’s not difficult to understand what’s going on. This is the power of choosing good names.

#### Avoid Disinformation

Programmers must avoid leaving false clues that obscure the meaning of code. We should avoid words whose entrenched meanings vary from our intended meaning.

Do not refer to a grouping of accounts as an accountList unless it’s actually a List. The word list means something speciﬁc to programmers. If the container holding the accounts is not actually a List , it may lead to false conclusions. 1 So accountGroup or bunchOfAccounts or just plain accounts would be better.

Beware of using names which vary in small ways. How long does it take to spot the subtle difference between a XYZControllerForEfficientHandlingOfStrings in one module and, somewhere a little more distant, XYZControllerForEfficientStorageOfStrings ? The words have frightfully similar shapes. Spelling similar concepts similarly is information. Using inconsistent spellings is disinformation.

#### Make Meaningfull Distinctions

Noise words are another meaningless distinction. Imagine that you have a Product class. If you have another called ProductInfo or ProductData , you have made the names different without making them mean anything different.

Noise words are redundant. The word variable should never appear in a variable name. The word table should never appear in a table name. How is NameString better than Name ? Would a Name ever be a ﬂoating point number? If so, it breaks an earlier rule about disinformation. Imagine ﬁnding one class named Customer and another named CustomerObject . What should you understand as the distinction? Which one will represent the best path to a customer’s payment history?

In the absence of speciﬁc conventions, the variable moneyAmount is indistinguishable from money , customerInfo is indistinguishable from customer , accountData is indistinguishable from account , and theMessage is indistinguishable from message . Distinguish names in such a way that the reader knows what the differences offer.
