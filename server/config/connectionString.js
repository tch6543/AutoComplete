"use strict";
var connectionString = (function () {
    function connectionString() {
    }
    return connectionString;
}());
connectionString.BETA_HOSTNAME = "betadb01";
connectionString.PORT = 3457;
connectionString.BETA_UID = 'devlogin';
connectionString.BETA_PWD = 'devlogin01';
connectionString.BETA_AUTOCOMPLETEDB = 'autocompletedb';
connectionString.BETA_APIKEYDB = 'PropertyShareddb';
exports.connectionString = connectionString;
exports.config = {
    Beta: {
        Host: "betadb01",
        Port: 3457,
        Uid: 'devlogin',
        Pass: 'devlogin01',
        ApikeyDb: 'PropertyShareddb'
    }
};
