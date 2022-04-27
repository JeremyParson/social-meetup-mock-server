const express = require('express')
const router = express.Router()
const hobbyData = require('../mock data/hobbies.json')

router.get('/', (req, res) => {
    res.status(200).json(hobbyData)
})

router.get('/:id', (req, res) => {
    res.status(200).json(hobbyData[req.params.id])
})

router.post('/', (req, res) => {
    hobbyData[req.params.id] = req.body
    res.status(200).json({status: 'ok'})
})

router.delete('/:id', (req, res) => {
    delete hobbyData[req.params.id]
    res.status(200).json({status: 'ok'})
})

router.put('/:id', (req, res) => {
    hobbyData[req.params.id] = req.body
    res.status(200).json(hobbyData)
})

module.exports = router