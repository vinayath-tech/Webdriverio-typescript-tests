import BasePage from "./basePage";
import Button from "../components/base/Button";
import Text from "../components/base/Text";
import WorkFlowPanel from "../components/workflow/WorkFlowPanel";
import OptionsPortal from "../components/workflow/OptionsPortal";
import RemoveModal from "../components/workflow/RemoveModal";
import AvatarListMenu from "../components/workflow/AvatarListMenu";
import Component from "../components/base/Component";

class WorkFlowPage extends BasePage {

    private newWorkFlowBtnComponent: Button;
    private workFlowPanelComponent: WorkFlowPanel;
    private titleComponent: Text;
    private optionsPortalComponent: OptionsPortal;
    private menuBtnComponent: Button;
    private removeModalComponent: RemoveModal;
    private avatarIconComponent: Component;
    private avatarListMenuComponent: AvatarListMenu;


    public newWorkFlowBtn(): Button {
        this.newWorkFlowBtnComponent = this.newWorkFlowBtnComponent ||
            new Button("[data-qa='create-workflow-btn']");
        return this.newWorkFlowBtnComponent;
    }

    public workFlowPanel(): WorkFlowPanel {
        this.workFlowPanelComponent = this.workFlowPanelComponent ||
            new WorkFlowPanel("[data-qa='create-new-workflow-modal']");
        return this.workFlowPanelComponent;
    }

    public title(): Text {
        this.titleComponent = this.titleComponent ||
            new Text("[data-qa='workflow-title']");
        return this.titleComponent;
    }

    public menuBtn(): Button {
        this.menuBtnComponent = this.menuBtnComponent ||
            new Button("[data-qa='options-menu']:nth-child(2)");
        return this.menuBtnComponent;
    }

    public optionsPortal(): OptionsPortal {
        this.optionsPortalComponent = this.optionsPortalComponent ||
            new OptionsPortal("#portal-undefined");
        return this.optionsPortalComponent;
    }

    public removeModal(): RemoveModal {
        this.removeModalComponent = this.removeModalComponent ||
            new RemoveModal("[data-qa='remove-workflow-modal']");
        return this.removeModalComponent;
    }

    public avatarIcon(): Component {
        this.avatarIconComponent = this.avatarIconComponent ||
            new Component("[data-qa='avatar']");
        return this.avatarIconComponent;
    }

    public avatarListMenu(): AvatarListMenu {
        this.avatarListMenuComponent = this.avatarListMenuComponent ||
            new AvatarListMenu("#portal-avatarMenu");
        return this.avatarListMenuComponent;
    }
}

export default WorkFlowPage;