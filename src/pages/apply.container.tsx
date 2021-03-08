import * as React from "react";
import {useHistory} from "react-router-dom";
import {ApplicationEntity} from "../model/apply";
import {isQualifiedApplicant} from "../api/apiService";
import {ApplyComponent} from "./apply.component";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import createStyles from "@material-ui/styles/createStyles";
import makeStyles from "@material-ui/styles/makeStyles";
import {Redirect} from 'react-router';
import {getSessionCookie, setSessionCookie} from "../common/sessionContext";
import {NotificationComponent} from "../common";


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

export const ApplyContainer: React.FC<Props> = (props) => {
    const history = useHistory();
    const [isShowAlert, setShowAlert] = React.useState(false);
    const classes = useFormStyles();

    const applySucceeded = (isValid: boolean, login: ApplicationEntity) => {
        if (isValid) {
            history.push("/signup");
        } else {
            history.push("/unqualified");
            setShowAlert(true);
            setSessionCookie({"CRWD_UNQUALIFIED": true})
        }
    };

    const handleApply = (application: ApplicationEntity) => {
        isQualifiedApplicant(application).then((isValid) => applySucceeded(isValid, application));
    };
    const sessionCookie = getSessionCookie();
    if (sessionCookie.CRWD_UNQUALIFIED) {
        // previous qualification failed, can't retry
        console.log('redirecting');
        return <Redirect to="/unqualified"/>
    } else {

        return (
            <>
                <Card className={classes.card}>
                    <CardHeader title="Apply"/>
                    <CardContent>
                        <ApplyComponent onApply={handleApply}/>
                        <NotificationComponent
                            show={isShowAlert}
                            message="Invalid or missing entries, please check and try again"
                            onClose={() => setShowAlert(false)}
                        />
                    </CardContent>
                </Card>
            </>
        );
    }
}