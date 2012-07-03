
/*!
* Bonzo: DOM Utility (c) Dustin Diaz 2012
* https://github.com/ded/bonzo
* License MIT
*/
(function (a, b, c) { typeof module != "undefined" && module.exports ? module.exports = b() : typeof c["define"] == "function" && c.define.amd ? define(a, b) : c[a] = b() })("bonzo", function () { function G(a) { return new RegExp("(^|\\s+)" + a + "(\\s+|$)") } function H(a, b, c) { for (var d = 0, e = a.length; d < e; d++) b.call(c || a[d], a[d], d, a); return a } function I(a, b, c) { for (var d = 0, e = a.length; d < e; d++) O(a[d]) && (I(a[d].childNodes, b, c), b.call(c || a[d], a[d], d, a)); return a } function J(a) { return a.replace(/-(.)/g, function (a, b) { return b.toUpperCase() }) } function K(a) { return a ? a.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : a } function L(a) { a[y]("data-node-uid") || a[x]("data-node-uid", ++t); var b = a[y]("data-node-uid"); return s[b] || (s[b] = {}) } function M(a) { var b = a[y]("data-node-uid"); b && delete s[b] } function N(a) { var b; try { return a === null || a === undefined ? undefined : a === "true" ? !0 : a === "false" ? !1 : a === "null" ? null : (b = parseFloat(a)) == a ? b : a } catch (c) { } return undefined } function O(a) { return a && a.nodeName && (a.nodeType == 1 || a.nodeType == 11) } function P(a, b, c) { for (var d = 0, e = a.length; d < e; ++d) if (b.call(c || null, a[d], d, a)) return !0; return !1 } function Q(a) { return a == "transform" && (a = A.transform) || /^transform-?[Oo]rigin$/.test(a) && (a = A.transform + "Origin") || a == "float" && (a = A.cssFloat), a ? J(a) : null } function S(a, b, c) { var d = 0, g = b || this, h = [], i = f && typeof a == "string" && a.charAt(0) != "<" ? f(a) : a; return H(W(i), function (a) { H(g, function (b) { var f = !b[e] || b[e] && !b[e][e] ? function () { var a = b.cloneNode(!0), c, d; if (g.$ && typeof g.cloneEvents == "function") { g.$(a).cloneEvents(b), c = g.$(a).find("*"), d = g.$(b).find("*"); for (var e = 0; e < d.length; e++) g.$(c[e]).cloneEvents(d[e]) } return a } () : b; c(a, f), h[d] = f, d++ }) }, this), H(h, function (a, b) { g[b] = a }), g.length = d, g } function T(a, b, c) { var d = $(a), e = d.css("position"), f = d.offset(), g = "relative", h = e == g, i = [parseInt(d.css("left"), 10), parseInt(d.css("top"), 10)]; e == "static" && (d.css("position", g), e = g), isNaN(i[0]) && (i[0] = h ? 0 : a.offsetLeft), isNaN(i[1]) && (i[1] = h ? 0 : a.offsetTop), b != null && (a.style.left = b - f.left + i[0] + w), c != null && (a.style.top = c - f.top + i[1] + w) } function U(a, b) { return typeof b == "function" ? b(a) : b } function V(a) { this.length = 0; if (a) { a = typeof a != "string" && !a.nodeType && typeof a.length != "undefined" ? a : [a], this.length = a.length; for (var b = 0; b < a.length; b++) this[b] = a[b] } } function W(a) { return typeof a == "string" ? $.create(a) : O(a) ? [a] : a } function X(a, c, d) { var e = this[0]; return e ? a == null && c == null ? (Y(e) ? Z() : { x: e.scrollLeft, y: e.scrollTop })[d] : (Y(e) ? b.scrollTo(a, c) : (a != null && (e.scrollLeft = a), c != null && (e.scrollTop = c)), this) : this } function Y(a) { return a === b || /^(?:body|html)$/i.test(a.tagName) } function Z() { return { x: b.pageXOffset || d.scrollLeft, y: b.pageYOffset || d.scrollTop} } function $(a) { return new V(a) } var a = this, b = window, c = b.document, d = c.documentElement, e = "parentNode", f = null, g = /^(checked|value|selected)$/i, h = /^(select|fieldset|table|tbody|tfoot|td|tr|colgroup)$/i, i = ["<table>", "</table>", 1], j = ["<table><tbody><tr>", "</tr></tbody></table>", 3], k = ["<select>", "</select>", 1], l = ["_", "", 0, 1], m = { thead: i, tbody: i, tfoot: i, colgroup: i, caption: i, tr: ["<table><tbody>", "</tbody></table>", 2], th: j, td: j, col: ["<table><colgroup>", "</colgroup></table>", 2], fieldset: ["<form>", "</form>", 1], legend: ["<form><fieldset>", "</fieldset></form>", 2], option: k, optgroup: k, script: l, style: l, link: l, param: l, base: l }, n = /^(checked|selected)$/, o = /msie/i.test(navigator.userAgent), p, q, r, s = {}, t = 0, u = /^-?[\d\.]+$/, v = /^data-(.+)$/, w = "px", x = "setAttribute", y = "getAttribute", z = "getElementsByTagName", A = function () { var a = c.createElement("p"); return a.innerHTML = '<a href="#x">x</a><table style="float:left;"></table>', { hrefExtended: a[z]("a")[0][y]("href") != "#x", autoTbody: a[z]("tbody").length !== 0, computedStyle: c.defaultView && c.defaultView.getComputedStyle, cssFloat: a[z]("table")[0].style.styleFloat ? "styleFloat" : "cssFloat", transform: function () { var b = ["webkitTransform", "MozTransform", "OTransform", "msTransform", "Transform"], c; for (c = 0; c < b.length; c++) if (b[c] in a.style) return b[c] } (), classList: "classList" in a, opasity: function () { return typeof c.createElement("a").style.opacity != "undefined" } ()} } (), B = /(^\s*|\s*$)/g, C = /\s+/, D = String.prototype.toString, E = { lineHeight: 1, zoom: 1, zIndex: 1, opacity: 1, boxFlex: 1, WebkitBoxFlex: 1, MozBoxFlex: 1 }, F = String.prototype.trim ? function (a) { return a.trim() } : function (a) { return a.replace(B, "") }, R = A.computedStyle ? function (a, b) { var d = null, e = c.defaultView.getComputedStyle(a, ""); return e && (d = e[b]), a.style[b] || d } : o && d.currentStyle ? function (a, b) { if (b == "opacity" && !A.opasity) { var c = 100; try { c = a.filters["DXImageTransform.Microsoft.Alpha"].opacity } catch (d) { try { c = a.filters("alpha").opacity } catch (e) { } } return c / 100 } var f = a.currentStyle ? a.currentStyle[b] : null; return a.style[b] || f } : function (a, b) { return a.style[b] }; return A.classList ? (p = function (a, b) { return a.classList.contains(b) }, q = function (a, b) { a.classList.add(b) }, r = function (a, b) { a.classList.remove(b) }) : (p = function (a, b) { return G(b).test(a.className) }, q = function (a, b) { a.className = F(a.className + " " + b) }, r = function (a, b) { a.className = F(a.className.replace(G(b), " ")) }), V.prototype = { get: function (a) { return this[a] || null }, each: function (a, b) { return H(this, a, b) }, deepEach: function (a, b) { return I(this, a, b) }, map: function (a, b) { var c = [], d, e; for (e = 0; e < this.length; e++) d = a.call(this, this[e], e), b ? b(d) && c.push(d) : c.push(d); return c }, html: function (a, b) { function e(b) { H(W(a), function (a) { b.appendChild(a) }) } var c = b ? d.textContent === undefined ? "innerText" : "textContent" : "innerHTML"; return typeof a != "undefined" ? this.empty().each(function (d) { !b && h.test(d.tagName) ? e(d) : function () { try { d[c] = a } catch (b) { e(d) } } () }) : this[0] ? this[0][c] : "" }, text: function (a) { return this.html(a, !0) }, append: function (a) { return this.each(function (b) { H(W(a), function (a) { b.appendChild(a) }) }) }, prepend: function (a) { return this.each(function (b) { var c = b.firstChild; H(W(a), function (a) { b.insertBefore(a, c) }) }) }, appendTo: function (a, b) { return S.call(this, a, b, function (a, b) { a.appendChild(b) }) }, prependTo: function (a, b) { return S.call(this, a, b, function (a, b) { a.insertBefore(b, a.firstChild) }) }, before: function (a) { return this.each(function (b) { H($.create(a), function (a) { b[e].insertBefore(a, b) }) }) }, after: function (a) { return this.each(function (b) { H($.create(a), function (a) { b[e].insertBefore(a, b.nextSibling) }) }) }, insertBefore: function (a, b) { return S.call(this, a, b, function (a, b) { a[e].insertBefore(b, a) }) }, insertAfter: function (a, b) { return S.call(this, a, b, function (a, b) { var c = a.nextSibling; c ? a[e].insertBefore(b, c) : a[e].appendChild(b) }) }, replaceWith: function (a) { return this.deepEach(M), this.each(function (b) { b.parentNode.replaceChild($.create(a)[0], b) }) }, addClass: function (a) { return a = D.call(a).split(C), this.each(function (b) { H(a, function (a) { a && !p(b, U(b, a)) && q(b, U(b, a)) }) }) }, removeClass: function (a) { return a = D.call(a).split(C), this.each(function (b) { H(a, function (a) { a && p(b, U(b, a)) && r(b, U(b, a)) }) }) }, hasClass: function (a) { return a = D.call(a).split(C), P(this, function (b) { return P(a, function (a) { return a && p(b, a) }) }) }, toggleClass: function (a, b) { return a = D.call(a).split(C), this.each(function (c) { H(a, function (a) { a && (typeof b != "undefined" ? b ? q(c, a) : r(c, a) : p(c, a) ? r(c, a) : q(c, a)) }) }) }, show: function (a) { return this.each(function (b) { b.style.display = a || "" }) }, hide: function () { return this.each(function (a) { a.style.display = "none" }) }, toggle: function (a, b) { return this.each(function (a) { a.style.display = a.offsetWidth || a.offsetHeight ? "none" : b || "" }), a && a(), this }, first: function () { return $(this.length ? this[0] : []) }, last: function () { return $(this.length ? this[this.length - 1] : []) }, next: function () { return this.related("nextSibling") }, previous: function () { return this.related("previousSibling") }, parent: function () { return this.related(e) }, related: function (a) { return this.map(function (b) { b = b[a]; while (b && b.nodeType !== 1) b = b[a]; return b || 0 }, function (a) { return a }) }, focus: function () { return this.length && this[0].focus(), this }, blur: function () { return this.length && this[0].blur(), this }, css: function (a, d) { function g(a, b, c) { for (var d in f) f.hasOwnProperty(d) && (c = f[d], (b = Q(d)) && u.test(c) && !(b in E) && (c += w), a.style[b] = U(a, c)) } var e; if (d === undefined && typeof a == "string") return d = this[0], d ? d === c || d === b ? (e = d === c ? $.doc() : $.viewport(), a == "width" ? e.width : a == "height" ? e.height : "") : (a = Q(a)) ? R(d, a) : null : null; var f = a; return typeof a == "string" && (f = {}, f[a] = d), o && f.opacity && (f.filter = "alpha(opacity=" + f.opacity * 100 + ")", f.zoom = a.zoom || 1, delete f.opacity), this.each(g) }, offset: function (a, b) { if (typeof a == "number" || typeof b == "number") return this.each(function (c) { T(c, a, b) }); if (!this[0]) return { top: 0, left: 0, height: 0, width: 0 }; var d = this[0], e = d.offsetWidth, f = d.offsetHeight, g = d.offsetTop, h = d.offsetLeft; while (d = d.offsetParent) g += d.offsetTop, h += d.offsetLeft, d != c.body && (g -= d.scrollTop, h -= d.scrollLeft); return { top: g, left: h, height: f, width: e} }, dim: function () { if (!this.length) return { height: 0, width: 0 }; var a = this[0], b = !a.offsetWidth && !a.offsetHeight ? function (b) { var c = { position: a.style.position || "", visibility: a.style.visibility || "", display: a.style.display || "" }; return b.first().css({ position: "absolute", visibility: "hidden", display: "block" }), c } (this) : null, c = a.offsetWidth, d = a.offsetHeight; return b && this.first().css(b), { height: d, width: c} }, attr: function (a, b) { var c = this[0]; if (typeof a == "string" || a instanceof String) return typeof b == "undefined" ? c ? g.test(a) ? n.test(a) && typeof c[a] == "string" ? !0 : c[a] : a != "href" && a != "src" || !A.hrefExtended ? c[y](a) : c[y](a, 2) : null : this.each(function (c) { g.test(a) ? c[a] = U(c, b) : c[x](a, U(c, b)) }); for (var d in a) a.hasOwnProperty(d) && this.attr(d, a[d]); return this }, removeAttr: function (a) { return this.each(function (b) { n.test(a) ? b[a] = !1 : b.removeAttribute(a) }) }, val: function (a) { return typeof a == "string" ? this.attr("value", a) : this.length ? this[0].value : null }, data: function (a, b) { var c = this[0], d, e, f; return typeof b == "undefined" ? c ? (e = L(c), typeof a == "undefined" ? (H(c.attributes, function (a) { (f = ("" + a.name).match(v)) && (e[J(f[1])] = N(a.value)) }), e) : (typeof e[a] == "undefined" && (e[a] = N(this.attr("data-" + K(a)))), e[a])) : null : this.each(function (c) { L(c)[a] = b }) }, remove: function () { return this.deepEach(M), this.each(function (a) { a[e] && a[e].removeChild(a) }) }, empty: function () { return this.each(function (a) { I(a.childNodes, M); while (a.firstChild) a.removeChild(a.firstChild) }) }, detach: function () { return this.each(function (a) { a[e].removeChild(a) }) }, scrollTop: function (a) { return X.call(this, null, a, "y") }, scrollLeft: function (a) { return X.call(this, a, null, "x") } }, $.setQueryEngine = function (a) { f = a, delete $.setQueryEngine }, $.aug = function (a, b) { for (var c in a) a.hasOwnProperty(c) && ((b || V.prototype)[c] = a[c]) }, $.create = function (a) { return typeof a == "string" && a !== "" ? function () { var b = /^\s*<([^\s>]+)/.exec(a), d = c.createElement("div"), f = [], g = b ? m[b[1].toLowerCase()] : null, h = g ? g[2] + 1 : 1, i = g && g[3], j = e, k = A.autoTbody && g && g[0] == "<table>" && !/<tbody/i.test(a); d.innerHTML = g ? g[0] + a + g[1] : a; while (h--) d = d.firstChild; i && d && d.nodeType !== 1 && (d = d.nextSibling); do (!b || d.nodeType == 1) && (!k || d.tagName.toLowerCase() != "tbody") && f.push(d); while (d = d.nextSibling); return H(f, function (a) { a[j] && a[j].removeChild(a) }), f } () : O(a) ? [a.cloneNode(!0)] : [] }, $.doc = function () { var a = $.viewport(); return { width: Math.max(c.body.scrollWidth, d.scrollWidth, a.width), height: Math.max(c.body.scrollHeight, d.scrollHeight, a.height)} }, $.firstChild = function (a) { for (var b = a.childNodes, c = 0, d = b && b.length || 0, e; c < d; c++) b[c].nodeType === 1 && (e = b[d = c]); return e }, $.viewport = function () { return { width: o ? d.clientWidth : self.innerWidth, height: o ? d.clientHeight : self.innerHeight} }, $.isAncestor = "compareDocumentPosition" in d ? function (a, b) { return (a.compareDocumentPosition(b) & 16) == 16 } : "contains" in d ? function (a, b) { return a !== b && a.contains(b) } : function (a, b) { while (b = b[e]) if (b === a) return !0; return !1 }, $ }, this);

