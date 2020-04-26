import BasePage from "./basePage"
import LoginPanel from "../components/login/LoginPanel";

class LoginPage extends BasePage {
    
    private loginPanelComponent: LoginPanel;

    public open(){
        super.open("/");
    }

    public loginPanel(): LoginPanel {
        this.loginPanelComponent = this.loginPanelComponent ||
            new LoginPanel("form");
        return this.loginPanelComponent;
    }
}

export default LoginPage;