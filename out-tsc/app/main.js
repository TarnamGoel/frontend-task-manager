import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { authInterceptor } from './app/core/auth.interceptor';
const routes = [];
bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(withInterceptors([authInterceptor])),
        provideRouter(routes)
    ]
}).catch((error) => console.error(error));
//# sourceMappingURL=main.js.map