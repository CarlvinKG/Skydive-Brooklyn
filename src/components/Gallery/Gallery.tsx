//import React from 'react'
import LightGallery from 'lightgallery/react';
import './Gallery.css'

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

type ImageModule = { default: string };
const imageImports: Record<string, ImageModule> = import.meta.glob('../../assets/img/**/*.{jpg,jpeg,png,gif,webp}', { eager: true });
const imageList = Object.values(imageImports)

const GalleryComp = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                {imageList.map((image, index) => (
                    <a href={image.default}>
                        <img src={image.default} alt={`Gallery image ${index + 1}`}  />
                    </a>
                ))}

            </LightGallery>
        </div>
    );
}

export default GalleryComp;