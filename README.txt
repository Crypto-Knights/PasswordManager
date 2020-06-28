ICS 427 Summer Part I 2020
Requirements and Design


Introduction:
1. Team Name: 
   1. Cyber Security Enforcement Association or Crypto Avengers
2. Members:
   1. Roderick Tabalba (RJ)
   2. Peter Newton
   3. Weile Lin
3. Title, Description, Functionalities
   1. Password Manager
   2. We will create a secure web application that users can sign in and manage their passwords by providing the name of service, username, and the password. We will also be implementing a feature that generates a strong pseudo-random password that the user will be able to use for all their services.
4. Type of program
   1. Web application
5. Javascript, Intelij, and Github
Security and Privacy Requirements
        The security and privacy requirements for our program revolve around the login fields for username and password as well as the fields needed for the service, username, and the password we are trying to store, and the fields needed for a user create an account on our application. In order to validate the login credentials, we would need the user to log in with a valid email address and a strong password that we can make requirements for. A valid email address would need to be in the form “email@domainname.com,” with a limit of 64 characters, no spaces, and no symbols allowed. Because the user would only need to remember the master password to retrieve their credentials for other services, we will require the user use a password that is 10 characters minimum consisting of each of the following: uppercase letter, lowercase letter, number and a special character (!@#$%^&*(),.?) with no spaces allowed. We will limit the amount of characters needed for the password to be 64. We would also need to hash this password when stored. The next area that we will need to provide security for is the names of service, username, and the password for the service itself. The name of service and username would only accept uppercase letters, lowercase letters, and spaces. These passwords and names of services would then need to be encrypted and properly stored in the database. The final area of how the user is able to request their password from the database. To ensure security, we would require the user to select the title of the service they are storing their password for and prompt the user to re-enter their master password. We will also require that the sessions for our application will log the user out after 10 minutes. To prevent any type of brute force attack, we will incorporate user sessions 3 failed attempts in the login and the user will need to refresh the page to restore their inputs.
Quality Gates
* All incoming users will be able to access the signup page as well as the login page. All registered users (once authenticated with their credentials) are able to sign in and access their database page where they can save passwords and requests passwords from the server. There will be no communication between users and all credentials will be encrypted and properly stored. Administrators will not have access to user accounts and will only have access to their own personal account. 
We will define quality gates for our project as the following:
* Privacy
   * Critical
1. Secure user accounts
   1. Ex: Changes in the URL gives unauthorized access to user storage page.
2. Lack of user control
   1. Ex: There is no way to edit/delete stored passwords once in the system.
3.  Improper use of stored session data
   1. Ex: Once the window is closed and accessed again at the same website, the user is still logged in.
4. Lack of Data protection
   1. Ex: Usernames and passwords are stored in plain text and easily accessed. Requested passwords are shown on screen and not prompted to enter password again.
5. Password fields
   1. Ex: Passwords are uncensored
* Important
1. Lack  of user control
   1. Ex: Stored usernames/passwords are editable but cannot be deleted.
2. Lack of data protection
   1. Requested passwords are shown and not prompted to re-enter password
* Moderate & Low
1. None
* Security
Critical
* Information disclosure
   * Ex: Database is attacked and stored usernames and passwords are easily read by unauthorized users .
Important
* Tampering 
   * Ex: Malicious code isn’t validated and used to modify data in the database.
* Repudiation 
   * Ex: Unauthorized access to reset other user’s passwords.
* Elevation of privilege
   * Ex: Adversaries can elevate their privilege to admin in order to unlock other user’s accounts.
Moderate
* Denial of Service
   * Ex: Overloaded server with sessions and unable to give access to other users.
Low
* Spoofing
   * Ex: Malicious email is sent to registered users to update their credentials but sent to hackers.
Risk Assessment Plan for Security and Privacy:
* According to the article by microsoft “Appendix C: SDL Privacy Questionnaire” made to assess the risks of our project. Our application software is related to the transfer of user information and password data, so I determine this application has a  privacy impact rating of P2 because of the reasons:
- First,the application needs to store and transfer large amounts of user personal information, i.e account username and password. All credentials that the user decides to save on our server will be encrypted and secured to the best of our ability. 
- Second, users are not required to install new software or change file type. This Increases the convenience for users while also reducing the requirements for the application software.
For each functionality we decide to implement, our team plans to focus on building models around potential security threats around them. We will keep an open google document for us to share and keep note of every potential threat that may come up. This google document will hold the expected outcomes of every functionality and if it passed the tests that we made.
Design Requirements: 
* Password inputs
   * Censor all input fields that involve the use of passwords. This will increase security and privacy in our project by limiting the scope of potential bystanders that may be looking at the user’s screen. 
* Field inputs
   * Every field input may be a potential threat by injections, XSS, buffer overflows. For these reasons, we may need to set a limit on the amount of characters that are allowed in an input and disable the user of escape symbols. 
* Database
   * Password credentials that the user decides to save on our application will need to be encrypted and only accessible with the user’s master password. 
* Login
   * We will need to design a security aspect around failed login attempts. To help prevent any brute force attack or DOS attack, we can slow down the requests made at the login to disable after 3 failed attempts. 
* Sessions
   * After 10 minutes of inactivity, the user will be automatically logged out by the server to reassure the possibility of unauthorized accessibility from potential bystanders. 
* Encryption
   * We will need to incorporate strong encryption functionality to our application to ensure the safety and privacy of our users
* Hashing
   * The master password will be hashed with a salt in our database as a one-way function. This is to ensure that if any malicious user gets to the database, it will still be difficult for this malicious user to brute force their attack.
* Logout
   * We will be incorporating JWTokens to be stored in localstorage of the user to ensure authentication. We will be clearing the local storage of the user after logging out to ensure that they aren’t able to go back to their profile page without logging back in.
Attack Surface Analysis and Reduction:
Our team has decided against creating multi-level user accounts due to unnecessary risks.  We found that having an administrator account that has access to all user accounts would be too risky, and the web application would be designed to function without the need of this higher privileged user in order to reduce that risk.  Thus, the privilege levels for our users will be limited to a single level of access.  Each user can only access their information and there will be no “master” account that will have privileges above the registered users.  This will reduce our attack surface to individual accounts. 
Some of the vulnerabilities that will be an area of focus would include:
1. User login
2. Database access
3. Password recovery
4. Running active sessions that haven’t been closed
5. All input fields


In order to reduce the chance of exploiting these attack surfaces, we plan on implementing safeguards.  These safeguards include:
1. Limiting failed login attempts resulting in locking the account.
2. Validating access to the database and restricting it to user access.
3. Establishing password recovery procedures to reset passwords of locked accounts by way of authorization through security question verification.
4. Instilling a timed logout once sessions are idle for too long.
5. Coding input parameters on all fields to deter injection of code.
Threat Modeling: 


  



Possible Threats by Category:
1. Denial Of Service
a)     Data Flow HTTP Is Potentially Interrupted
b)     Potential Process Crash or Stop for Login
c)     Potential Excessive Resource Consumption for Main Page or Database
d)     Data Flow User Access Is Potentially Interrupted
e)     Data Store Inaccessible
f)      Potential Process Crash or Stop for Main Page
g)     Data Flow Retrieved Password Is Potentially Interrupted
2. Information Disclosure
a)     Data Flow Sniffing
b)     Weak Access Control for a Resource
3. Repudiation
a)     Potential Data Repudiation by Login
b)     Data Store Denies Database Potentially Writing Data
c)     Potential Data Repudiation by Main Page
4. Spoofing
a)     Spoofing the Human User External Entity
b)     Spoofing the Login Process
c)     Spoofing of Destination Data Store Database
d)     Spoofing of Source Data Store Database
e)     Spoofing the Main Page Process
f)      Spoofing the Main Page Process
      5.    Tampering
