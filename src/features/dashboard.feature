@dashboard1
Feature: Dashboard

@1
Scenario: Dashboard page should have "Appointment Planner - Syncfusion Angular Components Showcase App" title
    Given I open "Dashboard" page
    Then Page title should "be equal to" "Appointment Planner - Syncfusion Angular Components Showcase App"

@2
Scenario: Dashboard page should have "Appointment Planner - Syncfusion Angular Components Showcase App" title 2
    Given I open "Dashboard" page
    Then Page title should "not be equal to" "Appointment Planner - Syncfusion Angular Componentss Showcase App"

@3
Scenario: It should be possible to open a modal window
    When I open "Dashboard" page
    And I click "Doctors" link from the side menu
    And I click add new doctor button from list header
    Then modal window should be displayed

    When I click "close" button in the modal window
    Then modal window should not be displayed