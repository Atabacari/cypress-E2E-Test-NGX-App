/**
 * A class representing the Popover Page.
 */
export class PopoverPage {
    /**
     * Locates a button element by its title.
     *
     * @param {string} titleButton - The title of the button to locate.
     * @returns {Cypress.Chainable<Element>} - The Cypress chainable object for the located button.
     */
    button(titleButton) {
        return cy.get('button').contains(titleButton);
    }

    /**
     * Triggers a mouseenter event on the specified button.
     *
     * @param {string} titleButton - The title of the button to trigger the event on.
     */
    mouseOverButton(titleButton) {
        this.button(titleButton).trigger('mouseenter');
    }

    /**
     * Verifies the visibility of the popover with the specified title.
     *
     * @param {string} titleButton - The title of the button associated with the popover.
     */
    verifyPopover(titleButton) {
        cy.get('nb-popover')
            .should('have.class', 'nb-overlay-' + titleButton.toLowerCase())
            .then((popover) => {
                cy.wrap(popover).find('div').contains('Hello, how are you today?').should('be.visible');
            });
    }
}

/**
 * An instance of the PopoverPage class.
 */
export const popverPage = new PopoverPage();