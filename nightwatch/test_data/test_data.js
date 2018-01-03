const selectors = require('../test_data/css_selectors')

module.exports = {
    /*goodData names indicate the text entry field, followed 
    by the number of characters to be tested, 
    i.e. mke4ax = "MKE" field, boundary testing 4 characters, which have to be 
    either alphabetic or special.
    a = alpha, n = numeric, x = special, blank = any.*/
    goodData: {
        warrent10n: '1234567890',
        header9: 'asdf1234!',
        header19: 'asdf1234!asdf123456',
        mke2ax: 'a!',
        mke4ax: 'ab!@',
        ori9an: 'asdf12345',
        nam3: 'a1!',
        nam30: 'a1!a1!a1!a1!a1!a1!a1!a1!a1!a1!',
        sexMa: 'M',
        sexFa: 'F',
        sexUa: 'U',
        rac1a: 'a',
        hgt3n: '508',
        wgt1n: '1',
        wgt3n: '210',
        hai3a: 'bro',
        hai10a: 'brobrobrow',
        off5: 'a1!a1',
        off15: 'a1!a1a1!a1a1!a1',
        dow8n: '01011900',
        oln1: 'A',
        oln20:'asdfg12345asdfg12345',
        ols2a:'UT',
        old8n:'12312017',
        lic5an: 'as123',
        lic8an:'asdf1234',
        lis2a:'UT',
        lid8n:'12312017',
        dat8n: '12312017',
        res10:'a1s2d3f4g!',
        res150:'a1s2d3f4g!a1s2d3f4g!a1s2d3f4g!a1s2d3f4g!a1s2d3f4g!a1s2d3f4g!a1s2d3f4g!a1s2d3f4g!a1s2d3f4g!a1s2d3f4g!a1s2d3f4g!a1s2d3f4g!a1s2d3f4g!a1s2d3f4g!a1s2d3f4g!'
    },
    badDataperiod: {
        all: '.'
    },
}
