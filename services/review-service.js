import { utilService } from '../services/util-service.js'
import { storageService } from './storage-service.js'

export const reviewService = {
    addReview
}

function addReview(bId, writer, rate, dateReaded, review, rId = utilService.makeId()) {
    const newReview = { rId, writer, rate, dateReaded, review }
    const currReviews = storageService.loadFromStorage(`${bId}-reviews`)
    if (currReviews) {
        currReviews.push(newReview)
        storageService.saveToStorage(`${bId}-reviews`, currReviews)
    } else {
        storageService.saveToStorage(`${bId}-reviews`, [newReview])
    }
}