"use strict";

use(["/libs/wcm/foundation/components/utils/ResourceUtils.js"], function (ResourceUtils) {

    var data = {};
    var currentPagePath  = decodeURI(granite.resource.path);
    var nodes;
    if (currentPagePath) {
        if(currentPagePath) {
            currentPagePath = currentPagePath.substr(1);
        }

        nodes = currentPagePath.split('/');
        if(nodes.length > 0) {
            // var currentPageName = currentPage.getName();
            // var langIndex = nodes.indexOf(this.pageLang);
            if(nodes.length - 2 > 0) {
                var extNodes = nodes.length - 2;
                if (extNodes > 7) {
                    var updatedFolder6 = nodes[6].replace(/[_ -]/g, ' ');
                    var updatedFolder7 = nodes[7].replace(/[_ -]/g, ' ');
                    data.business = updatedFolder6;
                    data.section1 = updatedFolder6;
                    data.section2 = updatedFolder7;
                } else if (extNodes > 6) {
                    var updatedFolder6 = nodes[6].replace(/[_ -]/g, ' ');
					data.business = updatedFolder6;
                    data.section1 = updatedFolder6;
                } else if (extNodes > 5) {
					data.business = nodes[6];
                    data.section1 = nodes[6];
                }

            }

        }
    }

  return data;
});