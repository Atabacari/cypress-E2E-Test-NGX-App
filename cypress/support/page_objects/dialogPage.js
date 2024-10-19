/**
 * Class representing the actions and locators for the Dialog page.
 */
export class DialogPage {
    // Locator block

    /**
     * Locates a specific card on the page by its title.
     * @param {string} titleCard - The title of the card (nb-card) to locate.
     * @returns {Cypress.Chainable} - The located nb-card element.
     */
    nbCard(titleCard) {
        return cy.contains('nb-card', titleCard); // Finds the card with the specific title
    }

    /**
     * Locates the dialog container.
     * @returns {Cypress.Chainable} - The located nb-dialog-container element.
     */
    dialogContainer() {
        return cy.get('nb-dialog-container');
    }

    /**
     * Locates the button inside a specific card and with a specific title.
     * @param {string} titleCard - The title of the card containing the button.
     * @param {string} titleButton - The label of the button to locate.
     * @returns {Cypress.Chainable} - The located button element within the card.
     */
    buttonDialog(titleCard, titleButton) {
        return this.nbCard(titleCard).find('button').contains(titleButton);
    }

    /**
     * Locates the title element inside the dialog.
     * @returns {Cypress.Chainable} - The located title element within the dialog container.
     */
    dialogTitel() {
        return cy.get('nb-dialog-container nb-card-header');
    }

    // Action block

    /**
     * Dismisses the currently open dialog by clicking the 'Dismiss Dialog' button.
     */
    dismissDialog() {
        this.dialogContainer().find('button').contains('Dismiss Dialog').click();
    }

    /**
     * Closes the currently open dialog by clicking the 'Close Dialog' button.
     */
    closeDialog() {
        this.dialogContainer().find('button').contains('Close Dialog').click();
    }

    /**
     * Opens a dialog by clicking a button inside a specific card.
     * @param {string} titleCard - The title of the card containing the button to open the dialog.
     * @param {string} titleButton - The label of the button to click.
     */
    openDialog(titleCard, titleButton) {
        this.buttonDialog(titleCard, titleButton).click();
    }

    /**
     * Inputs a name into the dialog's input field.
     * @param {string} name - The name to input into the form.
     */
    inputName(name) {
        this.dialogContainer().find('input').type(name);
    }

    /**
     * Clicks the 'Submit' button in the dialog to submit the form.
     */
    clickSubmitButton() {
        this.dialogContainer().find('button').contains('Submit').click();
    }

    /**
     * Verifies that the given names are displayed in a list within a card.
     * @param {string} titleCard - The title of the card containing the list.
     * @param {string[]} names - The array of names to verify.
     */
    checkData(titleCard, names) {
        names.forEach((name, index) => {
            this.nbCard(titleCard).find('ul li').eq(index).should('contain', name);
        });
    }
}

export const dialogPage = new DialogPage();
