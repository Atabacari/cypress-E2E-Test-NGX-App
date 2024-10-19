import { navigateTo } from "./navigationPage"

/**
 * Class representing the actions and locators for the Form Layouts page.
 */
export class FormLayoutsPage {
    // Locator block

    /**
     * Method to get a specific card on the page by its title.
     * @param {string} titleCard - The title of the form (nb-card) to locate.
     * @returns {Cypress.Chainable} - The located nb-card element.
     */
    nbCard(titleCard) {
        return cy.contains('nb-card', titleCard); // Finds the card with the specific title
    }

    /**
     * Method to locate the "Name" input field within a form.
     * @param {string} titleCard - The title of the form (nb-card) containing the input.
     * @returns {Cypress.Chainable} - The input element for entering the name.
     */
    inputName(titleCard) {
        return this.nbCard(titleCard).find('[placeholder="Jane Doe"]'); // Finds the "Name" input field
    }

    /**
     * Method to locate the "Email" input field within a form.
     * @param {string} titleCard - The title of the form (nb-card) containing the input.
     * @returns {Cypress.Chainable} - The input element for entering the email.
     */
    inputEmail(titleCard) {
        return this.nbCard(titleCard).find('[placeholder="Email"]'); // Finds the "Email" input field
    }

    /**
     * Method to locate the "Password" input field within a form.
     * @param {string} titleCard - The title of the form (nb-card) containing the input.
     * @returns {Cypress.Chainable} - The input element for entering the email.
     */
    inputPassword(titleCard) {
        return this.nbCard(titleCard).find('[type="password"]') // Finds the "Password" field
    }

    /**
     * Method to locate the checkbox within a form.
     * @param {string} titleCard - The title of the form (nb-card) containing the checkbox.
     * @returns {Cypress.Chainable} - The checkbox element.
     */
    checkBox(titleCard) {
        return this.nbCard(titleCard).find('[type="checkbox"]'); // Finds the checkbox
    }

    /**
     * Method to locate the radio buttons within a form.
     * @param {string} titleCard - The title of the form (nb-card) containing the checkbox.
     * @param {number} index - The index of the radio button on the form
     * @returns {Cypress.Chainable} - The checkbox element.
     */
    radioButton(titleCard, index) {
        return this.nbCard(titleCard).find('[type="radio"]').eq(index)
    }
    /**
     * Method to locate the "Recipients" input field within a form.
     * @param {string} titleCard - The title of the form (nb-card) containing the input.
     * @returns {Cypress.Chainable} - The input element for entering the email.
     */
    inputRecipients(titleCard) {
        return this.nbCard(titleCard).find('[placeholder="Recipients"]')
    }
    /**
     * Method to locate the "Subject" input field within a form.
     * @param {string} titleCard - The title of the form (nb-card) containing the input.
     * @returns {Cypress.Chainable} - The input element for entering the email.
     */
    inputSubject(titleCard) {
        return this.nbCard(titleCard).find('[placeholder="Subject"]')
    }
    /**
     * Method to locate the "Message" text area within a form.
     * @param {string} titleCard - The title of the form (nb-card) containing the input.
     * @returns {Cypress.Chainable} - The input element for entering the email.
     */
    inputMessage(titleCard) {
        return this.nbCard(titleCard).find('[placeholder="Message"]')
    }
    /**
     * Method to locate the "First Name" input field within a form.
     * @param {string} titleCard - The title of the form (nb-card) containing the input.
     * @returns {Cypress.Chainable} - The input element for entering the email.
     */
    inputFirstName(titleCard) {
        return this.nbCard(titleCard).find('#inputFirstName')
    }

    /**
     * Method to locate the "Last Name" input field within a form.
     * @param {string} titleCard - The title of the form (nb-card) containing the input.
     * @returns {Cypress.Chainable} - The input element for entering the email.
     */
    inputLastName(titleCard) {
        return this.nbCard(titleCard).find('#inputLastName')
    }

    /**
     * Method to locate the "Website" input field within a form.
     * @param {string} titleCard - The title of the form (nb-card) containing the input.
     * @returns {Cypress.Chainable} - The input element for entering the email.
     */
    inputWebsite(titleCard) {
        return this.nbCard(titleCard).find('#inputWebsite')
    }







    // Action block

    /**
     * Method to select the radio buttons within a form.
     * @param {string} titleCard - The title of the form (nb-card) containing the checkbox.
     * @param {number} index - The index of the radio button on the form
     * 
     */
    selectRadioButtonByIndex(titleCard, index) {
        this.radioButton(titleCard, index).check({ force: true })

    }

    /**
     * Method to click and check the checkbox within the specified card.
     * @param {string} titleCard - The title of the form (nb-card) containing the checkbox.
     */
    clickCheckbox(titleCard) {
        this.checkBox(titleCard).check({ force: true }); // Checks the checkbox, using { force: true } to bypass hidden or disabled elements
    }

    /**
     * Method to click the submit button within the form.
     * @param {string} titleCard - The title of the form (nb-card) containing the submit button.
     */
    clickSubmit(titleCard) {
        this.nbCard(titleCard).find('button').click() // Submits the form
    }

    /**
     * Method to validate the Emails input field
     * @param {string} titleCard - The title of the form (nb-card) containing the submit button.
     */

    validateEmailField(titleCard) {
        // Expected error message for invalid email format
        const errorMessage = "muss ein @-Zeichen enthalten"; // Use partial match for more flexibility

        // Check that the email field is invalid and the message contains the expected text
        formLayoutsPage.inputEmail(titleCard)  // Select the field by its id using the :invalid pseudo-class
            .invoke('prop', 'validationMessage') // Get the error message through the validationMessage property
            .should('include', errorMessage);    // Verify that the message includes the expected part of the text
    }


}

export const formLayoutsPage = new FormLayoutsPage();
