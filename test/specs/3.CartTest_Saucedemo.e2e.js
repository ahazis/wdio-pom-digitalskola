const CartPage = require('../pageobjects/cart.page')
const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')

describe('Saucedemo', () => { 
    it('Test 5 - Cart Page', async () => {
        // ---------login---------
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')

        // ---------home page add item to cart---------
        await HomePage.open()
        await HomePage.addItemToCart()
        
        // ---------cart page---------
        await CartPage.open()
        await CartPage.assert_cart()
        await CartPage.action_cart()
    })  
})