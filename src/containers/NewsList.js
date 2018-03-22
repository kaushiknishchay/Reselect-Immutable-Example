import React, {Component} from 'react';
import NewsListComponent from '../components/NewsList';
import {connect} from "react-redux";

class NewsList extends Component {

    componentWillMount(){

    }

    render() {
        return (
            <React.Fragment>
                <NewsListComponent newsData={}/>
            </React.Fragment>
        );
    }
}


// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//         get
//     })
// }

function makeMapStateToProps() {
    const getNewsDataState = makeNewsData()
    return (state, props)=>{

    }
}


export default connect(makeMapStateToProps)(NewsList);
