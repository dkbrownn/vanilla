var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { useState, useReducer } from "react";
import Schema from "async-validator";
import { mapValues, each } from "lodash-es";
var filedReducer = function (state, action) {
    var _a, _b, _c;
    switch (action.type) {
        case "addField":
            return __assign(__assign({}, state), (_a = {}, _a[action.name] = __assign({}, action.value), _a));
        case "updateValue":
            return __assign(__assign({}, state), (_b = {}, _b[action.name] = __assign(__assign({}, state[action.name]), { value: action.value }), _b));
        case "updateValidateResult":
            var _d = action.value, isVaild = _d.isVaild, errors = _d.errors;
            return __assign(__assign({}, state), (_c = {}, _c[action.name] = __assign(__assign({}, state[action.name]), { isVaild: isVaild, errors: errors }), _c));
        default:
            return state;
    }
};
export var useStore = function (initialValues) {
    // from state
    var _a = useState({ isVaild: true, isSubmiting: false, errors: {} }), form = _a[0], setForm = _a[1];
    var _b = useReducer(filedReducer, {}), fields = _b[0], dispatch = _b[1];
    var getFieldValue = function (key) {
        return fields[key] && fields[key].value;
    };
    var getFieldsValue = function () {
        return mapValues(fields, function (item) { return item.value; });
    };
    var setFieldValue = function (name, value) {
        if (fields[name]) {
            dispatch({ type: "updateValue", name: name, value: value });
        }
    };
    var reset = function () {
        each(fields, function (value, name) {
            if (initialValues === null || initialValues === void 0 ? void 0 : initialValues[name]) {
                dispatch({ type: "updateValue", name: name, value: initialValues[name] });
            }
            else {
                dispatch({ type: "updateValue", name: name, value: null });
            }
        });
        // if (initialValues) {
        //   each(initialValues, (value, name) => {
        //     console.log(value, name)
        //     if (fields[name]) {
        //       dispatch({type: "updateValue", name, value})
        //     }
        //   })
        // } else {
        //   each(initialValues, ({value, name}) => {
        //     dispatch({type: "updateValue", name, value: null})
        //   })
        // }
    };
    var transformRules = function (rules) {
        return rules.map(function (rule) {
            if (typeof rule === "function") {
                var calledRule = rule({ getFieldValue: getFieldValue });
                return calledRule;
            }
            else {
                return rule;
            }
        });
    };
    var validateField = function (name) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, value, rules, afterRules, descroptor, valueMap, validator, isVaild, errors, e_1, err;
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = fields[name], value = _a.value, rules = _a.rules;
                    afterRules = transformRules(rules);
                    descroptor = (_b = {},
                        _b[name] = afterRules,
                        _b);
                    valueMap = (_c = {},
                        _c[name] = value,
                        _c);
                    validator = new Schema(descroptor);
                    isVaild = true;
                    errors = [];
                    console.log(valueMap, descroptor, validator);
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, validator.validate(valueMap)];
                case 2:
                    _d.sent();
                    return [3 /*break*/, 5];
                case 3:
                    e_1 = _d.sent();
                    console.log(e_1);
                    isVaild = false;
                    err = e_1;
                    console.log("e", err.errors);
                    console.log("fields", err.fields);
                    errors = err.errors;
                    return [3 /*break*/, 5];
                case 4:
                    console.log("errors", isVaild);
                    dispatch({ type: "updateValidateResult", name: name, value: { isVaild: isVaild, errors: errors } });
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var test = function (name, errorsArray) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, value, rules, afterRules, descroptor, valueMap, validator, e_2, err;
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = fields[name], value = _a.value, rules = _a.rules;
                    afterRules = transformRules(rules);
                    descroptor = (_b = {},
                        _b[name] = afterRules,
                        _b);
                    valueMap = (_c = {},
                        _c[name] = value,
                        _c);
                    validator = new Schema(descroptor);
                    // const result = await validator.validate(valueMap).then(res =>
                    //  { console.log("res", res)
                    //   return res
                    //  }).catch(err => {
                    //     console.log("err1",err.errors)
                    //     return err.errors
                    //   });
                    console.log(descroptor, valueMap);
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, validator.validate(valueMap)];
                case 2:
                    _d.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _d.sent();
                    err = e_2;
                    console.log(err.errors);
                    errorsArray[name] = err.errors;
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var validateAllField = function () { return __awaiter(void 0, void 0, void 0, function () {
        var isVaild, errors, valueMap, descroptor, validator, e_3, err;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isVaild = true;
                    errors = {};
                    valueMap = mapValues(fields, function (item) { return item.value; });
                    descroptor = mapValues(fields, function (item) { return transformRules(item.rules); });
                    validator = new Schema(descroptor);
                    console.log(valueMap, descroptor, validator);
                    setForm(__assign(__assign({}, form), { isSubmiting: true }));
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, validator.validate(valueMap)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3:
                    e_3 = _a.sent();
                    console.error(e_3);
                    isVaild = false;
                    err = e_3;
                    errors = err.fields;
                    each(fields, function (value, name) {
                        // error 是否存在对应的key
                        if (errors[name]) {
                            var itemErrors = errors[name];
                            dispatch({ type: "updateValidateResult", name: name, value: { isVaild: false, errors: itemErrors } });
                        }
                        else if (value.rules.length > 0 && !errors[name]) {
                            dispatch({ type: "updateValidateResult", name: name, value: { isVaild: true, errors: [] } });
                        }
                    });
                    return [3 /*break*/, 5];
                case 4:
                    setForm(__assign(__assign({}, form), { isSubmiting: false, isVaild: isVaild, errors: errors }));
                    return [2 /*return*/, {
                            isVaild: isVaild,
                            errors: errors,
                            values: valueMap,
                        }];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return {
        fields: fields,
        dispatch: dispatch,
        form: form,
        validateField: validateField,
        validateAllField: validateAllField,
        getFieldValue: getFieldValue,
        getFieldsValue: getFieldsValue,
        setFieldValue: setFieldValue,
        reset: reset,
    };
};
