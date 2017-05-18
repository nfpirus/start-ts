import { IControl } from '../IControl';

export class CustomControl implements IControl {
    private _htmlElement: HTMLElement;

    constructor() {
        this._htmlElement = document.createElement('DIV');
    }

    private _text: string;
    public get text(): string {
        return this._text;
    }

    public set text(value: string) {
        this._text = value;
        this._htmlElement.innerText = value;
    }

    public appendTo(root: HTMLElement): void {
        root.appendChild(this._htmlElement);
    }
}