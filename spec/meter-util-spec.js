/*jslint node: true*/
/*global describe, it*/

var should = require('should'),
    MeterUtil = require('../meter-util').MeterUtil;

describe('meter-util', function() {
    'use strict';
    describe('readingType', function() {
        it('should parse a reading-type reference into json', function() {
            var meterUtil = new MeterUtil(),
                readingType = { 'ref': '7.12.3.1.0.12.0.0.0.3.72' },
                expectedReadingTypeJson = {
                    'TimeAttribute': 7,
                    'DataQualifier': 12,
                    'AccumlationBehaviour': 3,
                    'FlowDirection': 1,
                    'UomCategorySubclass': 0,
                    'UomCategoryIndex': 12,
                    'MeasurementCategory': 0,
                    'Enumeration': 0,
                    'Phase': 0,
                    'metricMultiplier': 3,
                    'UnitOfMeasure': 72
                };

            meterUtil.readingType(readingType).should.eql(expectedReadingTypeJson);
        });
    });

    describe('wattHours', function() {
        it('given a meter reading should return correct no of Wh', function() {
            var meterUtil = new MeterUtil(),
                meterReadings = [
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
                ];

            meterUtil.wattHours(meterReadings[0]).should.equal(29961598);
            meterUtil.wattHours(meterReadings[1]).should.equal(29961750);
        });
    });
});