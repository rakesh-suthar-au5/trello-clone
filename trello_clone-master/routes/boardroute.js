var express = require('express');
var { Board } = require('../modal/connection')
var router = express.Router();

/* GET home page. */
router.post('/create', async (req, res, next) => {



    const {name,discription} = req.body
    const { id } = req.decoded

    try {
        const board = await Board.create({name:name,discription:discription,user_id:id})
        res.status(200).send(board)
    } catch (error) {
        res.status(500).send('something went wrong')
    }

});

router.get('/view',async(req,res,next)=>{
    console.log("i am load board hi iam hit =====>")
    const { id } = req.decoded
    try {
        const boards = await Board.findAll({where:{user_id:id}})
        res.status(200).send(boards)
    } catch (error) {
        res.status(500).send('something went wrong')
    }
})

module.exports = router;
