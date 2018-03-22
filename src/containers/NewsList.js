import React, {Component} from 'react';
import NewsListComponent from '../components/NewsList';
import {connect} from "react-redux";

class NewsList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            newsData: []
        }
    }


    render() {
        return (
            <div>
                {
                    this.renderNews()
                }
            </div>
        );
    }

    renderNews() {
        if (this.props.selectedSource !== null) {
            return (<NewsListComponent newsData={this.props.newsData}/>);
        }
    }
}

function makeMapStateToProps(state) {
    return {
        selectedSource: state.getIn(['newsApp', 'selectedSource']),
        newsData: state.getIn(['newsApp', 'newsList']),
    }
}


export default connect(makeMapStateToProps)(NewsList);
