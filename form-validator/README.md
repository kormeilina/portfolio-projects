## Form Validator
  
This script provides validation for a form. It checks whether all input fields are filled, validates email format, and verifies that passwords match. Additionally, it ensures that only one gender option can be selected at a time.

## Features
  
Form field validation: Checks that all form fields are filled.
Email validation: Ensures the input in the email field conforms to the standard email format.
Password matching: Verifies that the password and confirm password fields match.
Radio button control: Ensures that only one gender can be selected. If a user selects 'Female', the 'Male' radio button is disabled, and vice versa.
  
## Code Organization
The validation logic is encapsulated in a Validator class:
  
validateForm() method: Checks that all form fields are filled, adds an error class to any unfilled fields, and checks whether the entered email is valid.
isEmail() method: Checks whether a string matches the standard email format.