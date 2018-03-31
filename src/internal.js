/*
 * Internal Helper Methods
 */

/**
 * Creates an HTML Form in memory, with named text inputs for the provided formData
 *
 * @memberof jsForms
 * @private
 * @param {string} action The url to use as a Form Action
 * @param {object} formData Keys/values to submit as named Form input fields
 * @returns {HTMLFormElement} The created form
 */
export const createFormWithData = (action, formData) => {
  //create a new hidden form to submit
  const form = document.createElement("form");
  form.action = action;
  form.method = "post";
  form.style.display = "none";

  //add the extra values in naive inputs
  for (const key in formData) {
    if (!formData.hasOwnProperty(key)) continue;
    const e = document.createElement("input");
    e.name = key;
    e.setAttribute("value", formData[key]);
    form.appendChild(e);
  }

  return form;
};

/**
 * Adds an in memory HTML Form to the DOM and immediately submits it
 *
 * @memberof jsForms
 * @private
 * @param {HTMLFormElement} form
 */
export const submitForm = form => {
  //add it to the DOM and submit
  document.querySelector("body").appendChild(form);
  form.submit();
};