a)     Web Application Process Memory Tampered
b)     Password Reset Process Memory Tampered
c)     Cross Site Scripting
d)     Main Page Process Memory Tampered
e)     Potential Lack of Input Validation for Login
f)      Persistent Cross Site Scripting
g)     The Database Data Store Could Be Corrupted
Implementation
Approved tools 
Our team is developing our web application using the Windows 10 operating systems.  Within this system we are creating our application through various programs that author, edit, and run JavaScript.  The approved tools for our project are as follows:
1.        JavaScript Integrated Development Environment (IDE)
a.        IntelliJ Idea Ultimate
i.        Version 2018.3.4
ii.        Source code editor
iii.        Build automation tool
iv.        Debugger
2.        Development Framework
a.        Semantic UI React
i.        Version 2.4.2
ii.        User Interface framework
iii.        Website theme
3.        Runtime Environment
a.        Node.js
i.        Version 10.15.1
ii.        Command line tool for Windows to run dynamic web pages.
iii.        Executes JavaScript code outside a web browser
4.        Database
a.        MongoDB
i.        Version 4.2.7 2008R2Plus SSL
ii.        Compass Community
iii.        NoSQL database
Deprecated/Unsafe functions
React
1. componentWillMount()
   1. Use constructor for stuff that doesn’t produce side-effects
