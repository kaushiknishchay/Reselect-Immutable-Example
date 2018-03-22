import React, {Component} from 'react';
import SelectBox from "../components/SelectBox";
import {createSelector} from 'reselect';
import {connect} from "react-redux";
import {setNewsList, setSource} from "../actions";
import {bindActionCreators} from "redux";
import {getNewsFromSource} from "../service/httpFetch";

class SourceSelectBox extends Component {

    // apiKey = "fcad1af9a4064741b94070a34565fe19";
    // catBasedSources = "https://newsapi.org/v2/sources?apiKey=" + this.apiKey + "&category=";


    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        this.props.setSource(e.currentTarget.value);
        this.fetchNews(e.currentTarget.value);
    }

    fetchNews(selectedSource) {
        if (selectedSource !== null) {
            getNewsFromSource(selectedSource)
                .then(res => {
                    if (res.status === 200) {
                        this.props.setNewsList(res.data.articles);
                    }
                }, error => {

                });
        }
    }

    render() {

        let sourceList = this.props.sourceList;
        let selectedCategory = this.props.selectedCategory;
        return (
            <div>
                {selectedCategory &&
                <SelectBox
                    name="sourceSelect"
                    data={sourceList}
                    onChange={this.handleChange}/>
                }
            </div>
        );
    }
}

const getCategory = (state) => state.getIn(['newsApp', 'selectedCategory']);
const getSourcesList = (state) => state.getIn(['newsApp', 'apiData']);

const getSourceFromCategory = createSelector(getCategory, getSourcesList, (cat, data) => {
        data = data.filter((item) => cat === item.category);
        return data.map((item) => item.id);
    }
);

function mapStateToProps(state) {
    return {
        selectedCategory: state.getIn(['newsApp', 'selectedCategory']),
        sourceList: getSourceFromCategory(state),
    }
}

function mapDispatch(dispatch) {
    return bindActionCreators({
        setSource: setSource,
        setNewsList: setNewsList
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatch)(SourceSelectBox);
