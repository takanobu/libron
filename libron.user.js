// ==UserScript==
// @name          libron
// @namespace     http://libron.net
// @description	  Library Lookup from Amazon book listings. Currently supports libraries in Tokyo.
// @include       http://*.amazon.*
// ==/UserScript==

// Version 20090825

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

var okIcon = 'data:image/png;base64,'+
    'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0'+
    'U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKfSURBVDjLpZPrS1NhHMf9O3bOdmwDCWRE'+
    'IYKEUHsVJBI7mg3FvCxL09290jZj2EyLMnJexkgpLbPUanNOberU5taUMnHZUULMvelCtWF0sW/n'+
    '7MVMEiN64AsPD8/n83uucQDi/id/DBT4Dolypw/qsz0pTMbj/WHpiDgsdSUyUmeiPt2+V7SrIM+b'+
    'Sss8ySGdR4abQQv6lrui6VxsRonrGCS9VEjSQ9E7CtiqdOZ4UuTqnBHO1X7YXl6Daa4yGq7vWO1D'+
    '40wVDtj4kWQbn94myPGkCDPdSesczE2sCZShwl8CzcwZ6NiUs6n2nYX99T1cnKqA2EKui6+TwphA'+
    '5k4yqMayopU5mANV3lNQTBdCMVUA9VQh3GuDMHiVcLCS3J4jSLhCGmKCjBEx0xlshjXYhApfMZRP'+
    '5CyYD+UkG08+xt+4wLVQZA1tzxthm2tEfD3JxARH7QkbD1ZuozaggdZbxK5kAIsf5qGaKMTY2lAU'+
    '/rH5HW3PLsEwUYy+YCcERmIjJpDcpzb6l7th9KtQ69fi09ePUej9l7cx2DJbD7UrG3r3afQHOyCo'+
    '+V3QQzE35pvQvnAZukk5zL5qRL59jsKbPzdheXoBZc4saFhBS6AO7V4zqCpiawuptwQG+UAa7Ct3'+
    'UT0hh9p9EnXT5Vh6t4C22QaUDh6HwnECOmcO7K+6kW49DKqS2DrEZCtfuI+9GrNHg4fMHVSO5kE7'+
    'nAPVkAxKBxcOzsajpS4Yh4ohUPPWKTUh3PaQEptIOr6BiJjcZXCwktaAGfrRIpwblqOV3YKdhfXO'+
    'IvBLeREWpnd8ynsaSJoyESFphwTtfjN6X1jRO2+FxWtCWksqBApeiFIR9K6fiTpPiigDoadqCEag'+
    '5YUFKl6Yrciw0VOlhOivv/Ff8wtn0KzlebrUYwAAAABJRU5ErkJggg==';

var ngIcon = 'data:image/png;base64,'+
    'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0'+
    'U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHdSURBVDjLpZNraxpBFIb3a0ggISmmNISW'+
    'XmOboKihxpgUNGWNSpvaS6RpKL3Ry//Mh1wgf6PElaCyzq67O09nVjdVlJbSDy8Lw77PmfecMwZg'+
    '/I/GDw3DCo8HCkZl/RlgGA0e3Yfv7+DbAfLrW+SXOvLTG+SHV/gPbuMZRnsyIDL/OASziMxkkKkU'+
    'QTJJsLaGn8/iHz6nd+8mQv87Ahg2H9Th/BxZqxEkEgSrq/iVCvLsDK9awtvfxb2zjD2ARID+lVVl'+
    'babTgWYTv1rFL5fBUtHbbeTJCb3EQ3ovCnRC6xAgzJtOE+ztheYIEkqbFaS3vY2zuIj77AmtYYDu'+
    'sPy8/zuvunJkDKXM7tYWTiyGWFjAqeQnAD6+7ueNx/FLpRGAru7mcoj5ebqzszil7DggeF/DX1nB'+
    'N82rzPqrzbRayIsLhJqMPT2N83Sdy2GApwFqRN7jFPL0tF+10cDd3MTZ2AjNUkGCoyO6y9cRxfQo'+
    'wFUbpufr1ct4ZoHg+Dg067zduTmEbq4yi/UkYidDe+kaTcP4ObJIajksPd/eyx3c+N2rvPbMDPbU'+
    'FPZSLKzcGjKPrbJaDsu+dQO3msfZzeGY2TCvKGYQhdSYeeJjUt21dIcjXQ7U7Kv599f4j/oF55W4'+
    'g/2e3b8AAAAASUVORK5CYII=';

