// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,

    /*apiBaseUrl: "http://internalmail.com/ea/api/api/",
    graphicsBaseUrl: "http://internalmail.com/ea/api/uploads/",
    fileUploadUrl: "http://internalmail.com/ea/api/uploader",
	websiteUrl: "http://localhost:4200/",*/

    fileUploadUrl: "http://ea.therabidway.com/staging/api/uploader", 
    apiBaseUrl: "http://ea.therabidway.com/staging/api/api/",
    graphicsBaseUrl: "http://ea.therabidway.com/staging/api/uploads/",
    websiteUrl: "http://ea.therabidway.com/staging/ui/",
    
    /*fileUploadUrl: "http://ea.rabidminds.com/staging/api/uploader", 
    apiBaseUrl: "http://ea.rabidminds.com/staging/api/api/",
    graphicsBaseUrl: "http://ea.rabidminds.com/staging/api/uploads/",
    websiteUrl: "http://ea.rabidminds.com/staging/ui/",*/

    /*fileUploadUrl: "https://eacode.rabidminds.com/api/uploader", 
    apiBaseUrl: "https://eacode.rabidminds.com/api/api/",
    graphicsBaseUrl: "https://eacode.rabidminds.com/api/uploads/",
    websiteUrl: "https://eacode.rabidminds.com/ui/",*/
	 
};
