import Component from "../base/Component";
import InputBox from "../base/InputBox";
import Button from "../base/Button";

class WorkFlowPanel extends Component {
    private workFlowNameComponent: InputBox;
    private nextBtnComponent: Button;
    private alertTriggerComponent: Button;
    private createWorkFlowBtnComponent: Button;

    public workFlowName() : InputBox {
        this.workFlowNameComponent = this.workFlowNameComponent ||
            new InputBox(this.append("[name='new-workflow-name']"));
        return this.workFlowNameComponent;
    } 

    public nextButton(): Button {
        this.nextBtnComponent = this.nextBtnComponent ||
            new Button(this.append("[data-qa='create-workflow-page-one-next-button']"));
        return this.nextBtnComponent;
    }

    public alertTrigger(): Button {
        this.alertTriggerComponent = this.alertTriggerComponent ||
            new Button(this.append("[data-qa='ConnectorTile: Alert']"));
        return this.alertTriggerComponent;
    }

    public createWorkFlowBtn(): Button {
        this.createWorkFlowBtnComponent = this.createWorkFlowBtnComponent ||
            new Button(this.append("[data-qa='create-workflow-page-two-next-button']"));
        return this.createWorkFlowBtnComponent;
    }

    


}

export default WorkFlowPanel;