import { BasePage } from "./base.page";

export class HomePage extends BasePage{
    
    constructor(container: JQuery, templateUrl: string, styleUrl?: string) {
        super(container, templateUrl, styleUrl);
    }
}