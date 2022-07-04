import React, { useState } from 'react';
import Modal from '../Modal';

const ProjectList = ({ category }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([
    {
        name: 'Weather Dashboard',
        category: 'portfolio'
    },
    {
        name: 'Workday Scheduler',
        category: 'portfolio'
    },
    {
        name: 'Password Generator',
        category: 'portfolio'
    },
    {
        name: 'Note Taker',
        category: 'portfolio'
    },
    {
        name: 'Employee Tracker',
        category: 'portfolio'
    },
    {
        name: 'Tech Blog',
        category: 'portfolio'
    }
    ]);

    const currentPhotos = photos.filter(photo => photo.category === category);

    const toggleModal = (image, i) => {
        setCurrentPhoto({ ...image, index: i });
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            {isModalOpen && (
            <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
        )}
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                <img style={{ width: "20%" }}
                src={require(`../../assets/${category}/${i}.jpg`).default}
                alt={image.name}
                className="img-thumbnail mx-1"
                onClick={() => toggleModal(image, i)}
                key={image.name}
                />
            ))}
            </div>
        </div>
    );
};

export default ProjectList;