// @name          libron Gifu module
// @author        Gifuron(http://github.com/gifuron/)

var libron = libron ? libron : new Object();
libron.gifu = {
  name: '岐阜県',
  groups: ['岐阜地区','西濃地区','中濃地区','東濃地区','飛騨地区','大学図書館','専門図書館'],
  libraries: {
//POSTDATA=kensaku_keyword_bookname=%A5%C6%A5%B9%A5%C8&kensaku_keyword_author1=&kensaku_keyword_publisher=&url0=1&lib00_param_srsl1=1&lib00_param_srsl2=2&lib00_param_srsl3=3
  'gifuken':{'group':'岐阜地区', 'name':'岐阜県図書館', 'code':'&url0=1&lib00_param_srsl1=1&lib00_param_srsl2=2&lib00_param_srsl3=3'},
  'gifusi':{'group':'岐阜地区', 'name':'岐阜市立図書館', 'code':'&url24=1&lib24_param_mngkbn=01'},
  'hasimasi':{'group':'岐阜地区', 'name':'羽島市立図書館', 'code':'&url32=1&lib32_param_mngkbn=01'},
//  'kakamigaharasi':{'group':'岐阜地区', 'name':'各務原市立図書館（調整中）', 'code':''},
//ISBNNG  'sinsei':{'group':'岐阜地区', 'name':'しんせいほんの森', 'code':'&url37=1&lib37_param_TYPE=1239'},
  'ginan':{'group':'岐阜地区', 'name':'岐南町図書館', 'code':'&url36=1&lib36_param_mngkbn=01'},
//  'yamagatasi':{'group':'岐阜地区', 'name':'山県市図書館（調整中）', 'code':''},
//  'mizuhosi':{'group':'岐阜地区', 'name':'瑞穂市図書館（調整中）', 'code':''},

//西濃地区
//ISBNNG  'oogaki':{'group':'西濃地区', 'name':'大垣市立図書館', 'code':'&url2=1&lib02_param_srsl1=1&lib02_param_srsl2=2&lib02_param_srsl3=3'},
  'kaizusi':{'group':'西濃地区', 'name':'海津市図書館', 'code':'&url22=1&lib22_param_mngkbn=01'},
  'ikedacyo':{'group':'西濃地区', 'name':'池田町図書館', 'code':'&url13=1&lib13_param_TYPE=10'},
  'oonocyo':{'group':'西濃地区', 'name':'大野町立図書館', 'code':'&url29=1&lib29_param_mngkbn=01'},
//  'heartpearanpati':{'group':'西濃地区', 'name':'ハートピア安八図書館（調整中）', 'code':''},
  'yorocyo':{'group':'西濃地区', 'name':'養老町図書館', 'code':'&url40=1&lib40_param_mngkbn=01'},
  'ibigawacyo':{'group':'西濃地区', 'name':'揖斐川町立図書館', 'code':'&url41=1&lib41_param_mngkbn=01'},
  'taruipear':{'group':'西濃地区', 'name':'タルイピアセンター図書館', 'code':'&url42=1&lib42_param_mngkbn=01'},
//ISBNNG  'sekigahara':{'group':'西濃地区', 'name':'関ヶ原ふれあいセンター図書館', 'code':'&url46=1&lib46_param_ShiryoSyu=1&lib46_param_ShiryoSyu02=1&lib46_param_ShiryoSyu03=1&lib46_param_ShiryoSyu04=1'},
  'kobecyo':{'group':'西濃地区', 'name':'神戸町立図書館', 'code':'&url47=1&lib47_param_TYPE=10'}
//,

//中濃地区
//ISBNNG  'sekisi':{'group':'中濃地区', 'name':'関市立図書館', 'code':'&url17=1&lib17_param_chk_catph0=11+31&lib17_param_chk_catph1=12+32&lib17_param_chk_catph2=13+33'},
//  'minosi':{'group':'中濃地区', 'name':'美濃市図書館（調整中）', 'code':''},
//ISBNNG  'minokamo':{'group':'中濃地区', 'name':'美濃加茂市中央図書館・東図書館', 'code':'&url15=1&lib15_param_srsl1=1&lib15_param_srsl2=2&lib15_param_srsl3=3'},
//ISBNNG  'kanisi':{'group':'中濃地区', 'name':'可児市立図書館', 'code':'&url12=1&lib12_param_bookz=1'},
//ISBNNG  'guzyosi':{'group':'中濃地区', 'name':'郡上市図書館', 'code':'&url6=1&lib06_param_srsl1=1&lib06_param_srsl2=2&lib06_param_srsl3=3'},
//ISBNNG  'nakasendomitake':{'group':'中濃地区', 'name':'中山道みたけ館', 'code':'&url28=1&lib28_param_sryskb0=1&lib28_param_sryskb1=2&lib28_param_sryskb2=3'},

//東濃地区
//ISBNNG  'tazimisi':{'group':'東濃地区', 'name':'多治見市図書館', 'code':'&url27=1&lib27_param_key01=1'},
//ISBNNG  'mizunami':{'group':'東濃地区', 'name':'瑞浪市民図書館', 'code':'&url25=1&lib25_param_bookz=1'},
//ISBNNG  'enasicyuo':{'group':'東濃地区', 'name':'恵那市中央図書館', 'code':'&url3=1&lib03_param_ShiryoSyu=1&lib03_param_ShiryoSyu02=1&lib03_param_ShiryoSyu03=1&lib03_param_ShiryoSyu04=1'},
//ISBNNG  'nakatugawasi':{'group':'東濃地区', 'name':'中津川市立図書館', 'code':'&url26=1&lib26_param_sryskb0=1&lib26_param_sryskb1=2&lib26_param_sryskb2=3'},
//ISBNNG  'tokisi':{'group':'東濃地区', 'name':'土岐市図書館', 'code':'&url30=1&lib30_param_srsl1=1&lib30_param_srsl2=2&lib30_param_srsl3=3'},

//飛騨地区
//ISBNNG  'takayamasi':{'group':'飛騨地区', 'name':'高山市図書館', 'code':'&url31=1&lib31_param_srsl1=11&lib31_param_srsl2=12&lib31_param_srsl3=21&lib31_param_srsl4=31'},
//ISBNNG  'hidasi':{'group':'飛騨地区', 'name':'飛騨市図書館', 'code':'&url35=1&lib35_param_mngkbn=1'},
//ISBNNG  'gerosi':{'group':'飛騨地区', 'name':'下呂市図書館', 'code':'&url48=1&lib48_param_mngkbn=0'},

//大学図書館
//ISBNNG  'gifudai':{'group':'大学図書館', 'name':'岐阜大学図書館', 'code':'&url14=1&lib14_param_db=all&lib14_param_wayo=all'},
//ISBNNG  'gifuecodai':{'group':'大学図書館', 'name':'岐阜経済大学図書館', 'code':'&url19=1&lib19_param_which=1&lib19_param_which=2&lib19_param_which=3&lib19_param_which=4&lib19_param_which=5'},
//  'gifusyotokudai':{'group':'大学図書館', 'name':'岐阜聖徳学園大学附属図書館（調整中）', 'code':''},
//  'gifukangodai':{'group':'大学図書館', 'name':'県立看護大学図書館（調整中）', 'code':''},
//  'gifukosen':{'group':'大学図書館', 'name':'岐阜工業高等専門学校図書館（調整中）', 'code':''},
//ISBNNG  'cyubugakuindai':{'group':'大学図書館', 'name':'中部学院大学附属図書館', 'code':'&url43=1&lib43_param_annex=1&lib43_param_annex=2&lib43_param_searchtarget=BK&lib43_param_searchtarget=AV1&lib43_param_searchtarget=MG&lib43_param_searchtarget=IS'},
//ISBNNG  'asahidai':{'group':'大学図書館', 'name':'朝日大学図書館', 'code':'&url45=1&lib45_param_searchtarget=BK&lib45_param_searchtarget=MG&lib45_param_searchtarget=IS&lib45_param_searchtarget=PA'},

//専門図書館
//ISBNNG  'kensagyokeizai_tosyo':{'group':'専門図書館', 'name':'県産業経済振興センター（図書情報）', 'code':'&tosyo=1'},
//ISBNNG  'kensagyokeizai_bunken':{'group':'専門図書館', 'name':'県産業経済振興センター（文献情報）', 'code':'&bunken=1'},
//  'kensogokyoiku':{'group':'専門図書館', 'name':'県総合教育センター図書教育資料室（調整中）', 'code':''},
//  'kensportskagaku':{'group':'専門図書館', 'name':'県スポーツ科学トレーニングセンター（調整中）', 'code':''},
//ISBNNG  'kenkagakugizyutu':{'group':'専門図書館', 'name':'県科学技術図書館', 'code':'url9=1&lib09_param_sryskb=1234567'}
  },  
  checkLibrary: function(div, isbn){
    if(libron[selectedPrefecture].libraries[selectedLibrary].name == "岐阜県図書館") {
//      postdata = "p_mode=1&g_mode=0&ryno=&c_key=&c_date=&list_cnt=&mad_list_cnt=&brws=ncdet&ktyp5=tyo%3A121A&ktyp6=tyo%3A101A&key6=&ktyp9=shk%7Catk%7Cspk%7Ckek&itfg9=c&ser_type=0&stkb=&sgid=spno&srsl1=1&srsl2=2&srsl3=3&key5=&ktyp0=shk&key0=&itfg0=c&ron0=a&ktyp1=atk&key1=&itfg1=c&ron1=a&ktyp2=spk&key2=&itfg2=c&ron2=a&ktyp3=shk%7Catk%7Cspk%7Ckek%7Ckjk%7Ctxt%7Cser&key3=&itfg3=c&ron3=a&ktyp4=tyo%3A931A&key4=&itfg4=c&tgid=tyo%3A010A&tkey=" + isbn + "&kkey=&skey=&srkbs=60&langlist=&ichiran=10";
//      baseurl = "https://www.library.pref.gifu.jp/cgi-bin/Sopcsken.sh";
//      libron.gifu._checkLibraryGifukenUnko(div, baseurl, postdata);

      date = new Date();
      postdata = "search_type=psearch&search_num=&req_time="+date.getTime()+"&tittle=&tittle_cdn=LIKE&writ1=&writ2=&writ_cdn=LIKE&writ_cdn2=AND&pub1=&pub_cdn=LIKE&mai1=&mai2=&mai3=&mai_cdn=AND&pdate1=&pdate2=&x=61&y=16&isbn="+isbn+"&isbn_cdn=&order=BI_TITL_K&orderby=+ASC";
      baseurl = "http://unicanet.ndl.go.jp/psrch/PSearch.do";
      libron.gifu._checkLibraryGifuken(div, baseurl, postdata);
    } else {
      postdata = "kensaku_keyword_bookname=" + isbn + "&kensaku_keyword_author1=&kensaku_keyword_publisher=" + libron[selectedPrefecture].libraries[selectedLibrary].code;
      baseurl = "http://www.library.pref.gifu.jp/cgi-bin/oudan.cgi";
      libron.gifu._checkLibrary(div, baseurl, postdata);
    }
  },
  _checkLibraryGifuken: function(div, baseurl, postdata) {
    GM_xmlhttpRequest({
      method:"POST",
      headers: {'Content-type': 'application/x-www-form-urlencoded;'},
      url: baseurl,
      data: postdata,
      onload:function(response){
        var i = response.responseText.indexOf("岐阜県図書館");
        if(i != -1) {
          addLink(div, "https://www.library.pref.gifu.jp/");
        } else {
          addNALink(div, "https://www.library.pref.gifu.jp/");
        }
      },
      onerror:function(response){
        addERLink(div,"https://www.library.pref.gifu.jp/");
      }
    });
  },
//  _checkLibraryGifukenUnko: function(div, baseurl, postdata) {
//    GM_xmlhttpRequest({
//      method:"POST",
//      headers: {'Content-type': 'application/x-www-form-urlencoded ; charset=Shift_JIS', 
//      'Referer': 'https://www.library.pref.gifu.jp/cgi-bin/Sopcsmin.sh'},
//      url: baseurl,
//      data: postdata,
//      onload:function(response){
//addDebugText(div,response.responseText);
//        var i = response.responseText.indexOf("該当資料はありません");
//        if(i == -1) {
//          addLink(div, "https://www.library.pref.gifu.jp/");
//        } else {
//          addNALink(div, "https://www.library.pref.gifu.jp/");
//        }
//      },
//      onerror:function(response){
//        addERLink(div,"https://www.library.pref.gifu.jp/");
//      }
//    });
//  },
  _checkLibrary: function(div, baseurl, postdata) {
    GM_xmlhttpRequest({
      method:"POST",
      headers: {'Content-type': 'application/x-www-form-urlencoded'},
      url: baseurl,
      data: postdata,
      onload:function(response){
//        var regex = /href=\"(http:\/\/(lib-gifu\.city\.gifu\.gifu\.jp\/search\/tosmok\.asp|www\.lib\.city\.hashima\.gifu\.jp\/SerlsWeb\/tosmok\.asp|www\.lib\.town\.ginan\.gifu\.jp\/kensaku\/tosmok\.asp|lib\.city\.kaizu\.lg\.jp\/tosyo\/tosmok\.asp|library\.town\.ikeda\.gifu\.jp\/tosmok\.asp|210\.172\.198\.254\/tosmok\.asp|lib\.town\.yoro\.gifu\.jp\/serls\/tosmok\.asp|www2\.town\.ibigawa\.gifu\.jp\/tosmok\.asp|library\.town\.tarui\.gifu\.jp\/tosmok\.asp|www\.library\.town\.godo\.lg\.jp\/tosyo\/tosmok\.asp).*?)\"/im;
        var regex = /href=\"(http:\/\/.*?\/tosmok\.asp\?.*?)\"/im;
        var match = regex.exec(response.responseText);

        if(match && match[1]) {
          addLink(div, match[1]);
        } else {
          addNALink(div, "http://www.library.pref.gifu.jp/oudan.htm");
        }
      },
      onerror:function(response){
        addERLink(div,responce.responseText);
      }
    });
  }
};