2. componentWillReceiveProps()
   1. getDerivedFromProps()
3. componentWillUpdate()
   1. getSnapshotBeforeUpdate
4. <a href={}>
   1. onClick()
   2. onSubmit()
5. FactoryComponent()
Node.js
1. eval()
   1. JSON.parse()
   2. Validate input with Joi
2. setInterval()
   1. Promises .then()
3. setTimeout
   1. Promises .then()
4. child_process.exec()
   1. child_process.execFile()
MongoDB
1. findOneAndModify()
   1. findAndModify
2. remove()
   1. deleteOne
   2. deleteMany
3. update()
   1. udateOne()
   2. updateMany()
   3. replaceOne()


Static Analysis: 
        We will be using ESLint v7.2.0 as our static analysis tool during the development process. We decided to use ESLint because we all shared the same prior experience with this tool and deemed it as the most appropriate. ESLint provides us with writing quality code and fixing coding style issues by issuing warnings as we are developing. This tool also helps us cover syntax errors and loosely written code that we would habitually write when writing other applications. This ensures that we all share the same coding habits which allows us to have the same readability and transparency throughout the development process. 
        The difficulties that we faced when using this static analysis tool is that ESLint does not require us to compile the code and is an ongoing tool while we code. The warnings and syntax errors are being checked dynamically as we write code, so an unfinished line of code can be distracting and uneasy to look at while we are coding. Variables that are declared early on to use later in the code can look deceiving because of ESLint’s ability to gray out the variable when not in use. Also, ESLint does some unnecessary checks for misspelled or abbreviated variable names. This makes Lines much longer than necessary and can sometimes make code harder to read.
        However, ESLint can make it easy to pinpoint where unused variables are and helps us developers see what problems may occur. If functions are missing the required parameters, ESLint shows what we are missing. Importing unnecessary imported packages and unused components can be easily detected to make code easier to understand and read. ESLint makes it easier to write concise code by pinpointing certain areas where redundant code is used.


Dynamic Analysis: 


Our team chose the analysis tool called “XHR (XMLHttpRequest)” to help us do dynamic analysis for our project. XHR is an API in the form of an object whose methods transfer data between a web browser and a web server. Unlike static analysis, dynamic analysis helps us collect the behavior of the code during execution when running data and dynamic analysis has a recording function. Through this function, our team can analyze the details of the code in the process of running and visualize it, which is an effect that static analysis cannot prof. 


Usage of  XHR (XMLHttpRequest) :
* Request data from a web server
* Check code quality
* Runtime test cases
* Realtime code visualizations
* Intercept eval, setTimeout etc.
* Send error, warning etc.
* Update a web page without reloading the page
* Visual learning


The process and experience of using XHR for dynamic analysis:


The way to use XHR is simpler than other dynamic analysis tools, because it comes with the browser therefore no software needs to be installed. Npm starts a React project in a local file and opens in a supported browser such as Safari, Opera, Google Chrome, etc. Select the JavaScript Sources under Development tools, and make sure to click “XHR/fetch Breakpoints” to use XHR. The browser displays a fault with the certificate which we are using for the web server because it’s not actually signed, but with this tool, we are able to see how data is being transferred from the server and client.


