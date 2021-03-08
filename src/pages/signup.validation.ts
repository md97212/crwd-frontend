import { ValidationSchema, Validators } from "@lemoncode/fonk";
import { createFormikValidation } from "@lemoncode/fonk-formik";

const validationSchema: ValidationSchema = {
  field: {
    login: [Validators.required],
    password: [Validators.required],
    password2: [Validators.required],
  },
};

export const signupFormValidation = createFormikValidation(validationSchema);
