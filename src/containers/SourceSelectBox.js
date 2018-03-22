import React, {Component} from 'react';
import SelectBox from "../components/SelectBox";
import {createSelector} from 'reselect';
import {connect} from "react-redux";
import axios from "axios";

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
        console.log(sourceList);
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

const getCategory = (state) => state.get('selectedCategory');
const getSourcesList = (state) => state.get('apiData');

const getSourceFromCategory = () => (state, props) => {
    console.log(state, props)
    createSelector(
        [getCategory, getSourcesList], (cat, data) => {
            console.log(cat, data)
            // return data.filter((item)=>{
            //     return cat === item.category;
            // });
        }
    )
};


const mapStateToProps = () => {
    const getSourceList = getSourceFromCategory();
    return (state, props) => {
        return {
            sourceList: getSourceList(state, props),
            selected: state.get('newsApp').get('selectedCategory')
        }
    }

};

export default connect(mapStateToProps)(SourceSelectBox);
