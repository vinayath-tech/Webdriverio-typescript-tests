import Component from "../base/Component";

class AvatarListMenu extends Component{

    private logOutComponent: Component;

    public logOut(): Component {
        this.logOutComponent = this.logOutComponent ||
            new Component(this.append("li:nth-child(3)"));
        return this.logOutComponent;
    }
}

export default AvatarListMenu;