/*
 * Public API Methods
 */

/**
 * Get data from a given form in the DOM, wrap the fields in a formData object,
 * unless the keys are in separates, in which case keep them separate from the formData object
 *
 * @memberof jsForms
 * @param {string} formSelector A CSS selector to find the form in the DOM
 * @param {...string} separates a ...array of keys to keep named form inputs separate from the formData object
 * @return {object} An object containing keys and values for `separates`
 * and all the other data of the specified form wrapped in a `formData` property.
 */
export const getFormDataAsObject = (formSelector, ...separates) => {
  const form = document.querySelector(formSelector);
  const result = { formData: {} };

  for (let [key, value] of new FormData(form)) {
    if (separates.includes(key))
      //separate out the requested keys
      result[key] = value;
    else result.formData[key] = value; //else chuck them into the formData object
  }

  return result;
};

/**
 * Post a Form with the form inputs wrapped into a single json object, submitted as a single named string
 * Any extraValues are submitted in addition to the json string
 * 
 * @memberof jsForms
 * @param {string} action The url to use as a Form Action
 * @param {string} jsonFieldName The name to give the input field containing the json string
 * @param {object} formData The object to turn into the json string value
 * @param {object} extraValues extra keys/values that each get their own input field in the final form
 */
export const postFormDataAsJson = (action, jsonFieldName, formData, extraValues) => {
  const form = createFormWithData(action, extraValues);

  //add the json data item
  const json = document.createElement("input");
  json.name = jsonFieldName;
  json.setAttribute("value", JSON.stringify(formData));
  form.appendChild(json);

  //add it to the DOM and submit
  submitForm(form);
};

/**
 * Create and submit an in memory form with the provided formData object as input fields
 * 
 * @memberof jsForms
 * @param {string} action
 * @param {object} formData
 */
export const postObjectAsFormData = (action, formData) => {
  const form = createFormWithData(action, formData);
  submitForm(form);
};