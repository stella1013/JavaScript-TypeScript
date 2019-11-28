/** 
 Functional Programming in Redux Similarly, in Redux you get the concept of actions that are processed by reducers. An action provides some data, and a reducer is a function that produces the new state for the application in a functional way out of the current state and the provided data. 
 */


 //Providing 'initialState' as default value for 'state' is a simple way of initializing the global state the first time around.
function doAction(state = initialState, action) {
    let newState = {};
    switch (action.type) {
        case "CREATE":
            // update state, generating newState,
            // depending on the action data
            // to create a new item
            return newState;
        case "DELETE":
            // update state, generating newState,
            // after deleting an item
            return newState;
        case "UPDATE":
            // update an item,
            // and generate an updated state
            return newState;
        default:
            return state;
    }
}

//A dispatch table could be built to simplify the preceding code.

const dispatchTable = {
    CREATE: (state, action) => {
        // update state, generating newState,
        // depending on the action data
        // to create a new item
        return newState;
    },
    DELETE: (state, action) => {
        // update state, generating newState,
        // after deleting an item
        return newState;
    },
    UPDATE: (state, action) => {
        // update an item,
        // and generate an updated state
        return newState;
    }
};

function doAction2(state = initialState, action) {
    return dispatchTable[action.type]
        ? dispatchTable[action.type](state, action)
        : state;
}