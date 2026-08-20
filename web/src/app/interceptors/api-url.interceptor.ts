import { type HttpInterceptorFn } from "@angular/common/http";

export const apiUrlInterceptor: HttpInterceptorFn = (req, next) => {
    if (req.url.startsWith("http")) {
        return next(req);
    }

    const apiRequest = req.clone({
        url: `http://localhost:3000/api${req.url}`,
    });

    return next(apiRequest);
};
