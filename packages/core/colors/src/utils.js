"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.core_to_panda = void 0;
function core_to_panda(value) {
    const o = {};
    Object.entries(value).forEach(([k_0, v_0]) => {
        if (typeof v_0 === 'string') {
            o[k_0] = { value: v_0 };
        }
        else {
            o[k_0] = {};
            Object.entries(v_0).forEach(([k_1, v_1]) => {
                o[k_0][k_1] = { value: v_1 };
            });
        }
    });
    return o;
}
exports.core_to_panda = core_to_panda;
