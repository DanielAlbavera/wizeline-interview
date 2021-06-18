const Page = require('./page');

class LoginMessagePage extends Page {
  
    get loginButton () { return $('//button[@class="btn btn-lg btn-primary button-login"]') }

    async showLogin () {
        await (await this.loginButton).click();
    }

}

module.exports = new LoginMessagePage();
