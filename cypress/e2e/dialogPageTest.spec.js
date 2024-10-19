/// <reference types="cypress" />

import { dialogPage } from "../support/page_objects/dialogPage";
import { navigateTo } from "../support/page_objects/navigationPage";

describe('Dialog Page Test Suite', () => {

    beforeEach('open application', () => {
        cy.openHomePage();
        navigateTo.dialogPage(); // Navigate to the Dialog page
    });

    it('should open the dialog when the button is clicked', () => {
        const titleCard = "Open Dialog";
        const titleButton = "Open Dialog with component";

        // Open dialog and validate its visibility
        dialogPage.openDialog(titleCard, titleButton);
        dialogPage.dialogContainer().should('be.visible');

        // Validate the dialog title
        dialogPage.dialogTitel().should('contain', 'This is a title passed to the dialog component');

        // Close the dialog and verify it's closed
        dialogPage.dismissDialog();
        dialogPage.dialogContainer().should('not.exist');
    });

    it('should close the dialog when the backdrop is clicked', () => {
        const titleCard = "Open Without Backdrop";
        const titleButton = "Open Dialog with backdrop";

        // Open dialog and validate its visibility
        dialogPage.openDialog(titleCard, titleButton);
        dialogPage.dialogContainer().should('be.visible');

        // Click the backdrop to close the dialog and verify it's closed
        cy.get('.cdk-overlay-backdrop').click({ force: true });
        dialogPage.dialogContainer().should('not.exist');
    });

    it('should close the dialog when the close button is clicked', () => {
        const titleCard = "Open Without Backdrop";
        const titleButton = "Open Dialog without backdrop";

        // Open dialog and validate its visibility
        dialogPage.openDialog(titleCard, titleButton);
        dialogPage.dialogContainer().should('be.visible');

        // Verify there's no backdrop for this dialog
        cy.get('div .content').should('not.contain', '.cdk-overlay-backdrop');

        // Close the dialog using the close button and verify it's closed
        dialogPage.closeDialog();
        dialogPage.dialogContainer().should('not.exist');
    });

    it('should submit the form successfully with valid data', () => {
        const titleCard = "Return Result From Dialog";
        const titleButton = "Enter Name";
        const names = ["Tim", "John", "Lars"];

        names.forEach((name) => {
            // Open dialog, fill the form, and submit it
            dialogPage.openDialog(titleCard, titleButton);
            dialogPage.dialogContainer().should('be.visible');

            // Input name and submit form
            dialogPage.inputName(name);
            dialogPage.clickSubmitButton();

            // Verify the dialog is closed after submission
            dialogPage.dialogContainer().should('not.exist');
        });

        // Verify all names were correctly saved
        dialogPage.checkData(titleCard, names);
    });

});
