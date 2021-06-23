const data = require('./data.json');

class DataProvider {
    
    get getUsername () { return data["testApp"]["login"]["username"]; }
    get getPassword () { return data["testApp"]["login"]["password"]; }
    get getTitle () { return data["testApp"]["note"]["title"]; }
    get getDescription () { return data["testApp"]["note"]["description"]; }

}

module.exports = new DataProvider();