sap.ui.define([
	] , function () {
		"use strict";

		return {

			/**
			 * Rounds the number unit value to 2 digits
			 * @public
			 * @param {string} sValue the number string to be rounded
			 * @returns {string} sValue with 2 digits rounded
			 */
			numberUnit : function (sValue) {
				if (!sValue) {
					return "";
				}
				return parseFloat(sValue).toFixed(2);
			},

            removeDeicimal : function (sValue) {
                if (!sValue) {
					return 0;
				}
				return parseInt(sValue);
                				
            },

            formatDate: function (val) {
          
                if (val) {
                    jQuery.sap.require("sap.ui.core.format.DateFormat");

                    var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({pattern : "dd/MM/yyyy" }); 
                    return dateFormat.format(val);
                }else{
                    return "";
                }
            }

		};

	}
);