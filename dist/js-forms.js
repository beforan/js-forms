(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.jsForms = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
var g,k="function"==typeof Object.defineProperties?Object.defineProperty:function(b,a,d){b!=Array.prototype&&b!=Object.prototype&&(b[a]=d.value)},l="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function n(){n=function(){};l.Symbol||(l.Symbol=p)}var p=function(){var b=0;return function(a){return"jscomp_symbol_"+(a||"")+b++}}();
function q(){n();var b=l.Symbol.iterator;b||(b=l.Symbol.iterator=l.Symbol("iterator"));"function"!=typeof Array.prototype[b]&&k(Array.prototype,b,{configurable:!0,writable:!0,value:function(){return u(this)}});q=function(){}}function u(b){var a=0;return v(function(){return a<b.length?{done:!1,value:b[a++]}:{done:!0}})}function v(b){q();b={next:b};b[l.Symbol.iterator]=function(){return this};return b}function w(b){q();n();q();var a=b[Symbol.iterator];return a?a.call(b):u(b)}
if(!window.FormData||!window.FormData.prototype.keys){var x=function(b,a,d){if(2>arguments.length)throw new TypeError("2 arguments required, but only "+arguments.length+" present.");return a instanceof Blob?[b+"",a,void 0!==d?d+"":"string"===typeof a.name?a.name:"Blob"]:[b+"",a+""]},y=function(b){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");return[b+""]},A=function(b){var a=w(b);b=a.next().value;a=a.next().value;b instanceof Blob&&(b=new File([b],a,{type:b.type,
lastModified:b.lastModified}));return b},B=window.FormData,C=window.XMLHttpRequest.prototype.send,D=window.Request&&window.fetch;n();var E=window.Symbol&&Symbol.toStringTag,F=new WeakMap,G=Array.from||function(b){return[].slice.call(b)};E&&(Blob.prototype[E]||(Blob.prototype[E]="Blob"),"File"in window&&!File.prototype[E]&&(File.prototype[E]="File"));try{new File([],"")}catch(b){window.File=function(a,d,c){a=new Blob(a,c);c=c&&void 0!==c.lastModified?new Date(c.lastModified):new Date;Object.defineProperties(a,
{name:{value:d},lastModifiedDate:{value:c},lastModified:{value:+c},toString:{value:function(){return"[object File]"}}});E&&Object.defineProperty(a,E,{value:"File"});return a}}var H=function(b){F.set(this,Object.create(null));if(!b)return this;b=w(G(b.elements));for(var a=b.next();!a.done;a=b.next())if(a=a.value,a.name&&!a.disabled)if("file"===a.type)for(var d=w(a.files),c=d.next();!c.done;c=d.next())this.append(a.name,c.value);else if("select-multiple"===a.type||"select-one"===a.type)for(d=w(G(a.options)),
c=d.next();!c.done;c=d.next())c=c.value,c.selected&&this.append(a.name,c.value);else"checkbox"===a.type||"radio"===a.type?a.checked&&this.append(a.name,a.value):this.append(a.name,a.value)};g=H.prototype;g.append=function(b,a,d){var c=F.get(this);c[b]||(c[b]=[]);c[b].push([a,d])};g["delete"]=function(b){delete F.get(this)[b]};g.entries=function(){function b(b,t,I){for(;;)switch(a){case 0:z=F.get(J);h=[];m=z;for(f in m)h.push(f);r=0;case 1:if(!(r<h.length)){a=3;break}f=h[r];if(f in m){a=4;break}a=
2;break;case 4:e=w(z[f]),c=e.next();case 5:if(c.done){a=7;break}d=c.value;a=8;return{value:[f,A(d)],done:!1};case 8:if(1!=b){a=9;break}a=-1;throw I;case 9:case 6:c=e.next();a=5;break;case 7:case 2:r++;a=1;break;case 3:a=-1;default:return{value:void 0,done:!0}}}var a=0,d,c,e,f,m,r,h,z,J=this,t={next:function(a){return b(0,a,void 0)},"throw":function(a){return b(1,void 0,a)},"return":function(){throw Error("Not yet implemented");}};q();t[Symbol.iterator]=function(){return this};return t};g.forEach=
function(b,a){for(var d=w(this),c=d.next();!c.done;c=d.next()){var e=w(c.value);c=e.next().value;e=e.next().value;b.call(a,e,c,this)}};g.get=function(b){var a=F.get(this);return a[b]?A(a[b][0]):null};g.getAll=function(b){return(F.get(this)[b]||[]).map(A)};g.has=function(b){return b in F.get(this)};g.keys=function(){function b(b,h,t){for(;;)switch(a){case 0:m=w(r),f=m.next();case 1:if(f.done){a=3;break}e=f.value;c=w(e);d=c.next().value;a=4;return{value:d,done:!1};case 4:if(1!=b){a=5;break}a=-1;throw t;
case 5:case 2:f=m.next();a=1;break;case 3:a=-1;default:return{value:void 0,done:!0}}}var a=0,d,c,e,f,m,r=this,h={next:function(a){return b(0,a,void 0)},"throw":function(a){return b(1,void 0,a)},"return":function(){throw Error("Not yet implemented");}};q();h[Symbol.iterator]=function(){return this};return h};g.set=function(b,a,d){F.get(this)[b]=[[a,d]]};g.values=function(){function b(b,h,t){for(;;)switch(a){case 0:m=w(r),f=m.next();case 1:if(f.done){a=3;break}e=f.value;c=w(e);c.next();d=c.next().value;
a=4;return{value:d,done:!1};case 4:if(1!=b){a=5;break}a=-1;throw t;case 5:case 2:f=m.next();a=1;break;case 3:a=-1;default:return{value:void 0,done:!0}}}var a=0,d,c,e,f,m,r=this,h={next:function(a){return b(0,a,void 0)},"throw":function(a){return b(1,void 0,a)},"return":function(){throw Error("Not yet implemented");}};q();h[Symbol.iterator]=function(){return this};return h};H.prototype._asNative=function(){for(var b=new B,a=w(this),d=a.next();!d.done;d=a.next()){var c=w(d.value);d=c.next().value;c=
c.next().value;b.append(d,c)}return b};H.prototype._blob=function(){for(var b="----formdata-polyfill-"+Math.random(),a=[],d=w(this),c=d.next();!c.done;c=d.next()){var e=w(c.value);c=e.next().value;e=e.next().value;a.push("--"+b+"\r\n");e instanceof Blob?a.push('Content-Disposition: form-data; name="'+c+'"; filename="'+e.name+'"\r\n',"Content-Type: "+(e.type||"application/octet-stream")+"\r\n\r\n",e,"\r\n"):a.push('Content-Disposition: form-data; name="'+c+'"\r\n\r\n'+e+"\r\n")}a.push("--"+b+"--");
return new Blob(a,{type:"multipart/form-data; boundary="+b})};n();q();H.prototype[Symbol.iterator]=function(){return this.entries()};H.prototype.toString=function(){return"[object FormData]"};E&&(H.prototype[E]="FormData");[["append",x],["delete",y],["get",y],["getAll",y],["has",y],["set",x]].forEach(function(b){var a=H.prototype[b[0]];H.prototype[b[0]]=function(){return a.apply(this,b[1].apply(this,G(arguments)))}});XMLHttpRequest.prototype.send=function(b){b instanceof H&&(b=b._blob(),this.setRequestHeader("Content-Type",
b.type));C.call(this,b)};if(D){var K=window.fetch;window.fetch=function(b,a){a&&a.body&&a.body instanceof H&&(a.body=a.body._blob());return K(b,a)}}window.FormData=H};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/*
* js-forms
*/

