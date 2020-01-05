

export interface SearchTypeValidation {
	required: boolean;
	errorMessage: string;
	firstOption: string;
}
export interface SearchInputValidation {
	required: boolean;
	errorMessage: string;
}
export interface ZipValidation {
	required: boolean;
	minLength: number;
	errorMessage: string;
}
export interface RadiusValidation {
	required: boolean;
}
export interface ValidationRules {
	[key: string]: SearchTypeValidation | ZipValidation | RadiusValidation |  SearchInputValidation;
}
export interface ElementConfig{
	type: string;
	placeholder: string;
};
export interface zipElementconfig{
	type: string;
	placeholder: string;
};
export interface ZipValue {
	elementType: string;
	elementSize: string;
	elementConfig: ElementConfig;
	selectedValue: {
		value: string;
		displayValue: string;
	};
	validation: ZipValidation;
	valid: boolean;
	touched: boolean;

}
export interface SearchValue {
	[key: string]:  SearchType 

	}
export interface SearchType {
	elementType: string;
		elementSize: string;
		elementConfig: ElementConfig;
		selectedValue: {
			value: string;
			displayValue: string;
		};
		validation: SearchInputValidation;
		valid: boolean;
		touched: boolean;
	
	
}
export interface SearchBarState {
	isReady: boolean;
	validSearch: boolean;
	formValues: {
		searchTypeValue: SearchType;
		zipCodeValue: ZipValue;
	};
}

interface verifyFieldsAction {
	type: typeof VERIFY_FIELDS;
	payload: boolean;
}

interface updateSearchFieldsAction {
	type: typeof CHANGE_SEARCHFIELDS;
	payload: {
		displayValue: string;
		value: string;
		id: string;
		valid:boolean;
		touched:boolean;
	};
}

interface getFormPresetsFrmServerAction {
	type: typeof GET_SERVER_FORM_DATA;
	payload: [];
}



export type SearchBarActionTypes =
	| verifyFieldsAction
	| getFormPresetsFrmServerAction
	| updateSearchFieldsAction;

function verifyFieldsAction(isValid: boolean): SearchBarActionTypes {
	return { type: VERIFY_FIELDS, payload: isValid };
}

function updateSearchFieldsAction(selectedValue: {
	displayValue: string;
	value: string;
	id:string;
	valid:boolean;
	touched:boolean;
}): SearchBarActionTypes {
	return { type: CHANGE_SEARCHFIELDS, payload: selectedValue };
}

function getFormPresetsFrmServerAction(
	searchformdata: []
) {
	return { type: GET_SERVER_FORM_DATA, payload: searchformdata };
}


export const CHANGE_SEARCHFIELDS = 'CHANGE_SEARCHFIELDS';
export const VERIFY_FIELDS = 'VERIFY_FIELDS';
export const GET_SERVER_FORM_DATA = 'GET_SERVER_FORM_DATA';



const initSearchBarState: SearchBarState = {
	isReady: false,
	validSearch:false,
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
				errorMessage:'Please Enter a 5 Digit ZipCode'
			},
			valid: true,
			touched: false
		} ,
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
				minLength:5,
				errorMessage:'Please Enter a 5 Digit ZipCode'
			},
			valid: true,
			touched: false
		}
	}
};

function searchbarReducer(
	state: SearchBarState = initSearchBarState,
	action: SearchBarActionTypes
): SearchBarState {
	switch (action.type) {

		case VERIFY_FIELDS:
			if (state.validSearch !== action.payload) {
				return {
					...state,
					validSearch: action.payload
				};
			}
			break;
		
		case CHANGE_SEARCHFIELDS:
			return {
				...state,
				formValues: {
					...state.formValues,
					[action.payload.id]: {
						...state.formValues[action.payload.id],
						selectedValue: {
							displayValue: action.payload.displayValue,
							value: action.payload.value
						},
						valid:action.payload.valid,
						touched:action.payload.touched
					}
				}
			};
		default:
			return state;
	}
	return state;
}
console.log(searchbarReducer(initSearchBarState, updateSearchFieldsAction({
    displayValue: 'Tthis is display value',
	value: 'this is my value',
	id:'zipCodeValue',
	valid:true,
	touched:false
})))
console.log(initSearchBarState.formValues.zipCodeValue);