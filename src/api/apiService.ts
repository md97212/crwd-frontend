import {ApplicationEntity} from "../model/apply";

// Mock API
export const isQualifiedApplicant = (application: ApplicationEntity): Promise<boolean> =>
    new Promise((resolve) => {
        setTimeout(() => {
            // mock call
            resolve(
                application.creditScore > 600
                && application.amount < application.yearlyIncome / 5
                && application.amount < application.netWorth * .03
                && application.amount < 9000000
            );
        }, 200);
    });

export const isValidLogin = (application: ApplicationEntity): Promise<boolean> =>
    // checks serverside for duplicate login etc
    // todo check for valid email address
    new Promise((resolve) => {
        setTimeout(() => {
            // mock call, add other special char checking etc
            resolve(
                application.password2 === application.password
                && (application.password.includes('*') || application.password.includes('!') || application.password.includes('&'))
                && application.password.length > 8
            );
        }, 200);
    });
