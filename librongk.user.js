// ==UserScript==
// @name          librongk
// @namespace     http://libron.net
// @description	  Library Lookup from Amazon book listings. Currently supports libraries in Tokyo. GreaseKit version. 
// @include       http://www.amazon.*
// ==/UserScript==

var version = "1.1";

var libraries = {
  'tokyo':{'group':'都', 'name':'都立図書館', 'code':'000441'},
  'adachi':{'group':'区', 'name':'足立区立図書館', 'code':'000610'},
  'arakawa':{'group':'区', 'name':'荒川区立図書館', 'code':'001047'},
  'itabashi':{'group':'区', 'name':'板橋区立図書館', 'code':'000618'},
  'edogawa':{'group':'区', 'name':'江戸川区立図書館', 'code':'001060'},
  'ota':{'group':'区', 'name':'大田区立図書館', 'code':'001052'},
  'katsushika':{'group':'区', 'name':'葛飾区立図書館', 'code':'001049'},
  'kita':{'group':'区', 'name':'北区立図書館', 'code':'000616'},
  'koto':{'group':'区', 'name':'江東区立図書館', 'code':'001090'},
  'shinagawa':{'group':'区', 'name':'品川区立図書館', 'code':'000195'},
  'shibuya':{'group':'区', 'name':'渋谷区立図書館', 'code':'001032'},
  'shinjuku':{'group':'区', 'name':'新宿区立図書館', 'code':'001005'},
  'suginami':{'group':'区', 'name':'杉並区立図書館', 'code':'000613'},
  'sumida':{'group':'区', 'name':'墨田区立図書館', 'code':'000188'},
  'setagaya':{'group':'区', 'name':'世田谷区立図書館', 'code':'001048'},
  'taito':{'group':'区', 'name':'台東区立図書館', 'code':'001002'},
  'chuo':{'group':'区', 'name':'中央区立図書館', 'code': '001044'},
  'chiyoda':{'group':'区', 'name':'千代田区立図書館', 'code':'001006'},
  'toshima':{'group':'区', 'name':'豊島区立図書館', 'code':'001041'},
  'nakano':{'group':'区', 'name':'中野区立図書館', 'code':'001033'},
  'nerima':{'group':'区', 'name':'練馬区立図書館', 'code':'001046'},
  'bunkyo':{'group':'区', 'name':'文京区立図書館', 'code':'001120'},
  'minato':{'group':'区', 'name':'港区立図書館', 'code': '000617'},
  'meguro':{'group':'区', 'name':'目黒区立図書館', 'code':'001070'},
  'akishima':{'group':'市', 'name':'昭島市立図書館', 'code':'001042'},
  'akiruno':{'group':'市', 'name':'あきる野市市立図書館', 'code':'001011'},
  'inagi':{'group':'市', 'name':'稲城市立図書館', 'code':'001122'},
  'oume':{'group':'市', 'name':'青梅市立図書館', 'code':'001012'},
  'kiyose':{'group':'市', 'name':'清瀬市立図書館', 'code':'001003'},
  'kunitachi':{'group':'市', 'name':'くにたち図書館', 'code':'001091'},
  'koganei':{'group':'市', 'name':'小金井市立図書館', 'code':'001121'},
  'kokubunji':{'group':'市', 'name':'国分寺市立図書館', 'code':'000909'},
  'kodaira':{'group':'市', 'name':'小平市立図書館', 'code':'001045'},
  'komae':{'group':'市', 'name':'狛江市立図書館', 'code':'000191'},
  'tachikawa':{'group':'市', 'name':'立川市立図書館', 'code':'000906'},
  'tama':{'group':'市', 'name':'多摩市立図書館', 'code':'001051'},
  'chofu':{'group':'市', 'name':'調布市立図書館', 'code':'001042'},
  'nishitokyo':{'group':'市', 'name':'西東京市立図書館', 'code':'001043'},
  'hachioji':{'group':'市', 'name':'八王子市立図書館', 'code':'000196'},
  'hamura':{'group':'市', 'name':'羽村市立図書館', 'code':'000198'},
  'higashikurume':{'group':'市', 'name':'東久留米市立図書館', 'code':'000619'},
  'higashimurayama':{'group':'市', 'name':'東村山市立図書館', 'code':'001035'},
  'higashiyamato':{'group':'市', 'name':'東大和市立図書館', 'code':'000908'},
  'hino':{'group':'市', 'name':'日野市立図書館', 'code':'000614'},
  'fuchu':{'group':'市', 'name':'府中市立図書館', 'code':'000615'},
  'fussa':{'group':'市', 'name':'福生市立図書館', 'code':'000193'},
  'machida':{'group':'市', 'name':'町田市立図書館', 'code':'000910'},
  'mitaka':{'group':'市', 'name':'三鷹市立図書館', 'code':'000166'},
  'musashino':{'group':'市', 'name':'武蔵野市立図書館', 'code':'000194'},
  'musahimurayama':{'group':'市', 'name':'武蔵村山市立図書館', 'code':'000907'},
  'musashino':{'group':'市', 'name':'武蔵野市立図書館', 'code':'000194'},
  'okutama':{'group':'町', 'name':'奥多摩町立図書館', 'code':'000251'},
  'hinode':{'group':'町', 'name':'日の出町立図書館', 'code':'001004'},
  'mizuho':{'group':'町', 'name':'瑞穂町立図書館', 'code':'001013'}
}

