// ==UserScript==
// @name          libron
// @namespace     http://libron.net
// @description	  Library Lookup from Amazon book listings. Currently supports libraries in Tokyo and Osaka.
// @author        junya@champierre.com
// @include       http://www.amazon.*
// @require       http://github.com/champierre/libron/raw/master/libron.tokyo.js
// @require       http://github.com/champierre/libron/raw/master/libron.osaka.js
// using [ simple version of $X   ] (c) id:os0x
//       [ relativeToAbsolutePath ] (c) id:Yuichirou
//       [ parseHTML              ] copied from Pagerization (c) id:ofk
// merged libron Osaka version (http://github.com/negachov/libron)
// thanks
// ==/UserScript==

var libron = libron ? libron : new Object();
libron.version = "1.2";
libron.prefectures = ['tokyo', 'osaka'];

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

var selectedLibrary;
var selectedPrefecture;

function initialize() {
  selectedPrefecture = GM_getValue("prefecture") || 'tokyo';
  selectedLibrary = GM_getValue("library") || 'tokyo';
}

function addSelectBox() {
  var div = document.createElement("div");
  div.style.textAlign = "right";
  div.style.backgroundColor = "#ffffcc";
  div.style.padding = "3px 0 3px 0";

  var titleSpan = document.createElement("span");
  titleSpan.innerHTML = "Libron(Amazonから図書館蔵書検索) ver." + libron.version;
  titleSpan.style.fontWeight = "bold";
  
  var prefectureSelect = document.createElement("select");
  prefectureSelect.style.marginLeft = "10px";

  for (var i in libron.prefectures) {    
    var option = document.createElement('option');
    option.value = libron.prefectures[i];
    option.innerHTML = libron[libron.prefectures[i]].name;
    if (libron.prefectures[i] == selectedPrefecture) {
      option.selected = true;
    }
    prefectureSelect.appendChild(option);
  }

  var select = createLibrarySelectBox(selectedPrefecture);
  
  prefectureSelect.addEventListener("change", function(){
    selectedPrefecture = prefectureSelect.value;
    savePrefecture(prefectureSelect.value);
    div.replaceChild(createLibrarySelectBox(prefectureSelect.value), div.childNodes[2]);
  }, false);

  var btn = document.createElement("button");
  btn.style.marginLeft = "10px";
  btn.innerHTML = "保存";

  div.appendChild(titleSpan);
  div.appendChild(prefectureSelect);
  div.appendChild(select);
  div.appendChild(btn);  
  document.body.insertBefore(div, document.body.childNodes[0]);
  
  btn.addEventListener("click", function(){
    saveLibrary(div.childNodes[2].value);
    window.location.reload();
  }, false);
}

function createLibrarySelectBox(prefecture) {
  var select = document.createElement("select");
  select.style.marginLeft = "10px";
  
  var optGroups = {};
  for (var i in libron[prefecture].groups) {
    optGroups[libron[prefecture]['groups'][i]] = document.createElement('optgroup');
    optGroups[libron[prefecture]['groups'][i]].label = libron[prefecture]['groups'][i];
  }

  for (var k in libron[prefecture].libraries) {
    var option = document.createElement('option');
    option.value = k;
    option.innerHTML = libron[prefecture].libraries[k]['name'];
    
    if (k == selectedLibrary) {
      option.selected = true;
    }
    
    optGroups[libron[prefecture].libraries[k]['group']].appendChild(option);  
  }

  for (var i in libron[prefecture].groups) {
    select.appendChild(optGroups[libron[prefecture]['groups'][i]]);
  }

  return select;
}

function libraryLinky(){
  var href = document.location.href;
  var matched = href.match(/\/(dp|ASIN|product)\/([\dX]{10})/);
  if (matched && matched[2]) {
    var isbn = matched[2];
    var div = document.getElementById('btAsinTitle').parentNode.parentNode;
    libron[selectedPrefecture].checkLibrary(div, formatIsbn(isbn));
  } else if ((href.indexOf('/s/') != -1) || (href.indexOf('/exec/') != -1)){
    var divs = document.getElementsByTagName('div');
    for (var i = 0; i < divs.length; i++) {
      var div = divs[i];
      if (div.className.indexOf("productTitle") != -1) {
        var link = div.getElementsByTagName('a')[0];
        var matched = link.href.match(/\/dp\/([\dX]{10})\/ref/);
        if (matched && matched[1]) {
          var isbn = matched[1];
          libron[selectedPrefecture].checkLibrary(div, formatIsbn(isbn));          
        }
      }
    }
  }
}

