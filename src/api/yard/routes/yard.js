'use strict';

/**
 * yard router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::yard.yard');
