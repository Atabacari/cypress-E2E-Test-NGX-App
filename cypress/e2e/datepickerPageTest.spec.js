/// <reference types="cypress" />


import { datepickerPage } from "../support/page_objects/datepickerPage"
import { navigateTo } from "../support/page_objects/navigationPage"

const CALENDAR_INDEX = {
    PICKER: 0,
    RANGE: 1,
    DISABLED: 2,
};


describe('Datepicker Page Test Suite', () => {
    beforeEach('open application', () => {
        // Open the home page before each test
        cy.openHomePage();
        navigateTo.datepickerPage(); // Navigate to the Datepicker page
    })


    it('should display the calendar and allow date selection', () => {
        // Open the calendar.
        // Select a specific date.
        // Verify that the selected date is displayed correctly.

        // Get the current month and year in the format it as "MMM YYYY"
        const currentMonth = new Date().toLocaleDateString('en-US', { month: 'short' });
        const currentYear = new Date().toLocaleDateString('en-US', { year: 'numeric' });

        const dayToSelect = '15';

        const dateToValidate = currentMonth + ' ' + dayToSelect + ', ' + currentYear;


        // Find and click the calendar input or trigger
        datepickerPage.openCalendar(CALENDAR_INDEX.PICKER);

        // Ensure that the nb-calendar element is visible
        datepickerPage.calendar().should('be.visible');

        // Select a specific date (e.g., 15th of the current month)
        datepickerPage.selectDate(dayToSelect);

        // Verify that the selected date is displayed in the input field
        datepickerPage.inputCalendar(CALENDAR_INDEX.PICKER).should('have.value', dateToValidate);
    })


    it('should navigate between months', () => {
        // Open the calendar and navigate between months using the navigation buttons.
        // Verify that the month changes accordingly.

        // Get the current month and format it as "MMM D, YYYY"
        const optionsMonth = { month: 'short', year: 'numeric' };
        const today = new Date();
        const formattedTodayMonth = today.toLocaleDateString('en-US', optionsMonth); // Example output: "Oct 2024"

        //Get the next month and format it as "MMM YYYY" 
        const nextMonth = new Date(today.setMonth(today.getMonth() + 1));
        const formattedNextMonth = nextMonth.toLocaleDateString('en-US', optionsMonth);

        // Open the calendar
        datepickerPage.openCalendar(CALENDAR_INDEX.PICKER);

        // Verify the current month in the(assuming October 2024 as an example)
        datepickerPage.buttonCalendar().should('contain', formattedTodayMonth);

        // Click on the "next month" button
        datepickerPage.navigateNextMonth();

        // Verify that the calendar header has changed to the next month and the same year 
        datepickerPage.buttonCalendar().should('contain', formattedNextMonth);

        // Click on the "previous month" button
        datepickerPage.navigatePrevMonth();

        // Verify that the month is back to the current month
        datepickerPage.buttonCalendar().should('contain', formattedTodayMonth);
    })



    it('should allow year navigation and date selection', () => {
        // Open the year picker.
        // Select a year and verify the correct year is displayed.
        // Select a date from the chosen year.

        // Open the calendar
        datepickerPage.openCalendar(CALENDAR_INDEX.PICKER);

        // Click on the year navigation (to change the year)
        datepickerPage.buttonCalendar().click();

        // Select the year 2023
        datepickerPage.selectYear(2023);
        // Select the month October
        datepickerPage.selectMonth('Oct');

        // Select a specific date (e.g., 15th of October 2023)
        datepickerPage.selectDate(15);

        // Verify the selected date is correct
        datepickerPage.inputCalendar(CALENDAR_INDEX.PICKER).should('have.value', 'Oct 15, 2023');

    })


    it('should select a date range', () => {
        // Select a range of dates 
        // Verify the correct range is displayed.
        // Get the current month and year in the format it as "MMM YYYY"
        const currentMonth = new Date().toLocaleDateString('en-US', { month: 'short' });
        const currentYear = new Date().toLocaleDateString('en-US', { year: 'numeric' });

        // Set start and end day
        const startDay = '10';
        const endDay = '20';

        const expectedStartRange = currentMonth + ' ' + startDay + ', ' + currentYear;
        const expectedEndRange = currentMonth + ' ' + endDay + ', ' + currentYear;



        // Open the calendar
        datepickerPage.openCalendar(CALENDAR_INDEX.RANGE);

        // Select the start date
        datepickerPage.selectDate(startDay)

        // Get the start date from the input form
        datepickerPage.inputCalendar(CALENDAR_INDEX.RANGE).invoke('val').then((value) => {
            const startDate = value
            expect(value).to.equal(expectedStartRange)
        });


        // Select the end date
        datepickerPage.selectDate(endDay)

        // Get the start date from the input form
        datepickerPage.inputCalendar(CALENDAR_INDEX.RANGE).invoke('val').then((value) => {
            const range = value
            //Verify that the date range is displayed correctly in the input field
            expect(value).to.equal(expectedStartRange + ' - ' + expectedEndRange)
        });


    })



    it('should not allow selecting a disabled date', () => {
        // Disabled Dates**:
        // Ensure that specific dates  are disabled and cannot be selected.

        let disabledDay;
        // Open the calendar
        datepickerPage.openCalendar(CALENDAR_INDEX.DISABLED);

        // Find a disabled date and click it
        datepickerPage.disabledDate().click({ force: true });

        datepickerPage.disabledDate()
            .should('have.class', 'disabled')  // Ensure the date is still disabled
            .and('not.have.class', 'selected');  // Ensure the date cannot be selected

        // Verify that the input value did not change (i.e., no date was selected)
        datepickerPage.inputCalendar(CALENDAR_INDEX.DISABLED).should('have.value', '');
    })

    it('should allow selecting enabled dates and not disabled dates', () => {
        // Open the calendar component.
        // Select an enabled (active) date.
        // Verify that the enabled date is selected.
        // Try to select a disabled date and verify that it remains unselected.


        // Open the calendar
        datepickerPage.openCalendar(CALENDAR_INDEX.DISABLED);

        // Select an enabled date
        datepickerPage.enabledDate().click();

        // Verify the date is selected
        datepickerPage.inputCalendar(CALENDAR_INDEX.DISABLED).should('not.have.value', '');

        // Open the calendar
        datepickerPage.openCalendar(CALENDAR_INDEX.DISABLED);
        // Try to select a disabled date
        datepickerPage.disabledDate().click({ force: true });
        // Verify the disabled date is not selected
        datepickerPage.disabledDate().should('not.have.class', 'selected');
    });

    it('should keep disabled dates after navigating to next/previous month', () => {
        //  Open the calendar component.
        //  Navigate to the next month.
        //  Verify that disabled dates in the next month are still disabled.
        //  Repeat the test for the previous month.

        //  Open the calendar component.
        datepickerPage.openCalendar(CALENDAR_INDEX.DISABLED);

        // Navigate to the next month
        datepickerPage.navigateNextMonth();
        datepickerPage.calendar().find('.disabled').should('exist');

        // Navigate to the previous month
        datepickerPage.navigatePrevMonth();
        datepickerPage.calendar().find('.disabled').should('exist');

    });

})