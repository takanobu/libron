// @name          libron Hyogo module
// @author        Mutsutoshi Yoshimoto(http://github.com/negachov/)

var libron = libron ? libron : new Object();
libron.hyogo = {
  name: '兵庫県',
  groups: ['県立','神戸市','阪神南','阪神北','東播磨','北播磨','中播磨','西播磨','但馬','丹波','淡路','大学等'],
  libraries: {
  'KENTO':{'group':'県立', 'name':'兵庫県立図書館', 'code':'KENTO'},
  'KOBE':{'group':'神戸市', 'name':'神戸市図書館情報ネットワーク', 'code':'KOBE'},
  'AMAGASAKI':{'group':'阪神南', 'name':'尼崎市立図書館', 'code':'AMAGASAKI'},
  'NISHINOMIYA':{'group':'阪神南', 'name':'西宮市立図書館', 'code':'NISHINOMIYA'},
  'ASHIYA':{'group':'阪神南', 'name':'芦屋市立図書館', 'code':'ASHIYA'},
  'ITAMI':{'group':'阪神北', 'name':'伊丹市立図書館', 'code':'ITAMI'},
  'TAKARADUKA':{'group':'阪神北', 'name':'宝塚市立図書館', 'code':'TAKARADUKA'},
  'KAWANISHI':{'group':'阪神北', 'name':'川西市立図書館', 'code':'KAWANISHI'},
  'SANDA':{'group':'阪神北', 'name':'三田市立図書館', 'code':'SANDA'},
  'INAGAWA':{'group':'阪神北', 'name':'猪名川町立図書館', 'code':'INAGAWA'},
  'AKASHI':{'group':'東播磨', 'name':'明石市立図書館', 'code':'AKASHI'},
  'KAKOGAWA':{'group':'東播磨', 'name':'加古川市立図書館', 'code':'KAKOGAWA'},
  'INAMI':{'group':'東播磨', 'name':'稲美町立図書館', 'code':'INAMI'},
  'HARIMA':{'group':'東播磨', 'name':'播磨町立図書館', 'code':'HARIMA'},
  'NISHIWAKI':{'group':'北播磨', 'name':'西脇市図書館', 'code':'NISHIWAKI'},
  'MIKI':{'group':'北播磨', 'name':'三木市立図書館', 'code':'MIKI'},
  'ONO':{'group':'北播磨', 'name':'小野市立図書館', 'code':'ONO'},
  'KASAI':{'group':'北播磨', 'name':'加西市立図書館', 'code':'KASAI'},
  'KATO':{'group':'北播磨', 'name':'加東市図書館', 'code':'KATO'},
  'TAKA':{'group':'北播磨', 'name':'多可町図書館', 'code':'TAKA'},
  'HIMEJI':{'group':'中播磨', 'name':'姫路市立図書館', 'code':'HIMEJI'},
  'ICHIKAWA':{'group':'中播磨', 'name':'いちかわ図書館', 'code':'ICHIKAWA'},
  'FUKUSAKI':{'group':'中播磨', 'name':'福崎町立図書館', 'code':'FUKUSAKI'},
  'AIOI':{'group':'西播磨', 'name':'相生市立図書館', 'code':'AIOI'},
  'TATSUNO':{'group':'西播磨', 'name':'たつの市立図書館', 'code':'TATSUNO'},
  'AKO':{'group':'西播磨', 'name':'赤穂市立図書館', 'code':'AKO'},
  'SAYO':{'group':'西播磨', 'name':'佐用町立図書館', 'code':'SAYO'},
  'SHISO':{'group':'西播磨', 'name':'宍粟市立図書館', 'code':'SHISO'},
  'TOYOOKA':{'group':'但馬', 'name':'豊岡市立図書館', 'code':'TOYOOKA'},
  'ASAGO':{'group':'但馬', 'name':'朝来市図書館', 'code':'ASAGO'},
  'SASAYAMA':{'group':'丹波', 'name':'篠山市立図書館', 'code':'SASAYAMA'},
  'TANBA':{'group':'丹波', 'name':'丹波市立図書館', 'code':'TANBA'},
  'SUMOTO':{'group':'淡路', 'name':'洲本市立図書館', 'code':'SUMOTO'},
  'TSUNA':{'group':'淡路', 'name':'淡路市津名図書館', 'code':'TSUNA'},
  'MINAMIAWAJI':{'group':'淡路', 'name':'南あわじ市図書館', 'code':'MINAMIAWAJI'},
  'GAKUIN':{'group':'大学等', 'name':'神戸学院大学', 'code':'GAKUIN'},
  'HYOKEN':{'group':'大学等', 'name':'兵庫県立大学', 'code':'HYOKEN'},
  'HIMEDOC':{'group':'大学等', 'name':'姫路獨協大学', 'code':'HIMEDOC'},
  'HYOKYO':{'group':'大学等', 'name':'兵庫教育大学', 'code':'HYOKYO'},
  'KOBEDAI':{'group':'大学等', 'name':'神戸大学', 'code':'KOBEDAI'},
  },
  checkLibrary: function(div, isbn){
    var code = libron[selectedPrefecture].libraries[selectedLibrary].code;
    var url = 'http://www2.library.pref.hyogo.jp/cgi-bin/ilisod/tougou_odsearch_plus.sh';
    var data = 'lang=japanese&U_CHARSET=euc-jp&successtpl=&errortpl=&GROUP_A=&SRCKIND=4&INPUTCODE=&RETURNCODE=&dbflg=2&isbn=' + isbn + '&db=' + code + '&dbsort=KENTO&dbsort=KOBE&dbsort=AMAGASAKI&dbsort=NISHINOMIYA&dbsort=ASHIYA&dbsort=ITAMI&dbsort=TAKARADUKA&dbsort=KAWANISHI&dbsort=SANDA&dbsort=INAGAWA&dbsort=AKASHI&dbsort=KAKOGAWA&dbsort=INAMI&dbsort=HARIMA&dbsort=NISHIWAKI&dbsort=MIKI&dbsort=ONO&dbsort=KASAI&dbsort=KATO&dbsort=TAKA&dbsort=HIMEJI&dbsort=ICHIKAWA&dbsort=FUKUSAKI&dbsort=AIOI&dbsort=TATSUNO&dbsort=AKO&dbsort=SAYO&dbsort=SHISO&dbsort=TOYOOKA&dbsort=ASAGO&dbsort=SASAYAMA&dbsort=TANBA&dbsort=SUMOTO&dbsort=TSUNA&dbsort=MINAMIAWAJI&dbsort=GAKUIN&dbsort=HYOKEN&dbsort=HIMEDOC&dbsort=HYOKYO&dbsort=KOBEDAI&all_title=&sumoto=&title1=&title2=&title3=&title1m=1&title2m=1&title3m=1&title1r=1&title2r=1&author1=&author1m=1&publish=&class1=&subject=&pubdate1=&pubdate2=';

    var errUrl = 'http://www2.library.pref.hyogo.jp/cgi-bin/ilisod/odplus.sh';
    libron.hyogo._checkLibrary(div, url, data, errUrl);
  },
  _checkLibrary: function(div, url, data, errUrl){
      GM_xmlhttpRequest({
        method:"POST",
        url: url,
        onload:function(res){
          try {
            var htmldoc = parseHTML(res.responseText);
            if(res.finalUrl){
              this.requestURL = res.finalUrl;
            }
            relativeToAbsolutePath(htmldoc, this.requestURL);
          } catch(e) {
            return;
          }
  
          var forms = $X('//form', htmldoc);
          if (forms.length > 1) {
	      var resolver = path_resolver(this.requestURL);
	      var id = randomString('0123456789abcdefghijklmnopqrstuvwxyz', 10);

	      var form = forms[1];
	      form.id = id;
	      form.action = resolver(form.getAttribute('action'));
	      form.target = '_blank';
	      
	      addForm(div, form);
          } else {
            addNALink(div, errUrl);
          }
        },
        data: data
      });
    }
};
