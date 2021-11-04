import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Multiselect from 'multiselect-react-dropdown';
import './styles.css';

function SelectCategories(props) {

    const options = ['R&B', 'Pop', 'Jazz', 'Hiphop', 'Instumentals', 'Acapella'];

    return (
        <Multiselect isObject={false} options={options} selectedValues={props.selectedValues} disable={props.disabled} 
            placeholder={props.selectedValues ? "" : 'Select'}/>
    );

}

SelectCategories.propTypes = {
    selectedOptions: PropTypes.array,
    disabled: PropTypes.bool
}

export default SelectCategories;