const express = require('express');

// destructuring done in this
const {showTopCanditate,
    showListOfCanditates,
    postCandidateDetails   } = require('../controllers/canditdatesController');

const router = express.Router();


// this will show the top performing canditates mark
router.get('/canditates/top-candidate',showTopCanditate);

// this will show the result of all the canditates
router.get('/candidates/list', showListOfCanditates);

// this will insert the data in the db
router.post('/candidate', postCandidateDetails);

module.exports = router;