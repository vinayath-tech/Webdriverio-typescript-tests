import Component from "../base/Component";
import InputBox from "../base/InputBox";
import Button from "../base/Button";

class LoginPanel extends Component {
    private emailInputComponent: InputBox;
    private passwordInputComponent: InputBox;
    private submitBtnComponent: Button;

    public emailInput(): InputBox {
        this.emailInputComponent = this.emailInputComponent ||
           new InputBox(this.append("[name='username']"));
        return this.emailInputComponent;
    }

    public passwordInput(): InputBox {
        this.passwordInputComponent = this.passwordInputComponent ||
            new InputBox(this.append("[name='password']"));
        return this.passwordInputComponent;
    }

    public submitBtn(): Button {
        this.submitBtnComponent = this.submitBtnComponent ||
            new Button(this.append("[type='submit']"));
        return this.submitBtnComponent;
    }
}

export default LoginPanel;