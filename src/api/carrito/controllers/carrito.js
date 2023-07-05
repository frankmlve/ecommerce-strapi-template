'use strict';

/**
 * carrito controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::carrito.carrito', ({ strapi }) =>  ({

  async findByUserId(ctx){
    const sanitizedQueryParams = await this.sanitizeQuery(ctx);
    const result = await strapi.service('api::carrito.carrito').findByUserId(ctx.params.user_id)
    const sanitizedResults = await this.sanitizeOutput(result, ctx);
    return sanitizedResults
  }
}));
