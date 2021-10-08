ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.datetime.kernel - visited.page.js');
(function($) {
    'use strict';

    function VisitedStore(name, config) {
        this.init(name, config);
        this.config = $.extend({}, this.config, config);
        this.readData();
    }
	ContextHub.Utils.inheritance.inherit(VisitedStore, ContextHub.Store.PersistedStore);

	 VisitedStore.prototype.readData = function() {
        this.setItem('target-unit', 'Business');
	 }

	 /**
	 * Resets store
	 * @param {Boolean} keepRemainingData
	 */
	VisitedStore.prototype.reset = function(keepRemainingData) {
        this.uber('reset', keepRemainingData);
        this.readData();
    };

    ContextHub.Utils.storeCandidates.registerStoreCandidate(VisitedStore, 'chubb.visitedpage', 0);
}(ContextHubJQ));
