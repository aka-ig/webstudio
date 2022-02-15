import { IWidget, IWidgetBlueprint } from "../../interfaces";

export interface IComponentFormEditorFieldProps {
    widget: IWidget;
    attrKey: string;
    attrValue: any;
    blueprint: IWidgetBlueprint;
    inline?: boolean;
    onChange?: VoidFunction;
}
