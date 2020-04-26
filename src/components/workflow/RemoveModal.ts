import Component from "../base/Component";
import Text from "../base/Text";
import InputBox from "../base/InputBox";
import Button from "../base/Button";

class RemoveModal extends Component {

    private removeTextComponent: Text;
    private confirmDelInputComponent: InputBox;
    private confirmDeleteBtnComponent: Button;

    public verifyRemoveText(): Text {
        this.removeTextComponent =  this.removeTextComponent ||
            new Text(this.append("span p"));
        return this.removeTextComponent;
    }

    public confirmDelInput(): InputBox {
        this.confirmDelInputComponent = this.confirmDelInputComponent ||
            new InputBox(this.append("[name='workflow-remove']"));
        return this.confirmDelInputComponent;
    }

    public confirmDeleteBtn(): Button {
        this.confirmDeleteBtnComponent = this.confirmDeleteBtnComponent ||
            new Button(this.append("[data-qa='delete-workflows-submit']"));
        return this.confirmDeleteBtnComponent;
    }
}

export default RemoveModal;