Login Page and Login Components:
 The main focus of the users input in the login page are “Email” and “Password”. When both of the inputs are null or incorrect, the dynamic analysis verifies the detail of requestData and sends an error message while blocking connectivity. The function that analyzes this page uses:
* Code tracking
* Error blocking message


Signup page and Signup Components:
        The users input in the signup page are “First Name”, “Last Name”, “Email”, “ Password” and “Security Question”. When the input value does not meet the requirements, the dynamic analysis verifies the detail of requestData and sends an error message while blocking connectivity. When the input value meets the requirements, it returns to the login page and shows those inputs in requestData without reloading the web page. The function that analyzes this page uses:
* Check code quality
* Send error, warning etc
* Update a web page without reloading the page
* Error blocking message


Profile page components
        We are using the JWToken to validate the user each time they log in and will be valid for 10 minutes. Each time the user makes a request to the server, the server will check this token for validity and pull the payload consisting of the email of the user and use this data to perform queries on the database. 
* Shows what token is being transferred
* Steps the token takes to be valid
This tool allows us to debug code on the network and watch how data is being transferred. We are able to step through to the next functions/breakpoints and step back to see what data is being manipulated/used when making client/server requests. We are also able to act as a hacker to intercept transferring information. Since we are using JSON web tokens, the server validates these tokens to see if they have been tampered with.
One concern our team has come across is the performance of this tool. When the server sends an error to the client, there are a lot of different functions that the code needs to go through in order to send this to the client. This takes up a lot of unnecessary time in the debugging process.


Attack Surface Review: 
Our team performs regular inspections on the information from assignment 2, such as the progress of the project, newly added patches or tools.etc. According to “Attack Surface Analysis Cheat Sheet” as a reference, we do a comprehensive analysis of this development change. (Reference article link: https://cheatsheetseries.owasp.org/cheatsheets/Attack_Surface_Analysis_Cheat_Sheet.html).


Newly added patches or tools for development：
  ESLint
* Version v7.2.0
* Static analysis tools
* Completely pluggable, Uses an AST to evaluate patterns in code.


XHR (XMLHttpRequest)
* Web built-in tools
* Dynamic code analysis for JavaScript
* Request data from a web server
* Intercept runtime informations


IntelliJ Idea Ultimate, Semantic UI React, Node.js, MongoDB  are the approved tools that remain in the current app version. Normally, an application's Attack Surface will increase over time as we add more interfaces and user types and integrate with other systems. Our team will continue to find ways to simplify the model, thereby reducing the size of the attack surface. More tools or patches will be introduced in the future to implement attack detection.


Fuzz Testing
1. One way our team decided to hack our application was through the JWTokens that were used to authenticate requests to retrieve stored user profile credentials. With the use of our dynamic analysis tool that is free for everyone to use, we were able to find the data that was being sent as well as the route to the server it requests from. The data being sent to the server contained a JWToken. By using the website (“https://jwt.io/”), assuming us, the attackers, already knew what email addresses were in use, we manipulated the token to contain an already known user for the website. Then by using postman, we could make a request to the route which retrieves all profile credentials. Fortunately, the response from the server was a forbidden status which means users are not authorized to access other user’s accounts with a manipulated token.
2. Another technique that our team used in an attempt to hack into our application was to test Cross Site Scripting (XSS) on every field that required an input. This method of testing will reveal any unhandled user input which would allow unauthorized code to be embedded in the database.  This code could be malware, a link to a malicious site, or damage to the database itself.  For our testing purpose, we used:
1)        A simple script tag to display an alert message, 
a.        “<script> alert("This Could’ve Been A Worm!") </script>”
2)        An image XSS using the JavaScript directive,
a.        “<INPUT TYPE="IMAGE" SRC="javascript:alert(' This Could’ve Been A Worm!');">”
3)        A JavaScript fromCharCode that doesn’t use quotes
a.        “<IMG SRC=javascript:alert(String.fromCharCode(88,83,83))>”
Each attempt proved unsuccessful thus resulting in recording each attempted command as a variable input.  The registration form component has protected error handling fields that do not allow special characters with the exception of the password field.  This field, as well as all of the fields located in the profile page, are registered as properties to a variable which accepts all input as such, and doesn’t allow a command to be executed.


