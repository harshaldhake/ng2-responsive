/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var import0 = require('../../../../../src/app/ng2-responsive/responsive/responsive');
var import1 = require('@angular/core/src/change_detection/change_detection');
var import2 = require('@angular/core/src/linker/view_utils');
var Wrapper_Responsive = (function () {
    function Wrapper_Responsive(p0, p1, p2) {
        this.changed = false;
        this._responsive = import1.UNINITIALIZED;
        this.context = new import0.Responsive(p0, p1, p2);
    }
    Wrapper_Responsive.prototype.check_responsive = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._responsive, currValue))) {
            this.changed = true;
            this.context.responsive = currValue;
            this._responsive = currValue;
        }
    };
    Wrapper_Responsive.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    return Wrapper_Responsive;
}());
exports.Wrapper_Responsive = Wrapper_Responsive;
//# sourceMappingURL=responsive.ngfactory.js.map