// @name          libron Chiba module
// @author        Junya Ishihara(http://github.com/champierre/)

var libron = libron ? libron : new Object();
libron.chiba = {
  name: '千葉県',
  groups: ['県立','中央エリア','西部エリア','東部エリア'],
  libraries: {
  'chibapref':{'group':'県立', 'name':'千葉県立図書館', 'code':'&dbsort=CHIBAPREF'},
  'chiba':{'group':'中央エリア', 'name':'千葉市立図書館', 'code':'&dbsort=CHIBA'},
  'ichihara':{'group':'中央エリア', 'name':'市原市立図書館', 'code':'&dbsort=ICHIHARA'},
  'narashino':{'group':'中央エリア', 'name':'習志野市立図書館', 'code':'&dbsort=NARASHINO'},
  'yachiyo':{'group':'中央エリア', 'name':'八千代市立図書館', 'code':'&dbsort=YACHIYO'},
  'sakura':{'group':'中央エリア', 'name':'佐倉市立図書館', 'code':'&dbsort=SAKURA'},
  'narita':{'group':'中央エリア', 'name':'成田市立図書館', 'code':'&dbsort=NARITA'},
  'yotsukaido':{'group':'中央エリア', 'name':'四街道市立図書館', 'code':'&dbsort=YOTSUKAIDO'},
  'yachimata':{'group':'中央エリア', 'name':'八街市立図書館', 'code':'&dbsort=YACHIMATA'},
  'tomisato':{'group':'中央エリア', 'name':'富里市立図書館', 'code':'&dbsort=TOMISATO'},
  'mobara':{'group':'中央エリア', 'name':'茂原市立図書館', 'code':'&dbsort=MOBARA'},
  'tateyama':{'group':'中央エリア', 'name':'館山市図書館', 'code':'&dbsort=TATEYAMA'},
  'kamogawa':{'group':'中央エリア', 'name':'鴨川市立図書館', 'code':'&dbsort=KAMOGAWA'},
  'minamiboso':{'group':'中央エリア', 'name':'南房総市千倉図書館', 'code':'&dbsort=MINAMIBOSO'},
  'kisarazu':{'group':'中央エリア', 'name':'木更津市立図書館', 'code':'&dbsort=KISARAZU'},
  'kimitsu':{'group':'中央エリア', 'name':'君津市立図書館', 'code':'&dbsort=KIMITSU'},
  'sodegaura':{'group':'中央エリア', 'name':'袖ヶ浦市立図書館', 'code':'&dbsort=SODEGAURA'}, //ISBNでの検索不可？
  'shisui':{'group':'中央エリア', 'name':'酒々井町市立図書館', 'code':'&dbsort=SHISUI'},
  'inba':{'group':'中央エリア', 'name':'印旛村立図書館', 'code':'&dbsort=INBA'},
  'ichikawa':{'group':'西部エリア', 'name':'市川市立図書館', 'code':'&dbsort=ICHIKAWA'},
  'funabashi':{'group':'西部エリア', 'name':'船橋市図書館', 'code':'&dbsort=FUNABASHI'},
  'urayasu':{'group':'西部エリア', 'name':'浦安市立図書館', 'code':'&dbsort=URAYASU'},
  'kashiwa':{'group':'西部エリア', 'name':'柏市立図書館', 'code':'&dbsort=KASHIWA'},
  'noda':{'group':'西部エリア', 'name':'野田市立図書館', 'code':'&dbsort=NODA'},
  'nagareyama':{'group':'西部エリア', 'name':'流山市立図書館', 'code':'&dbsort=NAGAREYAMA'},
  'abiko':{'group':'西部エリア', 'name':'我孫子市民図書館', 'code':'&dbsort=ABIKO'},
  'kamagaya':{'group':'西部エリア', 'name':'鎌ヶ谷市立図書館', 'code':'&dbsort=KAMAGAYA'},
  'inzai':{'group':'西部エリア', 'name':'印西市立図書館', 'code':'&dbsort=INZAI'},
  'shiroi':{'group':'西部エリア', 'name':'白井市立図書館', 'code':'&dbsort=SHIROI'},
  'choshi':{'group':'東部エリア', 'name':'銚子市公正図書館', 'code':'&dbsort=CHOSHI'},
  'sosa':{'group':'東部エリア', 'name':'匝瑳市立図書館', 'code':'&dbsort=SOSA'},
  'asahi':{'group':'東部エリア', 'name':'旭市図書館', 'code':'&dbsort=ASAHI'},
  'togane':{'group':'東部エリア', 'name':'東金市立東金図書館', 'code':'&dbsort=TOGANE'},
  'sambu':{'group':'東部エリア', 'name':'山武市立図書館', 'code':'&dbsort=SAMBU'},
  'yokoshibahikari':{'group':'東部エリア', 'name':'横芝光町立図書館', 'code':'&dbsort=YOKOSHIBAHIKARI'},
  'oami':{'group':'東部エリア', 'name':'大網白里町図書室', 'code':'&dbsort=OAMI'}
  },
  checkLibrary: function(div, isbn){
    var url = 'http://www.library.pref.chiba.lg.jp/cgi-bin/ilisod/tougou_odsearch_plus.sh';
    var data = 'lang=japanese&U_CHARSET=utf-8&successtpl=&errortpl=&GROUP_A=&SRCKIND=4&INPUTCODE=UTF8&RETURNCODE=&all_title=&mode=2&sortname=title&mergflg=0&title1=&title2=&title3=&title1m=1&title2m=1&title3m=1&title1r=1&title2r=1&author1=&author1m=1&publish=&class1=&subject=&pubdate1=&pubdate2=&dbflg=1&isbn=' + isbn + libron[selectedPrefecture].libraries[selectedLibrary].code;
    libron.chiba._setCookie(div, url, data);
  },
  _setCookie: function(div, url, data){
    GM_xmlhttpRequest({
      method:"GET",
      url: "http://www.library.pref.chiba.lg.jp/cgi-bin/ilisod/odplus.sh",
      onload:function(res){
        libron.chiba._checkLibrary(div, url, data);
      },
      data: data
    });
  },
  _checkLibrary: function(div, url, data){
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

        var elms = $X('//a[starts-with(@href, "javascript:DBset")]', htmldoc);
        if (elms.length > 0) {
           addLink(div, url + '?' + data);
        } else {
           addNALink(div, url + '?' + data);
        }
      },
      data: data
    });
  }
};
