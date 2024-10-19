/**
 * Class representing the actions and locators for the Stepper page.
 */
export class StepperPage {

    static stepContents = [
        'Step content #1',
        'Step content #2',
        'Step content #3',
        'Step content #4'
    ]

    /** Method to click the "Confirm" button */
    clickConfirm() {
        cy.get('nb-card-body').contains('button', 'Confirm').click();
    }
    /** Method to type text in the input feld 
    * @param {string}  - the text to type
    */
    typeInput(text) {
        cy.get('div input').type(text);
    }

    /** Method to click the "Next" button 
    * @param {number} index - Index of the 'nb-card-body' on the stepper page
    */
    clickNext(index) {
        cy.get('nb-card-body').eq(index).contains('button', 'next').click();
    }
    /** Method to click the "Prev" button 
     * @param {number} index - Index of 'nb-card-body' on the stepper page
    */
    clickPrev(index) {
        cy.get('nb-card-body').eq(index).contains('button', 'prev').click()
    }

    /** Method to check if the checkmark icon is visible for a specific step #
    * @param {index} index - Index of the 'icon="checkmark-outline"' on the specific step
    */
    checkIconVisibility(index) {
        cy.get('[icon="checkmark-outline"]').eq(index).should('be.visible');
    }

    /** Method to check if the "Prev" button is visible 
     * @param {number} index - Index of the 'nb-card-body' on the stepper page
     * @param {boolean} status - True or false 
    */
    checkPrevButtonVisibility(index, status) {

        cy.get('nb-card-body').eq(index).contains('button', 'prev').should('have.attr', 'aria-disabled', status);
    }

    /** Method to click "Try again" button */
    clickTryAgain() {
        cy.get('nb-card-body').find('button').contains('Try again').click()
    }

    /** Method to check that the step indices are correct 
     * @param {number} cardIndex - Index of the 'nb-card-body' on the stepper page 
     * @param {number} spanIndex - Index of the 'span' on the stepper page
    * @param {text} content - Text to be checked
    */
    checkStepIndices(cardIndex, spanIndex, content) {
        cy.get('nb-card-body').eq(cardIndex).find('div .label-index').find('span').eq(spanIndex).should('contain', content)
    }

    /** Method to check the content of step is correct 
        * @param {number} divIndex - Index of the 'div .step-content' on the stepper page
        * @param {text} content - Text to be checked
        */
    checkContent(divIndex, content) {
        cy.get('div .step-content').eq(divIndex).should('contain', content)

    }

}

export const stepperPage = new StepperPage()
