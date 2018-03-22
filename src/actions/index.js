export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const UPDATE_CATEGORY_LIST = 'UPDATE_CATEGORY_LIST';
export const ADD_API_DATA = 'ADD_API_DATA';
export const UPDATE_SOURCE = 'UPDATE_SOURCE';
export const UPDATE_NEWS = 'UPDATE_NEWS';

export const setApiData = (data) => {
    return {
        type: ADD_API_DATA,
        data
    }
};

export const setCategoryAction = (cat) => {
    return {
        type: UPDATE_CATEGORY,
        category: cat
    }
};

export const setCategoryList = (catList) => {
    return {
        type: UPDATE_CATEGORY_LIST,
        categoryList: catList
    }
};

export const setSource = (source) => {
    return {
        type: UPDATE_SOURCE,
        source
    }
};

export const setNewsList = (newsList) => {
    return {
        type: UPDATE_NEWS,
        newsList
    }
};