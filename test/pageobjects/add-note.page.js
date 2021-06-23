const Page = require('./page');

class AddNotePage extends Page {

    get noteTitle () { return $('//input[@name="note.title"]'); }
    get noteDescription () { return $('//*[@name="note.description"]'); }
    get addNoteButton () { return $('.btn-primary'); }

    async addNote(title,description) {
        await (await this.noteTitle).setValue(title);
        await (await this.noteDescription).setValue(description);
        await (await this.addNoteButton).click();
    }

}

module.exports = new AddNotePage();