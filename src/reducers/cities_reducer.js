export default function(state, action) {
    if (state === undefined) {
        return []
    }

    if (action.type === 'GET_CITIES') {
        return action.payload;
    } 
    	    
    else {
        return state;
    }
}