# Angular Template

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Additional Configuration

In order to obtain api-endpoint information within the local environment and avoid CORS errors when accessing SNOWSTORM and IMS endpoints a configuration similar to the following (very basic) should be used - 4200 is the default serve port for Angular CLI:

```
server {
        listen      8090;
        server_name localhost.ihtsdotools.org;
        location / {
            proxy_pass http://127.0.0.1:4200;
        }
        location /browser {
           proxy_pass https://dev-browser.ihtsdotools.org/snowstorm/snomed-ct;
        }
        location /snowstorm {
           proxy_pass https://dev-browser.ihtsdotools.org/snowstorm;
        }
        location /auth {
            proxy_pass https://dev-ims.ihtsdotools.org/api/account;
            proxy_set_header Accept "application/json";
        }
    }
```
Using local.ihtsdotools validates the IMS SSO cookie against the subdomain.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via Jest.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
