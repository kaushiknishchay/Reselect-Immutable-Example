import React, {Component} from 'react';
import './App.css';
import CategorySelect from './containers/CategorySelectBox';
import SourceSelectBox from "./containers/SourceSelectBox";
import {connect} from "react-redux";
import NewsList from "./containers/NewsList";


class App extends Component {


    count = 0;
    //
    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.selectedCategory !== this.props.selectedCategory
    // }


    render() {
        this.count += 1;
        console.log('App Rendered count : ' + this.count);
        return (
            <React.Fragment>
                <CategorySelect/>

                <SourceSelectBox/>

                <NewsList/>
            </React.Fragment>
        );
    }
}

const mapState = (state) => {
    return {
        // selectedCategory: state.getIn(['newsApp', 'selectedCategory'])
    }
};
export default connect(mapState)(App);
