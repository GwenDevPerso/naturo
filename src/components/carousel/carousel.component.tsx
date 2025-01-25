import {useState} from 'react';
import styles from './Carousel.module.css'; // Voir les styles en dessous

const Carousel = () => {
    const images = ['/images/slide1.jpg', '/images/slide2.jpg', '/images/slide3.jpg'];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div className={styles.carousel}>
            <button onClick={handlePrev} className={styles.arrow}>
                ❮
            </button>
            <div className={styles.imageContainer}>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className={styles.image} />
            </div>
            <button onClick={handleNext} className={styles.arrow}>
                ❯
            </button>
            <div className={styles.dots}>
                {images.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
