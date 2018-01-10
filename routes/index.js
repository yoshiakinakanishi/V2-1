var express = require('express');
var router = express.Router();

// index
router.get('/', (req, res, next) => {

  var data = {
      title: 'ログイン',
      content: 'テキストテキストテキスト',
      link_application: {href:'/application', text:'アプリ一覧 ＞'},
  };    
           
  res.render('index', data);
});

module.exports = router;