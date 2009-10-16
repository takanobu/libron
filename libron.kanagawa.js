// @name libron Kanagawa module
// @author Yukinori Suda(sudabon@gmail.com)

GM_log("come on");
var libron = libron ? libron : new Object();
libron.kanagawa = {
  version: "1.0",
  name: '神奈川県',
  groups: ['県立の図書館', 'Aグループ','Bグループ','政令指定都市','その他'],
  libraries: {
  'kenrit':{'group':'県立の図書館', 'name':'県立の図書館', 'code':'LIBSEL0=KENRIT'},
  'yokosu':{'group':'Aグループ', 'name':'横須賀市図書館', 'code':'LIBSEL1=YOKOSU'},
  'odawar':{'group':'Aグループ', 'name':'小田原市の図書館', 'code':'LIBSEL1=ODAWAR'},
  'zushi_':{'group':'Aグループ', 'name':'逗子市立図書館', 'code':'LIBSEL1=ZUSHI_'},
  'sagami':{'group':'Aグループ', 'name':'相模原市の図書館（準備中）', 'code':'LIBSEL1=SAGAMI'},
  'miura_':{'group':'Aグループ', 'name':'三浦市図書館', 'code':'LIBSEL1=MIURA_'},
  'yamato':{'group':'Aグループ', 'name':'大和市立図書館', 'code':'LIBSEL1=YAMATO'},
  'isehar':{'group':'Aグループ', 'name':'伊勢原市立図書館', 'code':'LIBSEL1=ISEHAR'},
  'ebina_':{'group':'Aグループ', 'name':'海老名市立図書館', 'code':'LIBSEL1=EBINA_'},
  'zama__':{'group':'Aグループ', 'name':'座間市立図書館', 'code':'LIBSEL1=ZAMA__'},
  'ayase_':{'group':'Aグループ', 'name':'綾瀬市立図書館', 'code':'LIBSEL1=AYASE_'},
  'hayama':{'group':'Aグループ', 'name':'葉山町立図書館', 'code':'LIBSEL1=HAYAMA'},
  'hakone':{'group':'Aグループ', 'name':'箱根町社会教育センター図書室', 'code':'LIBSEL1=HAKONE'},
  'manadu':{'group':'Aグループ', 'name':'まなづる図書館', 'code':'LIBSEL1=MANADU'},
  'yugawa':{'group':'Aグループ', 'name':'湯河原町立図書館', 'code':'LIBSEL1=YUGAWA'},
  'aikawa':{'group':'Aグループ', 'name':'愛川町図書館', 'code':'LIBSEL1=AIKAWA'},
  'kiyoka':{'group':'Aグループ', 'name':'清川村図書室', 'code':'LIBSEL1=KIYOKA'},
  'hirats':{'group':'Bグループ', 'name':'平塚市図書館', 'code':'LIBSEL2=HIRATS'},
  'kamaku':{'group':'Bグループ', 'name':'鎌倉市図書館', 'code':'LIBSEL2=KAMAKU'},
  'fujisa':{'group':'Bグループ', 'name':'藤沢市図書館', 'code':'LIBSEL2=FUJISA'},
  'chigas':{'group':'Bグループ', 'name':'茅ケ崎市立図書館', 'code':'LIBSEL2=CHIGAS'},
  'hadano':{'group':'Bグループ', 'name':'秦野市立図書館', 'code':'LIBSEL2=HADANO'},
  'atsugi':{'group':'Bグループ', 'name':'厚木市立図書館', 'code':'LIBSEL2=ATSUGI'},
  'minami':{'group':'Bグループ', 'name':'南足柄市立図書館', 'code':'LIBSEL2=MINAMI'},
  'samuka':{'group':'Bグループ', 'name':'寒川総合図書館', 'code':'LIBSEL2=SAMUKA'},
  'oiso__':{'group':'Bグループ', 'name':'大磯町立図書館', 'code':'LIBSEL2=OISO__'},
  'ninomi':{'group':'Bグループ', 'name':'二宮町図書館', 'code':'LIBSEL2=NINOMI'},
  'nakai_':{'group':'Bグループ', 'name':'中井町立井ノ口公民館', 'code':'LIBSEL2=NAKAI_'},
  'ooi___':{'group':'Bグループ', 'name':'大井町図書館', 'code':'LIBSEL2=OOI___'},
  'katsud':{'group':'Bグループ', 'name':'松田町図書館', 'code':'LIBSEL2=MATSUD'},
  'yamaki':{'group':'Bグループ', 'name':'山北町立中央公民館図書室', 'code':'LIBSEL2=YAMAKI'},
  'kaisei':{'group':'Bグループ', 'name':'開成町民センター図書室', 'code':'LIBSEL2=KAISEI'},
  'yokoha':{'group':'政令指定都市', 'name':'横浜市図書館', 'code':'LIBSEL3=YOKOHA'},
  'kawasa':{'group':'政令指定都市', 'name':'川崎市立図書館', 'code':'LIBSEL3=KAWASA'},
  'jyosei':{'group':'その他', 'name':'かながわ女性センター図書館', 'code':'LIBSEL4=JYOSEI'},
  'kensei':{'group':'その他', 'name':'県政情報センター', 'code':'LIBSEL4=KENSEI'},
  'yokoun':{'group':'その他', 'name':'横浜国立大学附属図書館', 'code':'LIBSEL4=YOKOUN'},
  'hoken_':{'group':'その他', 'name':'神奈川県立保健福祉大学の図書館', 'code':'LIBSEL4=HOKEN_'},
  'tokoda':{'group':'その他', 'name':'東京工業大学附属図書館', 'code':'LIBSEL4=TOKODA'}
  },
  checkLibrary: function(div, isbn){
    var url = 'http://www.klnet.pref.kanagawa.jp/opac/CrossServlet?KUBUN=TOSHO&KUBUN=ZASSHI&ISBN=' + isbn + '&' + libron[selectedPrefecture].libraries[selectedLibrary].code + '&MENUNO=8&SEARCH=%E6%A4%9C%E7%B4%A2&TIMEOUT=3';
    libron.kanagawa._getRedirectUrl(div, url);
  },
  _getRedirectUrl: function(div, url){
    GM_xmlhttpRequest({
      method:"GET",
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
        var elms = htmldoc.match(/HISTLIST=\d+&SEARCHID=\d+/);
        if (elms.length > 0) {
          libron.kanagawa._checkLibrary(div, 'http://www.klnet.pref.kanagawa.jp/opac/CrossServlet?' + elms);
        }
      },
      data: data
    });
  },
  _checkLibrary: function(div, url) {
    GM_xmlhttpRequest({
      method:"GET",
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
        var elms = $X('//a[@target="_blank"]', htmldoc);
        if (elms.length > 0) {
          addLink(div, url);
        } else {
          addNALink(div, url);
        }
      }
    });
  }
};