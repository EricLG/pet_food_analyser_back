import { ObjectId } from 'mongodb'
import { isNil } from 'lodash'

import { ErrorHandler } from '../models/errorHandler'

export class Petfood {

    static validateId(id) {
        if (isNil(id) || 'undefined' == id) {
            throw new ErrorHandler(400, 'Missing required id')
        } else if (!ObjectId.isValid(id)) {
            throw new ErrorHandler(400, 'Bad parameter')
        }
    }
}
