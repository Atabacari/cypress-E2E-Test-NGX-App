/**
 * Class representing navigation to different pages of the application.
 */
export class NavigationPage {

    /**
     * Navigates to the Stepper page under the Layout menu.
     */
    stepperPage() {
        selectGroupMentuItem('Layout');
        cy.contains('Stepper').click();
    }

    /**
     * Navigates to the Accordion page under the Layout menu.
     */
    accordionsPage() {
        selectGroupMentuItem('Layout');
        cy.contains('Accordion').click();
    }

    /**
     * Navigates to the Form Layouts page under the Form menu.
     */
    formLayoutsPage() {
        selectGroupMentuItem('Form');
        cy.contains('Form Layouts').click();
    }

    /**
     * Navigates to the Datepicker page under the Form menu.
     */
    datepickerPage() {
        selectGroupMentuItem('Form');
        cy.contains('Datepicker').click();
    }
    /**
    * Navigates to the Dialog page under the Modal & Overlays menu.
    */
    dialogPage() {
        selectGroupMentuItem('Modal & Overlays');
        cy.get('[title="Dialog"]').click();

    }
    /**
        * Navigates to the Window page under the Modal & Overlays menu.
        */
    windowPage() {
        selectGroupMentuItem('Modal & Overlays');
        cy.get('[title="Window"]').click();
    }

    /**
     * Navigates to the Popover page under the Modal & Overlays menu.
     */
    popoverPage() {
        selectGroupMentuItem('Modal & Overlays');
        cy.get('[title="Popover"]').click();

    }

    /**
     * Navigates to the Toastr (notifications) page under the Modal & Overlays menu.
     */
    toasterPage() {
        selectGroupMentuItem('Modal & Overlays');
        cy.contains('Toastr').click();
    }

    /**
    * Navigates to the Tooltip page under the Modal & Overlays menu.
    */
    toolTipPage() {
        selectGroupMentuItem('Modal & Overlays');
        cy.contains('Tooltip').click();
    }
    /**
    * Navigates to the Calendar  page under the Extra Components menu.
    */
    calendarPage() {
        selectGroupMentuItem('Extra Components');
        cy.get('[title="Calendar"]').click();

    }

    /**
     * Navigates to the Smart Table page under the Tables & Data menu.
     */
    smartTablePage() {
        selectGroupMentuItem('Tables & Data');
        cy.contains('Smart Table').click();
    }
    /**
         * Navigates to the STree Grid page under the Tables & Data menu.
         */
    treeGirdPage() {
        selectGroupMentuItem('Tables & Data');
        cy.contains('Tree Grid').click();

    }
    /**
     * Navigates to the Login page under the Auth menu.
     */

    loginAuthPage() {
        selectGroupMentuItem('Auth');
        cy.contains('Login').click();

    }

    /**
     * Navigates to the Register page under the Auth menu.
     */
    registerPage() {
        selectGroupMentuItem('Auth');
        cy.get('[title="Register"]').click();
    }


}

export const navigateTo = new NavigationPage();

/**
 * Selects a menu item based on the provided group name and expands it if it is collapsed.
 *
 * @param {string} groupName - The name of the group to find and click.
 */
function selectGroupMentuItem(groupName) {
    // Searches for an <a> element that contains the specified groupName
    // and checks if the menu is expanded by inspecting the SVG element's 'data-name' attribute.

    cy.contains('a', groupName).then(menu => {
        cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then(attr => {
            if (attr.includes('left')) {
                cy.wrap(menu).click()
            }
        })
    })
}
