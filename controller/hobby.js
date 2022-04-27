const express = require('express')
const router = express.Router()
const hobbyData = require('../mock data/hobbies.json')

router.get('/', (req, res) => {
    res.status(200).json(hobbyData)
})

router.get('/:name', (req, res) => {
    res.status(200).json(hobbyData[req.params.name])
})

router.post('/', (req, res) => {
    hobbyData[req.body.name] = req.body
    res.status(200).json({status: 'ok'})
})

router.delete('/:name', (req, res) => {
    delete hobbyData[req.params.name]
    res.status(200).json({status: 'ok'})
})

router.put('/:name', (req, res) => {
    hobbyData[req.params.name] = req.body
    res.status(200).json(hobbyData)
})

module.exports = router