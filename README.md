# Braxton M | UCBC3_PasswordGenerator | README

In this challenge, we were tasked with a list of acceptance criteria (featured below this section) that would fix the following issues with the JavaScript File:

* Generating a new password for a new user
* Allowing the user to choose what variables would be used in their password
* Having the password be randomized based on the variables they choose
* Allow the user to request more customized passwords without having to reload the page

The original code of the assignment gave us the layout of the page without the logic of the function to generate the password

* Need to define variables
* Need to check that the password falls between 8 - 128 characters
* Need to log the variables the user has selected and output a password
* Need the ability to repeat the function

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Screenshots

Screenshots follow the order of the code and define sections 

* Screenshot 1: Defining Variables
* ![Defining Variables](../UCBC3_PasswordGenerator/Assets/Screenshots/screenshot%201.JPG)
* Screenshot 2: Making sure length of password meets length criteria / starts password
* ![Password Variables](../UCBC3_PasswordGenerator/Assets/Screenshots/screenshot%202.JPG)
* Screenshot 3: Checking to make sure the user inputs one accepted criteria / Registers the variable they are asking for to be included
* ![Accepted Criteria](../UCBC3_PasswordGenerator/Assets/Screenshots/screenshot%203.JPG)
* Screenshot 4: Returns the function and allows each place in the password to be randomized with the Math.floor and Math.random functions 
* ![Password Ranomization](../UCBC3_PasswordGenerator/Assets/Screenshots/screenshot%204.JPG)
* Screenshot 5: Function writePassword runs and clears the previous entry before it runs the generate password function
* ![Password reset](Assets/Screenshots/screen%20shot%205.JPG)

## Noteable Links

 - [Github Profile](https://github.com/BrackyM)
 - [Github Challenge 3 Repository](https://github.com/BrackyM/UCBC3_PasswordGenerator)
 - [Challenge 1 Live Site](https://brackym.github.io/UCBC3_PasswordGenerator/)

 ## Contributing Classmates

Classmates that I collaborated with on completing the assignment and bug fixing for eachother

 - [Sky Texier Github](https://github.com/skytexier)
 - [Khiem Phung Github](https://github.com/phungxkhiem)
 - [Ishi Anand Github](https://github.com/ianad389)