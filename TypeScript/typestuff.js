"use strict";
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
exports.__esModule = true;
;
;
function verifyFieldsAction(isValid) {
    return { type: exports.VERIFY_FIELDS, payload: isValid };
}
function updateSearchFieldsAction(selectedValue) {
    return { type: exports.CHANGE_SEARCHFIELDS, payload: selectedValue };
}
function getFormPresetsFrmServerAction(searchformdata) {
    return { type: exports.GET_SERVER_FORM_DATA, payload: searchformdata };
}
exports.CHANGE_SEARCHFIELDS = 'CHANGE_SEARCHFIELDS';
exports.VERIFY_FIELDS = 'VERIFY_FIELDS';
exports.GET_SERVER_FORM_DATA = 'GET_SERVER_FORM_DATA';
var initSearchBarState = {
    isReady: false,
    validSearch: false,
    formValues: {
        searchTypeValue: {
            elementType: 'input',
            elementSize: 'col-1-of-2',
            elementConfig: {
                type: 'text',
                placeholder: 'Search For a Drug Product or Condition...'
            },
            selectedValue: { value: ' ', displayValue: 'Search For a Drug Product or Condition...' },
            validation: {
                required: true,
                errorMessage: 'Please Enter a 5 Digit ZipCode'
            },
            valid: true,
            touched: false
        },
        zipCodeValue: {
            elementType: 'input',
            elementSize: 'col-1-of-4',
            elementConfig: {
                type: 'text',
                placeholder: 'Enter Zip Code'
            },
            selectedValue: { value: 'Enter Zip Code', displayValue: '0' },
            validation: {
                required: true,
                minLength: 5,
                errorMessage: 'Please Enter a 5 Digit ZipCode'
            },
            valid: true,
            touched: false
        }
    }
};
function searchbarReducer(state, action) {
    var _a;
    if (state === void 0) { state = initSearchBarState; }
    switch (action.type) {
        case exports.VERIFY_FIELDS:
            if (state.validSearch !== action.payload) {
                return __assign({}, state, { validSearch: action.payload });
            }
            break;
        case exports.CHANGE_SEARCHFIELDS:
            return __assign({}, state, { formValues: __assign({}, state.formValues, (_a = {}, _a[action.payload.id] = __assign({}, state.formValues[action.payload.id], { selectedValue: {
                        displayValue: action.payload.displayValue,
                        value: action.payload.value
                    }, valid: action.payload.valid, touched: action.payload.touched }), _a)) });
        default:
            return state;
    }
    return state;
}
console.log(searchbarReducer(initSearchBarState, updateSearchFieldsAction({
    displayValue: 'Tthis is display value',
    value: 'this is my value',
    id: 'zipCodeValue',
    valid: true,
    touched: false
})));
console.log(initSearchBarState.formValues.zipCodeValue);
