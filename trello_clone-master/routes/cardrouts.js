var express = require('express');
var { Card } = require('../modal/connection')
var router = express.Router();


router.post('/create', async (req, res, next) => {
  const { name, discription, priority, list_id } = req.body
  try {
    const card = await Card.create({ name: name, discription: discription, priority: priority, list_id: list_id })
    res.status(200).send(card)
  } catch (error) {
    res.status(500)
  }

});

router.get('/view', async (req, res, next) => {
  const { id } = req.query
  try {
    const cards = await Card.findAll({ where: { list_id: id } })
    res.status(200).send(cards)
  } catch (error) {
    res.status(500)
  }

})

router.put('/edit', async (req, res, next) => {
  // console.log(req.body)
  const { name, discription, priority, list, id } = req.body

  try {
    const card = await Card.update({ name: name, discription: discription, priority: priority, list_id: list }, {
      where: { id: id }, returning: true,
      plain: true
    })
    res.status(200).send(card)
  } catch (error) {
    res.status(500)
  }
})

router.delete('/delete', async (req, res, next) => {
  const { id } = req.query
  try {
    await Card.destroy({ where: { id: id } })
    res.status(200).send("done")
  } catch (error) {
    res.status(500)

  }
})

router.put('/move', async (req, res, next) => {
  const { card, list } = req.body
  try {
    await Card.update({ list_id: list }, {
      where: {
        id: card
      }
    })
    res.status(200).send("done")
  } catch (error) {
    res.status(500)
  }
})

module.exports = router;
