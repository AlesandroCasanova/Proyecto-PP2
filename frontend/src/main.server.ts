import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

export default function () {
  return bootstrapApplication(App, appConfig);
}
