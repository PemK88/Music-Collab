import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./styles.css";

function CategoryWork (props) {

    const categories = ['R&B', 'Pop', 'Jazz', 'Hiphop', 'Instrumentals', 'Acapella'];
    const defaultClass = new Array(categories.length).fill("btn btn-margin");

    const [categoriesClass, setCategoriesClass] = useState(defaultClass);

    const handleClick = (id) => {
        let classes = [...defaultClass];
        classes[id] = "btn btn-margin btn-active";
        setCategoriesClass(classes);
        props.handleClick(id);
    }

    return (
        <div className="large-box-explore">
            <h3 className="box-title">Categories</h3>
            <div className="category-btns">
                {categories.map((cat, id) => {
                    return (
                        <button key={id} className={categoriesClass[id]} onClick={() => {handleClick(id)}}>
                            {cat}
                        </button>
                    );
                })}
            </div>
        </div>

    );
}

CategoryWork.propTypes = {
    handleClick: PropTypes.func
}

export default CategoryWork;
