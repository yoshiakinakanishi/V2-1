var express = require('express');
var router = express.Router();

// transmit
router.get('/', (req, res, next) => {
  var data = {
      title: '配信登録一覧リスト',
      content: 'テキストテキストテキスト',
      link: {href:'/', text:'ログアウト'},
      link_application: {href:'/application', text:'アプリ一覧 ＞'},
      link_transmit_web: {href:'/transmit/web', text:'ブラウザ向け新規登録 ＞'},
      link_transmit: {href:'/transmit', text:'配信登録一覧リスト ＞'},
      link_transmit_reservation: {href:'/transmit/reservation', text:'配信内容編集 ＞'},
      link_transmit_done: {href:'/transmit/done', text:'配信内容確認 ＞'}
  };    
           
  res.render('transmit', data);
});

// transmit/reservation
router.get('/reservation', (req, res, next) => {
  var data = {
      title: '配信内容の編集',
      content: 'テキストテキストテキスト',
      link: {href:'/', text:'ログアウト'},
      link_application: {href:'/application', text:'アプリ一覧 ＞'},
      link_transmit_web: {href:'/transmit/web', text:'ブラウザ向け新規登録 ＞'},
      link_transmit: {href:'/transmit', text:'配信登録一覧リスト ＞'},
      link_transmit_reservation: {href:'/transmit/reservation', text:'配信内容編集 ＞'},
      link_transmit_done: {href:'/transmit/done', text:'配信内容確認 ＞'}
  };    
           
  res.render('transmit/reservation', data);
});

// transmit/done
router.get('/done', (req, res, next) => {
  var data = {
      title: '配信内容の確認',
      content: 'テキストテキストテキスト',
      link: {href:'/', text:'ログアウト'},
      link_application: {href:'/application', text:'アプリ一覧 ＞'},
      link_transmit_web: {href:'/transmit/web', text:'ブラウザ向け新規登録 ＞'},
      link_transmit: {href:'/transmit', text:'配信登録一覧リスト ＞'},
      link_transmit_reservation: {href:'/transmit/reservation', text:'配信内容編集 ＞'},
      link_transmit_done: {href:'/transmit/done', text:'配信内容確認 ＞'}
  };    
           
  res.render('transmit/done', data);
});


// transmit/web
router.get('/web', (req, res, next) => {
  var data = {
      title: 'ブラウザ向け新規配信登録',
      content: 'テキストテキストテキスト',
      link: {href:'/', text:'ログアウト'},
      link_application: {href:'/application', text:'アプリ一覧 ＞'},
      link_transmit_web: {href:'/transmit/web', text:'ブラウザ向け新規登録 ＞'},
      link_transmit: {href:'/transmit', text:'配信登録一覧リスト ＞'},
      link_transmit_reservation: {href:'/transmit/reservation', text:'配信内容編集 ＞'},
      link_transmit_done: {href:'/transmit/done', text:'配信内容確認 ＞'}
  };    
           
  res.render('transmit/web', data);
});

module.exports = router;