//(C) 2009 henrik.lindqvist@llamalab.com
new function () { function Selector(p, c) { if (!(this instanceof Selector)) return new Selector(p).exec(c); if (!qsa) this.exec = cache[p] || (cache[p] = new compile(p)); this.pattern = p; } Selector.prototype = { constructor: Selector, exec: function (c) { var pe = this.patchElement, pa = this.patchArray, p = this.pattern, r = pe ? map.call((c || d).querySelectorAll(p), pe, this) : Array.prototype.slice.call((c || d).querySelectorAll(p)); return pa ? pa.call(this, r) : r; }, toString: function () { return this.pattern; }, toSource: function () { return 'new Selector("' + this.pattern + '")'; } }; window.Selector = Selector; function $(s) { var a = arguments; return s.replace(/\$(\d)/g, function (m, i) { return a[i] }); } with (navigator.userAgent) { var ie = indexOf('MSIE') != -1 && indexOf('Opera') == -1, mz = indexOf('Gecko') != -1 && indexOf('KHTML') == -1, wk = indexOf('AppleWebKit') != -1; } var d = document, de = d.documentElement, qsa = !!d.querySelectorAll, bcn = !!d.getElementsByClassName, cnl = !!de.children, cnlt = cnl && de.children.tags && !wk, ec = !!de.contains, cdp = !!de.compareDocumentPosition, si = typeof de.sourceIndex == 'number', cache = {}, cmp = { '=': 'if($1($2=="$3")){$5}', '^=': 'if($1((x=$2)&&!x.indexOf("$3"))){$5}', '*=': 'if($1((x=$2)&&x.indexOf("$3")!=-1)){$5}', '$=': 'if($1((x=$2)&&x.indexOf("$3",x.length-$4)!=-1)){$5}', '~=': 'if($1((x=$2)&&(y=x.indexOf("$3"))!=-1&&(x.charCodeAt(y-1)||32)==32&&(x.charCodeAt(y+$4)||32)==32)){$5}', '|=': 'if($1((x=$2)&&(x=="$3"||!x.indexOf("$3-")))){$5}' }, map = Array.prototype.map || function (fn, tp) { var i = this.length, r = new Array(i); while (--i >= 0) r[i] = fn.call(tp, this[i], i, this); return r; }; with (d.implementation) { var me = d.addEventListener && (hasFeature('MutationEvents', '2.0') || hasFeature('Events', '2.0') && hasFeature('Core', '2.0')); } Selector.guid = 0; Selector.nthIndex = function (LLi, c, r, tp, tv) { var p = c.parentNode, ci = 'LLi#' + tv, pl = 'LLi$' + tv; if (!p) return Number.NaN; if (!c[ci] || c.LLi != LLi) { for (var n = p.firstChild, i = 0; n; n = n.nextSibling) { if (n[tp] == tv) { n[ci] = ++i; n.LLi = LLi; } } p[pl] = i; } return r ? 1 + p[pl] - c[ci] : c[ci]; }; if (me) { function fn(e) { with (e.target) { if (nodeType !== 2) ownerDocument.LLi = ++Selector.guid; } } d.addEventListener('DOMNodeInserted', fn, false); d.addEventListener('DOMNodeRemoved', fn, false); } if (ie) { var am = { acceptcharset: 'acceptCharset', accesskey: 'accessKey', cellpadding: 'cellPadding', cellspacing: 'cellSpacing', checked: 'defaultChecked', selected: 'defaultSelected', 'class': 'className', colspan: 'colSpan', 'for': 'htmlFor', frameborder: 'frameBorder', hspace: 'hSpace', longdesc: 'longDesc', marginwidth: 'marginWidth', marginheight: 'marginHeight', noresize: 'noResize', noshade: 'noShade', maxlength: 'maxLength', readonly: 'readOnly', rowspan: 'rowSpan', tabindex: 'tabIndex', usemap: 'useMap', valign: 'vAlign', vspace: 'vSpace' }, ab = { compact: 1, nowrap: 1, ismap: 1, declare: 1, noshade: 1, checked: 1, disabled: 1, readonly: 1, multiple: 1, selected: 1, noresize: 1, defer: 1 }; } function compile(qp) { this.dup = this.srt = this.idx = this.i = this.nqp = 0; with (this) { var js = ''; do { i = nqp = 0; js += $('n=c;$1q:do{$2}while(false);', srt ? 's=0;' : '', type(qp, $(srt ? 'for(x=r.length;s<x;z=s+((x-s)/2)|0,($1)?s=z+1:x=z);if(s<r.length)r.splice(s++,0,$2);else r[s++]=$2;' : 'r[s++]=$2;', cdp ? 'r[z].compareDocumentPosition(n)&4' : 'h[r[z].LLn]<h[n.LLn]', 'pe?pe.call(this,n):n'), 0, '*')); } while (qp = nqp); js = $('var r=[],s=0,n,x,y,z,d=c?c.ownerDocument||c.document||c:c=document,pe=this.patchElement,pa=this.patchArray$1$2;$3return pa?pa.call(this,r):r;', dup > 0 ? ',h={}' : '', idx ? me ? ',LLi=d.LLi||(d.LLi=++Selector.guid)' : ',LLi=++Selector.guid' : '', js); return new Function('c', js); } } compile.prototype = { type: function (qp, js, n, s, c) { with (this) { var m = /^\s*([\w-]+|\*)?(.*)/.exec(qp), t = m[1] || '*'; if (!n && c == ' ' && !dup) dup = 1; js = pred(m[2], js, n, t, c); switch (c) { case '>': return cnlt && t != '*' ? $('for(var n$1=n.children.tags("$2"),i$1=0;n=n$1[i$1++];){$3}', ++i, t, js) : $(cnl ? 'for(var n$1=n.children,i$1=0;n=n$1[i$1++];)$2{$3}' : 'for(n=n.firstChild;n;n=n.nextSibling)$2{$3}', ++i, t != '*' ? 'if(n.nodeName==="' + t.toUpperCase() + '")' : !cnl || ie ? 'if(n.nodeType===1)' : '', js); case '+': return $('while(n=n.nextSibling)if(n.node$1){$2break}else if(n.nodeType===1)break;', t == '*' ? 'Type===1' : 'Name==="' + t.toUpperCase() + '"', js); case '~': return $('while(n=n.nextSibling)if(n.node$1){$3}else if(n.node$2)break;', t == '*' ? 'Type===1' : 'Name==="' + t.toUpperCase() + '"', s == '*' ? 'Type===1' : 'Name==="' + s.toUpperCase() + '"', js); default: return (typeof js == 'object') ? String(js) : n ? t == '*' ? js : $('if(n.nodeName!="$1"){$2}', t.toUpperCase(), js) : $('for(var n$1=n.getElementsByTagName("$2"),i$1=0;n=n$1[i$1++];)$3{$4}', ++i, t, ie && t == '*' ? 'if(n.nodeType===1)' : '', js); } } }, pred: function (qp, js, n, t, c) { with (this) { var m = /^([#\.])([\w-]+)(.*)/.exec(qp) || /^(\[)\s*([\w-]+)\s*(?:([~|^$*]?=)\s*(?:(['"])(.*?)\4|([\w-]+)))?\s*\](.*)/.exec(qp) || /^:(first|last|only)-(?:(child)|of-type)(.*)/.exec(qp) || /^:(nth)-(?:(last)-)?(?:(child)|of-type)\(\s*(?:(odd|even)|(-|\d*)n([+-]\d+)?|([1-9]\d*))\s*\)(.*)/.exec(qp) || /^:(active|checked|(?:dis|en)abled|empty|focus|link|root|target)(.*)/.exec(qp) || /^:(lang)\(\s*(['"])?(.*?)\2\s*\)(.*)/.exec(qp) || (!n && /^:(not)\(\s*(.*)\s*\)(.*)/.exec(qp)), x = 0; if (!m) { if (m = /^\s*([+>~,\s])\s*(\S.*)/.exec(qp)) { if (m[1] != ',') return type(m[2], js, n, t, m[1]); nqp = m[2]; dup = 2; } else if (/\S/.test(qp)) throw new Error('Illegal query near: ' + qp); return dup < 1 ? js : $('if(!h[x=n.LLn||(n.LLn=++Selector.guid)]){h[x]=$1;$2}', !srt || cdp ? 'true' : si ? 'n.sourceIndex' : 'Selector.srcIndex(h,n)', js); } if (!n && m[1] == '#' && dup != 2) dup = -1; js = pred(m[m.length - 1], js, n, t, 1); switch (m[1]) { case '#': return uniq(js, n, t, c, ie, 'n.id', '"' + m[2] + '"', 'd.getElementById("' + m[2] + '")'); case '.': return bcn && !n && (!c || c == ' ') && (t == '*' || !mz) ? Object($('for(var n$1=n.getElementsByClassName("$2"),i$1=0;n=n$1[i$1++];)$3{$4}', ++i, m[2], t == '*' ? '' : 'if(n.nodeName==="' + t.toUpperCase() + '")', js)) : $(cmp['~='], n ? '!' : '', 'n.className', x = m[2], x.length, js); case '[': return (x = m[3]) ? $(cmp[x], n ? '!' : '', ie ? (x = m[2].toLowerCase()) == 'style' ? 'style.cssText.toLowerCase()' : ab[x] ? 'n.' + x + '&&"' + x + '"' : 'n.getAttribute("' + (am[x] || x) + '",2)' : 'n.getAttribute("' + m[2] + '")', x = m[5] || m[6], x.length, js) : $(ie ? 'if($1((x=n.getAttributeNode("$2"))&&x.specified)){$3}' : 'if($1n.hasAttribute("$2")){$3}', n ? '!' : '', m[2], js); case 'active': case 'focus': return uniq(js, n, t, c, 0, 'n', 'd.activeElement'); case 'checked': return $('if($1(n.checked||n.selected)){$2}', n ? '!' : '', js); case 'disabled': x = 1; case 'enabled': return $('if(n.disabled===$1$2){$3}', !!(x ^ n), ie ? '&&((x=n.nodeName)==="BUTTON"||x==="INPUT"||x==="OPTION"||x==="OPTGROUP"||x==="SELECT"||x==="TEXTAREA"' : '', js); case 'empty': return $('for(x=n.firstChild;x&&x.nodeType>3;x=x.nextSibling);if($1x){$2}', n ? '' : '!', js); case 'first': return flo(js, n, m[2], 'previous'); case 'lang': return $(cmp['|='], n ? '!' : '', 'n.lang', x = m[3], x.length, js); case 'last': return flo(js, n, m[2], 'next'); case 'link': return $('if($1(n.nodeName==="A"&&n.href)){$2}', n ? '!' : '', js); case 'nth': var a = m[4] ? 2 : m[5] == '-' ? -1 : m[7] ? 0 : m[5] ? m[5] - 0 : 1, b = m[4] == 'odd' ? 1 : (m[6] || m[7]) - 0 || 0; if (a == 1) return js; if (a == 0 && b == 1) return flo(js, n, m[3], m[2] ? 'next' : 'previous'); if (a == b) b = 0; if (b < 0) b = a + b; idx = 1; return $('if($1(Selector.nthIndex(LLi,n,$2,"node$3",$4)$5)){$6}', n ? '!' : '', !!m[2], m[3] ? 'Type' : 'Name', m[3] ? '1' : 'n.nodeName', a < 0 ? '<=' + b : a ? '%' + a + '===' + b : '===' + b, js); case 'not': return type(m[2], js, 1, '*'); case 'only': return flo(js, n, m[2]); case 'root': return uniq(js, n, t, c, 0, 'n', 'd.documentElement'); case 'target': x = '(d.defaultView||d.parentWindow||window).location.hash.substr(1)'; return uniq(js, n, t, c, ie, 'n.id', x, 'd.getElementById(' + x + ')'); } } }, uniq: function (js, n, t, c, d, p, v, w) { return (n || (c && c != ' ') || d) ? $(n ? 'if($1!==$2){$3}' : 'if($1===$2){$3break q}', p, v, js) : Object($(ec ? 'if((x=$1)===n||!n.contains||n.contains(x))$2' : cdp ? 'if((x=$1)===n||!n.compareDocumentPosition||n.compareDocumentPosition(x)&16)$2' : 'for(x=y=$1;y;y=y.parentNode)if(y===n)$2', w || v, t == '*' ? '{n=x;' + js + 'break q}' : '{if((n=x).nodeName==="' + t.toUpperCase() + '"){' + js + '}break q}')); }, flo: function (js, n, t, s) { return $(s ? 'for($2x=n.$1Sibling;x&&x.node$3;x=x.$1Sibling);if($4x){$5}' : 'for($2(x=n.parentNode)&&(x=x.firstChild);x&&(x.node$3||x===n);x=x.nextSibling);if($4x){$5}', s, t ? '' : 'y=n.nodeName,', t ? 'Type!==1' : 'Name!==y', n ? '' : '!', js); } }; }

/*!
* snack.js (c) Ryan Florence
* https://github.com/rpflorence/snack
* MIT License
* Inspiration and code adapted from
*  MooTools      (c) Valerio Proietti   MIT license
*  jQuery        (c) John Resig         Dual license MIT or GPL Version 2
*  contentLoaded (c) Diego Perini       MIT License
*  Zepto.js      (c) Thomas Fuchs       MIT License
*/
typeof Object.create != "function" && (Object.create = function (a) { function b() { } b.prototype = a; return new b }), !function (a) { var b = a.snack = {}, c = 0, d = Object.prototype.toString, e = [].indexOf, f = [].push; b.extend = function () { if (arguments.length == 1) return b.extend(b, arguments[0]); var a = arguments[0]; for (var c, d = 1, e = arguments.length; d < e; d++) for (c in arguments[d]) a[c] = arguments[d][c]; return a }, b.extend({ v: "1.2.3", bind: function (a, b, c) { c = c || []; return function () { f.apply(c, arguments); return a.apply(b, c) } }, punch: function (a, c, d, e) { var f = a[c]; a[c] = e ? function () { f.apply(a, arguments); return d.apply(a, arguments) } : function () { var c = [].slice.call(arguments, 0); c.unshift(b.bind(f, a)); return d.apply(a, c) } }, create: function (a, c) { var d = Object.create(a); if (!c) return d; for (var e in c) { if (!c.hasOwnProperty(e)) continue; if (!a[e] || typeof c[e] != "function") { d[e] = c[e]; continue } b.punch(d, e, c[e]) } return d }, id: function () { return ++c }, each: function (a, b, c) { if (a.length === void 0) { for (var d in a) a.hasOwnProperty(d) && b.call(c, a[d], d, a); return a } for (var e = 0, f = a.length; e < f; e++) b.call(c, a[e], e, a); return a }, parseJSON: function (b) { if (typeof b == "string") { b = b.replace(/^\s+|\s+$/g, ""); var c = /^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")); if (!c) throw "Invalid JSON"; var d = a.JSON; return d && d.parse ? d.parse(b) : (new Function("return " + b))() } }, isArray: function (a) { return a instanceof Array || d.call(a) == "[object Array]" }, indexOf: e ? function (a, b) { return e.call(b, a) } : function (a, b) { for (var c = 0, d = b.length; c < d; c++) if (b[c] === a) return c; return -1 } }) } (window), !function (a, b) { var c = {}, d; a.wrap = function (b, e) { typeof b == "string" && (b = d(b, e)), b.length || (b = [b]); var f = Object.create(c), g = 0, h = b.length; for (; g < h; g++) f[g] = b[g]; f.length = h, f.id = a.id(); return f }, a.extend(a.wrap, { define: function (b, d) { if (typeof b != "string") for (var e in b) a.wrap.define(e, b[e]); else c[b] = d }, defineEngine: function (a) { d = a } }), a.wrap.defineEngine(function (a, c) { typeof c == "string" && (c = b.querySelector(c)); return (c || b).querySelectorAll(a) }) } (snack, document), !function (a, b, c) { function l() { try { i.doScroll("left") } catch (a) { setTimeout(l, 50); return } k("poll") } function k(d) { if (d.type != "readystatechange" || c.readyState == "complete") (d.type == "load" ? b : c)[e](f + d.type, k, !1), !g && (g = !0) && a.each(j, function (a) { a.apply(c) }) } var d = c.addEventListener ? "addEventListener" : "attachEvent", e = c.addEventListener ? "removeEventListener" : "detachEvent", f = c.addEventListener ? "" : "on", g = !1, h = !0, i = c.documentElement, j = []; a.extend({ stopPropagation: function (a) { a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0 }, preventDefault: function (a) { a.preventDefault ? a.preventDefault() : a.returnValue = !1 } }), a.listener = function (b, g) { b.delegate && (b.capture = !0, _handler = g, g = function (d) { var e = d.target || d.srcElement, f = typeof b.delegate == "string" ? a.wrap(b.delegate, b.node) : b.delegate(b.node); while (e && a.indexOf(e, f) == -1) e = e.parentNode; e && e !== this && e !== c && _handler.call(e, d, e) }), b.context && (g = a.bind(g, b.context)); var h = { attach: function () { b.node[d](f + b.event, g, b.capture) }, detach: function () { b.node[e](f + b.event, g, b.capture) }, fire: function () { g.apply(b.node, arguments) } }; h.attach(); return h }, a.ready = function (a) { g ? a.apply(c) : j.push(a) }; if (c.createEventObject && i.doScroll) { try { h = !b.frameElement } catch (m) { } h && l() } c[d](f + "DOMContentLoaded", k, !1), c[d](f + "readystatechange", k, !1), b[d](f + "load", k, !1) } (snack, window, document), !function (a) { a.publisher = function (b) { var c = {}; b = b || {}, a.extend(b, { subscribe: function (b, d, e) { var f = { fn: d, ctxt: e || {} }; c[b] || (c[b] = []); var g = { attach: function () { c[b].push(f) }, detach: function () { c[b].splice(a.indexOf(d, c[b]), 1) } }; g.attach(); return g }, publish: function (b, d) { if (!c[b]) return !1; a.each(c[b], function (a) { a.fn.apply(a.ctxt, d || []) }); return c[b].length } }); return b }, a.publisher(a) } (snack), !function (a, b, c) { function e() { } a.JSONP = function (b, d) { var e = "jsonp" + a.id(), f = c.createElement("script"), g = !1; a.JSONP[e] = function (b) { g = !1, delete a.JSONP[e], d(b) }, typeof b.data == "object" && (b.data = a.toQueryString(b.data)); var h = { send: function () { g = !0, f.src = b.url + "?" + b.key + "=snack.JSONP." + e + "&" + b.data, c.getElementsByTagName("head")[0].appendChild(f) }, cancel: function () { g && f.parentNode && f.parentNode.removeChild(f), g = !1, a.JSONP[e] = function () { delete a.JSONP[e] } } }; b.now !== !1 && h.send(); return h }, a.toQueryString = function (b, c) { var d = []; a.each(b, function (b, e) { c && (e = c + "[" + e + "]"); var f; if (a.isArray(b)) { var g = {}; a.each(b, function (a, b) { g[b] = a }), f = a.toQueryString(g, e) } else typeof b == "object" ? f = a.toQueryString(b, e) : f = e + "=" + encodeURIComponent(b); b !== null && d.push(f) }); return d.join("&") }; var d = function () { var a = function () { return new XMLHttpRequest }, b = function () { return new ActiveXObject("MSXML2.XMLHTTP") }, c = function () { return new ActiveXObject("Microsoft.XMLHTTP") }; try { a(); return a } catch (d) { try { b(); return b } catch (d) { c(); return c } } } (); a.request = function (b, c) { if (!(this instanceof a.request)) return new a.request(b, c); var e = this; e.options = a.extend({}, e.options, b), e.callback = c, e.xhr = new d, e.headers = e.options.headers, e.options.now !== !1 && e.send() }, a.request.prototype = { options: { exception: e, url: "", data: "", method: "get", now: !0, headers: { "X-Requested-With": "XMLHttpRequest", Accept: "text/javascript, text/html, application/xml, text/xml, */*" }, async: !0, emulation: !0, urlEncoded: !0, encoding: "utf-8" }, onStateChange: function () { var a = this, b = a.xhr; if (b.readyState == 4 && !!a.running) { a.running = !1, a.status = 0; try { var c = b.status; a.status = c == 1223 ? 204 : c } catch (d) { } b.onreadystatechange = e; var f = a.status >= 200 && a.status < 300 ? [!1, a.xhr.responseText || "", a.xhr.responseXML] : [a.status]; a.callback.apply(a, f) } }, setHeader: function (a, b) { this.headers[a] = b; return this }, getHeader: function (a) { try { return this.xhr.getResponseHeader(a) } catch (b) { return null } }, send: function () { var b = this, d = b.options; if (b.running) return b; b.running = !0; var e = d.data || "", f = String(d.url), g = d.method.toLowerCase(); typeof e != "string" && (e = a.toQueryString(e)); if (d.emulation && a.indexOf(g, ["get", "post"]) < 0) { var h = "_method=" + g; e = e ? h + "&" + e : h, g = "post" } if (d.urlEncoded && a.indexOf(g, ["post", "put"]) > -1) { var i = d.encoding ? "; charset=" + d.encoding : ""; b.headers["Content-type"] = "application/x-www-form-urlencoded" + i } f || (f = c.location.pathname); var j = f.lastIndexOf("/"); j > -1 && (j = f.indexOf("#")) > -1 && (f = f.substr(0, j)), e && g == "get" && (f += (f.indexOf("?") > -1 ? "&" : "?") + e, e = null); var k = b.xhr; k.open(g.toUpperCase(), f, open.async, d.user, d.password), d.user && "withCredentials" in k && (k.withCredentials = !0), k.onreadystatechange = a.bind(b.onStateChange, b); for (var l in b.headers) try { k.setRequestHeader(l, b.headers[l]) } catch (m) { d.exception.apply(b, [l, b.headers[l]]) } k.send(e), d.async || b.onStateChange(); return b }, cancel: function () { var a = this; if (!a.running) return a; a.running = !1; var b = a.xhr; b.abort(), b.onreadystatechange = e, a.xhr = new d; return a } } } (snack, window, document), !function (a, b) { function d(b, c, d, e) { var f = b.data(d); f && a.each(f, function (a) { a[c].apply(b, e) }); return b } function c(a) { return a.replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "") } a.wrap.define({ data: function () { var a = {}; return function (b, c) { var d = a[this.id]; d || (d = a[this.id] = {}); if (c === void 1) return d[b]; return d[b] = c } } (), each: function (b, c) { return a.each(this, b, c) }, addClass: function (a) { return this.each(function (b) { c(b.className).indexOf(a) > -1 || (b.className = c(b.className + " " + a)) }) }, removeClass: function (a) { return this.each(function (b) { b.className = b.className.replace(new RegExp("(^|\\s)" + a + "(?:\\s|$)"), "$1") }) }, attach: function (b, c, d) { var e = b.split("."), f = []; e[1] && (f = this.data(e[1]) || []), this.each(function (b) { var g = { node: b, event: e[0] }; d && (g.delegate = d), f.push(a.listener(g, c)) }), e[1] && this.data(e[1], f); return this }, detach: function (a) { d(this, "detach", a, null, !0), this.data(a, null); return this }, fire: function (a, b) { return d(this, "fire", a, b) }, delegate: function (a, b, c) { return this.attach(a, c, b) } }) } (snack, document)

function $(selector) {
    return bonzo(Selector(selector));
}


//Find the frame containing the actual body of the emails
function getframe(doc, frameId) {
    var iframeEl = doc.getElementById(frameId);
    if (iframeEl.contentDocument) { // DOM
        //Works for Firefox
        return iframeEl.contentDocument;
    } else if (iframeEl.contentWindow) { // IE win
        //Called for Chrome
        //var myprop = listprop(iframeEl.contentWindow.document);
        return iframeEl.contentWindow.document;
    }
}



function getElementsByAttribute(oElm, strTagName, strAttributeName, strAttributeValue) {
    var arrElements = (strTagName == "*" && oElm.all) ? oElm.all : oElm.getElementsByTagName(strTagName);
    var arrReturnElements = new Array();
    var oAttributeValue = (typeof strAttributeValue != "undefined") ? new RegExp("(^|\\s)" + strAttributeValue + "(\\s|$)", "i") : null;
    var oCurrent;
    var oAttribute;
    for (var i = 0; i < arrElements.length; i++) {
        oCurrent = arrElements[i];
        oAttribute = oCurrent.getAttribute && oCurrent.getAttribute(strAttributeName);
        if (typeof oAttribute == "string" && oAttribute.length > 0) {
            if (typeof strAttributeValue == "undefined" || (oAttributeValue && oAttributeValue.test(oAttribute))) {
                arrReturnElements.push(oCurrent);
            }
        }
    }
    return arrReturnElements[0];
}

function putButtons() {

    //Find the frame first
    theframe = getframe(document, 'canvas_frame');
    if (!theframe) {
        window.setTimeout(putButtons, 2000);
        return;
    }

    //Find the Send button
    var sendrow = getElementsByAttribute(theframe, "input", "name", "subject");
    var buttonSend = getElementsByAttribute(theframe, "div", "id", ":nd");

    //If we don't find the row with the Send button on it then wait for a second
    //and try again
    if (!sendrow) {
        window.setTimeout(putButtons, 1000);
        return;
    }

	addEventToButton(buttonSend, encryptBtnClick);
    var place = sendrow.parentNode.parentNode.parentNode;
    //Make sure we have not already added the buttons to this tag

    for (var k = 0; k < place.childNodes.length; k++) {
        knode = place.childNodes[k];
        if (knode.id == "encryptdiv") {
            return;
        }
    }

    var htmlString = '<tr><td colspan="3"><table id="q_and_a"><tr><td colspan="2">Type a secret qwestion and answer that can only be answered by the recepient</td></tr><tr><td>Question</td><td><input type="text" id="textAreaS" name="question" style="width:100%" /></td></tr>        <tr><td>Answer</td><td><input type="text" id="textAreaE" name="answer" style="width:100%" /></td></tr></table></td></tr><tr id="encryptdiv"><td class="eD">Encrypted</td><td><input type="checkbox" name="boom" id="boom" style="margin-right:5px;" /></td><td></td></tr>';

    bonzo(sendrow.parentNode.parentNode).after(htmlString);
    var boom = (new Selector('#boom').exec(sendrow.parentNode.parentNode.parentNode))[0];
    var qwestions = bonzo((new Selector('#q_and_a').exec(sendrow.parentNode.parentNode.parentNode))[0]);
    qwestions.hide();
    var listener = snack.listener({
        node: boom,
        event: 'click'
    }, function () {
        if (boom.checked) {
            
            qwestions.show();
        } else {
            qwestions.hide();
        }
    });

    //go back and recreate the buttons after any form inputs
    return;
}


window.onload = function() {

    putButtons();
};

function addEventToButton(button, fn) {
    if (button.addEventListener) {
        button.addEventListener("mousedown", fn, false);
    }
    else if (button.attachEvent) {
        button.attachEvent("onmouseup", fn);
    }
}

function encryptBtnClick(e) {
    var checkbox = getElementsByAttribute(theframe, "input", "name", "boom");
    if (checkbox && checkbox.checked) {
        var from = getElementsByAttribute(theframe, "select", "name", "from").value;
        var qwestion = getElementsByAttribute(theframe, "input", "name", "question").value;
        var answer = getElementsByAttribute(theframe, "input", "name", "answer").value;
        if (qwestion == "" || answer == "") {
			alert("Qwestion or answer field is empty");
			return false;
        }
        
        var textframe = getframe(theframe, ':nv');
        var textarea = (new Selector('body').exec(textframe))[0];
        var messageKey = Generate_key();
        var params = "messageKey=" + encodeURIComponent(messageKey);
        params += "&recepientId=" + encodeURIComponent(from);
        params += "&question=" + encodeURIComponent(qwestion);
        params += "&answer=" + encodeURIComponent(answer);

        //AJAX CALL
        var http = new XMLHttpRequest();
        var url = "http://localhost:8080/SafeMail/MessageController?action=send";
        http.onreadystatechange = function() {
            if (http.readyState == 4) {
                if (http.status == 200) {
                    var mailEncryptedText = "Your mail content is encrypted\n";
                    mailEncryptedText += "Please click on following link to access the mail - ";
                    mailEncryptedText += "http://localhost:8080/SafeMail/MessageController?action=getQuestion&messageId=" + http.responseText;
                    mailEncryptedText += "\n\nEncrypted mail is";
                    mailEncryptedText += "===================================\n\n";

                    mailEncryptedText += CryptoJS.AES.encrypt(answer, messageKey);
                    mailEncryptedText += "\n===================================";

                    textarea.innerHtml = mailEncryptedText;
                    alert("Encryption done successfully.");
                } else {
                    alert("Error while encryption.");
                }
            }
        };
        //Prepare prams for sending to server 


        http.async = false;
        //Send the request
        http.open("POST", url, true);
        http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        http.send(params);
    }
}     