import WorkFlowPage from "../pages/workflowPage";
import EditorPage from "../pages/editorPage";
import { login, logout } from "../lib/hooks";
import { workflowData } from "../testdata/data";
import { expect } from "chai";

describe("Workflow feature", () => {
	
	describe("Create and delete a new workflow successfully", () => {
		const workflowPage = new WorkFlowPage();

		before("Login to the application",()=>{
			login();
		})

		it("When I successfully create a new workflow", () => {
			const workFlowpanel = workflowPage.workFlowPanel();

			workflowPage.newWorkFlowBtn().click();
			workFlowpanel.workFlowName().setValue(workflowData.title);
			workFlowpanel.nextButton().click();
			workFlowpanel.alertTrigger().click();
			expect(workFlowpanel.createWorkFlowBtn().isEnabled()).to.equal(true);
			
			workFlowpanel.createWorkFlowBtn().click();
		})
	
		it("Then I should be able to see the workflow in dashboard", () => {
			const editorPage = new EditorPage();

			editorPage.headerClose().isVisible();
			editorPage.headerClose().click();
			expect(workflowPage.title().getText()).to.equal(workflowData.title);
		})
	
		it("When I delete the workflow the previously created workflow", () => {
			
			workflowPage.menuBtn().click();
			workflowPage.optionsPortal().deleteOption().click();

			const expectedRemoveText = workflowPage.removeModal().verifyRemoveText().getText();
			expect(expectedRemoveText).to.contains(workflowData.title);

			workflowPage.removeModal().confirmDelInput().setValue("DELETE");
			expect(workflowPage.removeModal().confirmDeleteBtn().isEnabled()).to.equal(true);
			workflowPage.removeModal().confirmDeleteBtn().click();
		})
	
		it("Then the workflow should be removed from the application", () => {
			
			expect(workflowPage.title().isNotVisibleCurrently()).to.equal(true);
		})

		after("Logout from the application",()=>{
			logout();
		})
	})
})