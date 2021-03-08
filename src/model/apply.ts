export interface ApplicationEntity {
    // probably better as different entities
    type: string;
    amount: number;
    netWorth: number;
    yearlyIncome: number;
    creditScore: number;
    login: string;
    password: string;
    password2: string;
}

export const createEmptyApplication = (): ApplicationEntity => ({
    type: "",
    amount: null,
    netWorth: null,
    yearlyIncome: null,
    creditScore: null,
    login: "",
    password: "",
    password2: ""
});