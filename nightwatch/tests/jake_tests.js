const selectors = require('../test_data/css_selectors')
const data = require('../test_data/test_data')
const func = require('../test_data/helper_functions')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    'Enter Wanted required goodData first boundary test': browser => {
        browser
            .click(selectors.startPage.enterBtn)
        func.enterValue(selectors.enterWantedInputs.header, data.goodData.header9, browser)
        func.enterValue(selectors.enterWantedInputs.mke, data.goodData.mke2ax, browser)
        func.enterValue(selectors.enterWantedInputs.ori, data.goodData.ori9an, browser)
        func.enterValue(selectors.enterWantedInputs.nam, data.goodData.nam3, browser)
        func.enterValue(selectors.enterWantedInputs.sex, data.goodData.sexFa, browser)
        func.enterValue(selectors.enterWantedInputs.rac, data.goodData.rac1a, browser)
        func.enterValue(selectors.enterWantedInputs.hgt, data.goodData.hgt3n, browser)
        func.enterValue(selectors.enterWantedInputs.wgt, data.goodData.wgt1n, browser)
        func.enterValue(selectors.enterWantedInputs.hai, data.goodData.hai3a, browser)
        func.enterValue(selectors.enterWantedInputs.off, data.goodData.off5, browser)
        func.enterValue(selectors.enterWantedInputs.dow, data.goodData.dow8n, browser)
        browser
            .click(selectors.enterWantedBtns.submitBtn)
        browser.expect.element(selectors.enterWantedHeaders.blob).text.to.contain('asdf1234!.a!.asdf12345.a1!.F.a.508.001.bro.a1!a1.01011900......')
    },


    'Enter Wanted required goodData second boundary test': browser => {
        browser
            .click(selectors.startPage.enterBtn)
        func.enterValue(selectors.enterWantedInputs.header, data.goodData.header19, browser)
        func.enterValue(selectors.enterWantedInputs.mke, data.goodData.mke4ax, browser)
        func.enterValue(selectors.enterWantedInputs.ori, data.goodData.ori9an, browser)
        func.enterValue(selectors.enterWantedInputs.nam, data.goodData.nam30, browser)
        func.enterValue(selectors.enterWantedInputs.sex, data.goodData.sexMa, browser)
        func.enterValue(selectors.enterWantedInputs.rac, data.goodData.rac1a, browser)
        func.enterValue(selectors.enterWantedInputs.hgt, data.goodData.hgt3n, browser)
        func.enterValue(selectors.enterWantedInputs.wgt, data.goodData.wgt3n, browser)
        func.enterValue(selectors.enterWantedInputs.hai, data.goodData.hai3a, browser)
        func.enterValue(selectors.enterWantedInputs.off, data.goodData.off15, browser)
        func.enterValue(selectors.enterWantedInputs.dow, data.goodData.dow8n, browser)
        browser
            .click(selectors.enterWantedBtns.submitBtn)
        browser.expect.element(selectors.enterWantedHeaders.blob).text.to.contain('asdf1234!asdf123456.ab!@.asdf12345.a1!a1!a1!a1!a1!a1!a1!a1!a1!a1!.M.a.508.210.bro.a1!a1a1!a1a1!a1.01011900......')
    },


    //Using 'goodData' from first boundary test, with the change being sexUa.
    'Enter Wanted required goodData sex unknown test': browser => {
        browser
            .click(selectors.startPage.enterBtn)
        func.enterValue(selectors.enterWantedInputs.header, data.goodData.header9, browser)
        func.enterValue(selectors.enterWantedInputs.mke, data.goodData.mke2ax, browser)
        func.enterValue(selectors.enterWantedInputs.ori, data.goodData.ori9an, browser)
        func.enterValue(selectors.enterWantedInputs.nam, data.goodData.nam3, browser)
        func.enterValue(selectors.enterWantedInputs.sex, data.goodData.sexUa, browser)
        func.enterValue(selectors.enterWantedInputs.rac, data.goodData.rac1a, browser)
        func.enterValue(selectors.enterWantedInputs.hgt, data.goodData.hgt3n, browser)
        func.enterValue(selectors.enterWantedInputs.wgt, data.goodData.wgt1n, browser)
        func.enterValue(selectors.enterWantedInputs.hai, data.goodData.hai3a, browser)
        func.enterValue(selectors.enterWantedInputs.off, data.goodData.off5, browser)
        func.enterValue(selectors.enterWantedInputs.dow, data.goodData.dow8n, browser)
        browser
            .click(selectors.enterWantedBtns.submitBtn)
        browser.expect.element(selectors.enterWantedHeaders.blob).text.to.contain('asdf1234!.a!.asdf12345.a1!.U.a.508.001.bro.a1!a1.01011900......')
    },


    'Enter Wanted required/optional badData period tests, all': browser => {
        browser
            .click(selectors.startPage.enterBtn)
        func.enterValue(selectors.enterWantedInputs.header, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.mke, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.ori, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.nam, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.sex, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.rac, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.hgt, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.wgt, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.hai, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.off, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.dow, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.oln, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.ols, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.lic, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.lis, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.lid, data.badDataperiod.all, browser)
        browser
            .click(selectors.enterWantedBtns.submitBtn)
        browser.expect.element(selectors.enterWantedHeaders.errorList).text.to.contain('The "Header" field should be between 9 and 19 characters long')
        browser.expect.element(selectors.enterWantedHeaders.errorList).text.to.contain('The "MKE" field should be between 2 and 4 characters long')
        browser.expect.element(selectors.enterWantedHeaders.errorList).text.to.contain('The "Originating Agency Identifier" field should be 9 characters long')
        browser.expect.element(selectors.enterWantedHeaders.errorList).text.to.contain('The "Name" field should be between 3 and 30 characters long')
        browser.expect.element(selectors.enterWantedHeaders.errorList).text.to.contain('The "Sex" field must be entered in as a single character, M for male, F for female, U for unknown')
        browser.expect.element(selectors.enterWantedHeaders.errorList).text.to.contain('The "Race" field can only include characters from the English Alphabet')
        browser.expect.element(selectors.enterWantedHeaders.errorList).text.to.contain('The "Height" field should be 3 characters long')
        browser.expect.element(selectors.enterWantedHeaders.errorList).text.to.contain('The "Weight" field can only include numeric characters')
        browser.expect.element(selectors.enterWantedHeaders.errorList).text.to.contain('The "Hair" field should be between 3 and 10 characters long')
        browser.expect.element(selectors.enterWantedHeaders.errorList).text.to.contain('The "Offense" field should be between 5 and 15 characters long')
        browser.expect.element(selectors.enterWantedHeaders.errorList).text.to.contain('The "Date of Warrant/Violation" field should be 8 characters long')
        browser.expect.element(selectors.enterWantedHeaders.errorList).text.to.contain('The "DL State" field should be 2 characters long')
        browser.expect.element(selectors.enterWantedHeaders.errorList).text.to.contain('The "License Plate" field should be between 5 and 8 characters long')
        browser.expect.element(selectors.enterWantedHeaders.errorList).text.to.contain('The "License State" field should be 2 characters long')
        browser.expect.element(selectors.enterWantedHeaders.errorList).text.to.contain('The "License Expiration Date" field should be 8 characters long')
        browser.expect.element(selectors.enterWantedHeaders.errorList).text.to.contain('If one of the following are present, all must be present: Drivers License, DL State, DL Expiration Date')
    },


    // The following 'optional' tests will use inital boundary goodData for all required fields.
    'Enter Wanted optional goodData first boundary test': browser => {
        browser
            .click(selectors.startPage.enterBtn)
        func.enterValue(selectors.enterWantedInputs.header, data.goodData.header9, browser)
        func.enterValue(selectors.enterWantedInputs.mke, data.goodData.mke2ax, browser)
        func.enterValue(selectors.enterWantedInputs.ori, data.goodData.ori9an, browser)
        func.enterValue(selectors.enterWantedInputs.nam, data.goodData.nam3, browser)
        func.enterValue(selectors.enterWantedInputs.sex, data.goodData.sexFa, browser)
        func.enterValue(selectors.enterWantedInputs.rac, data.goodData.rac1a, browser)
        func.enterValue(selectors.enterWantedInputs.hgt, data.goodData.hgt3n, browser)
        func.enterValue(selectors.enterWantedInputs.wgt, data.goodData.wgt1n, browser)
        func.enterValue(selectors.enterWantedInputs.hai, data.goodData.hai3a, browser)
        func.enterValue(selectors.enterWantedInputs.off, data.goodData.off5, browser)
        func.enterValue(selectors.enterWantedInputs.dow, data.goodData.dow8n, browser)
        func.enterValue(selectors.enterWantedInputs.oln, data.goodData.oln1, browser)
        func.enterValue(selectors.enterWantedInputs.ols, data.goodData.ols2a, browser)
        func.enterValue(selectors.enterWantedInputs.lic, data.goodData.lic5an, browser)
        func.enterValue(selectors.enterWantedInputs.lis, data.goodData.lis2a, browser)
        func.enterValue(selectors.enterWantedInputs.lid, data.goodData.lid8n, browser)
    },


    // Second optional goodData boundary test, with the changes being the Driver's License Number, and License Plate.
    'Enter Wanted optional goodData second boundary test': browser => {
        browser
            .click(selectors.startPage.enterBtn)
        func.enterValue(selectors.enterWantedInputs.header, data.goodData.header9, browser)
        func.enterValue(selectors.enterWantedInputs.mke, data.goodData.mke2ax, browser)
        func.enterValue(selectors.enterWantedInputs.ori, data.goodData.ori9an, browser)
        func.enterValue(selectors.enterWantedInputs.nam, data.goodData.nam3, browser)
        func.enterValue(selectors.enterWantedInputs.sex, data.goodData.sexFa, browser)
        func.enterValue(selectors.enterWantedInputs.rac, data.goodData.rac1a, browser)
        func.enterValue(selectors.enterWantedInputs.hgt, data.goodData.hgt3n, browser)
        func.enterValue(selectors.enterWantedInputs.wgt, data.goodData.wgt1n, browser)
        func.enterValue(selectors.enterWantedInputs.hai, data.goodData.hai3a, browser)
        func.enterValue(selectors.enterWantedInputs.off, data.goodData.off5, browser)
        func.enterValue(selectors.enterWantedInputs.dow, data.goodData.dow8n, browser)
        func.enterValue(selectors.enterWantedInputs.oln, data.goodData.oln20, browser)
        func.enterValue(selectors.enterWantedInputs.ols, data.goodData.ols2a, browser)
        func.enterValue(selectors.enterWantedInputs.lic, data.goodData.lic8an, browser)
        func.enterValue(selectors.enterWantedInputs.lis, data.goodData.lis2a, browser)
        func.enterValue(selectors.enterWantedInputs.lid, data.goodData.lid8n, browser)
    },


    // Using badData for this test for time and coverage purposes.
    'Testing the "Clear" button functionality for Enter Wanted': browser => {
        browser
            .click(selectors.startPage.enterBtn)
        func.enterValue(selectors.enterWantedInputs.header, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.mke, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.ori, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.nam, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.sex, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.rac, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.hgt, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.wgt, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.hai, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.off, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.dow, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.oln, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.ols, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.lic, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.lis, data.badDataperiod.all, browser)
        func.enterValue(selectors.enterWantedInputs.lid, data.badDataperiod.all, browser)
        browser
            .click(selectors.enterWantedBtns.cleanBtn)
        browser.expect.element(selectors.enterWantedHeaders.text).text.to.contain('Submit query for validation.')
    },


    'Modify Wanted required goodData first boundary test': browser => {
        browser
            .click(selectors.startPage.modifyBtn)
        func.enterValue(selectors.modifyWantedInputs.wid, data.goodData.warrent10n, browser)
        func.enterValue(selectors.modifyWantedInputs.header, data.goodData.header9, browser)
        func.enterValue(selectors.modifyWantedInputs.mke, data.goodData.mke2ax, browser)
        func.enterValue(selectors.modifyWantedInputs.ori, data.goodData.ori9an, browser)
        func.enterValue(selectors.modifyWantedInputs.nam, data.goodData.nam3, browser)
        func.enterValue(selectors.modifyWantedInputs.sex, data.goodData.sexFa, browser)
        func.enterValue(selectors.modifyWantedInputs.rac, data.goodData.rac1a, browser)
        func.enterValue(selectors.modifyWantedInputs.hgt, data.goodData.hgt3n, browser)
        func.enterValue(selectors.modifyWantedInputs.wgt, data.goodData.wgt1n, browser)
        func.enterValue(selectors.modifyWantedInputs.hai, data.goodData.hai3a, browser)
        func.enterValue(selectors.modifyWantedInputs.off, data.goodData.off5, browser)
        func.enterValue(selectors.modifyWantedInputs.dow, data.goodData.dow8n, browser)
        browser
            .click(selectors.modifyWantedBtns.submitBtn)
        browser.expect.element(selectors.modifyWantedHeaders.blob).text.to.contain('1234567890.asdf1234!.a!.asdf12345.a1!.F.a.508.001.bro.a1!a1.01011900......')
    },


    'Modify Wanted required goodData second boundary test': browser => {
        browser
            .click(selectors.startPage.modifyBtn)
        func.enterValue(selectors.modifyWantedInputs.wid, data.goodData.warrent10n, browser)
        func.enterValue(selectors.modifyWantedInputs.header, data.goodData.header19, browser)
        func.enterValue(selectors.modifyWantedInputs.mke, data.goodData.mke4ax, browser)
        func.enterValue(selectors.modifyWantedInputs.ori, data.goodData.ori9an, browser)
        func.enterValue(selectors.modifyWantedInputs.nam, data.goodData.nam30, browser)
        func.enterValue(selectors.modifyWantedInputs.sex, data.goodData.sexMa, browser)
        func.enterValue(selectors.modifyWantedInputs.rac, data.goodData.rac1a, browser)
        func.enterValue(selectors.modifyWantedInputs.hgt, data.goodData.hgt3n, browser)
        func.enterValue(selectors.modifyWantedInputs.wgt, data.goodData.wgt3n, browser)
        func.enterValue(selectors.modifyWantedInputs.hai, data.goodData.hai3a, browser)
        func.enterValue(selectors.modifyWantedInputs.off, data.goodData.off15, browser)
        func.enterValue(selectors.modifyWantedInputs.dow, data.goodData.dow8n, browser)
        browser
            .click(selectors.modifyWantedBtns.submitBtn)
        browser.expect.element(selectors.modifyWantedHeaders.blob).text.to.contain('1234567890.asdf1234!asdf123456.ab!@.asdf12345.a1!a1!a1!a1!a1!a1!a1!a1!a1!a1!.M.a.508.210.bro.a1!a1a1!a1a1!a1.01011900......')
    },


    //Using 'goodData' from first boundary test, with the change being sexUa.
    'Modify Wanted required goodData sex unknown test': browser => {
        browser
            .click(selectors.startPage.modifyBtn)
        func.enterValue(selectors.modifyWantedInputs.wid, data.goodData.warrent10n, browser)
        func.enterValue(selectors.modifyWantedInputs.header, data.goodData.header9, browser)
        func.enterValue(selectors.modifyWantedInputs.mke, data.goodData.mke2ax, browser)
        func.enterValue(selectors.modifyWantedInputs.ori, data.goodData.ori9an, browser)
        func.enterValue(selectors.modifyWantedInputs.nam, data.goodData.nam3, browser)
        func.enterValue(selectors.modifyWantedInputs.sex, data.goodData.sexUa, browser)
        func.enterValue(selectors.modifyWantedInputs.rac, data.goodData.rac1a, browser)
        func.enterValue(selectors.modifyWantedInputs.hgt, data.goodData.hgt3n, browser)
        func.enterValue(selectors.modifyWantedInputs.wgt, data.goodData.wgt1n, browser)
        func.enterValue(selectors.modifyWantedInputs.hai, data.goodData.hai3a, browser)
        func.enterValue(selectors.modifyWantedInputs.off, data.goodData.off5, browser)
        func.enterValue(selectors.modifyWantedInputs.dow, data.goodData.dow8n, browser)
        browser
            .click(selectors.modifyWantedBtns.submitBtn)
        browser.expect.element(selectors.modifyWantedHeaders.blob).text.to.contain('1234567890.asdf1234!.a!.asdf12345.a1!.U.a.508.001.bro.a1!a1.01011900......')
    },


    'Modify Wanted required/optional badData period tests, all': browser => {
        browser
            .click(selectors.startPage.modifyBtn)
        func.enterValue(selectors.modifyWantedInputs.wid, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.header, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.mke, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.ori, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.nam, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.sex, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.rac, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.hgt, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.wgt, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.hai, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.off, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.dow, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.oln, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.ols, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.lic, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.lis, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.lid, data.badDataperiod.all, browser)
        browser
            .click(selectors.modifyWantedBtns.submitBtn)
        browser.expect.element(selectors.modifyWantedHeaders.text).text.to.contain('No results generated due to error.')
    },


    // The following 'optional' tests will use inital boundary goodData for all required fields.
    'Modify Wanted optional goodData first boundary test': browser => {
        browser
            .click(selectors.startPage.modifyBtn)
        func.enterValue(selectors.modifyWantedInputs.wid, data.goodData.warrent10n, browser)
        func.enterValue(selectors.modifyWantedInputs.header, data.goodData.header9, browser)
        func.enterValue(selectors.modifyWantedInputs.mke, data.goodData.mke2ax, browser)
        func.enterValue(selectors.modifyWantedInputs.ori, data.goodData.ori9an, browser)
        func.enterValue(selectors.modifyWantedInputs.nam, data.goodData.nam3, browser)
        func.enterValue(selectors.modifyWantedInputs.sex, data.goodData.sexFa, browser)
        func.enterValue(selectors.modifyWantedInputs.rac, data.goodData.rac1a, browser)
        func.enterValue(selectors.modifyWantedInputs.hgt, data.goodData.hgt3n, browser)
        func.enterValue(selectors.modifyWantedInputs.wgt, data.goodData.wgt1n, browser)
        func.enterValue(selectors.modifyWantedInputs.hai, data.goodData.hai3a, browser)
        func.enterValue(selectors.modifyWantedInputs.off, data.goodData.off5, browser)
        func.enterValue(selectors.modifyWantedInputs.dow, data.goodData.dow8n, browser)
        func.enterValue(selectors.modifyWantedInputs.oln, data.goodData.oln1, browser)
        func.enterValue(selectors.modifyWantedInputs.ols, data.goodData.ols2a, browser)
        func.enterValue(selectors.modifyWantedInputs.lic, data.goodData.lic5an, browser)
        func.enterValue(selectors.modifyWantedInputs.lis, data.goodData.lis2a, browser)
        func.enterValue(selectors.modifyWantedInputs.lid, data.goodData.lid8n, browser)
    },


    // Second optional goodData boundary test, with the changes being the Driver's License Number, and License Plate.
    'Modify Wanted optional goodData second boundary test': browser => {
        browser
            .click(selectors.startPage.modifyBtn)
        func.enterValue(selectors.modifyWantedInputs.wid, data.goodData.warrent10n, browser)
        func.enterValue(selectors.modifyWantedInputs.header, data.goodData.header9, browser)
        func.enterValue(selectors.modifyWantedInputs.mke, data.goodData.mke2ax, browser)
        func.enterValue(selectors.modifyWantedInputs.ori, data.goodData.ori9an, browser)
        func.enterValue(selectors.modifyWantedInputs.nam, data.goodData.nam3, browser)
        func.enterValue(selectors.modifyWantedInputs.sex, data.goodData.sexFa, browser)
        func.enterValue(selectors.modifyWantedInputs.rac, data.goodData.rac1a, browser)
        func.enterValue(selectors.modifyWantedInputs.hgt, data.goodData.hgt3n, browser)
        func.enterValue(selectors.modifyWantedInputs.wgt, data.goodData.wgt1n, browser)
        func.enterValue(selectors.modifyWantedInputs.hai, data.goodData.hai3a, browser)
        func.enterValue(selectors.modifyWantedInputs.off, data.goodData.off5, browser)
        func.enterValue(selectors.modifyWantedInputs.dow, data.goodData.dow8n, browser)
        func.enterValue(selectors.modifyWantedInputs.oln, data.goodData.oln20, browser)
        func.enterValue(selectors.modifyWantedInputs.ols, data.goodData.ols2a, browser)
        func.enterValue(selectors.modifyWantedInputs.lic, data.goodData.lic8an, browser)
        func.enterValue(selectors.modifyWantedInputs.lis, data.goodData.lis2a, browser)
        func.enterValue(selectors.modifyWantedInputs.lid, data.goodData.lid8n, browser)
    },


    // Using badData for this test for time and coverage purposes.
    'Testing the "Clear" button functionality for Modify Wanted': browser => {
        browser
            .click(selectors.startPage.modifyBtn)
        func.enterValue(selectors.modifyWantedInputs.header, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.mke, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.ori, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.nam, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.sex, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.rac, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.hgt, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.wgt, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.hai, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.off, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.dow, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.oln, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.ols, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.lic, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.lis, data.badDataperiod.all, browser)
        func.enterValue(selectors.modifyWantedInputs.lid, data.badDataperiod.all, browser)
        browser
            .click(selectors.modifyWantedBtns.cleanBtn)
        browser.expect.element(selectors.modifyWantedHeaders.text).text.to.contain('Submit query for validation.')
    },


    'Cancel Wanted required goodData inital boundary test': browser => {
        browser
            .click(selectors.startPage.cancelBtn)
        func.enterValue(selectors.cancelWantedInputs.wid, data.goodData.warrent10n, browser)
        func.enterValue(selectors.cancelWantedInputs.res, data.goodData.res10, browser)
        func.enterValue(selectors.cancelWantedInputs.dat, data.goodData.dat8n, browser)
        browser
            .click(selectors.cancelWantedBtns.submitBtn)
        browser.expect.element(selectors.cancelWantedHeaders.blob).text.to.contain('1234567890.a1s2d3f4g!.12312017')
    },


    'Cancel Wanted required goodData second boundary test': browser => {
        browser
            .click(selectors.startPage.cancelBtn)
        func.enterValue(selectors.cancelWantedInputs.wid, data.goodData.warrent10n, browser)
        func.enterValue(selectors.cancelWantedInputs.res, data.goodData.res150, browser)
        func.enterValue(selectors.cancelWantedInputs.dat, data.goodData.dat8n, browser)
        browser
            .click(selectors.cancelWantedBtns.submitBtn)
        browser.expect.element(selectors.cancelWantedHeaders.blob).text.to.contain('1234567890.a1s2d3f4g!a1s2d3f4g!a1s2d3f4g!a1s2d3f4g!a1s2d3f4g!a1s2d3f4g!a1s2d3f4g!a1s2d3f4g!a1s2d3f4g!a1s2d3f4g!a1s2d3f4g!a1s2d3f4g!a1s2d3f4g!a1s2d3f4g!a1s2d3f4g!.12312017')

    },


    'Cancel Wanted badData test': browser => {
        browser
            .click(selectors.startPage.cancelBtn)
        func.enterValue(selectors.cancelWantedInputs.wid, data.badDataperiod.all, browser)
        func.enterValue(selectors.cancelWantedInputs.res, data.badDataperiod.all, browser)
        func.enterValue(selectors.cancelWantedInputs.dat, data.badDataperiod.all, browser)
        browser
            .click(selectors.cancelWantedBtns.submitBtn)
        browser.expect.element(selectors.cancelWantedHeaders.text).text.to.contain('No results generated due to error.')
    },


    'Testing the "Clear" button functionality of Cancel Wanted': browser => {
        browser
            .click(selectors.startPage.cancelBtn)
        func.enterValue(selectors.cancelWantedInputs.wid, data.badDataperiod.all, browser)
        func.enterValue(selectors.cancelWantedInputs.res, data.badDataperiod.all, browser)
        func.enterValue(selectors.cancelWantedInputs.dat, data.badDataperiod.all, browser)
        browser
            .click(selectors.cancelWantedBtns.cleanBtn)
        browser.expect.element(selectors.cancelWantedHeaders.text).text.to.contain('Submit query for validation.')
    }
}