3. The last technique that was selected to hack our system was a brute force attack to crack the user password, the password is calculated one by one until the real password is found. To perform our brute force attack, the first step we had to do was determine the target account exists. By using the signup page or forgot password page, we could design a system to run known email addresses on the form and note which ones came back as already registered. Theoretically, this may be a potential attack however for the purposes of this hack, we knew the email addresses that were already registered. The second step is to start trying different password combinations to crack user passwords. Theoretically, a heavy Brute Force Login attack launched simultaneously on multiple computers can have an impact of a DDoS attack: 
* Websites become unresponsive
* Sites may display an “Error connecting to database”
* The server load increases sharply
        After 3 failed attempts, the user is locked out and would need to refresh the page to continue. From the perspective of cryptography, a multi-digit password can be completed by countless combinations, and for each additional digit, the password combination increases exponentially by times. Our application requires the user password to be a minimum of 10 digits in length and must have at least 1 upper case letter, 1 number and 1 special character. The minimum requirements for this password make brute force attacks on user’s accounts considerably long, while also taking into account the many times the attacker would need to refresh the page. Having the security measure to disable all inputs after 3 attempts would also prevent DDOS attacks on the server.


Static Analysis Review 
        After running a full inspection with our version of ESLint (V7.2.0). We had received 0 errors and warnings. Although we had most complaints about functions that weren’t recognized through the express package router, we were able to safely disable these warnings. ESLint made it easier for use to quickly check what files had unused variables/functions, deprecated functions, and unterminated functions. After fixing these errors as we code, we were able to fix these complaints which made it easier for us to code and see what is actually being utilized. We were also able to cut down our attack surface as these unused functions and variables could have been targets for exploit in our project. 


