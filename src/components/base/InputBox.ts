import Component from "./Component";

class InputBox extends Component {

    public getValue(): string {
        this.waitUntilVisible();
        return this.get().getValue();
    }

    public setValue(value: string) {
        this.waitUntilVisible();
        this.get().setValue(value);
    }
}

export default InputBox;