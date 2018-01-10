var express = require('express');
var router = express.Router();

// index
router.get('/', (req, res, next) => {

  var data = {
      title: 'ログイン画面',
      content: 'ログイン画面',
      link_users: {href:'/users', text:'usersへ'},

      link_application_index: {href:'/application/index', text:'配信対象のアプリ一覧画面へ'},
      link_application_item: {href:'/application/item', text:'配信対象のアプリ設定情報の編集画面へ'},
      
      link_transmit_index: {href:'/transmit/index', text:'配信登録一覧リストへ'},
      link_transmit_reservation: {href:'/transmit/reservation', text:'配信内容編集へ'},
      link_transmit_done: {href:'/transmit/done', text:'配信内容確認へ'},
  };    
           
  res.render('index', data);
});

module.exports = router;