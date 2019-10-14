

export abstract class BasePage {
    private _pageContainer: JQuery;
    private _templateUrl: string;
    private _styleUrl: string
    constructor(pageContainer: JQuery, templateUrl: string, styleUrl?: string) {
        this._pageContainer = pageContainer;
        this._templateUrl = templateUrl;
        this._styleUrl = styleUrl;
    }

    render() {
        $.ajax({
            url: this._templateUrl,
            dataType: "html",
            crossDomain: false,
        }).done((content) => {
            $(this._pageContainer).html(content);
        });

    }
}