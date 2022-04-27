const express = require('express')
const router = express.Router()
const locationData = require('../mock data/locations.json')

router.get('/', (req, res) => {
    res.status(200).json(locationData)
})

router.get('/:id', (req, res) => {
    res.status(200).json(locationData[req.params.id])
})

router.post('/', (req, res) => {
    locationData[req.body.id] = req.body
    res.status(200).json({status: 'ok'})
})

router.delete('/:id', (req, res) => {
    delete locationData[req.params.id]
    res.status(200).json({status: 'ok'})
})

router.put('/:id', (req, res) => {
    locationData[req.params.id] = req.body
    res.status(200).json(locationData)
})

module.exports = router