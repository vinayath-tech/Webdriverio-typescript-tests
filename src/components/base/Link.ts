import Component from "./Component";

class Link extends Component {
    private hrefAttr: string;

    public href(): string {
       return this.get().getAttribute('href');
    }
}

export default Link;