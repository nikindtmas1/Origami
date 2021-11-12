const express = require('express');
const router = express.Router();

const homeService = require('../services/homeServices');

router.get('/', async (req, res) => {

    try {
        let results = await homeService.getAll();

        res.send(results);//

    } catch (error) {
        console.log(error);
      
    }
  
});

module.exports = router;