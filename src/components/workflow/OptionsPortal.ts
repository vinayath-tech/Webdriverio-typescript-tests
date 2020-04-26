import Component from "../base/Component";
import Button from "../base/Button";

class OptionsPortal extends Component{

    private deleteOptionComponent: Button;

    public deleteOption(): Button {
        this.deleteOptionComponent = this.deleteOptionComponent ||
            new Button(this.append("[data-qa='delete-workflow-opt']"));
        return this.deleteOptionComponent;
    }
}

export default OptionsPortal;