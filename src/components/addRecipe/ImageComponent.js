// @flow
import React from "react";
import { Field } from "redux-form";
import renderField from "./renderField.js";

const ImageComponent = () => {
  return (
    <div className="form-img">
      <input type="file" className="form-upload-img" name="sampleFile" id="upload-img" required />
      <Field
        className="alt"
        name="alt"
        component={renderField}
        type="text"
        label="Please add small description about image"
      />
    </div>
  );
};

export default ImageComponent;
