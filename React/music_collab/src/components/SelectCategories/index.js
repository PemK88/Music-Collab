import React from 'react';
import PropTypes from 'prop-types';
import Multiselect from 'multiselect-react-dropdown';
import './styles.css';

function SelectCategories(props) {

    const options = ['R&B', 'Pop', 'Jazz', 'Hiphop', 'Instrumentals', 'Acapella'];

    return (
        <Multiselect isObject={false} options={options} selectedValues={props.selectedValues} disable={props.disabled} 
            hidePlaceholder={true} onSelect={props.handleSelect} onRemove={props.handleSelect}/>
    );

}

SelectCategories.propTypes = {
    selectedOptions: PropTypes.array,
    disabled: PropTypes.bool,
    handleSelect: PropTypes.func
}

export default SelectCategories;