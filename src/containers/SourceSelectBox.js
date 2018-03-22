import React, {Component} from 'react';
import SelectBox from "../components/SelectBox";
import {createSelector} from 'reselect';
import {connect} from "react-redux";

class SourceSelectBox extends Component {

    apiKey = "fcad1af9a4064741b94070a34565fe19";
    catBasedSources = "https://newsapi.org/v2/sources?apiKey=" + this.apiKey + "&category=";


    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        console.log(e);
    }

    render() {

        let sourceList = this.props.sourceList;
        return (
            <div>
                {sourceList &&
                <SelectBox
                    name="sourceSelect"
                    data={sourceList}
                    onChange={this.handleChange}/>
                }
                {
                    !sourceList && <div>nothing</div>
                }
            </div>
        );
    }
}
//
const getCategory = (state) => state.getIn(['newsApp','selectedCategory']);
const getSourcesList = (state) => state.getIn(['newsApp','apiData']);

const getSourceFromCategory = createSelector(getCategory, getSourcesList, (cat, data) => {
        data = data.filter((item) => cat === item.category);
        return data.map((item)=> item.id);
    }
)

function mapStateToProps(state) {
    return {
        sourceList: getSourceFromCategory(state),
    }
}

export default connect(mapStateToProps)(SourceSelectBox);
