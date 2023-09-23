# Feature: Opening WDIO

#     @demo1
#     Scenario Outline: Run first demo feature
#         Given Google page is opened
#         When Search with <searchItem>
#         Then Click on the first search result
#         Then URL should match <ExpectedURL>

#         Examples:
#             | TestID   | searchItem | ExpectedURL |
#             | Value 1  | WDIO       | https://webdriver.io/  |