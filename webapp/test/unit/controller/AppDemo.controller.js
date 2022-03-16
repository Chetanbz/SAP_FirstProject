/*global QUnit*/

sap.ui.define([
	"SAPUI5/sap_demo/controller/AppDemo.controller"
], function (Controller) {
	"use strict";

	QUnit.module("AppDemo Controller");

	QUnit.test("I should test the AppDemo controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
