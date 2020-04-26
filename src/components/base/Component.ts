import Base from "./Base";
import {TIMEOUT} from "../../constants/timeout";

class Component extends Base {

    public waitForCount(count: number, timeout: number = TIMEOUT): boolean {
        browser.waitUntil(() =>
            this.count() === count,
            TIMEOUT,
            `Element list with ${this.count()} items after ${timeout}ms.`
        );
        return true;
    }

    public isVisibleCurrently() {
        return this.get().isDisplayed();
    }

    public isNotVisibleCurrently() {
        this.waitUntilNotVisible();
        return !this.get().isDisplayed();
    }

    public isVisible(timeout: number = TIMEOUT) {
        this.waitUntilVisible(timeout);
        return this.isVisibleCurrently();
    }

    public waitUntilVisible(timeout: number = TIMEOUT) {
        this.get().waitForDisplayed(timeout);
    }

    public waitUntilNotVisible(timeout: number= TIMEOUT) {
        this.get().waitForDisplayed(timeout, true);
    }

    public waitUntilPresent(timeout: number = TIMEOUT) {
        this.get().waitForExist(timeout);
    }

    public click(timeout: number = TIMEOUT) {
        this.waitUntilVisible(timeout);
        this.get().click();
    }

    public count() {
        this.waitUntilVisible();
        return this.getSelectors().length;
    }

    public hover() {
        this.waitUntilPresent();
        this.get().moveTo();
    }

    public scrollToView(){
        this.waitUntilPresent();
        this.get().scrollIntoView();
    }

    public selectAValue(dropDownText: string){
        this.get().click();
        this.get().selectByVisibleText(dropDownText);
    }
}

export default Component;