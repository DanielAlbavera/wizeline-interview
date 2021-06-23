const Page = require('./page');

class NotePage extends Page {
    
    get addNoteButton () { return $('.btn-primary'); }
    get getLastNote () { return $('(//div[@class="list-group"]/a/h4)[last()]'); }


    async clickAddNote() {
        await (await this.addNoteButton).click();
    }

}

module.exports = new NotePage();
