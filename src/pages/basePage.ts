class BasePage {
	protected open(path) {
		browser.maximizeWindow();
		browser.url(path);
	}
}

export default BasePage;