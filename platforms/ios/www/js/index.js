var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },

    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },


    onDeviceReady: function () {
        app.receivedEvent('deviceready');

        // @params
        // first is an array of beacon objects comprising UUID, major and minor for each
        // second is the URL of the API endpoint that the HTTP POST request is made to
        // third is the unique device identifier required to determine which device detected the beacon call

        window.cordovaInitBeaconScanner(
            // array of eight estimote beacon objects
            [
                {
                    "UUID": UUID,
                    "major": major_1,
                    "minor": minor_1
                },
                {
                    "UUID": UUID,
                    "major": major_2,
                    "minor": minor_2
                },
                {
                    "UUID": UUID,
                    "major": major_3,
                    "minor": minor_3
                },
                {
                    "UUID": UUID,
                    "major": major_4,
                    "minor": minor_4
                },
                {
                    "UUID": UUID,
                    "major": major_5,
                    "minor": minor_5
                },
                {
                    "UUID": UUID,
                    "major": major_6,
                    "minor": minor_6
                },
                {
                    "UUID": UUID,
                    "major": major_7,
                    "minor": minor_7
                },
                {
                    "UUID": UUID,
                    "major": major_8,
                    "minor": minor_8
                },
            ],

            apiURL,

            device_uuid,

            function (result) {}
        );

        window.cordovaInitGeofenceMonitor(

            // array of geofence region objects
            [
                {
                    "geofence_id":"grapevine_ct",
                    "lat":"-34.082041",
                    "lon":"18.437654",
                    "radius":"100"
                },
                {
                    "geofence_id":"home",
                    "lat":"30.33",
                    "lon":"20.55",
                    "radius":"100"
                }
            ],

            apiURL,

            device_uuid,

            function (result) {}
        )
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

var UUID = "B9407F30-F5F8-466E-AFF9-25556B57FE6D";

var major_1 = 45354;
var minor_1 = 2492;

var major_2 = 3102;
var minor_2 = 63571;

var major_3 = 25750;
var minor_3 = 3627;

var major_4 = 22798;
var minor_4 = 51608;

var major_5 = 57042;
var minor_5 = 32504;

var major_6 = 42248;
var minor_6 = 16130;

var major_7 = 42194;
var minor_7 = 49897;

var major_8 = 11073;
var minor_8 = 41791;

var apiURL = "http://api.test12.vine.co.za/api/v2/beacon";

var device_uuid = "kieran001";

app.initialize();