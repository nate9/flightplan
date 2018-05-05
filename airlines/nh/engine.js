const moment = require('moment')

const Engine = require('../_base/engine')
const { cabins } = require('../../lib/consts')
const { randomInt } = require('../../lib/utils')

const URL_FLIGHT_SEARCH = 'www.google.com'

class NHEngine extends Engine {
  constructor (options) {
    super()
    this.options = options
  }

  static get config () {
    return {
      id: 'NH',
      name: 'All Nippon Airways',
      fares: {
        FS: {cabin: cabins.first, saver: true},
        CS: {cabin: cabins.business, saver: true},
        YS: {cabin: cabins.economy, saver: true}
      },
      accountRequired: true,
      requestsPerHour: 85,
      throttlePeriod: 30 * 60,
      validation: {
        minDays: 1,
        maxDays: 355
      }
    }
  }

  async initialize () {
    return true
  }

  async search (query) {
    return true
  }
}

module.exports = NHEngine
