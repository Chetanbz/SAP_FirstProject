sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("SAPUI5.sapdemo.controller.AppDemo", {
            onInit: function () {
                let oOrdersModel = new JSONModel();
                this.getView().setModel(oOrdersModel,'ordersModel');
                $.ajax({url: "/model/order.json",
                     success: (response) => {
                     this.getView().getModel('ordersModel').setData(response);
                  }
                });

            },
            deleteRow: function(oEvent){
              console.log('Delete Called');
              const sBindingContextPath = oEvent.getSource().getParent().getBindingContextPath();
              const selectedindex = sBindingContextPath.split('/')[2];
              console.log(selectedindex);
              let aOrder = this.getView().getModel('ordersModel').getData().orders;
              aOrder.splice(selectedindex,1);
              this.getView().getModel('ordersModel').setData({
                  'orders' : aOrder
              });
            }

        });
    });
