import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SelectBox extends Component {
    render() {
        return (
            <React.Fragment>
                <label htmlFor={this.props.name}>{this.props.name}</label>
                <br/>
                <select
                    name={this.props.name}
                    id={this.props.name}
                    onChange={e => this.props.onChange(e)}>
                    <option value="">--SELECT--</option>
                    {
                        this.props.data && this.props.data.map((val, idx) => {
                            return (
                                <option key={idx} value={val}>{val}</option>
                            );
                        })
                    }
                </select>
                <br/>
            </React.Fragment>
        );
    }
}

SelectBox.propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
};

export default SelectBox;
