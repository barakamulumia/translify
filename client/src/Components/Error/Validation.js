import React, { Fragment } from "react";

import { ErrorMessage } from "./validation.elements";

const RenderErrorMessage = ({ msg }) => (
  <ErrorMessage variant="caption">{msg}</ErrorMessage>
);

export default function ValidationError({
  errors,
  fieldName,
  patternErrorMsg,
  requiredErrorMsg,
  lengthErrorMsg,
}) {
  return (
    <Fragment>
      {errors[fieldName]?.type === "required" ? (
        <RenderErrorMessage msg={requiredErrorMsg} />
      ) : errors[fieldName]?.type === "pattern" ? (
        <RenderErrorMessage msg={patternErrorMsg} />
      ) : errors[fieldName]?.type === "minLength" ? (
        <RenderErrorMessage msg={lengthErrorMsg} />
      ) : (
        ""
      )}
    </Fragment>
  );
}
