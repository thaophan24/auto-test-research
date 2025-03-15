Feature: TPBank EvoCard E2E Test

  Scenario: Visit EvoCard TPBank website
    Given I open the EvoCard TPBank website
    Then the page title should contain "EVO"
