/*jslint node: true, nomen: true*/

////////////////////////////////////////
// Collection object for test json data.

var JsonProvider = function () {
    'use strict';
    var self = this,
        meterKey = '0024ec929321472ca0d71e0ec739d090',
        _ = require('underscore'),
        ApiDataProvider = require('./api-data-provider').ApiDataProvider,
        apiProvider = new ApiDataProvider(),
        MeterUtil = require('./meter-util').MeterUtil,
        meter = new MeterUtil(),
        thisWeek = null,
        lastWeek = null,
        lastAwg = null,
        groupAwg = null,

        convertValues = function (data) {
            var readings = _.map(data.meterReadings[0].meterReading.readings, function (meterReading) {
                    return {
                        date: Date.parse(meterReading.timeStamp),
                        val: meter.wattHours(meterReading) / 1000
                    };
                }),
                temp = [],
                i;

            for (i = 1; i < readings.length; i += 1) {
                temp.push({
                    date: readings[i].date,
                    val: readings[i].val - readings[i - 1].val
                });
            }

            return temp;
        };

    apiProvider.getMeterReadings(meterKey, '2014-03-15', '2014-03-22', 'Hour', function (json) {
        thisWeek = convertValues(json);
    });

    apiProvider.getMeterReadings(meterKey, '2014-03-08', '2014-03-15', 'Hour', function (json) {
        lastWeek = convertValues(json);
        console.log('Done!');
    });

    self.thisWeek = function () {
        return thisWeek;
    };

    self.lastWeek = function () {
        return lastWeek;
    };

    self.achievementData = function() {
        return {
            achievements: [
                {
                    id: "1",
                    name: "Earth Hour",
                    completed: false,
                    img: "earth",
                    description: "60 min no power usage, http://www.earthhour.org/"
                },
                {
                    id: "2",
                    name: "Lyset av om natta",
                    completed: true,
                    img: "switch",
                    description: "En natt uten strømforbruk."
                },
                {
                    id: "3",
                    name: "Nyttårsforsett",
                    completed: true,
                    img: "energysavings",
                    description: "Lavere strømforbruk i år i forhold til i fjor."
                },
                {
                    id: "4",
                    name: "Kongen av Sankthans",
                    completed: false,
                    img: "campfire",
                    description: "Ingen strømforbruk på Sankthansaften."
                },
                {
                    id: "5",
                    name: "Levende lys",
                    completed: true,
                    img: "candle",
                    description: "Forbruk mindre enn 6 kW mellom kl. 17 og 20."
                },
                {
                    id: "6",
                    name: "Underforbruk",
                    completed: true,
                    img: "graph",
                    description: "Strømforbruk som endelig er under gjennomsnittet."
                },
                {
                    id: "7",
                    name: "Sparebluss",
                    completed: true,
                    img: "orbit",
                    description: "Forbruk under gjennomsnittet i et år."
                },
                {
                    id: "8",
                    name: "Supersparer",
                    completed: true,
                    img: "calendar2",
                    description: "Forbruk under gjennomsnittet i en måned."
                },
                {
                    id: "9",
                    name: "Vinterkulda",
                    completed: true,
                    img: "defrost",
                    description: "Forbruk under gjennomsnittet for vintermånedene november-februar."
                },
                {
                    id: "10",
                    name: "Stordriftsfordeler",
                    completed: true,
                    img: "greenenergy3",
                    description: "Lavere strømforbruk i forhold til en mindre husholdning enn din."
                },
                {
                    id: "11",
                    name: "Lederen av gjengen",
                    completed: false,
                    img: "group",
                    description: "Spar mest strøm i vennegjengen din."
                },
                {
                    id: "12",
                    name: "Proaktiv",
                    completed: true,
                    img: "weatherizedhome",
                    description: "Oppnå flest reduksjoner den siste måneden."
                },
                {
                    id: "13",
                    name: "Piken med svovelstikkene",
                    completed: true,
                    img: "matches",
                    description: "Lavest strømforbruk på nyttårsaften blant vennene dine."
                },
                {
                    id: "14",
                    name: "Dvalemodus",
                    completed: false,
                    img: "moon",
                    description: "Lavest strømforbruk om natten blant vennene dine"
                },
                {
                    id: "15",
                    name: "5:2-dietten",
                    completed: true,
                    img: "meter",
                    description: "Oppnå 5 dager i uken der strømforbruket ditt er lavere enn hos vennne dine."
                },
                {
                    id: "16",
                    name: "Tabelleder",
                    completed: true,
                    img: "ribbon3",
                    description: "Lavest strømforbruk blant vennene dine i et år."
                },
                {
                    id: "17",
                    name: "Nedskjæring",
                    completed: true,
                    img: "greenenergy2",
                    description: "Redusert strømforbruket med minst 20 % fra i fjor."
                },
                {
                    id: "18",
                    name: "Småtteri",
                    completed: true,
                    img: "lightbulb2",
                    description: "Redusert strømforbruket med minst 5 % fra i fjor."
                }
            ]
        };
    };

    self.highscore = function () {
        return {
            "friends": [
                {"name": "Simen", "score": 512, "imageurl": "../style/images/simen.jpg", "currentuser": false},
                {"name": "George", "score": 1024, "imageurl": "../style/images/george.jpg", "currentuser": false},
                {"name": "Steffen", "score": 712, "imageurl": "../style/images/steffen.jpg", "currentuser": false},
                {"name": "Kirø", "score": 812, "imageurl": "../style/images/kiro.jpg", "currentuser": false},
                {"name": "Teodor", "score": 732, "imageurl": "../style/images/teo.jpg", "currentuser": false},
                {"name": "Inga Marte", "score": 132, "imageurl": "../style/images/inga_marte.jpg", "currentuser": true}
            ]
        };
    };
};

exports.JsonProvider = JsonProvider;