Dynamic Analysis Review 
        We were able to use the XHR dynamic analysis tool to indicate how our data is being sent from the client to the server. This tool made it possible for us to see in runtime how our application communicates between the client and server. Our team also decided to incorporate the use of an application called Postman. With Postman, we are able to send requests directly to the server to test authorization issues. In combination with the XHR dynamic analysis tool, we were able to see what requests were made to the server. One specific example of this is when the client makes requests to the server to retrieve all documents containing the user’s email address. These requests are sent with a JSON web token containing the payload of the user’s email address. By having this information, we tried to manipulate this web token through the website (“https://jwt.io/”) to contain an email address different from the actual user. And as expected, the response from the server came back as a Forbidden status. This means that no user is able to access another person’s database data without proper authorization.
Release
Incident Response Place
Roderick Tabalba
* Security engineer
   * Responsible for all security related aspects of the application
   * Upkeep and enhance security features surrounding user’s private data when available
   * Monitor the network for malicious events (DDOS attacks, Intercepted data)
* Escalation manager
   * Organize team’s plan on handling newly added features using Github and the team’s Kanban board
   * Responding to bugs/issues from users on our Github project page
   * Monitor team and construct devise plans for moving forward with new applications
Peter Newton
* Legal representative
   * Responsible for documenting all legal concerns that relates to the team
   * Devising write-ups to explain what our team is/isn’t responsible for
   * Provide legal assistance if issues would ever so arise
Weile Lin
* Public relations
   * Create documentation on how the application is supposed to work
   * Respond to all questions relating to our application
   * Create and design the look and feel of our application


        Our team has decided to make our application open sourced as a reference to our peers who are devising secure applications. We will be keeping all source files open on our Github page and users are welcome to try our application and give security related feedback on how we can improve our system. That being said, our application will not be responsible for any intellectual property or confidential information kept on our site and will only be used for entertainment purposes. Users may be able to contact us on our main Github page “https://github.com/Crypto-Knights/PasswordManager,” where they are able to post issues concerning the security aspects of our application. In case of an emergency, contact of the security engineer/escalation manager will be available for use at tabalbar@hawaii.edu. Issues made on our Github page will be addressed as soon as possible and will be responding to the most voted concern. Roderick Tabalba will be in charge of devising plans moving forward to fix these issues/concerns that users may come across and will contact the security team on the necessary changes that are to be implemented.


Final Security Review
        After countless iterations and thorough analysis of our application, we investigated all aspects of security surrounding every feature of our application. To address the critical issues of information disclosure, newly created users are allowed one account per email address and properly stored their master password in our database. This master password has the minimum requirements to have 1 uppercase letter, 1 lowercase letter, 1 number, 1 symbol, and be at least 10 digits long. This password is also properly stored in the database as being a hash value with salt. The importance of this security measure is if an attacker ever gets access to our database and retrieves this password, it will take a long time to crack because of the complex nature of hashing with salts as well as the minimum requirements. Profile passwords are also properly stored and retrieved by authorized users by being encrypted in the database as well as the client front end. If and only if the authorized user at the time of a valid token proceeds to enter his/her master password, this encrypted password is decrypted for the user.
        Next we analyzed the important quality gates we set for our application. Tampering, Repudiation, and elevation of privilege has been validated with proper use of JWTokens. Upon authorization of login, the user is granted a JWToken that is valid for 10 minutes. After 10 minutes, any action granted by the user or malicious attacker is granted access denied to contents of the profile page and will be immediately logged out. By having this security measure in place, even if a user happens to forget to log out, this puts a time limit on how fast an attacker would need to proceed to get unauthorized access to the user’s database. In the event that a user forgets their password, security questions are put in place to change passwords. Upon successful completion of answering the user’s security question, the user is granted authorization to change his/her password. The answer to the security question will also be hashed to the database to ensure maximum protection on the user’s account. 
        We considered DOS attacks as a moderate evaluation of security to our system and has also been addressed in our application. Steps have been put in place to prevent DOS attacks from happening on the login screen. This is also to prevent front-end brute force attempts on passwords of users. After 3 failed attempts, the user would need to proceed to refresh the page in order to restore functionality of logging in. This also reminds the user that he/she may have forgotten their password and to attempt to change their password instead. Again, DOS attacks are inevitable if a malicious attacker attempts to make multiple requests that overload the server from different acting devices.
        The last quality gate we graded with low severity is spoofing. We don’t have any features in place to communicate with other users or have emails that set out from our team. That being said, users should be aware that any emails that come are sent to them claiming to be from our application is invalid. 
        Lastly, we believe that we have successfully accomplished all security requirements posed on our threat model. 
  

The user is able to create one account per email with a secure master password, and is properly stored as a hash value with salt in the database. After successfully logging in, the user is granted a valid token that is set to expire in 10 minutes and able to access their profile page where they can save profile accounts. These profile accounts are displayed for the user as the name of service, email, and an encrypted password hidden under the GUI interface. If and only if the user re-enters his/her password, he/she will be granted authorization to view their password. Upon successful logging out, the valid token is cleared from the user’s localStorage and will not be able to access the profile page till they log in again. In the event of a lost password, the user will be prompted to enter their email address and answer to their security question and be granted authorization to change their password. In conclusion, we have decided to give our application a passing FSR grade.
Certified Release and Archive Report
Access to the Beta Version 1.0 of our application can be found at:
“https://github.com/Crypto-Knights/PasswordManager/releases”


        Version 1.0 marks the release of the beta version of our application, Password Manager. Version 1.0 comes with full compatibility to popularly known browsers, safari, google chrome, and Firefox. You must have MongoDB atlas installed to run our application.
To get started with our application, first point your browser to “https://github.com/Crypto-Knights/PasswordManager/releases” and download our most recent version of the application. Then, open up your text editor with two terminals. Cd into the src directory on one terminal and run the command npm start to run the client, and in another terminal cd into the api directory and run the command nodemon Server to run the server. Create an account with the valid necessary credentials and login to access the profile page. 
        Future versions of our application will be built surrounding the security aspects of our application. Any issues/suggestions made on our Github issues page will be analyzed and may or may not be implemented into our application as newly added features depending on the severity flaw of the issue.