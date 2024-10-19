/// <reference types="cypress" />
import { formLayoutsPage } from "../support/page_objects/formLayoutsPage"
import { navigateTo } from "../support/page_objects/navigationPage"

// Test data
const fullName = "James Bond"
const firstName = "James"
const lastName = "Bond"
const email = "jamesBond@gmail.com"
const notEmail = "notEmail"
const password = "007"
const recipients = "Lady Bond"
const subject = "Save the World"
const message = "Seek and destroy"
const webSite = "https://www.google.com/"

describe('Form layouts test', () => {
    beforeEach('open application', () => {
        // Open the home page before each test
        cy.openHomePage()
        navigateTo.formLayoutsPage() // Navigate to the accordion page

    })


    it('should submit Inline form', () => {
        const form = "Inline form" //Form title used to locate the correct form card

        // Fill in the "Name" input field
        formLayoutsPage.inputName(form).type(fullName)
        // Fill in the "Email" input field
        formLayoutsPage.inputEmail(form).type(email)
        // Check the checkbox
        formLayoutsPage.clickCheckbox(form)
        // Submit the form
        formLayoutsPage.clickSubmit(form)



    })

    it('should sign in Using the Grid and select radio buttons', () => {
        const form = "Using the Grid" // Form title used to locate the correct form card

        // Fill in the "Email" input field with a valid email address
        formLayoutsPage.inputEmail(form).type(email)

        // Fill in the "Password" input field with a valid password
        formLayoutsPage.inputPassword(form).type(password)

        // Select the first radio button (Option 1)
        formLayoutsPage.selectRadioButtonByIndex(form, 0)

        // Verify that the first radio button (Option 1) is checked
        formLayoutsPage.radioButton(form, 0).should('be.checked')

        // Verify that the second radio button (Option 2) is not checked
        formLayoutsPage.radioButton(form, 1).should('not.be.checked')

        // Select the second radio button (Option 2)
        formLayoutsPage.selectRadioButtonByIndex(form, 1)

        // Verify that the first radio button (Option 1) is no longer checked
        formLayoutsPage.radioButton(form, 0).should('not.be.checked')

        // Verify that the second radio button (Option 2) is now checked
        formLayoutsPage.radioButton(form, 1).should('be.checked')

        // Verify that the third radio button (Disabled Option) is disabled
        formLayoutsPage.radioButton(form, 2).should('be.disabled')

        // Click the "Sign In" button to submit the form
        formLayoutsPage.clickSubmit(form)


    })


    it('should show a warning message after submitting the form when email is not valid', () => {
        // The form title used to locate the correct form card
        const form = "Using the Grid";
        // Input invalid email (without @) into the email field
        formLayoutsPage.inputEmail(form).type(notEmail);
        // Check that the email field is invalid and the message contains the expected text
        formLayoutsPage.validateEmailField(form)

        formLayoutsPage.clickSubmit(form);
    });

    it('should submit Basic Form', () => {
        // The form title used to locate the correct form card
        const form = "Basic form";

        // Input invalid email (without @) into the email field
        formLayoutsPage.inputEmail(form).type(notEmail)
        // Check that the email field is invalid and the message contains the expected text
        formLayoutsPage.validateEmailField(form)
        // Fill in the "Email" input field with a valid email address
        formLayoutsPage.inputEmail(form).type(email)
        // Fill in the "Password" input field with a valid password
        formLayoutsPage.inputPassword(form).type(password)
        // Check the checkbox
        formLayoutsPage.clickCheckbox(form)
        formLayoutsPage.checkBox(form).should('be.checked')
        // Submit the form
        formLayoutsPage.clickSubmit(form)

    })

    it('should send the Form without labels ', () => {
        // The form title used to locate the correct form card
        const form = "Form without labels";

        // Fill in the "Recipients" input field
        formLayoutsPage.inputRecipients(form).type(recipients)
        // Fill in the "Subject" input field
        formLayoutsPage.inputSubject(form).type(subject)
        // Fill in the "Message" input field
        formLayoutsPage.inputMessage(form).type(message)
        // Submit the form
        formLayoutsPage.clickSubmit(form)

    })

    it('should sign in  the Horizontal form', () => {
        // The form title used to locate the correct form card
        const form = "Horizontal form";

        // Input invalid email (without @) into the email field
        formLayoutsPage.inputEmail(form).type(notEmail)
        // Check that the email field is invalid and the message contains the expected text
        formLayoutsPage.validateEmailField(form)
        // Fill in the "Email" input field with a valid email address
        formLayoutsPage.inputEmail(form).type(email)
        // Fill in the "Password" input field with a valid password
        formLayoutsPage.inputPassword(form).type(password)
        // Check the checkbox
        formLayoutsPage.clickCheckbox(form)
        formLayoutsPage.checkBox(form).should('be.checked')
        // Submit the form
        formLayoutsPage.clickSubmit(form)


    })

    it('should submit the Block form', () => {
        // The form title used to locate the correct form card
        const form = "Block form";

        formLayoutsPage.inputFirstName(form).type(firstName)
        formLayoutsPage.inputLastName(form).type(lastName)
        formLayoutsPage.inputEmail(form).type(email)
        formLayoutsPage.inputWebsite(form).type(webSite)


        // Submit the form
        formLayoutsPage.clickSubmit(form)


    })

})


