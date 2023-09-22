import { Given,When,Then } from "@wdio/cucumber-framework";
import chai from "chai"

Given(/^Google page is opened$/, async function()
{   
    await console.log("@@@@@@@@@@@@@@@@@WDIO@@@@@@@@@@@@@@@@@@@@@")
    await browser.url("https://www.google.com")
    await browser.pause(10000)
})
When(/^Search with (.*)$/,async function(searchItem) {
    console.log(`@@@@@@@@@@@searchItem@@@@@@@@@ :${searchItem}`);
    let username=await $(`[name=q]`)
    await username.setValue(searchItem)
    await browser.keys("Enter")
    
})
Then(/^Click on the first search result$/,async function()
{
     let firstresults=await $('<h3>')
     firstresults.click()
})
Then(/^URL should match (.*)$/, async function(ExpectedURL)
{
    console.log(`&&&&&&&&&&&&ExpectedURL@@@@@@@@@ : ${ExpectedURL}`);
    let browserURL=await browser.getUrl()
    chai.expect(browserURL).to.equal(ExpectedURL)
    await browser.pause(8000)
})