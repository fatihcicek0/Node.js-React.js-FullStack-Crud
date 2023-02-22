const INITIAL_STATE = {
    contentList: [],
    contentDetail: { id: "", title: "", content: "", comments: [] }
}
export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_CONTENTS":
            return { ...state, contentList: action.payload }
        case "ADD_CONTENT":
            return { ...state, contentList: [...state.contentList, action.payload] }
        case "GET_CONTENT_DETAİL":
            return { ...state, contentDetail: action.payload }
        case "ADD_COMMENT":
            return { ...state, contentDetail: { ...state.contentDetail, comments: [...state.contentDetail.comments, action.payload] } }
        case "EDİT_CONTENT":
            return { ...state, contentDetail: { ...state.contentDetail, ...action.payload } }
        case "DELETE_CONTENT":
            return { ...state, contentList: state.contentList.filter(c => c.id != action.payload) }
        default:
            return state;
    }
}