const { getDb } = require('../db')
const { ObjectId } = require('mongodb')

const getAllIssues = (req, res) => {
  let issues = []
  getDb().collection('issue')
    .find()
    .forEach(issue => issues.push(issue))
    .then(() => {
      res.status(200).json(issues)
    }).catch(() => {
      res.status(500).json({error: 'Can not fetch the documents'})
  })
}

const getIssue = (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(500).json({error: 'Please provide valid id'})
  }
  getDb().collection('issue')
    .findOne({ _id: new ObjectId(req.params.id) })
    .then((doc) => {
      res.status(200).json(doc)
    }).catch(() => {
      res.status(500).json({error: 'Can not fetch the doc'})
  })
}

const createIssue = (req, res) => {
  const issue = req.body
  getDb().collection('issue')
    .insertOne(issue)
    .then(result => res.status(201).json(issue))
    .catch(err => res.status(500).json('Can not create new doc'))
}

const updateIssue = (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(500).json({error: 'Please provide valid id'})
  }
  const updates = req.body
  getDb().collection('issue')
    .updateOne({ _id: new ObjectId(req.params.id) }, { $set: updates })
    .then(result => res.status(200).json(updates))
    .catch(err => res.status(500).json('Can not update the doc'))
}

const deleteIssue = (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(500).json({error: 'Please provide valid id'})
  }

  getDb().collection('issue')
    .deleteOne({ _id: new ObjectId(req.params.id) })
    .then((result) => {
      res.status(200).json(result)
    }).catch(() => {
      res.status(500).json({error: 'Can not delete the doc'})
  })
}

module.exports = {getAllIssues, getIssue, createIssue, updateIssue, deleteIssue};