// Format ISBN like 4120031977 => 4-12-003197-7
function formatIsbn(str) {
  return str.replace(/(\d{1})(\d{2})(\d{6})([\d{1}X])/, "$1-$2-$3-$4");
}

function parseHTML(str) {
  str = str.replace(parseHTML.reg, '');
  var res = document.implementation.createDocument(null, 'html', null);
  var range = document.createRange();
  range.setStartAfter(document.body);
  var fragment = range.createContextualFragment(str);
  try {
    fragment = res.adoptNode(fragment); //for Firefox3 beta4
  } catch (e) {
    fragment = res.importNode(fragment, true);
  }
  res.documentElement.appendChild(fragment);
  return res;
}
parseHTML.reg = /^[\s\S]*?<html(?:\s[^>]+?)?>|<\/html\s*>[\S\s]*$/ig;

function relativeToAbsolutePath(htmldoc, base){
  var resolver = path_resolver(base);

  $X("descendant-or-self::a", htmldoc)
    .forEach(function(elm) {
    if(elm.getAttribute("href")) elm.href = resolver(elm.getAttribute("href"));
  });
  $X("descendant-or-self::img", htmldoc)
    .forEach(function(elm) {
    if(elm.getAttribute("src")) elm.src = resolver(elm.getAttribute("src"));
  });
  $X("descendant-or-self::embed", htmldoc)
    .forEach(function(elm) {
    if(elm.getAttribute("src")) elm.src = resolver(elm.getAttribute("src"));
  });
  $X("descendant-or-self::object", htmldoc)
    .forEach(function(elm) {
    if(elm.getAttribute("data")) elm.data = resolver(elm.getAttribute("data"));
  });
}

function path_resolver(base){
  var XHTML_NS = "http://www.w3.org/1999/xhtml"
  var XML_NS   = "http://www.w3.org/XML/1998/namespace"
  var a = document.createElementNS(XHTML_NS, 'a')
  a.setAttributeNS(XML_NS, 'xml:base', base)
  return function(url){
    a.href = url;
    return a.href;
  }
}

function $X (exp, context) {
	context || (context = document);
	var expr = (context.ownerDocument || context).createExpression(exp, function (prefix) {
		return document.createNSResolver(context.documentElement || context).lookupNamespaceURI(prefix) ||
			context.namespaceURI || document.documentElement.namespaceURI || "";
	});

	var result = expr.evaluate(context, XPathResult.ANY_TYPE, null);
		switch (result.resultType) {
			case XPathResult.STRING_TYPE : return result.stringValue;
			case XPathResult.NUMBER_TYPE : return result.numberValue;
			case XPathResult.BOOLEAN_TYPE: return result.booleanValue;
			case XPathResult.UNORDERED_NODE_ITERATOR_TYPE:
				// not ensure the order.
				var ret = [], i = null;
				while (i = result.iterateNext()) ret.push(i);
				return ret;
		}
	return null;
}

function addLink(div, url) {
  var link = document.createElement('div');
  link.innerHTML = '<span style=\"font-size:90%; background-color:#ffffcc;\"><a target="_blank" href="' + url + '">&raquo; ' + libron[selectedPrefecture].libraries[selectedLibrary].name + 'で予約</a></span>' +
    '<image src="' + okIcon + '">';
  div.appendChild(link);
}

function addNALink(div, url) {
  var link = document.createElement('div');
  link.innerHTML = '<span style=\"font-size:90%; background-color:#ffffcc;\"><a target="_blank" href="' + url + '">&raquo; ' + libron[selectedPrefecture].libraries[selectedLibrary].name + 'には見つかりません</a></span>' +
    '<image src="' + ngIcon + '">';
  div.appendChild(link);
}

function savePrefecture(value){
  GM_setValue("prefecture", value);
}

function saveLibrary(value){
  GM_setValue("library", value);
}

initialize();
addSelectBox();
libraryLinky();
