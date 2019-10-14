interface IRoute {
    hash: string,
    action: (e?: any) => void
}

export class Router {
    private _defaultRoute: IRoute;
    private _routeList: IRoute[];
    constructor(defaultRoute: IRoute) {
        this._defaultRoute = defaultRoute;
        this._routeList=[];
    }
    public add(route: IRoute) {
        this._routeList.push(route);
    }
    public start() {
        $(window).on('hashchange', () => {
            let route = $.grep(this._routeList, function (e) { return e.hash === location.hash });
            if (route.length > 1) {
                throw new Error("More than one route found");
            }
            if (route.length===1) {
                route[0].action();
            }
            else {
                this._defaultRoute.action();
            }          
        }).trigger('hashchange');
    }
}