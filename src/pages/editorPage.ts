import BasePage from "./basePage";
import Button from "../components/base/Button";

class EditorPage extends BasePage {

    private headerCloseComponent: Button;

    public headerClose(): Button {
        this.headerCloseComponent = this.headerCloseComponent ||
            new Button("[data-qa='builder-close']");
        return this.headerCloseComponent;
    }

}

export default EditorPage;