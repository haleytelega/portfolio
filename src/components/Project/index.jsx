import React, { useState } from 'react';

const ProjectList = ({ category }) => {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([
    {
        name: 'Weather Dashboard',
        category: 'portfolio'
    }
    ]);

    const currentPhotos = photos.filter(photo => photo.category === category);

    // const toggleModal = (image, i) => {
    //     setCurrentPhoto({ ...image, index: i });
    //     setIsModalOpen(!isModalOpen);
    // };

    return (
        <div>
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                <img
                src={require(`../../assets/${category}/${i}.jpg`).default}
                alt={image.name}
                className="img-thumbnail mx-1"
                key={image.name}
                />
            ))}
            </div>
        </div>
    );
};

export default ProjectList;