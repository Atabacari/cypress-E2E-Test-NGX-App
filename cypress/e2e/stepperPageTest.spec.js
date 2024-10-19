
/// <reference types="cypress" />
import { navigateTo } from "../support/page_objects/navigationPage";
import { stepperPage } from "../support/page_objects/stepperPage";
import { StepperPage } from "../support/page_objects/stepperPage";


const STEPPER_INDEX = {
    BIG: 0,
    LEFT: 1,
    RIGHT: 2,
};


describe('Stepper page test', () => {
    beforeEach('open application', () => {
        cy.openHomePage()
        navigateTo.stepperPage()

    })

    it('big stepper navigation test', () => {


        // Loop for "Next" steps — moving forward


        StepperPage.stepContents.forEach((content, index) => {

            // Verify that the current step content matches the expected content
            stepperPage.checkContent(STEPPER_INDEX.BIG, content)

            // After the first step, ensure the checkmark icons for completed steps are visible
            if (index > 0) {
                for (let i = 0; i < index; i++) {
                    stepperPage.checkIconVisibility(i)
                }
            }

            // On the second step, check that the "Prev" button is active and clickable
            if (index === 1) {
                stepperPage.checkPrevButtonVisibility(STEPPER_INDEX.BIG, 'false')
            }

            // If this is not the last step, click the "Next" button to proceed
            if (index < StepperPage.stepContents.length - 1) {
                stepperPage.clickNext(STEPPER_INDEX.BIG)
            }
        });

        // Loop for "Prev" steps — moving backward
        for (let i = StepperPage.stepContents.length - 1; i > 0; i--) {
            // Ensure the "Prev" button is active
            stepperPage.checkPrevButtonVisibility(STEPPER_INDEX.BIG, 'false')
            // Click the "Prev" button to go to the previous step
            stepperPage.clickPrev(STEPPER_INDEX.BIG)
            // Validate that the icon shows the correct step number after moving back
            stepperPage.checkStepIndices(STEPPER_INDEX.BIG, 0, i)
            // Check that the current step content matches the expected content
            stepperPage.checkContent(STEPPER_INDEX.BIG, StepperPage.stepContents[i - 1])
            // On the first step, verify that the "Prev" button is disabled
            if (i === 1) {
                stepperPage.checkPrevButtonVisibility(STEPPER_INDEX.BIG, 'true')
            }
        }



    })

    it('Left stepper navigation test', () => {

        // Type the user's name in the input field
        stepperPage.typeInput('User name')
        // Click the "Next" button on the first step
        stepperPage.clickNext(STEPPER_INDEX.LEFT)

        // Ensure the checkmark icon for the completed step is visible and the "Prev" button is visible
        stepperPage.checkIconVisibility(0)
        stepperPage.checkPrevButtonVisibility(STEPPER_INDEX.LEFT, 'false')

        // Enter the favorite movie
        stepperPage.typeInput('My favorite movie')

        // Click the "Next" button on the second step
        stepperPage.clickNext(STEPPER_INDEX.LEFT)

        // Ensure the checkmark icon for the second step is visible
        stepperPage.checkIconVisibility(1)

        // Enter the text in the input field
        stepperPage.typeInput('something text')

        // Click the "Confirm" button
        stepperPage.clickConfirm()


        // Verify the completion message appears
        cy.get('div').find('h3').contains('Wizard completed!')

        // Click the "Try again" button and 
        stepperPage.clickTryAgain();

        //check that the step indices are correct
        for (let i = 0; i <= 2; i++) {
            stepperPage.checkStepIndices(STEPPER_INDEX.LEFT, i, i + 1)
            stepperPage.checkStepIndices(STEPPER_INDEX.LEFT, i, i + 1)
            stepperPage.checkStepIndices(STEPPER_INDEX.LEFT, i, i + 1)

        }


    })

    it('Right stepper navigation test', () => {

        // Loop for "Next" steps — moving forward
        StepperPage.stepContents.forEach((content, index) => {
            // Check that the current step content matches the expected content

            stepperPage.checkContent(2, content)

            // After the first step, ensure the checkmark icons for completed steps are visible
            if (index > 0) {
                for (let i = 0; i < index; i++) {
                    stepperPage.checkIconVisibility(i)
                }
            }

            // On the second step, check that the "Prev" button is active and clickable
            if (index === 1) {
                stepperPage.checkPrevButtonVisibility(STEPPER_INDEX.RIGHT, 'false')
            }

            // If this is not the last step, click the "Next" button to proceed
            if (index < StepperPage.stepContents.length - 1) {
                stepperPage.clickNext(STEPPER_INDEX.RIGHT)
            }
        });

        // Loop for "Prev" steps — moving backward
        for (let i = StepperPage.stepContents.length - 1; i > 0; i--) {
            // Ensure the "Prev" button is active
            stepperPage.checkPrevButtonVisibility(STEPPER_INDEX.RIGHT, 'false')
            // Click the "Prev" button to go to the previous step
            stepperPage.clickPrev(STEPPER_INDEX.RIGHT)
            // Validate that the icon shows the correct step number after moving back
            stepperPage.checkStepIndices(STEPPER_INDEX.RIGHT, 0, i)
            // Check that the current step content matches the expected content
            stepperPage.checkContent(2, StepperPage.stepContents[i - 1])
            // On the first step, verify that the "Prev" button is disabled
            if (i === 1) {
                stepperPage.checkPrevButtonVisibility(STEPPER_INDEX.RIGHT, 'true')
            }
        }

    })


})