let initialState = {
    authenticated: '',
    errorMessage: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'UPDATEW':
            return state;
        default:
            break;
    }
}
