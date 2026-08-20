import { type HttpInterceptorFn } from "@angular/common/http";

export const apiUrlInterceptor: HttpInterceptorFn = (req, next) => {
    if (req.url.startsWith("http")) {
        return next(req);
    }

    // Use the page's own hostname so the API is reachable from other devices on the network, not just localhost.
    const apiRequest = req.clone({
        url: `http://${window.location.hostname}:3000/api${req.url}`,
    });

    return next(apiRequest);
};
