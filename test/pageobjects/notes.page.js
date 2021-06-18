const Page = require('./page');

class NotePage extends Page {
    
    get addNoteButton () { return $('//button[@class="btn btn-lg btn-primary"]'); }

}

module.exports = new NotePage();
