/// <reference types="cypress" />
import { navigateTo } from "../support/page_objects/navigationPage";
import { windowPage } from "../support/page_objects/windowPage";

describe('Window Page Test', () => {
    beforeEach('open application', () => {
        cy.openHomePage();
        navigateTo.windowPage(); // Navigate to the Window page

    })

    it('should open window form and close it', () => {

        const titleCard = "Window Form";
        const titleButton = "Open window form";

        // Open dialog and validate its visibility
        windowPage.clickOpenWindowButton(titleCard, titleButton);
        windowPage.windowCard().should('be.visible');

        windowPage.clickCloseButton();
        windowPage.windowCard().should('not.exist');

    })

    it.only('should minimeze / maximize the window', () => {
        const titleCard = "Window Form";
        const titleButton = "Open window form";

        // Open dialog and validate its visibility
        windowPage.clickOpenWindowButton(titleCard, titleButton);
        windowPage.windowCard().should('be.visible');
        // Minimize the window and validate that it is minimized and visible
        windowPage.clickMinusButton();
        windowPage.windowCard().should('be.visible');
        windowPage.windowCard().should('have.class', 'ng-star-inserted minimized');

        //maximize the window and validate that it is maximized
        windowPage.clickMinusButton();
        windowPage.windowCard().should('be.visible');
        windowPage.windowCard().should('not.have.class', 'ng-star-inserted minimized').and('have.class', 'full-screen');

    })





})