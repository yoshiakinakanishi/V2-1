var express = require('express');
var router = express.Router();

// application/index
router.get('/', (req, res, next) => {
  var data = {
      title: '配信対象のアプリ一覧画面',
      content: '配信対象のアプリ一覧画面',
      link: {href:'/', text:'TOPへ'}
  };    
           
  res.render('application/index', data);
});

// application/item
router.get('/item', (req, res, next) => {
  var data = {
      title: '配信対象のアプリ設定情報の編集画面',
      content: '配信対象のアプリ設定情報の編集画面',
      link: {href:'/', text:'TOPへ'}
  };    
           
  res.render('application/item', data);
});

module.exports = router;