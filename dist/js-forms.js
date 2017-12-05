"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/*
 * js-forms
 */

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
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = new FormData(form).entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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