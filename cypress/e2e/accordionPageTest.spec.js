/// <reference types="cypress" />


import { navigateTo } from "../support/page_objects/navigationPage"
import { accordionPage } from "../support/page_objects/accordionPage"
import { AsyncAction } from "rxjs/internal/scheduler/AsyncAction"

describe('Accordion page test', () => {
    beforeEach('open application', () => {
        // Open the home page before each test
        cy.openHomePage()
        navigateTo.accordionsPage() // Navigate to the accordion page

    })
    //should toggle the first accordion item
    it('Toggle Button test', () => {
        let indexAccordion = 0 // Index of the accordion
        let indexItem = 0 // Index of the accordion item


        // Verify initial state
        accordionPage.IsItemCollapsed(indexAccordion, indexItem)
        accordionPage.isTextNotVisible(indexAccordion, indexItem)
        accordionPage.isChevronDown(indexAccordion, indexItem)

        // First click to expand
        accordionPage.clickButtonToggle()

        // Verify expanded state
        accordionPage.IsItemExpanded(indexAccordion, indexItem)
        accordionPage.isTextVisible(indexAccordion, indexItem)
        accordionPage.isChevronUp(indexAccordion, indexItem)


        //Second click to collapse
        accordionPage.clickButtonToggle()

        // Verify collapsed state again
        accordionPage.IsItemCollapsed(indexAccordion, indexItem)
        accordionPage.isTextNotVisible(indexAccordion, indexItem)
        accordionPage.isChevronDown(indexAccordion, indexItem)

    })

    it('accordion functional test', () => {
        const indexAccordion = [0, 1]; // // Indices of the accordions
        const indexItem = [0, 1, 2]; // Indices of the accordion items

        navigateTo.accordionsPage(); // Navigate to the accordion page


        for (const accordion of indexAccordion) {
            for (const item of indexItem) {
                // Verify initial state
                accordionPage.IsItemCollapsed(accordion, item);
                accordionPage.isTextNotVisible(accordion, item);
                accordionPage.isChevronDown(accordion, item);

                //First click to expand
                accordionPage.clickAccordionItem(accordion, item);

                // Verify expanded state
                accordionPage.IsItemExpanded(accordion, item);
                accordionPage.isTextVisible(accordion, item);
                accordionPage.isChevronUp(accordion, item)

                // Second click to collapse 
                accordionPage.clickAccordionItem(accordion, item);

                // Verify collapsed state again
                accordionPage.IsItemCollapsed(accordion, item);
                accordionPage.isTextNotVisible(accordion, item);
                accordionPage.isChevronDown(accordion, item);
            }

        }
    })




})