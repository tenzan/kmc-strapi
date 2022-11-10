'use strict';

/**
 * yard service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::yard.yard');
