var SlingSettingsService = Packages.org.apache.sling.settings.SlingSettingsService;
 
use(function () {
    var runmodesObj = {};
    var runmodesSet = sling.getService(SlingSettingsService).getRunModes();
    var iterator = runmodesSet.iterator();
    
    while (iterator.hasNext()) {
        runmodesObj[iterator.next()] = true;
    }
    
    return {
        runmodes: runmodesObj
    }
});