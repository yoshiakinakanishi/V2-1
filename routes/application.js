var express = require('express');
var router = express.Router();

// application
router.get('/', (req, res, next) => {
  var data = {
      title: 'アプリ一覧',
      content: 'テキストテキストテキスト',
      link: {href:'/', text:'ログアウト'},
      link_application: {href:'/application', text:'アプリ一覧 ＞'},
      link_application_item: {href:'/application/item', text:'アプリ設定の編集 ＞'},
      link_transmit: {href:'/transmit', text:'配信登録一覧リスト ＞'}
  };    
           
  res.render('application', data);
});

// application/item
router.get('/item', (req, res, next) => {
  var data = {
      title: 'アプリ設定の編集',
      content: 'テキストテキストテキスト',
      link: {href:'/', text:'ログアウト'},
      link_application: {href:'/application', text:'アプリ一覧 ＞'},
      link_application_confirm: {href:'/application/confirm', text:'アプリ設定編集の確認 ＞'},  
  };    
           
  res.render('application/item', data);
});

// application/confirm
router.get('/confirm', (req, res, next) => {
  var data = {
      title: 'アプリ設定編集の確認',
      content: 'テキストテキストテキスト',
      link: {href:'/', text:'ログアウト'},
      link_application: {href:'/application', text:'アプリ一覧 ＞'},
  };    
           
  res.render('application/confirm', data);
});

module.exports = router;