const express = require('express')
const router = express.Router()
const eventData = require('../mock data/events.json')

router.get('/', (req, res) => {
    res.status(200).json(eventData)
})

router.get('/:id', (req, res) => {
    res.status(200).json(eventData[req.params.id])
})

router.post('/', (req, res) => {
    eventData[req.body.id] = req.body
    res.status(200).json({status: 'ok'})
})

router.delete('/:id', (req, res) => {
    delete eventData[req.params.id]
    res.status(200).json({status: 'ok'})
})

router.put('/:id', (req, res) => {
    eventData[req.params.id] = req.body
    res.status(200).json(eventData)
})

module.exports = router