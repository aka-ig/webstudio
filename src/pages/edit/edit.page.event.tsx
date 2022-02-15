import { Subject } from 'rxjs';

const widgetAttrSubject = new Subject();

export const widgetAttrService = {
    notify: (wid: string) => widgetAttrSubject.next(wid),
    listen: () => widgetAttrSubject.asObservable()
};

// export interface IWSEvent<T> {
//     subscriptions: Array<(value: T) => VoidFunction>;
//     subscribe: (handler: Function) => VoidFunction;
//     notify: (value?: T) => void;
// }

// export class WSEvent<T> implements IWSEvent<T> {

//     subscriptions: Array<(value: T) => VoidFunction> = [];

//     constructor() { }

//     subscribe(handler: Function) {
//         const sub = (value: T) => handler(value);
//         this.subscriptions.push(sub);
//         return () => {
//             this.subscriptions = this.subscriptions.filter(s => s !== sub);
//         }
//     }

//     notify(value: T) {
//         this.subscriptions.forEach(sub => sub(value));
//     }
// }

// export const widgetAttrChangeEvent = new WSEvent<string>();
