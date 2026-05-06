export const authInterceptor = (request, next) => {
    const token = localStorage.getItem('team-task-token');
    if (!token) {
        return next(request);
    }
    return next(request.clone({
        setHeaders: {
            Authorization: `Bearer ${token}`
        }
    }));
};
//# sourceMappingURL=auth.interceptor.js.map