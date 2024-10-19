
/**
 * Class representing the actions and locators for the Accordion page.
 */
export class AccordionPage {

    //Locator block

    /** Method to get a specific accordion item based on its index
    * @param {number} indexAccordion - index of the accordion 
    * @param {number} indexItem - index of the accordion item
    */
    itemOfAccordion(indexAccordion, indexItem) {
        // Returns the specified accordion item element from the DOM
        return cy.get('nb-accordion').eq(indexAccordion).find('nb-accordion-item-header').eq(indexItem);
    }

    /** Method to get a specific accordion text based on its index
    * @param {number} indexAccordion - index of the accordion 
    * @param {number} indexItem - index of the accordion item
    */
    textOfItem(indexAccordion, indexItem) {
        return cy.get('nb-accordion').eq(indexAccordion).find('nb-accordion-item-body div div').eq(indexItem)
    }

    /** Method to get a chevron of the item 
    * @param {number} indexAccordion - index of the accordion 
    * @param {number} indexItem - index of the accordion item
    */
    chevronOfItem(indexAccordion, indexItem) {
        return this.itemOfAccordion(indexAccordion, indexItem).find('nb-icon')
    }


    //Actions block



    /** Method to verify if a specific accordion item is collapsed
     * @param {number} indexAccordion - index of the accordion 
     * @param {number} indexItem - index of the accordion item
    */
    IsItemCollapsed(indexAccordion, indexItem) {
        return this.itemOfAccordion(indexAccordion, indexItem)
            .should('have.attr', 'aria-expanded', 'false');
    }

    /** Method to verify if a specific accordion item is collapsed
     * @param {number} indexAccordion - index of the accordion 
     * @param {number} indexItem - index of the accordion item
    */
    IsItemExpanded(indexAccordion, indexItem) {
        return this.itemOfAccordion(indexAccordion, indexItem)
            .should('have.attr', 'aria-expanded', 'true');
    }


    /** Method to click the button that toggles the first accordion item 
    * 
    */
    clickButtonToggle() {
        // Finds the button containing the text 'Toggle First Item' and clicks it
        cy.get('button').contains('Toggle First Item').click();
    }



    /** Method to verify that the text within a specific accordion item is visible
    * @param {number} indexAccordion - index of the accordion 
    * @param {number} indexItem - index of the accordion item
    */
    isTextVisible(indexAccordion, indexItem) {
        // Checks that the text inside the specified accordion item is visible
        // Assumes the text is contained within nested <div> elements
        this.textOfItem(indexAccordion, indexItem)
            .should('have.css', 'visibility', 'visible'); //Checks that the CSS property 'visibility' has the value 'visible'
        cy.log('Text is visible')
    }

    /** Method to click the accordion item
    * 
    * @param {number} indexAccordion - index of the accordion 
    * @param {number} indexItem - index of the accordion item
     */
    clickAccordionItem(indexAccordion, indexItem) {
        this.itemOfAccordion(indexAccordion, indexItem).click()

    }

    /** Method to verify that the text inside the accordion item is not visible 
    * @param {number} indexAccordion - index of the accordion 
    * @param {number} indexItem - index of the accordion item
    */
    isTextNotVisible(indexAccordion, indexItem) {
        this.textOfItem(indexAccordion, indexItem)// Adjust the selector as needed to locate the actual text container
            .should('have.css', 'visibility', 'hidden') //Checks that the CSS property 'visibility' has the value 'hidden'

    }

    /** Method to verify that the chevron is down
    * @param {number} indexAccordion - index of the accordion 
    * @param {number} indexItem - index of the accordion item
    */
    isChevronDown(indexAccordion, indexItem) {
        this.chevronOfItem(indexAccordion, indexItem)
            .should('exist') // Ensure the chevron element exists in the DOM
            .should('not.have.css', 'transform', 'matrix(-1, 0, 0, -1, 0, 0)');
        // Assert that the style does not include 'rotate(180deg)'
    }

    /** Method to verify that the chevron is up
    * @param {number} indexAccordion - index of the accordion 
    * @param {number} indexItem - index of the accordion item
    */
    isChevronUp(indexAccordion, indexItem) {
        this.chevronOfItem(indexAccordion, indexItem).should('have.css', 'transform', 'matrix(-1, 0, 0, -1, 0, 0)');

    }

}

// Export an instance of AccordionPage for use in tests
export const accordionPage = new AccordionPage();
