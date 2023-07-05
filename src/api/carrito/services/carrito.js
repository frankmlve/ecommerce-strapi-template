'use strict';

/**
 * carrito service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::carrito.carrito', ({strapi}) => ({
  async findByUserId(entityId) {
    const userId = parseInt(entityId)
    const result = await strapi.entityService.findMany('api::carrito.carrito',  {
      filters: {
        users_permissions_user: {
          id: userId
        }
      },
      populate: '*'
    })

    return result;
  }
}));
