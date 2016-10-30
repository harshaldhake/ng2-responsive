/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var import0 = require('../../../../../src/app/ng2-responsive/bootstrap/bootstrap-directives');
var import1 = require('@angular/core/src/change_detection/change_detection');
var import2 = require('@angular/core/src/linker/view_utils');
var Wrapper_XL = (function () {
    function Wrapper_XL(p0, p1, p2) {
        this.changed = false;
        this._xl = import1.UNINITIALIZED;
        this.context = new import0.XL(p0, p1, p2);
    }
    Wrapper_XL.prototype.check_xl = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._xl, currValue))) {
            this.changed = true;
            this.context.xl = currValue;
            this._xl = currValue;
        }
    };
    Wrapper_XL.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_XL;
}());
exports.Wrapper_XL = Wrapper_XL;
var Wrapper_LG = (function () {
    function Wrapper_LG(p0, p1, p2) {
        this.changed = false;
        this._lg = import1.UNINITIALIZED;
        this.context = new import0.LG(p0, p1, p2);
    }
    Wrapper_LG.prototype.check_lg = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._lg, currValue))) {
            this.changed = true;
            this.context.lg = currValue;
            this._lg = currValue;
        }
    };
    Wrapper_LG.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_LG;
}());
exports.Wrapper_LG = Wrapper_LG;
var Wrapper_MD = (function () {
    function Wrapper_MD(p0, p1, p2) {
        this.changed = false;
        this._md = import1.UNINITIALIZED;
        this.context = new import0.MD(p0, p1, p2);
    }
    Wrapper_MD.prototype.check_md = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._md, currValue))) {
            this.changed = true;
            this.context.md = currValue;
            this._md = currValue;
        }
    };
    Wrapper_MD.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_MD;
}());
exports.Wrapper_MD = Wrapper_MD;
var Wrapper_SM = (function () {
    function Wrapper_SM(p0, p1, p2) {
        this.changed = false;
        this._sm = import1.UNINITIALIZED;
        this.context = new import0.SM(p0, p1, p2);
    }
    Wrapper_SM.prototype.check_sm = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._sm, currValue))) {
            this.changed = true;
            this.context.sm = currValue;
            this._sm = currValue;
        }
    };
    Wrapper_SM.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_SM;
}());
exports.Wrapper_SM = Wrapper_SM;
var Wrapper_XS = (function () {
    function Wrapper_XS(p0, p1, p2) {
        this.changed = false;
        this._xs = import1.UNINITIALIZED;
        this.context = new import0.XS(p0, p1, p2);
    }
    Wrapper_XS.prototype.check_xs = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._xs, currValue))) {
            this.changed = true;
            this.context.xs = currValue;
            this._xs = currValue;
        }
    };
    Wrapper_XS.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_XS;
}());
exports.Wrapper_XS = Wrapper_XS;
var Wrapper_ShowItBootstrap = (function () {
    function Wrapper_ShowItBootstrap(p0, p1, p2) {
        this.changed = false;
        this._showItBootstrap = import1.UNINITIALIZED;
        this.context = new import0.ShowItBootstrap(p0, p1, p2);
    }
    Wrapper_ShowItBootstrap.prototype.check_showItBootstrap = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._showItBootstrap, currValue))) {
            this.changed = true;
            this.context.showItBootstrap = currValue;
            this._showItBootstrap = currValue;
        }
    };
    Wrapper_ShowItBootstrap.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_ShowItBootstrap;
}());
exports.Wrapper_ShowItBootstrap = Wrapper_ShowItBootstrap;
var Wrapper_HideItBootstrap = (function () {
    function Wrapper_HideItBootstrap(p0, p1, p2) {
        this.changed = false;
        this._hideItBootstrap = import1.UNINITIALIZED;
        this.context = new import0.HideItBootstrap(p0, p1, p2);
    }
    Wrapper_HideItBootstrap.prototype.check_hideItBootstrap = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._hideItBootstrap, currValue))) {
            this.changed = true;
            this.context.hideItBootstrap = currValue;
            this._hideItBootstrap = currValue;
        }
    };
    Wrapper_HideItBootstrap.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_HideItBootstrap;
}());
exports.Wrapper_HideItBootstrap = Wrapper_HideItBootstrap;
var Wrapper_ResponsiveSizeInfo = (function () {
    function Wrapper_ResponsiveSizeInfo(p0, p1) {
        this.changed = false;
        this._responsiveSizeInfo = import1.UNINITIALIZED;
        this.context = new import0.ResponsiveSizeInfo(p0, p1);
    }
    Wrapper_ResponsiveSizeInfo.prototype.check_responsiveSizeInfo = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._responsiveSizeInfo, currValue))) {
            this.changed = true;
            this.context.responsiveSizeInfo = currValue;
            this._responsiveSizeInfo = currValue;
        }
    };
    Wrapper_ResponsiveSizeInfo.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    return Wrapper_ResponsiveSizeInfo;
}());
exports.Wrapper_ResponsiveSizeInfo = Wrapper_ResponsiveSizeInfo;
//# sourceMappingURL=bootstrap-directives.ngfactory.js.map