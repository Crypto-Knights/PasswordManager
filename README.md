Approved tools:

Progress
 Our team is developing our web application using the Windows 10 operating systems. Within this system we are creating our application through various programs that author, edit, and run JavaScript. The approved tools for our project are as follows:
 
1. JavaScript Integrated Development Environment (IDE) a. IntelliJ Idea Ultimate
i. Version 2018.3.4
ii. Source code editor
iii. Build automation tool
iv. Debugger

2. Development Framework a. Semantic UI React
i. Version 2.4.2
ii. User Interface framework
iii. Website theme

3. Runtime Environment a. Node.js
i. Version 10.15.1
ii. Command line tool for Windows to run dynamic web pages.
iii. Executes JavaScript code outside a web browser

4. Database
   a. MongoDB
React
i. Version 4.2.7 2008R2Plus SSL
ii. Compass Community
iii. NoSQL database

Deprecated/Unsafe functions:

1. componentWillMount()
   a. Use constructor for stuff that doesn’t produce side-effects
2. componentWillReceiveProps() 
   a. getDerivedFromProps()
3. componentWillUpdate()
   a. getSnapshotBeforeUpdate
4. <a href={}>
   a. onClick()
   b. onSubmit()
	
5. FactoryComponent()
 
Node.js
1. eval()
   a. JSON.parse()
   b. Validate input with Joi
2. setInterval()
   a. Promises .then() 
3. setTimeout
   a. Promises .then() 
4. child_process.exec()
   a. child_process.execFile()
 
MongoDB
1. findOneAndModify()
  a. findAndModify
2. remove()
  a. deleteOne
  b. deleteMany 
3. update()
  a. udateOne() 
  b. updateMany() 
  c. replaceOne()
 
 
 Static Analysis:
 
 IntelliJ IDEA Is a very useful static analysis tool in the process that our team is committed to developing software. IntelliJ IDEA has a lot of amazing things, after mastering the skills of this tool, the development efficiency has increased, and it is also very friendly to some learners with english second language level.
IntelliJ IDEA is the best static analysis tool I have encountered so far. Especially in intelligent code assistant, automatic code prompting, refactoring, J2EE support, Ant, JUnit, CVS integration, code review, innovative GUI design and other functions can be said to reach the top. (Current version: IntelliJ IDEA 2018.2.3 ultimate edition)

1. Intelligent selection function: In many cases, we want to choose a method, a loop or slowly expand the selection from a variable to the entire class step by step, IDEA provides this syntax-based choice.
2. History function. You can view the history of files in any project without using the version management server, and you can easily restore it when the version is restored.
3. Perfect support for JUnit, XML.
4. Simple and clear GUI interface.
5. Code inspection. Automatically analyze the code, detect the code that is not in
compliance, and highlight it.
6. Perfect automatic code generation. Intelligently check the methods in the class, and
automatically complete the code input when there is only one method name, thereby reducing the work of writing the remaining code.

Difficulties part: IntelliJ IDEA file classification is not obvious enough, every time I search the document on my left side it will take some time to find out the file. Viewed files will be displayed at the top of the main page, I think this is a very friendly function for novices.

Successful part: Automatic synchronization with the file system is a great function to help us work on projects within a limited time. When I minimize IDEA and edit the file directly, IDEA
will automatically update the file after reopening IDEA, without re-importing the project or refreshing the project.
