// @name          libron Tokyo module
// @author        Junya Ishihara(http://github.com/champierre/)

var libron = libron ? libron : new Object();
libron.tokyo = {
  name: '東京都',
  groups: ['都','区','市','町'],
  libraries: {
  'tokyo':{'group':'都', 'name':'都立図書館', 'code':'&sitechk000441=on'},
  'adachi':{'group':'区', 'name':'足立区立図書館', 'code':'&sitechk000610=on'},
  'arakawa':{'group':'区', 'name':'荒川区立図書館', 'code':'&sitechk001047=on'},
  'itabashi':{'group':'区', 'name':'板橋区立図書館', 'code':'&sitechk000618=on'},
  'edogawa':{'group':'区', 'name':'江戸川区立図書館', 'code':'&sitechk001060=on'},
  'ota':{'group':'区', 'name':'大田区立図書館', 'code':'&sitechk001052=on'},
  'katsushika':{'group':'区', 'name':'葛飾区立図書館', 'code':'&sitechk001049=on'},
  'kita':{'group':'区', 'name':'北区立図書館', 'code':'&sitechk000616=on'},
  'koto':{'group':'区', 'name':'江東区立図書館', 'code':'&sitechk001090=on'},
  'shinagawa':{'group':'区', 'name':'品川区立図書館', 'code':'&sitechk000195=on'},
  'shibuya':{'group':'区', 'name':'渋谷区立図書館', 'code':'&sitechk001032=on'},
  'shinjuku':{'group':'区', 'name':'新宿区立図書館', 'code':'&sitechk001005=on'},
  'suginami':{'group':'区', 'name':'杉並区立図書館', 'code':'&sitechk000613=on'},
  'sumida':{'group':'区', 'name':'墨田区立図書館', 'code':'&sitechk000188=on'},
  'setagaya':{'group':'区', 'name':'世田谷区立図書館', 'code':'&sitechk001048=on'},
  'taito':{'group':'区', 'name':'台東区立図書館', 'code':'&sitechk001002=on'},
  'chuo':{'group':'区', 'name':'中央区立図書館', 'code': '&sitechk001044=on'},
  'chiyoda':{'group':'区', 'name':'千代田区立図書館', 'code':'&sitechk001006=on'},
  'toshima':{'group':'区', 'name':'豊島区立図書館', 'code':'&sitechk001041=on'},
  'nakano':{'group':'区', 'name':'中野区立図書館', 'code':'&sitechk001033=on'},
  'nerima':{'group':'区', 'name':'練馬区立図書館', 'code':'&sitechk001046=on'},
  'bunkyo':{'group':'区', 'name':'文京区立図書館', 'code':'&sitechk001120=on'},
  'minato':{'group':'区', 'name':'港区立図書館', 'code': '&sitechk000617=on'},
  'meguro':{'group':'区', 'name':'目黒区立図書館', 'code':'&sitechk001070=on'},
  'akishima':{'group':'市', 'name':'昭島市立図書館', 'code':'&sitechk001042=on'},
  'akiruno':{'group':'市', 'name':'あきる野市市立図書館', 'code':'&sitechk001011=on'},
  'inagi':{'group':'市', 'name':'稲城市立図書館', 'code':'&sitechk001122=on'},
  'oume':{'group':'市', 'name':'青梅市立図書館', 'code':'&sitechk001012=on'},
  'kiyose':{'group':'市', 'name':'清瀬市立図書館', 'code':'&sitechk001003=on'},
  'kunitachi':{'group':'市', 'name':'くにたち図書館', 'code':'&sitechk001091=on'},
  'koganei':{'group':'市', 'name':'小金井市立図書館', 'code':'&sitechk001121=on'},
  'kokubunji':{'group':'市', 'name':'国分寺市立図書館', 'code':'&sitechk000909=on'},
  'kodaira':{'group':'市', 'name':'小平市立図書館', 'code':'&sitechk001045=on'},
  'komae':{'group':'市', 'name':'狛江市立図書館', 'code':'&sitechk000191=on'},
  'tachikawa':{'group':'市', 'name':'立川市立図書館', 'code':'&sitechk000906=on'},
  'tama':{'group':'市', 'name':'多摩市立図書館', 'code':'&sitechk001051=on'},
  'chofu':{'group':'市', 'name':'調布市立図書館', 'code':'&sitechk001042=on'},
  'nishitokyo':{'group':'市', 'name':'西東京市立図書館', 'code':'&sitechk001043=on'},
  'hachioji':{'group':'市', 'name':'八王子市立図書館', 'code':'&sitechk000196=on'},
  'hamura':{'group':'市', 'name':'羽村市立図書館', 'code':'&sitechk000198=on'},
  'higashikurume':{'group':'市', 'name':'東久留米市立図書館', 'code':'&sitechk000619=on'},
  'higashimurayama':{'group':'市', 'name':'東村山市立図書館', 'code':'&sitechk001035=on'},
  'higashiyamato':{'group':'市', 'name':'東大和市立図書館', 'code':'&sitechk000908=on'},
  'hino':{'group':'市', 'name':'日野市立図書館', 'code':'&sitechk000614=on'},
  'fuchu':{'group':'市', 'name':'府中市立図書館', 'code':'&sitechk000615=on'},
  'fussa':{'group':'市', 'name':'福生市立図書館', 'code':'&sitechk000193=on'},
  'machida':{'group':'市', 'name':'町田市立図書館', 'code':'&sitechk000910=on'},
  'mitaka':{'group':'市', 'name':'三鷹市立図書館', 'code':'&sitechk000166=on'},
  'musashino':{'group':'市', 'name':'武蔵野市立図書館', 'code':'&sitechk000194=on'},
  'musahimurayama':{'group':'市', 'name':'武蔵村山市立図書館', 'code':'&sitechk000907=on'},
  'musashino':{'group':'市', 'name':'武蔵野市立図書館', 'code':'&sitechk000194=on'},
  'okutama':{'group':'町', 'name':'奥多摩町立図書館', 'code':'&sitechk000251=on'},
  'hinode':{'group':'町', 'name':'日の出町立図書館', 'code':'&sitechk001004=on'},
  'mizuho':{'group':'町', 'name':'瑞穂町立図書館', 'code':'&sitechk001013=on'}
  },  
  checkLibrary: function(div, isbn){
    url = "http://metro.tokyo.opac.jp/cgi-bin/j12crs2.cgi?partmod=0&frameid=0&srchmode=2&ccmp=FUZZY&scmp=SUBSTR&or_and02=AND&or_and03=AND&backimg=..%2Fcrsbackg.gif&headimg=logimg%2Fdefault.gif&inproxy=110&custuser=jcr004&custlogmod=1&bword0=&bword1=&bword2=&aword0=&aword1=&publisher=&fyear=&tyear=&maxhits=10&timeoutsec=60&isbn=" + formatIsbn(isbn) + libron[selectedPrefecture].libraries[selectedLibrary].code;
    libron.tokyo._checkLibrary(div, url);
  },
  _checkLibrary: function(div, url) {
    GM_xmlhttpRequest({
      method:"GET",
      url: url,
      onload:function(response){
        if (response.responseText.match(/table/i)
          || response.responseText.match(/1\. <a href=/i) // 港区立図書館
          || response.responseText.match(/1\.<a href=/i) // 都立図書図書館
          || response.responseText.match(/1\. \[\S*\] <a href=/i) // 江東区立図書館
          || response.responseText.match(/1: <a href=/i)) // 八王子市立図書館
        {
          addLink(div, url);
        } else {
          addNALink(div, url);
        }
      }
    });
  }
};