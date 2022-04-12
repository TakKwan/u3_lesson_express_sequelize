const { Comment, User } = require('../models')

// Work Here

const GetAllComments = async (req, res) => {
  try {
    const allComments = await Comment.findAll()
    res.send(allComments)
  } catch (error) {
    throw error
  }
}

const GetRecentComments = async (req, res) => {
  try {
    const recents = await Comment.findAll({ order: [['created_at', 'DESC']] })
    res.send(recents)
  } catch (error) {
    throw error
  }
}

const CreatetComment = async (req, res) => {
  try {
    let ownerId = parseInt(req.query.user_id)
    let twertId = parseInt(req.params.twert_id)
    let commentBody = {
      ownerId,
      twertId,
      ...req.body
    }
    let comment = await Comment.create(commentBody)
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const UpdateComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id)
    let updatedComment = await Comment.update(req.body, { where: { id: commentId }, returning: true })
    res.send(updatedComment)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id)
    await Comment.destroy({ where: { id: commentId } })
    res.send({ message: `deleted with id of ${commentId}` })
  } catch (error) {
    throw error
  }
}


// Work Here

// Dont forget to export your functions
module.exports = {
  CreatetComment,
  GetRecentComments,
  GetAllComments,
  UpdateComment,
  DeleteComment
}
