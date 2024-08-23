const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')


describe('Saucedemo', () => { 
    it('Test 1 - Login Success', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await HomePage.AssertvalidationProduct()        
    })
    it('Test 2 - Login Failed', async () => {
        await LoginPage.open()
        await LoginPage.login('11111', 'secret_sauce')
        await LoginPage.loginFailed()
    })
    it('Test 3 - Login With Null Username And Password', async () => {
        await LoginPage.open()
        await LoginPage.login('', '')
        await LoginPage.loginFailed()
    })
})  

