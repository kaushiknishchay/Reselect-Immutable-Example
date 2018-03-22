export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const UPDATE_CATEGORY_LIST = 'UPDATE_CATEGORY_LIST';
export const ADD_API_DATA = 'ADD_APID_DATA';

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