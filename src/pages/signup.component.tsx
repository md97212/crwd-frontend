import * as React from "react";
import { ApplicationEntity, createEmptyApplication } from "../model/apply";
import { TextFieldComponent } from "../common";
import { Form } from "formik";
import createStyles from "@material-ui/styles/createStyles";
import makeStyles from "@material-ui/styles/makeStyles";
import Button from "@material-ui/core/Button";
import { signupFormValidation } from "./signup.validation";
import { Formik } from "formik";

interface PropsForm {
  onSignup: (signup: ApplicationEntity) => void;
}

// https://material-ui.com/styles/api/#makestyles-styles-options-hook
const useFormStyles = makeStyles((theme) =>
  createStyles({
    formContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    card: {
      maxWidth: 400,
      margin: "0 auto",
    },
  })
);

export const SignupComponent: React.FC<PropsForm> = (props) => {
  const classes = useFormStyles();
  const { onSignup } = props;

  return (
    <Formik
      onSubmit={onSignup}
      initialValues={createEmptyApplication()}
      validate={signupFormValidation.validateForm}
    >
      {() => (
        <Form>
          <div className={classes.formContainer}>
            <TextFieldComponent label="Name" name="login" />
            <TextFieldComponent
              label="Password"
              type="password"
              name="password"
            />
              <TextFieldComponent
                  label="Confirm Password"
                  type="password"
                  name="password2"
              />
            <Button type="submit" variant="contained" color="primary">
              Signup
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
