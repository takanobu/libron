// @name libron Kanagawa module
// @author Yukinori Suda(http://github.com/sudabon/)

var libron = libron ? libron : new Object();
libron.kanagawa = {
  name: '神奈川県',
  groups: ['県立の図書館', 'Aグループ','Bグループ','政令指定都市','その他'],
  libraries: {
  // ISBNで検索すると、エラーを返す図書館をコメントアウト
  'kenrit':{'group':'県立の図書館', 'name':'県立の図書館', 'code':'LIBSEL0', 'key':'KENRIT'},
  'yokosu':{'group':'Aグループ', 'name':'横須賀市図書館', 'code':'LIBSEL1','key':'YOKOSU'},
  'odawar':{'group':'Aグループ', 'name':'小田原市の図書館', 'code':'LIBSEL1','key':'ODAWAR'},
  'zushi_':{'group':'Aグループ', 'name':'逗子市立図書館', 'code':'LIBSEL1','key':'ZUSHI_'},
  //'sagami':{'group':'Aグループ', 'name':'相模原市の図書館（準備中）', 'code':'LIBSEL1','key':'SAGAMI'},
  'miura_':{'group':'Aグループ', 'name':'三浦市図書館', 'code':'LIBSEL1','key':'MIURA_'},
  //'yamao':{'group':'Aグループ', 'name':'大和市立図書館', 'code':'LIBSEL1','key':'YAMATO'},
  'isehar':{'group':'Aグループ', 'name':'伊勢原市立図書館', 'code':'LIBSEL1','key':'ISEHAR'},
  'emina_':{'group':'Aグループ', 'name':'海老名市立図書館', 'code':'LIBSEL1','key':'EBINA_'},
  'zama__':{'group':'Aグループ', 'name':'座間市立図書館', 'code':'LIBSEL1','key':'ZAMA__'},
  'ayase_':{'group':'Aグループ', 'name':'綾瀬市立図書館', 'code':'LIBSEL1','key':'AYASE_'},
  'hayama':{'group':'Aグループ', 'name':'葉山町立図書館', 'code':'LIBSEL1','key':'HAYAMA'},
  'hakone':{'group':'Aグループ', 'name':'箱根町社会教育センター図書室', 'code':'LIBSEL1','key':'HAKONE'},
  'manadu':{'group':'Aグループ', 'name':'まなづる図書館', 'code':'LIBSEL1','key':'MANADU'},
  //'yugawa':{'group':'Aグループ', 'name':'湯河原町立図書館', 'code':'LIBSEL1','key':'YUGAWA'},
  //'aikawa':{'group':'Aグループ', 'name':'愛川町図書館', 'code':'LIBSEL1','key':'AIKAWA'},
  'kiyoka':{'group':'Aグループ', 'name':'清川村図書室', 'code':'LIBSEL1','key':'KIYOKA'},
  'hirats':{'group':'Bグループ', 'name':'平塚市図書館', 'code':'LIBSEL2','key':'HIRATS'},
  //'kamaku':{'group':'Bグループ', 'name':'鎌倉市図書館', 'code':'LIBSEL2','key':'KAMAKU'},
  'fujisa':{'group':'Bグループ', 'name':'藤沢市図書館', 'code':'LIBSEL2','key':'FUJISA'},
  'chigas':{'group':'Bグループ', 'name':'茅ケ崎市立図書館', 'code':'LIBSEL2','key':'CHIGAS'},
  'hadano':{'group':'Bグループ', 'name':'秦野市立図書館', 'code':'LIBSEL2','key':'HADANO'},
  'atsugi':{'group':'Bグループ', 'name':'厚木市立図書館', 'code':'LIBSEL2','key':'ATSUGI'},
  'minami':{'group':'Bグループ', 'name':'南足柄市立図書館', 'code':'LIBSEL2','key':'MINAMI'},
  'samuka':{'group':'Bグループ', 'name':'寒川総合図書館', 'code':'LIBSEL2','key':'SAMUKA'},
  'oiso__':{'group':'Bグループ', 'name':'大磯町立図書館', 'code':'LIBSEL2','key':'OISO__'},
  //'minomi':{'group':'Bグループ', 'name':'二宮町図書館', 'code':'LIBSEL2','key':'NINOMI'},
  'nakai_':{'group':'Bグループ', 'name':'中井町立井ノ口公民館', 'code':'LIBSEL2','key':'NAKAI_'},
  'ooi___':{'group':'Bグループ', 'name':'大井町図書館', 'code':'LIBSEL2','key':'OOI___'},
  'matsud':{'group':'Bグループ', 'name':'松田町図書館', 'code':'LIBSEL2','key':'MATSUD'},
  'yamaki':{'group':'Bグループ', 'name':'山北町立中央公民館図書室', 'code':'LIBSEL2','key':'YAMAKI'},
  //'kaisei':{'group':'Bグループ', 'name':'開成町民センター図書室', 'code':'LIBSEL2','key':'KAISEI'},
  'yokoha':{'group':'政令指定都市', 'name':'横浜市図書館', 'code':'LIBSEL3','key':'YOKOHA'},
  //'kawasa':{'group':'政令指定都市', 'name':'川崎市立図書館', 'code':'LIBSEL3','key':'KAWASA'},
  'jyosei':{'group':'その他', 'name':'かながわ女性センター図書館', 'code':'LIBSEL4','key':'JYOSEI'},
  'kensei':{'group':'その他', 'name':'県政情報センター', 'code':'LIBSEL4','key':'KENSEI'},
  'yokoun':{'group':'その他', 'name':'横浜国立大学附属図書館', 'code':'LIBSEL4','key':'YOKOUN'},
  'koken_':{'group':'その他', 'name':'神奈川県立保健福祉大学の図書館', 'code':'LIBSEL4','key':'HOKEN_'},
  //'tokoda':{'group':'その他', 'name':'東京工業大学附属図書館', 'code':'LIBSEL4','key':'TOKODA'}
  },
  searchId : [],
  checkLibrary: function(div, isbn){
    var base = 'http://www.klnet.pref.kanagawa.jp/opac/CrossServlet';
    var url = '?KUBUN=TOSHO&KUBUN=ZASSHI&ISBN=' + isbn + '&' + libron.kanagawa.libraries[selectedLibrary].code + '=' + libron.kanagawa.libraries[selectedLibrary].key + '&MENUNO=8&SEARCH=%E6%A4%9C%E7%B4%A2&TIMEOUT=15';
    libron.kanagawa._getRedirectUrl(div, base, url);
  },
  _getRedirectUrl: function(div, base, url){
    setTimeout(function(){
    GM_xmlhttpRequest({
      method:"GET",
      url: base + url,
      onload:function(res){
        try {
          var htmldoc = parseHTML(res.responseText);
        } catch(e) {
          return;
        }
        var result = htmldoc.evaluate('//input', htmldoc, null, XPathResult.ANY_TYPE, null);
        var searchId = '';
        var hitList = '';
        try {
          var thisNode = result.iterateNext();
          while (thisNode) {
            if (thisNode.name == 'SEARCHID') {
              searchId = thisNode.value;
            }
            if (thisNode.name == 'HITLIST') {
              hitList = thisNode.value;
            }
            thisNode = result.iterateNext();
          }
        } catch (e) {
          return;
        }
        if (searchId.length > 0 && hitList.length > 0) {
          // 図書検索サーバのバグの対処
          // 重複したsearchIdはエラー処理
          for (var i = 0; i < libron[selectedPrefecture].searchId.length; i++) {
            if (libron[selectedPrefecture].searchId[i] == searchId) {
              addERLink(div, base + url);
              return;
            }
          }
          libron[selectedPrefecture].searchId.push(searchId);
          // ここまで
          // ただし、最初に受信した応答が正しいとは限らないという問題が残っている
          libron.kanagawa._checkLibrary(div, base, '?HITLIST=' + hitList + '&SEARCHID=', searchId);
        }
      },
    });
    }, Math.floor(Math.random()*10000));
  },
  _checkLibrary: function(div, base, url, searchId) {
    GM_xmlhttpRequest({
      method:"GET",
      url: base + url + searchId,
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
        var result = htmldoc.evaluate('//a', htmldoc, null, XPathResult.ANY_TYPE, null);
        try {
          var thisNode = result.iterateNext();
          var error = false;
          while (thisNode) {
            if (thisNode.href == base + '?LIST=1&PAGE=1&SEARCHID='+searchId) {
              addLink(div, base + url + searchId);
              return;
            }
            thisNode = result.iterateNext();
          }
        } catch (e) {
          return;
        }
        addNALink(div, base + url + searchId);
      }
    });
  }
};