export class WindowPage {
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
     * Locates the button to open the form  inside a specific card and with a specific title.
     * @param {string} titleCard - The title of the card containing the button.
     * @param {string} titleButton - The label of the button to locate.
     * @returns {Cypress.Chainable} - The located button element within the card.
     */
    buttonWindow(titleCard, titleButton) {
        return this.nbCard(titleCard).find('button').contains(titleButton);
    }

    /**
     * Locates the window card.
     * @returns {Cypress.Chainable} - The located nb-dialog-container element.
     */
    windowCard() {
        return cy.get('nb-window');
    }
    /**
         * Locates the close button.
         * @returns {Cypress.Chainable} - The located nb-dialog-container element.
         */
    buttonClose() {
        return this.windowCard().find('button').eq(2)
    }

    minusButton() {
        return this.windowCard().find('button').eq(0)
    }


    // Action block

    /**
   * Opens a window by clicking a button inside a specific card.
   * @param {string} titleCard - The title of the card containing the button to open the dialog.
   * @param {string} titleButton - The label of the button to click.
   */
    clickOpenWindowButton(titleCard, titleButton) {
        this.buttonWindow(titleCard, titleButton).click();
    }

    /**
     * Closes the currently open window by clicking the 'Close' button.
     */
    clickCloseButton() {
        this.buttonClose().click();
    }

    clickMinusButton() {
        this.minusButton().click()
    }


}

export const windowPage = new WindowPage();