require('formdata-polyfill');

/** ASP.NET Core Verification Token Input Name */
var verificationTokenInputName = "__RequestVerificationToken";

/*
 * Helper Methods
 */

/**
 * Creates an HTML Form in memory, with named text inputs for the provided formData
 * @param {string} action The url to use as a Form Action
 * @param {object} formData keys/values to submit as named Form input fields
 */
var createFormWithData = function createFormWithData(action, formData) {
    //create a new hidden form to submit
    var form = document.createElement("form");
    form.action = action;
    form.method = "post";
    form.style.display = "none";

    //add the extra values in naive inputs
    for (var key in formData) {
        if (!formData.hasOwnProperty(key)) continue;
        var e = document.createElement("input");
        e.name = key;
        e.setAttribute("value", formData[key]);
        form.appendChild(e);
    }

    return form;
};

/**
 * Adds an in memory HTML Form to the DOM and immediately submits it
 * @param {HTMLFormElement} form 
 */
var submitForm = function submitForm(form) {
    //add it to the DOM and submit
    document.querySelector("body").appendChild(form);
    form.submit();
};

/*
 * Public API Methods
 */

/**
 * Get data from a given form in the DOM, wrap the fields in a formData object,
 * unless the keys are in separates, in which case keep them separate from the formData object
 * @param {string} formSelector A CSS selector to find the form in the DOM
 * @param {...string} separates a ...array of keys to keep named form inputs separate from the formData object
 */
var getFormDataAsObject = function getFormDataAsObject(formSelector) {
    for (var _len = arguments.length, separates = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        separates[_key - 1] = arguments[_key];
    }

    var form = document.querySelector(formSelector);
    var result = { formData: {} };
    var formData = new FormData(form);

    // for(const key in formData) {
    //     if(!formData.hasOwnProperty(key)) continue;
    //     if (separates.includes(key)) //separate out the requested keys
    //         result[key] = formData.get(key);
    //     else result.formData[key] = formData.get(key); //else chuck them into the formData object
    // }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = new FormData(form)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ref = _step.value;

            var _ref2 = _slicedToArray(_ref, 2);

            var key = _ref2[0];
            var value = _ref2[1];

            if (separates.includes(key)) //separate out the requested keys
                result[key] = value;else result.formData[key] = value; //else chuck them into the formData object
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return result;
};

/**
 * Post a Form with the form inputs wrapped into a single json object, submitted as a single named string
 * Any extraValues are submitted in addition to the json string
 * @param {string} action The url to use as a Form Action
 * @param {string} jsonFieldName The name to give the input field containing the json string
 * @param {object} formData The object to turn into the json string value
 * @param {object} extraValues extra keys/values that each get their own input field in the final form
 */
var postFormDataAsJson = function postFormDataAsJson(action, jsonFieldName, formData, extraValues) {
    var form = createFormWithData(action, extraValues);

    //add the json data item
    var json = document.createElement("input");
    json.name = jsonFieldName;
    json.setAttribute("value", JSON.stringify(formData));
    form.appendChild(json);

    //add it to the DOM and submit
    submitForm(form);
};

/**
 * Create and submit an in memory form with the provided formData object as input fields
 * @param {string} action 
 * @param {object} formData 
 */
var postObjectAsFormData = function postObjectAsFormData(action, formData) {
    var form = createFormWithData(action, formData);
    submitForm(form);
};

module.exports = {
    getFormDataAsObject: getFormDataAsObject,
    postFormDataAsJson: postFormDataAsJson,
    postObjectAsFormData: postObjectAsFormData,
    constants: {
        verificationTokenInputName: verificationTokenInputName
    }
};

},{"formdata-polyfill":1}]},{},[2])(2)
});