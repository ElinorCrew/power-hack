/*jslint node: true*/
/*global describe, it*/

var assert = require('assert'),
    MeterUtil = require('../meter-util').MeterUtil,

    jsonReadings = {
        'meterReadings': [{
            'meterReading': {
                'meterAsset': { 'mRID': '7350049083690839' },
                'readings': [
                    {
                        'timeStamp': '2013-06-04T22:00:00.000Z',
                        'value': 29961.598,
                        'readingType': {
                            'ref': '7.12.3.1.0.12.0.0.0.3.72'
                        }
                    },
                    {
                        'timeStamp': '2013-06-04T23:00:00.000Z',
                        'value': 29961.75,
                        'readingType': {
                            'ref': '7.12.3.1.0.12.0.0.0.3.72'
                        }
                    }
                ],
                'serviceDeliveryPoint': { 'mRID': '1033963.001.1' }
            }
        }]
    };

describe('meter-util', function() {
    'use strict';
    describe('returnHello', function() {
        it('should return hello', function() {
            var meterUtil = new MeterUtil();

            assert.equal('hello', meterUtil.returnHello());
        });
    });

    describe('calculateWattHours', function() {
        it('should return hello', function() {
            var meterUtil = new MeterUtil(),
                meterReading = jsonReadings.meterReadings[0].meterReading.readings[0],
                actualWattHours = meterUtil.wattHours(meterReading);

            assert.equal(29961698, actualWattHours);
        });
    });
});