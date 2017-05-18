import { CustomControl } from './CustomControl';
import { IControl } from '../IControl';

describe("CustomControl", () => {

    it("should say 'Hello world!'", () => {

        const customControl: IControl = new CustomControl();
        customControl.text = "Hello world!";

        const root: HTMLElement = document.createElement('DIV');
        customControl.appendTo(root);

        const textContent: string = root.firstChild.textContent;

        expect(textContent).toEqual("Hello world!");
    });
});