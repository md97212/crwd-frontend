import * as React from "react";
import {useHistory} from "react-router-dom";
import {ApplicationEntity} from "../model/apply";
import {SignupComponent} from "./signup.component";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import createStyles from "@material-ui/styles/createStyles";
import makeStyles from "@material-ui/styles/makeStyles";
import {NotificationComponent} from "../common";
import {isValidLogin} from "../api/apiService";


// https://material-ui.com/styles/api/#makestyles-styles-options-hook
const useFormStyles = makeStyles((theme) =>
    createStyles({
        card: {
            maxWidth: 400,
            margin: "0 auto",
        },
    })
);

interface Props {
}

export const SignupContainer: React.FC<Props> = (props) => {
    const history = useHistory();
    const [isShowAlert, setShowAlert] = React.useState(false);
    const classes = useFormStyles();

    const signupSucceeded = (isValid: boolean) => {
        if (isValid) {
            history.push("/home");
        } else {
            setShowAlert(true);
        }
    };

    const handleSignup = (signup: ApplicationEntity) => {
        isValidLogin(signup).then((isValid) => signupSucceeded(isValid));
    };

    return (
        <>
            <Card className={classes.card}>
                <CardHeader title="Signup"/>
                <CardContent>
                    <SignupComponent onSignup={handleSignup}/>
                    <NotificationComponent
                        show={isShowAlert}
                        message="Invalid login or password. Passwords must match and contain at least one special character ('*', '&', '!')"
                        onClose={() => setShowAlert(false)}
                    />
                </CardContent>
            </Card>
        </>
    );
};
