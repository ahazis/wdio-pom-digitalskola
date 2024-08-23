const { $, expect } = require('@wdio/globals')
const Page = require('./page');


class LoginPage extends Page {

    get inputUsername () {
        return $('#user-name')
    }
    get inputPassword () {
        return $('#password')
    }
    get btnSubmit () {
        return $('#login-button[name="login-button"]')
    }
    get errorMessageFailed () {
        return $('[class="error-message-container error"]')
    }
    async login (username, password) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.btnSubmit.click()
    }

// ---------validation---------
    async loginFailed () {
        await this.errorMessageFailed.getText();
    }

    open () {
        return super.open('');
    }
}

module.exports = new LoginPage();
