import React from 'react';
import PropTypes from 'prop-types';
import Multiselect from 'multiselect-react-dropdown';
import './styles.css';

function SelectReference(props) {

    return (
        <Multiselect isObject={true} options={props.options} onSelect={props.handleSelect}
            onRemove={props.handleSelect} selectionLimit={1} displayValue="name" hidePlaceholder={true}
            selectedValues = {props.selectedOptions}/>
    );

}

SelectReference.propTypes = {
    options: PropTypes.array,
    handleSelect: PropTypes.func,
    selectedOptions: PropTypes.array
}

export default SelectReference;