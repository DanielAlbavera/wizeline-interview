const Page = require('./page');

class LoginMessagePage extends Page {
  
    get loginButton () { return $('.button-login') }

    async showLogin () {
        await (await this.loginButton).click();
    }

}

module.exports = new LoginMessagePage();
