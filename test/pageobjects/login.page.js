const Page = require('./page');

class LoginPage extends Page {

    get inputUsername () { return $("//input[@name='login.username']"); }
    get inputPasword () { return $("//input[@name='login.password']"); }
    get loginButton () { return $('//button[@class="btn btn-lg btn-primary button-login"]'); }

    async login(username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPasword).setValue(password);
        await (await this.loginButton).click();
    }

}

module.exports = new LoginPage();