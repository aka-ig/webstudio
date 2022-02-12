import { useMemo } from "react";
import { IWidget, WidgetType } from "../../interfaces";
import { getProjectHashMap } from "../../services/project.service";

export function useProject(project: IWidget) {
    const projectMap = useMemo(() => getProjectHashMap(project), [project]);
    const website = useMemo(() => project.children.find(w => w.type === WidgetType.WEBSITE), [project]);
    return { website, projectMap };
}
