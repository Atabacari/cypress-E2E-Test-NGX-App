/**
 * Class representing the actions and locators for the Datepicker page.
 */
export class DatepickerPage {

    /**
     * Gets the input field for the datepicker by index.
     * 
     * @param {number} index - The index of the input field (0-based).
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The input element for the datepicker.
     */
    inputCalendar(index) {
        const input = cy.get('input').eq(index);
        input.should('exist');  // Assert that the input element exists
        return input;
    }

    /**
     * Gets the calendar element.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The calendar element.
     */
    calendar() {
        const calendar = cy.get('nb-calendar');
        calendar.should('exist');  // Assert that the calendar element exists
        return calendar;
    }

    /**
     * Gets the header of the calendar which displays the month and year.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The calendar header element.
     */
    calendarHeader() {
        const header = cy.get('nb-calendar-header');
        header.should('exist');  // Assert that the calendar header exists
        return header;
    }

    /**
     * Gets the button inside the calendar, typically used for month navigation.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The button element within the calendar.
     */
    buttonCalendar() {
        const button = cy.get('nb-calendar button').eq(1);
        button.should('exist');  // Assert that the button element exists
        return button;
    }

    /**
     * Gets the first disabled date within the calendar.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The first disabled date element in the calendar.
     */
    disabledDate() {
        const disabledDate = cy.get('nb-calendar-day-picker').find('.disabled').first();
        disabledDate.should('exist');  // Assert that the disabled date element exists
        return disabledDate;
    }

    /**
     * Gets the first enabled date within the calendar.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The first enabled date element in the calendar.
     */
    enabledDate() {
        const enabledDate = cy.get('nb-calendar-day-picker').find('nb-calendar-day-cell:not(.disabled)').first();
        enabledDate.should('exist');  // Assert that the enabled date element exists
        return enabledDate;
    }

    // Actions block

    /**
     * Opens the calendar by clicking on the input field at the given index.
     * 
     * @param {number} index - The index of the input field to click.
     */
    openCalendar(index) {
        this.inputCalendar(index).click();
    }

    /**
     * Selects a specific date within the calendar.
     * 
     * @param {string|number} day - The day to select within the calendar (e.g., "15").
     */
    selectDate(day) {
        const dateCell = cy.get('nb-calendar-day-picker').contains(day);
        dateCell.should('exist');  // Assert that the date cell exists before clicking
        dateCell.click({ force: true });
    }

    /**
     * Selects a specific year within the calendar year picker.
     * 
     * @param {number|string} year - The year to select (e.g., 2024).
     */
    selectYear(year) {
        const yearCell = cy.get('nb-calendar-year-picker').contains(year);
        yearCell.should('exist');  // Assert that the year cell exists before clicking
        yearCell.click();
    }

    /**
     * Selects a specific month within the calendar month picker.
     * 
     * @param {string} month - The month to select (e.g., "Oct").
     */
    selectMonth(month) {
        const monthCell = this.calendar().find('nb-calendar-picker').contains(month);
        monthCell.should('exist');  // Assert that the month cell exists before clicking
        monthCell.click();
    }

    /**
     * Navigates to the next month in the calendar.
     */
    navigateNextMonth() {
        const nextButton = cy.get('button [data-name="chevron-right"]');
        nextButton.should('exist');  // Assert that the next button exists
        nextButton.click();
    }

    /**
     * Navigates to the previous month in the calendar.
     */
    navigatePrevMonth() {
        const prevButton = cy.get('button [data-name="chevron-left"]');
        prevButton.should('exist');  // Assert that the previous button exists
        prevButton.click();
    }
}

export const datepickerPage = new DatepickerPage();
