// @name          libron Kyoto module
// @author        Takanobu Nishimura(http://github.com/takanobu/)

var libron = libron ? libron : new Object();
libron.kyoto = {
  version: "1.0",
  name: '京都府',
  groups: ['府立', '京都市・亀岡', '丹後', '中丹西部', '中丹東部', '南丹', '山城中部', '山城南部'],
  libraries: {
  'furitsu':{'group':'府立', 'name':'府立図書館', 'code':'WEBOPAC;10039014;01;1', 'checkLibrary':'checkLibraryOpac'},
  'shiryokan':{'group':'府立', 'name':'総合資料館', 'code':'WEBOPAC;10039022;02;1', 'checkLibrary':'checkLibraryOpac'},

  'chuo':{'group':'京都市・亀岡', 'name':'中央図書館', 'code':'01', 'checkLibrary':'checkLibraryKyotoCity'},
  'ido':{'group':'京都市・亀岡', 'name':'移動図書館', 'code':'02', 'checkLibrary':'checkLibraryKyotoCity'},
  'ukyo':{'group':'京都市・亀岡', 'name':'右京中央図書館', 'code':'33', 'checkLibrary':'checkLibraryKyotoCity'},
  'fushimi':{'group':'京都市・亀岡', 'name':'伏見中央図書館', 'code':'03', 'checkLibrary':'checkLibraryKyotoCity'},
  'kita':{'group':'京都市・亀岡', 'name':'北図書館', 'code':'05', 'checkLibrary':'checkLibraryKyotoCity'},
  'sakyo':{'group':'京都市・亀岡', 'name':'左京図書館', 'code':'15', 'checkLibrary':'checkLibraryKyotoCity'},
  'higashiyama':{'group':'京都市・亀岡', 'name':'東山図書館', 'code':'25', 'checkLibrary':'checkLibraryKyotoCity'},
  'yamashina':{'group':'京都市・亀岡', 'name':'山科図書館', 'code':'30', 'checkLibrary':'checkLibraryKyotoCity'},
  'shimogyo':{'group':'京都市・亀岡', 'name':'下京図書館', 'code':'35', 'checkLibrary':'checkLibraryKyotoCity'},
  'minami':{'group':'京都市・亀岡', 'name':'南図書館', 'code':'40', 'checkLibrary':'checkLibraryKyotoCity'},
  'nishikyo':{'group':'京都市・亀岡', 'name':'西京図書館', 'code':'50', 'checkLibrary':'checkLibraryKyotoCity'},
  'rakusai':{'group':'京都市・亀岡', 'name':'洛西図書館', 'code':'55', 'checkLibrary':'checkLibraryKyotoCity'},
  'daigo':{'group':'京都市・亀岡', 'name':'醍醐図書館', 'code':'60', 'checkLibrary':'checkLibraryKyotoCity'},
  'daigochuo':{'group':'京都市・亀岡', 'name':'醍醐中央図書館', 'code':'65', 'checkLibrary':'checkLibraryKyotoCity'},
  'kodomo':{'group':'京都市・亀岡', 'name':'こどもみらい館', 'code':'66', 'checkLibrary':'checkLibraryKyotoCity'},
  'mukaijima':{'group':'京都市・亀岡', 'name':'向島図書館', 'code':'70', 'checkLibrary':'checkLibraryKyotoCity'},
  'kuganomori':{'group':'京都市・亀岡', 'name':'久我のもり図書館', 'code':'75', 'checkLibrary':'checkLibraryKyotoCity'},
  'kisshoin':{'group':'京都市・亀岡', 'name':'吉祥院図書館', 'code':'80', 'checkLibrary':'checkLibraryKyotoCity'},
  'iwakura':{'group':'京都市・亀岡', 'name':'岩倉図書館', 'code':'85', 'checkLibrary':'checkLibraryKyotoCity'},
  'kuze':{'group':'京都市・亀岡', 'name':'久世ふれあい', 'code':'95', 'checkLibrary':'checkLibraryKyotoCity'},
  'shi':{'group':'京都市・亀岡', 'name':'京都市図書館', 'code':'01&lckns=02&lckns=33&lckns=03&lckns=05&lckns=15&lckns=25&lckns=30&lckns=35&lckns=40&lckns=50&lckns=55&lckns=60&lckns=65&lckns=66&lckns=70&lckns=75&lckns=80&lckns=85&lckns=95', 'checkLibrary':'checkLibraryKyotoCity'},
  'kameoka':{'group':'京都市・亀岡', 'name':'亀岡市', 'code':'KLIBOPAC;10039279;31;2', 'checkLibrary':'checkLibraryOpac'},
  'muko':{'group':'京都市・亀岡', 'name':'向日市', 'code':'KLIBOPAC;10039030;10;2'},
  'nagaoka':{'group':'京都市・亀岡', 'name':'長岡京市', 'code':'KLIBOPAC;10039048;13;2', 'checkLibrary':'checkLibraryOpac'},

  'miyazu':{'group':'丹後', 'name':'宮津市', 'code':'KLIBOPAC;10039428;45;2', 'checkLibrary':'checkLibraryOpac'},
  'kyotango-mineyama':{'group':'丹後', 'name':'京丹後市峰山', 'code':'MINEYAMA;10039477;50;7', 'checkLibrary':'checkLibraryOpac'},
  'kyotango-amino':{'group':'丹後', 'name':'京丹後市あみの', 'code':'AMINO;10039493;52;8', 'checkLibrary':'checkLibraryOpac'},
  'kyotango-yasaka':{'group':'丹後', 'name':'京丹後市弥栄', 'code':'YASAKA;10039519;54;11', 'checkLibrary':'checkLibraryOpac'},
  'kyotango-omiya':{'group':'丹後', 'name':'京丹後市大宮', 'code':'OMIYA;10039485;51;12', 'checkLibrary':'checkLibraryOpac'},
  'kyotango-tango':{'group':'丹後', 'name':'京丹後市丹後', 'code':'TANGO;10039501;53;9', 'checkLibrary':'checkLibraryOpac'},
  'kyotango-kumihama':{'group':'丹後', 'name':'京丹後市久美浜', 'code':'KUMIHAMA;10039527;55;10', 'checkLibrary':'checkLibraryOpac'},
  'yosano':{'group':'丹後', 'name':'与謝野町', 'code':'KLIBOPAC;10039444;47;2', 'checkLibrary':'checkLibraryOpac'},
  'yosano-nodazawa':{'group':'丹後', 'name':'与謝野町野田川', 'code':'KLIBOPAC;10039469;49;2', 'checkLibrary':'checkLibraryOpac'},
  'yosano-kaya':{'group':'丹後', 'name':'与謝野町加悦', 'code':'KLIBOPAC;10039436;46;2', 'checkLibrary':'checkLibraryOpac'},

  'fukuchiyama':{'group':'中丹西部', 'name':'福知山市中央', 'code':'KLIBOPAC;10039360;41;2', 'checkLibrary':'checkLibraryOpac'},
  'fukuchiyama-miwa':{'group':'中丹西部', 'name':'福知山市三和', 'code':'KLIBOPAC;10039402;43;2', 'checkLibrary':'checkLibraryOpac'},
  'fukuchiyama-yakuno':{'group':'中丹西部', 'name':'福知山市夜久野', 'code':'KLIBOPAC;10039543;57;2', 'checkLibrary':'checkLibraryOpac'},
  'maizuru-higashi':{'group':'中丹西部', 'name':'舞鶴市東', 'code':'KLIBOPAC;10039378;91;2', 'checkLibrary':'checkLibraryOpac'},
  'maizuru-nishi':{'group':'中丹西部', 'name':'舞鶴市西', 'code':'KLIBOPAC;10039386;90;2', 'checkLibrary':'checkLibraryOpac'},

  'ayabe':{'group':'中丹東部', 'name':'綾部市', 'code':'KLIBOPAC;10039394;42;2', 'checkLibrary':'checkLibraryOpac'},
  'nantan-miyama':{'group':'中丹東部', 'name':'南丹市美山', 'code':'NANTANCITY;10039261;40;6', 'checkLibrary':'checkLibraryOpac'},

  'nantan':{'group':'南丹', 'name':'南丹市中央', 'code':'NANTANCITY;10039303;10;6', 'checkLibrary':'checkLibraryOpac'},
  'nantan-yagi':{'group':'南丹', 'name':'南丹市八木', 'code':'NANTANCITY;10039311;20;6', 'checkLibrary':'checkLibraryOpac'},
  'nantan-hiyoshi':{'group':'南丹', 'name':'南丹市日吉', 'code':'NANTANCITY;10039337;30;6', 'checkLibrary':'checkLibraryOpac'},
  'kyotanba':{'group':'南丹', 'name':'京丹波町(丹波)', 'code':'KLIBOPAC;10039329;37;2', 'checkLibrary':'checkLibraryOpac'},

  'uji':{'group':'山城中部', 'name':'宇治市中央', 'code':'UJI;10039071;01;14', 'checkLibrary':'checkLibraryOpac'},
  'joyo':{'group':'山城中部', 'name':'城陽市', 'code':'JOYO;10039105;16;3', 'checkLibrary':'checkLibraryOpac'},
  'yawata':{'group':'山城中部', 'name':'八幡市市民', 'code':'YAWATA;10039113;01;13'},
  'kyotanabe':{'group':'山城中部', 'name':'京田辺市中央', 'code':'KYOTANABE;10039139;01;14', 'checkLibrary':'checkLibraryOpac'},
  'kumiyama':{'group':'山城中部', 'name':'久御山町', 'code':'KLIBOPAC;10039154;89;2', 'checkLibrary':'checkLibraryOpac'},
  'ide':{'group':'山城中部', 'name':'井手町', 'code':'IDE;10039162;01;13', 'checkLibrary':'checkLibraryOpac'},
  'ujitawara':{'group':'山城中部', 'name':'宇治田原町', 'code':'KLIBOPAC;10039170;22;2', 'checkLibrary':'checkLibraryOpac'},

  'kizu':{'group':'山城南部', 'name':'木津川市中央', 'code':'KLIBOPAC;10039196;24;2', 'checkLibrary':'checkLibraryOpac'},
  'kizu-yamashiro':{'group':'山城南部', 'name':'木津川市山城', 'code':'KLIBOPAC;10039188;23;2', 'checkLibrary':'checkLibraryOpac'},
  'kizu-kamo':{'group':'山城南部', 'name':'木津川市加茂', 'code':'KLIBOPAC;10039204', 'checkLibrary':'checkLibraryOpac'},
  'seika':{'group':'山城南部', 'name':'精華町', 'code':'SEIKA;10039238;28;4', 'checkLibrary':'checkLibraryOpac'},

  },
  checkLibrary: function(div, isbn){
      libron[selectedPrefecture][libron[selectedPrefecture].libraries[selectedLibrary].checkLibrary](div, isbn);
  },
  checkLibraryOpac: function(div, isbn){
	  var code = libron[selectedPrefecture].libraries[selectedLibrary].code;
      var url = 'http://www.library.pref.kyoto.jp/cgi-bin/ilisod/tougou_odsearch_plus.sh';
      var errUrl = 'http://www.library.pref.kyoto.jp/cgi-bin/ilisod/odplus.sh';
      var data = 'lang=japanese&U_CHARSET=euc-jp&successtpl=&errortpl=&GROUP_A=&SRCKIND=4&INPUTCODE=&RETURNCODE=&all_title=&mode=&title1=&title2=&title3=&title1m=1&title2m=1&title3m=1&title1r=1&title2r=1&author1=&author1m=1&publish=&class1=&subject=&pubdate1=&pubdate2=&dbflg=2&isbn=' + isbn + '&db=' + code + '&dbsort=WEBOPAC;10039014;01;1&dbsort=WEBOPAC;10039022;02;1&dbsort=KYOTOCITY;10039535;01;5&dbsort=KYOTOCITY;10039634;33;5&dbsort=KYOTOCITY;10039642;03;5&dbsort=KYOTOCITY;10039659;65;5&dbsort=KYOTOCITY;10039550;05;5&dbsort=KYOTOCITY;10039568;15;5&dbsort=KYOTOCITY;10039576;85;5&dbsort=KYOTOCITY;10039584;25;5&dbsort=KYOTOCITY;10039691;30;5&dbsort=KYOTOCITY;10039592;35;5&dbsort=KYOTOCITY;10039600;40;5&dbsort=KYOTOCITY;10039618;80;5&dbsort=KYOTOCITY;10039626;95;5&dbsort=KYOTOCITY;10039709;50;5&dbsort=KYOTOCITY;10039717;55;5&dbsort=KYOTOCITY;10039667;70;5&dbsort=KYOTOCITY;10039675;60;5&dbsort=KYOTOCITY;10039683;75;5&dbsort=KYOTOCITY;10039741;66;5&dbsort=KYOTOCITY;10619054;02;5&dbsort=KLIBOPAC;10039030;10;2&dbsort=KLIBOPAC;10039048;13;2&dbsort=UJI;10039071;01;14&dbsort=JOYO;10039105;16;3&dbsort=YAWATA;10039113;01;13&dbsort=KYOTANABE;10039139;01;14&dbsort=KLIBOPAC;10039154;89;2&dbsort=IDE;10039162;01;13&dbsort=KLIBOPAC;10039170;22;2&dbsort=KLIBOPAC;10039196;24;2&dbsort=KLIBOPAC;10039204;25;2&dbsort=KLIBOPAC;10039188;23;2&dbsort=SEIKA;10039238;28;4&dbsort=KLIBOPAC;10039279;31;2&dbsort=KLIBOPAC;10039295;34;2&dbsort=NANTANCITY;10039303;10;6&dbsort=NANTANCITY;10039311;20;6&dbsort=NANTANCITY;10039337;30;6&dbsort=NANTANCITY;10039261;40;6&dbsort=KLIBOPAC;10039329;37;2&dbsort=KLIBOPAC;10039360;41;2&dbsort=KLIBOPAC;10039402;43;2&dbsort=KLIBOPAC;10039543;57;2&dbsort=KLIBOPAC;10039378;91;2&dbsort=KLIBOPAC;10039386;90;2&dbsort=KLIBOPAC;10039394;42;2&dbsort=KLIBOPAC;10039428;45;2&dbsort=KLIBOPAC;10039444;47;2&dbsort=KLIBOPAC;10039469;49;2&dbsort=KLIBOPAC;10039436;46;2&dbsort=MINEYAMA;10039477;50;7&dbsort=AMINO;10039493;52;8&dbsort=OMIYA;10039485;51;12&dbsort=YASAKA;10039519;54;11&dbsort=TANGO;10039501;53;9&dbsort=KUMIHAMA;10039527;55;10';
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
  },
  checkLibraryKyotoCity: function(div, isbn) {
    var code = libron[selectedPrefecture].libraries[selectedLibrary].code;
    var errUrl = 'https://www.kyotocitylib.jp/cgi-bin/Sopcsmin.sh';
    var url = 'https://www.kyotocitylib.jp/cgi-bin/Sopcsken.sh?p_mode=1&g_mode=0&ryno=&c_keye=&value=&list_cnt=10&mad_list_cnt=&brws=ncdet&ktyp9=shk|atk|spk|kek&itfg9=c&ser_type=0&stkb=&tgid=tyo:010A&sgid=spno&srsl1=1&srsl2=2&srsl3=3&tkey=' + isbn + '&lckns=' + code;
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
          addNALink(div, errUrl);
        }
      }
    });
  }
};