var libraryUrl = 'http://metro.tokyo.opac.jp/cgi-bin/j12crs2.cgi?partmod=0&frameid=0&srchmode=2&ccmp=FUZZY&scmp=SUBSTR&or_and02=AND&or_and03=AND&backimg=..%2Fcrsbackg.gif&headimg=logimg%2Fdefault.gif&inproxy=110&custuser=jcr004&custlogmod=1&bword0=&bword1=&bword2=&aword0=&aword1=&publisher=&fyear=&tyear=&maxhits=10&timeoutsec=60&isbn=';

function libraryLinky(){
  var href　=　document.location.href;
  var matched = href.match(/\/dp\/([\d\w]+)\/ref/);
  var s_index = href.indexOf('/s/')
  if (matched && matched[1]) {
    var isbn = matched[1];
    var div = document.getElementById('btAsinTitle').parentNode.parentNode;
    var url = libraryUrl + formatIsbn(isbn) + '&sitechk' + libraries[selectedLibrary].code + '=on';
    checkLibrary(div, url);
  } else if (s_index != -1){
    var divs = document.getElementsByTagName('div');
    for (var i = 0; i < divs.length; i++) {
      var div = divs[i];
      if (div.className.indexOf("productTitle") != -1) {
        var link = div.getElementsByTagName('a')[0];
        var matched = link.href.match(/\/dp\/([\d\w]+)\/ref/);
        if (matched && matched[1]) {
          var isbn = matched[1];
          var url = libraryUrl + formatIsbn(isbn) + '&sitechk' + libraries[selectedLibrary].code + '=on';
          checkLibrary(div, url);
        }
      }
    }
  }
}

// Format ISBN like 4120031977 => 4-12-003197-7
function formatIsbn(str) {
  return str.replace(/(\d{1})(\d{2})(\d{6})(\d{1})/, "$1-$2-$3-$4");
}

function checkLibrary(div, url){
  GM_xmlhttpRequest({
    method:"GET",
    url: url,
    onload:function(response){
      if (response.responseText.match(/table/i)
        || response.responseText.match(/1\. <a href=/i) // 港区立図書館
        || response.responseText.match(/1\.<a href=/i) // 都立図書館
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

function addLink(div, url) {
  var link = document.createElement('div');
  link.innerHTML = '<span style=\"font-size:90%; background-color:#ffffcc;\"><a href="' + url + '">&raquo; ' + libraries[selectedLibrary].name + 'で予約</a></span>' +
    '<image src="' + okIcon + '">';  
  div.appendChild(link);
}

function addNALink(div, url) {
  var link = document.createElement('div');
  link.innerHTML = '<span style=\"font-size:90%; background-color:#ffffcc;\"><a href="' + url + '">&raquo; ' + libraries[selectedLibrary].name + 'には見つかりません</a></span>' +
    '<image src="' + ngIcon + '">';
  div.appendChild(link);
}

function addSelectBox() {
  selectedLibrary = GM_getValue("library");
  var div = document.createElement("div");
  div.style.textAlign = "right";
  div.style.backgroundColor = "#ffffcc";
  div.style.padding = "3px 0 3px 0";

  var titleSpan = document.createElement("span");
  titleSpan.innerHTML = "Libron(Amazonから図書館蔵書検索)";
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

function saveLibrary(value){
  GM_setValue("library", value);
  window.location.reload();
}

addSelectBox();
libraryLinky();