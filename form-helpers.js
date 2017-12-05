// Form related constants
const verificationTokenInputName = "__RequestVerificationToken";


// Methods

let getFormDataAsObject = (formSelector, ...separates) => {
    const form = document.querySelector(formSelector);
    const result = { formData: {} };
    for (let [key, value] of new FormData(form).entries()) {
        if (separates.includes(key)) //separate out the requested keys
            result[key] = value;
        else result.formData[key] = value; //else chuck them into the formData object
    }

    return result;
};

let postFormDataAsJson = (action, jsonFieldName, formData, extraValues) => {
    const form = createFormWithData(action, extraValues);
    
    //add the json data item
    const json = document.createElement("input");
    json.name = jsonFieldName;
    json.setAttribute("value", JSON.stringify(formData));
    form.appendChild(json);

    //add it to the DOM and submit
    submitForm(form);
};

let postObjectAsFormData = (action, formData) => {
    const form = createFormWithData(action, formData);
    submitForm(form);
}

let createFormWithData = (action, formData) => {
    //create a new hidden form to submit
    const form = document.createElement("form");
    form.action = action;
    form.method = "post";
    form.style.display = "none";

    //add the extra values in naive inputs
    for (let key in formData) {
        if (!formData.hasOwnProperty(key)) continue;
        const e = document.createElement("input");
        e.name = key;
        e.setAttribute("value", formData[key]);
        form.appendChild(e);
    }

    return form;
}

let submitForm = form => {
    //add it to the DOM and submit
    document.querySelector("body").appendChild(form);
    form.submit();
}

module.exports = {
    getFormDataAsObject: getFormDataAsObject,
    postFormDataAsJson: postFormDataAsJson,
    postObjectAsFormData: postObjectAsFormData,
    constants: {
        verificationTokenInputName: verificationTokenInputName
    }
};