import { IWidget } from "../interfaces";
import { createWidgetByType, WidgetType } from "./widget.service";

export function getProjectHashMap(projectWidget: IWidget) {
    const projectMap = new Map();
    const projectStack = [projectWidget];

    while(projectStack.length > 0) {
        const currentWidget = projectStack.pop();
        if(currentWidget) {
            projectMap.set(currentWidget.wid, currentWidget);
        }
        currentWidget?.children.forEach(widget => projectStack.push(widget));
    }
    return projectMap;
}

export function createDefaultProject() {
    const nextPage = createWidgetByType(WidgetType.PAGE);
    const nextNavigator = createWidgetByType(WidgetType.NAVIGATOR);
    const nextPageholder = createWidgetByType(WidgetType.PAGEHOLDER);
    const nextWebsite = createWidgetByType(WidgetType.WEBSITE);
    const nextProject = createWidgetByType(WidgetType.PROJECT);
    nextPageholder.children.push(nextPage);
    nextWebsite.children.push(nextNavigator);
    nextWebsite.children.push(nextPageholder);
    nextProject.children.push(nextWebsite);
    return nextProject;
}
