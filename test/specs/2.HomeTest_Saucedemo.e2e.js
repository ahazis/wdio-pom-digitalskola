const HomePage = require('../pageobjects/home.page')
const LoginPage = require('../pageobjects/login.page')

describe('Saucedemo', () => { 
    it('Test 4 - Home Page', async () => {
        // ---------login-------    --
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')

        // ---------home page---------
        await HomePage.AssertvalidationProduct()
        await HomePage.actionProduct()                
    })  
})


