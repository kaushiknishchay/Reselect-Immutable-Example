import React, {PureComponent} from 'react';
import SelectBox from "../components/SelectBox";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setApiData, setCategoryAction, setCategoryList} from "../actions";
import Spinner from 'react-spinkit';
import {fromJS} from "immutable";
import {createSelector} from "reselect";
import {getSources} from "../service/httpFetch";

class CategorySelect extends PureComponent {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }


    componentDidMount() {
        getSources().then(res => {
            if (res.status === 200) {
                let sources = res.data.sources;
                // this.props.setCatList(uniqueCat);
                this.props.setApiData(sources);
            }
        }, error => {
            console.log(error);
        });
    }

    handleChange(e) {
        this.props.setCategory(e.currentTarget.value);
    }

    render() {
        let categoryList = this.props.categoryData;
        if (categoryList.size <= 0) {
            console.log('Spinner rendered');
            return (<Spinner/>);
        } else {
            console.log('Category List rendered');
            return (
                <React.Fragment>
                    {
                        (categoryList.size > 0) &&
                        <SelectBox
                            name="categorySelect"
                            data={categoryList}
                            onChange={this.handleChange}/>
                    }
                </React.Fragment>
            );
        }
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setCategory: setCategoryAction,
        setApiData: setApiData,
    }, dispatch);
}

let apiData = (state) => state.getIn(['newsApp', 'apiData']);

const getCategoriesData = createSelector(apiData, (apiData) => {
    const uniqueCat = fromJS([...new Set(apiData.map(item => item.category))]);
    return uniqueCat;
});

function mapStateToProps(state) {
    return {
        categoryData: getCategoriesData(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelect);
