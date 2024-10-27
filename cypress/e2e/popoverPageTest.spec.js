// Import necessary modules for navigation and popover page functionalities
import { navigateTo } from "../support/page_objects/navigationPage";
import { popverPage } from "../support/page_objects/popoverPage";

// Define button positions and their respective labels
const button = {
    left: "Left",
    top: "Top",
    right: "Right",
    bottom: "Bottom"
}

// Describe the test suite for Popover Page
describe('Popover Page Tests', () => {
    // Hook that runs before each test case
    beforeEach('open application', () => {
        // Open the home page of the application
        cy.openHomePage();
        // Navigate to the Popover page
        navigateTo.popoverPage();
    });

    // Loop through each button position defined in the button object
    for (const buttonPosition in button) {
        // Define a test case for each button position
        it(`should display the popover in the ${buttonPosition} position`, () => {
            // Simulate mouse over action on the button based on its position
            popverPage.mouseOverButton(button[buttonPosition]);
            // Verify that the popover appears in the expected position
            popverPage.verifyPopover(button[buttonPosition]);
        });
    }
});
