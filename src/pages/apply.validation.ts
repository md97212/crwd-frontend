import { ValidationSchema, Validators } from "@lemoncode/fonk";
import { createFormikValidation } from "@lemoncode/fonk-formik";

const validationSchema: ValidationSchema = {
  field: {
    amount: [Validators.required],
    type: [Validators.required],
    netWorth: [Validators.required],
    yearlyIncome: [Validators.required],
    creditScore: [Validators.required] // todo add range check
  },
};

export const applyFormValidation = createFormikValidation(validationSchema);
