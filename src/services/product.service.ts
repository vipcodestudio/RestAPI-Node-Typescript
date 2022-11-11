import { logger } from '../utils/logger'
import productModel from '../models/product.model'

export const getProductFromDB = async () => {
  return await productModel
    .find()
    .then((data) => {
      return data
    })
    .catch((error) => {
      logger.info('Cannot get data from DB')
      logger.error(error)
    })
}