var availabilityImageUrl = 'http://libron.net/library/check';
var libraryUrl = 'http://metro.tokyo.opac.jp/cgi-bin/j12crs2.cgi?partmod=0&frameid=0&srchmode=2&ccmp=FUZZY&scmp=SUBSTR&or_and02=AND&or_and03=AND&backimg=..%2Fcrsbackg.gif&headimg=logimg%2Fdefault.gif&inproxy=110&custuser=jcr004&custlogmod=1&bword0=&bword1=&bword2=&aword0=&aword1=&publisher=&fyear=&tyear=&maxhits=10&timeoutsec=60&isbn=';
var selectedLibrary;

/*
  gm_functions
*/

if(typeof GM_getValue === "undefined") {
  GM_getValue = function(name){
    var nameEQ = escape("_greasekit" + name) + "=", ca = document.cookie.split(';');
    for (var i = 0, c; i < ca.length; i++) { 
      var c = ca[i]; 
      while (c.charAt(0) == ' ') c = c.substring(1, c.length); 
      if (c.indexOf(nameEQ) == 0) {
        var value = unescape(c.substring(nameEQ.length, c.length));
        return value;
      }
    } 
    return null; 
  }
}

if(typeof GM_setValue === "undefined") {
  GM_setValue = function( name, value, options ){ 
    options = (options || {}); 
    if ( options.expiresInOneYear ){ 
      var today = new Date();
      options.expires = new Date(today.getFullYear()+1, today.getMonth(), today.getDate());
    } 
    var curCookie = escape("_greasekit" + name) + "=" + escape(value) + 
    ((options.expires) ? "; expires=" + options.expires.toGMTString() : "") + 
    ((options.path)    ? "; path="    + options.path : "") + 
    ((options.domain)  ? "; domain="  + options.domain : "") + 
    ((options.secure)  ? "; secure" : ""); 
    document.cookie = curCookie; 
  }
}

/*
  end of gm_functions
*/

function initialize() {
  selectedLibrary = GM_getValue("library") || 'tokyo';
}

function addSelectBox() {
  var div = document.createElement("div");
  div.style.textAlign = "right";
  div.style.backgroundColor = "#ffffcc";
  div.style.padding = "3px 0 3px 0";

  var titleSpan = document.createElement("span");
  titleSpan.innerHTML = "Libron(Amazonから図書館蔵書検索) ver." + version;
  titleSpan.style.fontWeight = "bold";
  
  var select = document.createElement("select");
  select.style.marginLeft = "10px";
  var i = 0;
  
  var toGroup = document.createElement('optgroup');
  toGroup.label = "都";
  
  var kuGroup = document.createElement('optgroup');
  kuGroup.label = "区";

  var shiGroup = document.createElement('optgroup');
  shiGroup.label = "市";

  var choGroup = document.createElement('optgroup');
  choGroup.label = "町";
  
  for (var k in libraries) {
    var option = document.createElement('option');
    option.value = k;
    option.innerHTML = libraries[k]['name'];
    
    if (k == selectedLibrary) {
      option.selected = true;
    }
    
    if (libraries[k]['group'] == '都') {
      toGroup.appendChild(option);
    } else if (libraries[k]['group'] == '区')  {
      kuGroup.appendChild(option);
    } else if (libraries[k]['group'] == '市')  {
      shiGroup.appendChild(option);
    } else if (libraries[k]['group'] == '町')  {
      choGroup.appendChild(option);
    }
    
    i++;
  }

  select.appendChild(toGroup);
  select.appendChild(kuGroup);
  select.appendChild(shiGroup);
  select.appendChild(choGroup);
  
  var btn = document.createElement("button");
  btn.style.marginLeft = "10px";
  btn.innerHTML = "保存";

  div.appendChild(titleSpan);
  div.appendChild(select);
  div.appendChild(btn);  
  document.body.insertBefore(div, document.body.childNodes[0]);
  
  btn.addEventListener("click", function(){saveLibrary(select.value);}, false);
}

function libraryLinky(){
  var href　=　document.location.href;
  var matched = href.match(/\/(dp|ASIN|product)\/([\dX]{10})/);
  if (matched && matched[2]) {
    var isbn = matched[2];
    var div = document.getElementById('btAsinTitle').parentNode.parentNode;
    addLink(div, isbn);
  } else if ((href.indexOf('/s/') != -1) || (href.indexOf('/exec/') != -1)){
    var divs = document.getElementsByTagName('div');
    for (var i = 0; i < divs.length; i++) {
      var div = divs[i];
      if (div.className.indexOf("productTitle") != -1) {
        var link = div.getElementsByTagName('a')[0];
        var matched = link.href.match(/\/dp\/([\dX]{10})\/ref/);
        if (matched && matched[1]) {
          var isbn = matched[1];
          addLink(div, isbn);
        }
      }
    }
  }
}

function addLink(div, isbn) {
  var url = libraryUrl + isbn + '&sitechk' + libraries[selectedLibrary].code + '=on';
  var imageUrl = availabilityImageUrl + '?isbn=' + isbn + '&library_code=' + libraries[selectedLibrary].code;
  var library_link = document.createElement('div');
  library_link.innerHTML = '<span style=\"font-size:90%; background-color:#ffffcc;\"><a href="' + url + '">&raquo; ' + libraries[selectedLibrary].name + 'で予約</a></span><img src="' + imageUrl +'">';
  div.appendChild(library_link);
}

function saveLibrary(value){
  GM_setValue("library", value, {'expiresInOneYear':true, 'path':'/'});
  window.location.reload();
}

initialize();
addSelectBox();
libraryLinky();