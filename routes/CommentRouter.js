const Router = require('express').Router()
const controller = require('../controllers/CommentController')


// You Do
// Implement Crud Operations For Comments
Router.get('/recents', controller.GetRecentComments)
Router.post('/:twert_id', controller.CreatetComment)
Router.put('/:comment_id', controller.UpdateComment)
Router.delete('/:comment_id', controller.DeleteComment)
// You Do
module.exports = Router
