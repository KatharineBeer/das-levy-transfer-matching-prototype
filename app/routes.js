const express = require('express')
const router = express.Router()

// eslint-disable-next-line no-unused-expressions
router.use('/', (req, res, next) => {
     res.locals.error = req.query.error || ''
     next()
}) /

// Add your routes here - above the module.exports line

// GET SPRINT NAME - useful for relative templates
router.use('/', (req, res, next) => {
     res.locals.currentURL = req.originalUrl; //current screen
     res.locals.prevURL = req.get('Referrer'); // previous screen
     console.log('previous page is: ' + res.locals.prevURL + " and current page is " + req.url + " " + res.locals.currentURL );
     next();
});


// User Research and design versions
router.use('/sprint-15', require('./views/sprint-15/_routes'))
router.use('/sprint-17', require('./views/sprint-17/_routes'))
router.use('/sprint-18', require('./views/sprint-18/_routes'))
router.use('/sprint-19', require('./views/sprint-19/_routes'))
router.use('/sprint-20', require('./views/sprint-20/_routes'))

module.exports = router
