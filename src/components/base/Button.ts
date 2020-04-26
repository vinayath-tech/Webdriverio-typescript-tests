import Text from "./Text";

class Button extends Text {
    public isEnabled() {
        return this.get().isEnabled();
    }
}

export default Button;