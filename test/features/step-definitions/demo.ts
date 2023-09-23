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
Given(/^A webpage is opened$/, async function()
{
    await browser.url("https://the-internet.herokuapp.com/inputs")
    await browser.pause(10000)
    // await browser.setTimeout({ implicit:15000, pageLoad:10000})
})
When(/^Perform web interactions$/, async function()
{   

    //type the input 
    //clear the input fields
    //click and type
    //slow typing
    let numbers=12345
    let numstr=numbers.toString()
    let inputbox=await $(`[type=number]`)
    await inputbox.click()
    await inputbox.setValue(numstr)
    for(let i=0; i<numstr.length; i++)
    {
        let charStr=numstr.charAt(i)
        await browser.pause(3000)
        await browser.keys(charStr)
    }
})