import Component from "./Component";

class Text extends Component {

    public getText() {
        this.waitUntilVisible();
        return this.get().getText();
    }

    public textContains(text: string): boolean {
        return this.getText().includes(text);
    }

    public textEquals(text: string): boolean {
        return this.getText() === text;
    }
}

export default Text;