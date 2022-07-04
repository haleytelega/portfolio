import React from 'react';
import Project from '../Project';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {
    const { currentCategory } = props;
        return (
            <section>
                <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <Project category={currentCategory.name} />
            </section>
    );
}
export default Gallery;
