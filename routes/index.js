var express = require('express');
var router = express.Router();
var standupCtrl = require('../controllers/standup.server.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
    return standupCtrl.list(req, res);
});

/* POST filter by member name - home page. */
router.post('/', function(req, res, next) {
    return standupCtrl.filterByMember(req, res);
});

/* GET new note page. */
router.get('/newnote', function(req, res, next) {
    return standupCtrl.getNote(req, res);
});

/* POST new note page. */
router.post('/newnote', function(req, res, next) {
    return standupCtrl.create(req, res);
});

module.exports = router;
