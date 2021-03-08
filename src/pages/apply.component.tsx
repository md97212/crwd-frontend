import * as React from "react";
import {ApplicationEntity, createEmptyApplication} from "../model/apply";
import {TextFieldComponent} from "../common";
import {Form, Formik} from "formik";
import createStyles from "@material-ui/styles/createStyles";
import makeStyles from "@material-ui/styles/makeStyles";
import Button from "@material-ui/core/Button";
import {applyFormValidation} from "./apply.validation";

interface PropsForm {
    onApply: (application: ApplicationEntity) => void;
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

export const ApplyComponent: React.FC<PropsForm> = (props) => {
    const classes = useFormStyles();
    const {onApply} = props;

    return (
        <Formik
            onSubmit={onApply}
            initialValues={createEmptyApplication()}
            validate={applyFormValidation.validateForm}
        >
            {() => (
                <Form>
                    <div className={classes.formContainer}>
                        <TextFieldComponent label="Investment Amount" name="amount"/>
                        <TextFieldComponent
                            label="Investment Type"
                            name="type"
                        />
                        <TextFieldComponent
                            label="Total Net Worth"
                            name="netWorth"
                        />
                        <TextFieldComponent
                            label="Estimated Yearly Income"
                            name="yearlyIncome"
                        />
                        <TextFieldComponent
                            label="Estimated Credit Score"
                            name="creditScore"
                        />
                        <Button type="submit" variant="contained" color="primary">
                            Apply
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};
