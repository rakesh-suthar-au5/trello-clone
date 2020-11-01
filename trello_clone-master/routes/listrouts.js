var express = require('express');
var { List } = require('../modal/connection')
var router = express.Router();
var jwtvalidation = require('../middlewares/jwtvalidation')



router.post('/view', async (req, res, next) => {

  const id = req.body.id
  console.log(id)
  try {
    const Lists = await List.findAll({ where: { board_id: id } })
    res.status(200).send(Lists)
  } catch (error) {
    res.status(500).send('server error')
  }

});

router.post('/create', async (req, res, next) => {

  const { name, board } = req.body
  try {
    const list = await List.create({name:name,board_id:board})
    res.status(200).send(list)
  } catch (error) {
    res.status(500)
    
  }



})

module.exports = router;
