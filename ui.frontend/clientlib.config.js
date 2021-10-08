
    // path to the clientlib root folder (output)
const ACCOR_ROOT = './../ui.apps/src/main/content/jcr_root/apps/aem-accor-foundation/clientlibs';

module.exports = {
    // default working directory (can be changed per 'cwd' in every asset option)
    context: __dirname,

    libs: [
        {
			path : ACCOR_ROOT,            
			name: "clientlib-dependencies",
            allowProxy: true,
            categories: ["aem-accor-foundation.dependencies"],
            serializationFormat: "xml",
            cssProcessor : ["default:none", "min:none"],
            jsProcessor: ["default:none", "min:none"],
            assets: {
                js: [
                    "dist/clientlib-site/js/dependencies.*.js",
                ],
                css: [
                    "dist/clientlib-site/css/dependencies.*.css"
                ]
            }
        },
        {
			path : ACCOR_ROOT,            
			name: "clientlib-site",
            allowProxy: true,
            categories: ["aem-accor-foundation.site"],
            dependencies: ["aem-accor-foundation.dependencies"],
            serializationFormat: "xml",
            cssProcessor : ["default:none", "min:none"],
            jsProcessor: ["default:none", "min:none"],
            assets: {
                js: [
                    "dist/clientlib-site/js/vendors~site.*.js",
                    "dist/clientlib-site/js/site.*.js"
                ],
                css: [
                    "dist/clientlib-site/css/vendors~site.*.css",
                    "dist/clientlib-site/css/site.*.css"
                ],
                resources: {
                    cwd: "./dist/clientlib-site/resources",
                    flatten: false,
                    files: ["**/*.*"]
                }
            }
        },
        {
            path: ACCOR_ROOT,
            name: 'contexthub/stores/visitedpage',
            allowProxy: true,
            categories: ['contexthub.store.accor.visitedpage'],
            serializationFormat: 'xml',
            assets: {
                js: [
                    'dist/clientlib-site/js/visitedpage.*.js'
                ]
           }
        }
    ]
};
