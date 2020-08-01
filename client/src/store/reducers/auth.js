let initialState = {
    authenticated: '',
    errorMessage: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATEW':
            return state;
        default:
            return state;
    }
}
