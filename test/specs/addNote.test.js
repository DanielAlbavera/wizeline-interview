const LoginMessagePage = require('../pageobjects/login-message.page');
const LoginPage = require('../pageobjects/login.page');
const NotePage = require('../pageobjects/notes.page');
const AddNotePage = require('../pageobjects/add-note.page');
const dProvider = require('../data/data-provider');

describe("Testing the Add Note Functionality", () => {
    
    it('should login with valid credentials', async () => {
        await LoginMessagePage.open();
        await LoginMessagePage.showLogin();
        await LoginPage.login(dProvider.getUsername,dProvider.getPassword);
        await expect(NotePage.addNoteButton).toBeExisting();        
    });
    
    it("should create a Note Successfully", async () => {
        await NotePage.clickAddNote();
        await AddNotePage.addNote(dProvider.getTitle, dProvider.getDescription);
        await expect(NotePage.getLastNote).toHaveText(dProvider.getTitle);
    });


});