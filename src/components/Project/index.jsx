import React from 'react';

function Project () {
    const currentPhotos = photos.filter(photo => photo.category === category);

    const toggleModal = (image, i) => {
        setCurrentPhoto({ ...image, index: i });
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="flex-row">
        {currentPhotos.map((image, i) => (
        <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
        />
            ))}
        </div>
    )
}

export default Project