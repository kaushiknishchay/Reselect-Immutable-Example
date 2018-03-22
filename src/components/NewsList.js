import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NewsList extends Component {

    render() {
        return (
            <ol>
                {
                    this.props.newsData.map(val => {
                        return (
                            <li key={val.url}>
                                {val.title}
                                <p>{val.description}</p>
                            </li>);
                    })
                }
            </ol>
        );
    }
}

NewsList.propTypes = {
    newsData: PropTypes.oneOfType([
        PropTypes.array.isRequired,
        PropTypes.object.isRequired
    ]),
};

export default NewsList;
