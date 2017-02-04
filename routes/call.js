'use strict';
const router = require('express').Router();
const uuid = require('uuid');

router.get('/', (req, res) => {
  let prefix = 'call/';
  if (req.originalUrl.charAt(req.originalUrl.length - 1) === '/') prefix = '';
  res.redirect(prefix + uuid.v4());
});

router.get('/:callId', (req, res) => {
  res.render('call', {
    callId: encodeURIComponent(req.params.callId)
  });
});

module.exports = router;
