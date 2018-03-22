import React, {Component} from 'react';
import SelectBox from "../components/SelectBox";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setApiData, setCategoryAction, setCategoryList} from "../actions";
import axios from "axios";
import Spinner from 'react-spinkit';
import {fromJS} from "immutable";

class CategorySelect extends Component {

    apiKey = "fcad1af9a4064741b94070a34565fe19";
    sourcesUrl = "https://newsapi.org/v2/sources?apiKey=" + this.apiKey;

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {



    }

    componentDidMount() {
        axios.get(this.sourcesUrl).then(res => {

            if (res.status === 200) {

                let sources = res.data.sources;
                const uniqueCat = fromJS([...new Set(sources.map(item => item.category))]);

                // setTimeout(()=>{
                    this.props.setCatList(uniqueCat);
                    this.props.setApiData(sources);
                // },2000);
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
        // console.log(this.props);

        return (
            <React.Fragment>
                {
                    (categoryList.size <= 0) &&
                    <Spinner/>
                }
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


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setCategory: setCategoryAction,
        setCatList: setCategoryList,
        setApiData: setApiData,
    }, dispatch);
}



function mapStateToProps(state) {
    // console.log(state);
    let categories = state.getIn(['newsApp', 'categories']);
    return {
        categoryData: categories
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelect);
