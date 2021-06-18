const LoginMessagePage = require('../pageobjects/login-message.page');
const LoginPage = require('../pageobjects/login.page');
const NotePage = require('../pageobjects/notes.page');
const dProvider = require('../data/data-provider');

describe('Test Login Functionality', () => {
    it('should login with valid credentials', async () => {
        await LoginMessagePage.open();
        await LoginMessagePage.showLogin();
        await LoginPage.login(dProvider.getUsername,dProvider.getPassword);
        await expect(NotePage.addNoteButton).toBeExisting();        
    });
});


