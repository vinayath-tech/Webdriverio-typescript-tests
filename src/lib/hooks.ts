import LoginPage from "../pages/loginPage";
import WorkFlowPage from "../pages/workflowPage";
import { loginData } from "../testdata/data";

const login = () => {
    const loginPage = new LoginPage();
    const loginPanel = loginPage.loginPanel();
    
    loginPage.open();
    loginPanel.emailInput().setValue(loginData.email);
    loginPanel.passwordInput().setValue(loginData.password);
    loginPanel.submitBtn().click();
}

const logout = () => {
    const workflowPage = new WorkFlowPage();

    workflowPage.avatarIcon().click();
    workflowPage.avatarListMenu().logOut().click();
}

export { login, logout };