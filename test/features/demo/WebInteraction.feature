Feature: Handling Web Elements

    @demo3
    Scenario Outline: Handling Web Elements - Input box
        Given A webpage is opened
        When Perform web interactions
        Examples:
            | TestID   |
            | WEB_TC02 |

    @demo3
    Scenario Outline: Handling Web Elements - Dropdowns
        Given A webpage is opened dropdowns
        When Perform web interactions dropdowns
        Examples:
            | TestID   |
            | WEB_TC03 |

