class Base {
    private locator;
    
    constructor(locator: string){
        this.locator = locator;
    }

    protected get() {
        return $(this.locator);
    }

    protected getSelectors() {
        return $$(this.locator);
    }

    protected append(locator) {
        return this.locator.concat(` ${locator}`);
    }
}

export default Base;