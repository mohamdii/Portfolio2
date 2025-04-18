import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpEventType, HttpHandlerFn, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http';
import { tap } from 'rxjs';

// function loggingInterceptor(request :HttpRequest<unknown>, next: HttpHandlerFn) {
//   // const req = request.clone({
//   //   headers: request.headers.set('X-DEBUG', 'TESTING')
//   // });
//   console.log('[Outgoing request]', request);;
//   return next(request).pipe(
//     tap({
//       next: event => {
//         if (event.type === HttpEventType.Response) {
//           console.log('[Incoming response]', event.status, event.body);
//         }
//       },
//       error: err => {
//         console.error('[Error response]', err.status, err.message);
//       }
      
//     })
//   );
// }

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
