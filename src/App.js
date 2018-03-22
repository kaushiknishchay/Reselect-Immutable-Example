import React, {Component} from 'react';
import './App.css';
import CategorySelect from './containers/CategorySelectBox';
import SourceSelectBox from "./containers/SourceSelectBox";
import {connect} from "react-redux";


class App extends Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log(nextProps)
        return nextProps.selectedCategory !== this.props.selectedCategory
    }


    render() {
        return (
            <React.Fragment>
                <CategorySelect/>
                {
                    this.props.selectedCategory &&
                    <SourceSelectBox/>
                }
            </React.Fragment>
        );
    }
}

const mapState = (state) => {
    return {
        selectedCategory: state.getIn(['newsApp', 'selectedCategory'])
    }
};
export default connect(mapState)(App);
