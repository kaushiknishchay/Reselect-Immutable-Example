import {fromJS} from 'immutable';
import {ADD_API_DATA, UPDATE_CATEGORY, UPDATE_CATEGORY_LIST, UPDATE_NEWS, UPDATE_SOURCE} from "../actions";

const initialState = fromJS({
    categories: [],
    selectedCategory: null,
    sources: [],
    selectedSource: null,
    newsList: [],
    apiData: {}
});

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_API_DATA:
            return state.set('apiData', action.data);
        case UPDATE_CATEGORY_LIST:
            return state.set('categories', action.categoryList);
        case UPDATE_CATEGORY:
            return state.set('selectedCategory', action.category);
        case UPDATE_SOURCE:
            return state.set('selectedSource', action.source);
        case UPDATE_NEWS:
            return state.set('newsList', action.newsList);
        default:
            return state
    }
}