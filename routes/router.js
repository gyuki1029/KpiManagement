var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('pro_search');
});

/* 4 menu pages */
router.get('/pro_search', function (req, res, next) {
  res.render('pro_search');
});

router.get('/pro_registration', function (req, res, next) {
  res.render('pro_registration');
});

router.get('/lpi_search', function (req, res, next) {
  res.render('kpi_search');
});

router.get('/kpi_registration', function (req, res, next) {
  res.render('kpi_registration');
});

router.get('/pro_info', function (req, res, next) {
  //TODO:クエリを元にSQLを投げる
  console.log(req.query);
  //TODO:投げた結果を格納する
  var data = {
    "code": "F0001",
    "abst_ja": "製品別、工場別、BU別など、それぞれの管理単位ごとで得られた収入の金額を表す。",
    "abst_en": "No Record(成果物概要_英語)",
    "status": "運用中",
    "name": "収益",
    "ruby": "しゅうえき",
    "background": "会計報告で必要な勘定科目のため。KPI項目に基づく費目として必要なため。",
    "num_unit": "No Record(採番単位)",
    "bus_func": "財務会計",
    "manage_dep": "財部室",
    "remarks": "No Record(備考)"
  }
  res.render('pro_info', { pro_info: data });

});

router.get('/pro_update', function (req, res, next) {
  //TODO:クエリを元にSQLを投げる
  console.log(req.query);
  //TODO:投げた結果を格納する
  var data = {
    "code": "F0001",
    "abst_ja": "製品別、工場別、BU別など、それぞれの管理単位ごとで得られた収入の金額を表す。",
    "abst_en": "No Record(成果物概要_英語)",
    "status": "運用中",
    "name": "収益",
    "ruby": "しゅうえき",
    "background": "会計報告で必要な勘定科目のため。KPI項目に基づく費目として必要なため。",
    "num_unit": "No Record(採番単位)",
    "bus_func": "財務会計",
    "manage_dep": "財部室",
    "remarks": "No Record(備考)"
  }
  res.render('pro_update', { pro_info: data });

});

router.get('/confirm', function (req, res, next) {
  console.log(req.query);
  res.render('pro_confirm', { pro_info: req.query });
});

router.get('/complete', function (req, res, next) {
  console.log(req.query);
  res.render('pro_complete');
});



/* API*/
router.get('/api/v1/product', function (req, res, next) {

  //TODO:クエリを元にSQLを投げる
  console.log(req.query);
  //TODO:投げた結果を格納する

  var data = [
    {
      "code": "F0001",
      "abst_ja": "製品別、工場別、BU別など、それぞれの管理単位ごとで得られた収入の金額を表す。",
      "abst_en": "No Record(成果物概要_英語)",
      "status": "運用中",
      "name": "収益",
      "ruby": "しゅうえき",
      "background": "会計報告で必要な勘定科目のため。KPI項目に基づく費目として必要なため。",
      "num_unit": "No Record(採番単位)",
      "bus_func": "財務会計",
      "manage_dep": "財部室",
      "remarks": "No&nbspRecord(備考)"
    },
    {
      "code": "F1111",
      "abst_ja": "在庫を表す",
      "abst_en": "No Record(成果物概要_英語)",
      "status": "設計中",
      "name": "在庫",
      "ruby": "ざいこ",
      "background": "生産計画を行のに必要なため。",
      "num_unit": "A:No Record(採番単位)",
      "bus_func": "在庫管理",
      "manage_dep": "調達室",
      "remarks": "No Record(備考)"
    }
  ];
  res.json(data);
});

module.exports = router;
