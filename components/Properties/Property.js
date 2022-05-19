import ImageGallery from 'react-image-gallery';
import {faRightLong, faLeftLong, faVideo, faClipboardCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './../../styles/components/properties/property.module.scss'
import Link from "next/link";

export default function Property({sold, video}) {
    const images = [
        {
            original: 'https://andrasiova.cz/nemovitost/93/91701647416211.jpg',
            thumbnail: 'https://andrasiova.cz/nemovitost/93/91701647416211.jpg',
        },
        {
            original: 'https://andrasiova.cz/nemovitost/93/58261647415826.jpg',
            thumbnail: 'https://andrasiova.cz/nemovitost/93/58261647415826.jpg',
        },

    ];

    let leftNavigation = (onClick, disabled) => {

        return (
            <button
                type="button"
                className={"image-gallery-icon image-gallery-left-nav" + ' ' + styles.leftButton}
                disabled={disabled}
                onClick={onClick}
                aria-label="Previous Slide"
            >
                <FontAwesomeIcon className={'text-black'} icon={faLeftLong}/>
            </button>
        )
    }

    let rightNavigation = (onClick, disabled) => {
        return (
            <button
                type="button"
                className={"image-gallery-icon image-gallery-right-nav" + ' ' + styles.rightButton}
                disabled={disabled}
                onClick={onClick}
                aria-label="Next Slide"
            >
                <FontAwesomeIcon className={'text-black'} icon={faRightLong}/>
            </button>
        )
    }

    const imageFilter = () => {
        if (sold) {
            return (<div className={styles.propertyImageFilter}/>)
        }
    }

    const labels = () => {
        let soldLabel
        let videoLabel
        if (sold) {
            videoLabel = <span className={styles.videoLabel}><FontAwesomeIcon
                icon={faVideo}/><span>Videoprohlídka</span></span>
        }
        if (video) {
            soldLabel = <span className={styles.soldLabel}><FontAwesomeIcon
                icon={faClipboardCheck}/><span>Prodáno</span></span>
        }
        if (sold || video) {
            return (
                <div className={styles.labels}>
                    {soldLabel}
                    {videoLabel}
                </div>
            )
        }
    }
    return (
        <div className={styles.property}>
            <div className={styles.propertyImage}>
                {imageFilter()}
                {labels()}
                <ImageGallery
                    showFullscreenButton={false}
                    infinite={false}
                    showPlayButton={false}
                    showThumbnails={false}
                    items={images}
                    renderLeftNav={(onClick, disabled) => leftNavigation(onClick, disabled)}
                    renderRightNav={(onClick, disabled) => rightNavigation(onClick, disabled)}
                />
            </div>
            <div>
                <div className={styles.textSection}>
                    <Link href={'/s'}>
                        <a>
                            <h3 className={styles.title}>
                                Prodej novostavby Velký Újezd
                            </h3>
                            <p className={styles.params}>4+kk, 100 m², pozemek 1 488 m²</p>
                            <div className={styles.arrowAnchor}>
                                <FontAwesomeIcon className={'text-orange'} icon={faRightLong}/>
                            </div>

                        </a>
                    </Link>

                </div>
            </div>
        </div>

    )
}
