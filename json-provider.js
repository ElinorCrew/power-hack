/*jslint node: true*/

////////////////////////////////////////
// Collection object for test json data.

var JsonProvider = function () {
    'use strict';
    var self = this;

    self.achievementData = function() {
        return { achievements: [
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
                completed: true,
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
                completed: true,
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
    }

    self.highscore = function () {
        return {
            "friends": [
                {"name": "Simen", "score": 512, "imageurl" : "../style/images/simen.jpg","currentuser":false},
                {"name": "George", "score": 1024,"imageurl" : "../style/images/george.jpg","currentuser":false},
                {"name": "Steffen", "score": 712,"imageurl" : "../style/images/steffen.jpg","currentuser":false},
                {"name": "Kirø", "score": 812, "imageurl" : "../style/images/kiro.jpg","currentuser":false},
                {"name": "Teodor", "score": 732, "imageurl" : "../style/images/teo.jpg","currentuser":false},
                {"name": "Inga Marte", "score": 132, "imageurl": "../style/images/inga_marte.jpg", "currentuser":true}
            ]
        };
    };

    self.februaryData = function () {
        return {"meterReadings":[{"meterReading":{"meterAsset":{"mRID":"0043205c065d421dbc187464abfd2895"},"readings":[{"timeStamp":"2014-03-01T00:00:00.000+01:00","value":3.275302E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-01T01:00:00.000+01:00","value":3.275465E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-01T02:00:00.000+01:00","value":3.275675E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-01T03:00:00.000+01:00","value":3.275846E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-01T04:00:00.000+01:00","value":3.276038E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-01T05:00:00.000+01:00","value":3.276192E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-01T06:00:00.000+01:00","value":3.27641E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-01T07:00:00.000+01:00","value":3.276569E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-01T08:00:00.000+01:00","value":3.276745E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-01T09:00:00.000+01:00","value":3.277067E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-01T10:00:00.000+01:00","value":3.277392E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-01T11:00:00.000+01:00","value":3.27765E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-01T12:00:00.000+01:00","value":3.277992E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-01T13:00:00.000+01:00","value":3.278175E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-01T14:00:00.000+01:00","value":32783160.000000004,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-01T15:00:00.000+01:00","value":3.278475E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-01T16:00:00.000+01:00","value":3.278785E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-01T17:00:00.000+01:00","value":3.279193E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-01T18:00:00.000+01:00","value":3.279465E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-01T19:00:00.000+01:00","value":3.279721E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-01T20:00:00.000+01:00","value":32799269.999999996,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-01T21:00:00.000+01:00","value":32801690.000000004,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-01T22:00:00.000+01:00","value":3.280378E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-01T23:00:00.000+01:00","value":3.280521E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-02T00:00:00.000+01:00","value":32806519.999999996,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-02T01:00:00.000+01:00","value":3.280843E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-02T02:00:00.000+01:00","value":3.281003E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-02T03:00:00.000+01:00","value":3.281247E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-02T04:00:00.000+01:00","value":3.281364E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-02T05:00:00.000+01:00","value":3.281511E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-02T06:00:00.000+01:00","value":3.281653E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-02T07:00:00.000+01:00","value":32817940.000000004,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-02T08:00:00.000+01:00","value":32821019.999999996,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-02T09:00:00.000+01:00","value":3.282518E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-02T10:00:00.000+01:00","value":32827760.000000004,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-02T11:00:00.000+01:00","value":3.28306E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-02T12:00:00.000+01:00","value":32833699.999999996,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-02T13:00:00.000+01:00","value":32838190.000000004,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-02T14:00:00.000+01:00","value":3.283933E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-02T15:00:00.000+01:00","value":32840480.000000004,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-02T16:00:00.000+01:00","value":3.284247E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-02T17:00:00.000+01:00","value":32845839.999999996,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-02T18:00:00.000+01:00","value":32849239.999999996,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-02T19:00:00.000+01:00","value":3.285239E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-02T20:00:00.000+01:00","value":3.285454E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-02T21:00:00.000+01:00","value":32856730.000000004,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-02T22:00:00.000+01:00","value":3.285865E+7,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}},{"timeStamp":"2014-03-02T23:00:00.000+01:00","value":32860230.000000004,"readingType":{"ref":"7.12.3.1.0.12.0.0.0.0.72"}}],"serviceDeliveryPoint":{"mRID":"0043205c065d421dbc187464abfd2895"}}}]};
    };

    self.meterReadings = function () {
        return {
            "meterReadings": [
                {
                    "meterReading": {
                        "meterAsset": {
                            "mRID": "7350049083690839"
                        },
                        "readings": [
                            {
                                "timeStamp": "2013-06-04T22:00:00.000Z",
                                "value": 29961.598,
                                "readingType": {
                                    "ref": "7.12.3.1.0.12.0.0.0.3.72"
                                }
                            },
                            {
                                "timeStamp": "2013-06-04T23:00:00.000Z",
                                "value": 29961.75,
                                "readingType": {
                                    "ref": "7.12.3.1.0.12.0.0.0.3.72"
                                }
                            },
                            {
                                "timeStamp": "2013-06-05T00:00:00.000Z",
                                "value": 29962.518,
                                "readingType": {
                                    "ref": "7.12.3.1.0.12.0.0.0.3.72"
                                }
                            },
                            {
                                "timeStamp": "2013-06-05T01:00:00.000Z",
                                "value": 29962.667,
                                "readingType": {
                                    "ref": "7.12.3.1.0.12.0.0.0.3.72"
                                }
                            },
                            {
                                "timeStamp": "2013-06-05T02:00:00.000Z",
                                "value": 29962.794,
                                "readingType": {
                                    "ref": "7.12.3.1.0.12.0.0.0.3.72"
                                }
                            },
                            {
                                "timeStamp": "2013-06-05T03:00:00.000Z",
                                "value": 29962.918,
                                "readingType": {
                                    "ref": "7.12.3.1.0.12.0.0.0.3.72"
                                }
                            },
                            {
                                "timeStamp": "2013-06-05T04:00:00.000Z",
                                "value": 29963.024,
                                "readingType": {
                                    "ref": "7.12.3.1.0.12.0.0.0.3.72"
                                }
                            },
                            {
                                "timeStamp": "2013-06-05T05:00:00.000Z",
                                "value": 29963.754,
                                "readingType": {
                                    "ref": "7.12.3.1.0.12.0.0.0.3.72"
                                }
                            },
                            {
                                "timeStamp": "2013-06-05T06:00:00.000Z",
                                "value": 29964.55,
                                "readingType": {
                                    "ref": "7.12.3.1.0.12.0.0.0.3.72"
                                }
                            },
                            {
                                "timeStamp": "2013-06-05T07:00:00.000Z",
                                "value": 29964.68,
                                "readingType": {
                                    "ref": "7.12.3.1.0.12.0.0.0.3.72"
                                }
                            },
                            {
                                "timeStamp": "2013-06-05T08:00:00.000Z",
                                "value": 29965.328,
                                "readingType": {
                                    "ref": "7.12.3.1.0.12.0.0.0.3.72"
                                }
                            },
                            {
                                "timeStamp": "2013-06-05T09:00:00.000Z",
                                "value": 29965.452,
                                "readingType": {
                                    "ref": "7.12.3.1.0.12.0.0.0.3.72"
                                }
                            },
                            {
                                "timeStamp": "2013-06-05T10:00:00.000Z",
                                "value": 29965.581,
                                "readingType": {
                                    "ref": "7.12.3.1.0.12.0.0.0.3.72"
                                }
                            },
                            {
                                "timeStamp": "2013-06-05T11:00:00.000Z",
                                "value": 29966.072,
                                "readingType": {
                                    "ref": "7.12.3.1.0.12.0.0.0.3.72"
                                }
                            },
                            {
                                "timeStamp": "2013-06-05T12:00:00.000Z",
                                "value": 29966.335,
                                "readingType": {
                                    "ref": "7.12.3.1.0.12.0.0.0.3.72"
                                }
                            },
                            {
                                "timeStamp": "2013-06-05T13:00:00.000Z",
                                "value": 29966.439,
                                "readingType": {
                                    "ref": "7.12.3.1.0.12.0.0.0.3.72"
                                }
                            },
                            {
                                "timeStamp": "2013-06-05T14:00:00.000Z",
                                "value": 29966.577,
                                "readingType": {
                                    "ref": "7.12.3.1.0.12.0.0.0.3.72"
                                }
                            },
                            {
                                "timeStamp": "2013-06-05T15:00:00.000Z",
                                "value": 29967.265,
                                "readingType": {
                                    "ref": "7.12.3.1.0.12.0.0.0.3.72"
                                }
                            },
                            {
                                "timeStamp": "2013-06-05T16:00:00.000Z",
                                "value": 29967.397,
                                "readingType": {
                                    "ref": "7.12.3.1.0.12.0.0.0.3.72"
                                }
                            },
                            {
                                "timeStamp": "2013-06-05T17:00:00.000Z",
                                "value": 29967.639,
                                "readingType": {
                                    "ref": "7.12.3.1.0.12.0.0.0.3.72"
                                }
                            },
                            {
                                "timeStamp": "2013-06-05T18:00:00.000Z",
                                "value": 29967.782,
                                "readingType": {
                                    "ref": "7.12.3.1.0.12.0.0.0.3.72"
                                }
                            },
                            {
                                "timeStamp": "2013-06-05T19:00:00.000Z",
                                "value": 29968.538,
                                "readingType": {
                                    "ref": "7.12.3.1.0.12.0.0.0.3.72"
                                }
                            },
                            {
                                "timeStamp": "2013-06-05T20:00:00.000Z",
                                "value": 29969.648,
                                "readingType": {
                                    "ref": "7.12.3.1.0.12.0.0.0.3.72"
                                }
                            },
                            {
                                "timeStamp": "2013-06-05T21:00:00.000Z",
                                "value": 29970.034,
                                "readingType": {
                                    "ref": "7.12.3.1.0.12.0.0.0.3.72"
                                }
                            }
                        ],
                        "serviceDeliveryPoint": {
                            "mRID": "1033963.001.1"
                        }
                    }
                }
            ]
        };
    };
};

exports.JsonProvider = JsonProvider;