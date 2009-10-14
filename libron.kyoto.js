// @name          libron Kyoto module
// @author        Takanobu Nishimura(http://github.com/takanobu/)

var libron = libron ? libron : new Object();
libron.kyoto = {
  version: "1.0",
  name: '京都市',
  groups: ['区', '市'],
  libraries: {
  'chuo':{'group':'区', 'name':'中央図書館', 'code':'01'},
  'ido':{'group':'区', 'name':'移動図書館', 'code':'02'},
  'ukyo':{'group':'区', 'name':'右京中央図書館', 'code':'33'},
  'fushimi':{'group':'区', 'name':'伏見中央図書館', 'code':'03'},
  'kita':{'group':'区', 'name':'北図書館', 'code':'05'},
  'sakyo':{'group':'区', 'name':'左京図書館', 'code':'15'},
  'higashiyama':{'group':'区', 'name':'東山図書館', 'code':'25'},
  'yamashina':{'group':'区', 'name':'山科図書館', 'code':'30'},
  'shimogyo':{'group':'区', 'name':'下京図書館', 'code':'35'},
  'minami':{'group':'区', 'name':'南図書館', 'code':'40'},
  'nishikyo':{'group':'区', 'name':'西京図書館', 'code':'50'},
  'rakusai':{'group':'区', 'name':'洛西図書館', 'code':'55'},
  'daigo':{'group':'区', 'name':'醍醐図書館', 'code':'60'},
  'daigochuo':{'group':'区', 'name':'醍醐中央図書館', 'code':'65'},
  'kodomo':{'group':'区', 'name':'こどもみらい館', 'code':'66'},
  'mukaijima':{'group':'区', 'name':'向島図書館', 'code':'70'},
  'kuganomori':{'group':'区', 'name':'久我のもり図書館', 'code':'75'},
  'kisshoin':{'group':'区', 'name':'吉祥院図書館', 'code':'80'},
  'iwakura':{'group':'区', 'name':'岩倉図書館', 'code':'85'},
  'kuze':{'group':'区', 'name':'久世ふれあい', 'code':'95'},
  'shi':{'group':'市', 'name':'京都市図書館', 'code':'01&lckns=02&lckns=33&lckns=03&lckns=05&lckns=15&lckns=25&lckns=30&lckns=35&lckns=40&lckns=50&lckns=55&lckns=60&lckns=65&lckns=66&lckns=70&lckns=75&lckns=80&lckns=85&lckns=95'},
  },
  checkLibrary: function(div, isbn){
    var url = 'https://www.kyotocitylib.jp/cgi-bin/Sopcsken.sh?p_mode=1&g_mode=0&ryno=&c_keye=&value=&list_cnt=10&mad_list_cnt=&brws=ncdet&ktyp9=shk|atk|spk|kek&itfg9=c&ser_type=0&stkb=&tgid=tyo:010A&sgid=spno&srsl1=1&srsl2=2&srsl3=3&tkey=' + isbn + '&lckns=' + libron[selectedPrefecture].libraries[selectedLibrary].code;
    libron.kyoto._checkLibrary(div, url);
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

        var elms = $X('//a[starts-with(@onclick, "dispDetail")]', htmldoc);
        if (elms.length > 0) {
          addLink(div, url);
        } else {
          addNALink(div, url);
        }
      }
    });
  }
};

