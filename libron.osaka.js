// @name          libron Osaka module
// @author        negachov(http://github.com/negachov/)

var libron = libron ? libron : new Object();
libron.osaka = {
  name: '大阪府',
  groups: ['大阪の公共図書館','北摂','北・中河内','南河内','泉州','大阪の類縁機関','近畿の公共図書館','全国サイト'],
  libraries: {
  'osaka':{'group':'大阪の公共図書館', 'name':'大阪府立図書館', 'code':'osaka'},
  'osaka_c':{'group':'大阪の公共図書館', 'name':'大阪市立図書館', 'code':'osaka_c'},
  'ikeda':{'group':'北摂', 'name':'池田市', 'code':'ikeda'},
  'ibaraki':{'group':'北摂', 'name':'茨木市', 'code':'ibaraki'},
  'suita':{'group':'北摂', 'name':'吹田市', 'code':'suita'},
  'settu':{'group':'北摂', 'name':'摂津市', 'code':'settu'},
  'takatsuki':{'group':'北摂', 'name':'高槻市', 'code':'takatsuki'},
  'toyonaka':{'group':'北摂', 'name':'豊中市', 'code':'toyonaka'},
  'minoh':{'group':'北摂', 'name':'箕面市', 'code':'minoh'},
  'shimamoto':{'group':'北摂', 'name':'島本町', 'code':'shimamoto'},
  'toyono':{'group':'北摂', 'name':'豊能町', 'code':'toyono'},
  'nose_t':{'group':'北摂', 'name':'能勢町', 'code':'nose_t'},
  'kashiwara':{'group':'北・中河内', 'name':'柏原市', 'code':'kashiwara'},
  'katano':{'group':'北・中河内', 'name':'交野市', 'code':'katano'},
  'kadoma':{'group':'北・中河内', 'name':'門真市', 'code':'kadoma'},
  'daito':{'group':'北・中河内', 'name':'大東市', 'code':'daito'},
  'neyagawa':{'group':'北・中河内', 'name':'寝屋川市', 'code':'neyagawa'},
  'higashiosaka':{'group':'北・中河内', 'name':'東大阪市', 'code':'higashiosaka'},
  'hirakata':{'group':'北・中河内', 'name':'枚方市', 'code':'hirakata'},
  'yao':{'group':'北・中河内', 'name':'八尾市', 'code':'yao'},
  'sayama':{'group':'南河内', 'name':'大阪狭山市', 'code':'sayama'},
  'kawachi':{'group':'南河内', 'name':'河内長野市', 'code':'kawachi'},
  'tondabayashi':{'group':'南河内', 'name':'富田林市', 'code':'tondabayashi'},
  'habikino':{'group':'南河内', 'name':'羽曳野市', 'code':'habikino'},
  'fujiidera':{'group':'南河内', 'name':'藤井寺市', 'code':'fujiidera'},
  'matsubara':{'group':'南河内', 'name':'松原市', 'code':'matsubara'},
  'izumi':{'group':'泉州', 'name':'和泉市', 'code':'izumi'},
  'izumiotsu':{'group':'泉州', 'name':'泉大津市', 'code':'izumiotsu'},
  'kishiwada':{'group':'泉州', 'name':'岸和田市', 'code':'kishiwada'},
  'sennan':{'group':'泉州', 'name':'泉南市', 'code':'sennan'},
  'takaishi':{'group':'泉州', 'name':'高石市', 'code':'takaishi'},
  'hannan':{'group':'泉州', 'name':'阪南市', 'code':'hannan'},
  'kumatori':{'group':'泉州', 'name':'熊取町', 'code':'kumatori'},
  'doc':{'group':'大阪の類縁機関', 'name':'大阪府公文書館', 'code':'doc'},
  'toukei':{'group':'大阪の類縁機関', 'name':'大阪府統計資料室', 'code':'toukei'},
  'icl':{'group':'大阪の類縁機関', 'name':'大阪府立国際児童文学館', 'code':'icl'},
  'dawncenter':{'group':'大阪の類縁機関', 'name':'大阪府立男女共同参画・青少年センター', 'code':'dawncenter'},
  'osakafu_u':{'group':'大阪の類縁機関', 'name':'大阪府立大学', 'code':'osakafu_u'},
  'plaza':{'group':'大阪の類縁機関', 'name':'大阪産業労働資料館', 'code':'plaza'},
  'blhrri':{'group':'大阪の類縁機関', 'name':'部落解放・人権研究所図書資料室', 'code':'blhrri'},
  'kyoto':{'group':'近畿の公共図書館', 'name':'京都府', 'code':'kyoto'},
  'shiga':{'group':'近畿の公共図書館', 'name':'滋賀県', 'code':'shiga'},
  'nara':{'group':'近畿の公共図書館', 'name':'奈良県', 'code':'nara'},
  'hyogo':{'group':'近畿の公共図書館', 'name':'兵庫県', 'code':'hyogo'},
  'wakayama':{'group':'近畿の公共図書館', 'name':'和歌山県', 'code':'wakayama'},
  'kottukai':{'group':'全国サイト', 'name':'国立国会図書館', 'code':'kottukai'},
  'nacsis':{'group':'全国サイト', 'name':'NACSIS Webcat', 'code':'nacsis'}
  },
  checkLibrary: function(div, isbn){
    var url = 'http://www.library.pref.osaka.jp/cgi-bin/book.cgi';
    var data = 'bname=%B8%A1%BA%F7%B3%AB%BB%CF&joinflag=AND&isbn=' + formatIsbn(isbn) + '&svr1='+ libron[selectedPrefecture].libraries[selectedLibrary].code;
    libron.osaka._getSessionId(div, url, data);
  },
  _getSessionId: function(div, url, data){
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

        var elms = $X('//input[@type="hidden" and @name="sessionid"]', htmldoc);      
        if (elms.length > 0) {
          libron.osaka._checkLibrary(div, url, data + "&sessionid=" + elms[0].value);
        }
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

        var elms = $X('//a[@target="_blank"]', htmldoc);
        if (elms.length > 0) {
          addLink(div, elms[0].href);
        } else {
          addNALink(div, url);
        }
      },
      data: data
    });
  }
};