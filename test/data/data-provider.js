const data = require('./data.json');

class DataProvider {
    
    get getUsername () { return data["testApp"]["login"]["username"]; }
    get getPassword () { return data["testApp"]["login"]["password"]; }

}

module.exports = new DataProvider();