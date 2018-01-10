var express = require('express');
var router = express.Router();

// transmit/index
router.get('/', (req, res, next) => {
  var data = {
      title: '配信対象のアプリ一覧画面',
      content: '配信対象のアプリ一覧画面',
      link: {href:'/', text:'TOPへ'}
  };    
           
  res.render('transmit/index', data);
});

// transmit/reservation
router.get('/reservation', (req, res, next) => {
  var data = {
      title: '配信対象のアプリ設定情報の編集画面',
      content: '配信対象のアプリ設定情報の編集画面',
      link: {href:'/', text:'TOPへ'}
  };    
           
  res.render('transmit/reservation', data);
});

// transmit/done
router.get('/done', (req, res, next) => {
  var data = {
      title: '配信対象のアプリ設定情報の編集画面',
      content: '配信対象のアプリ設定情報の編集画面',
      link: {href:'/', text:'TOPへ'}
  };    
           
  res.render('transmit/done', data);
});


module.exports = router;