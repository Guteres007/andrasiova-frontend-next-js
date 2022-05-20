import ImageGallery from 'react-image-gallery';
import {faRightLong, faLeftLong, faVideo, faClipboardCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './../../styles/components/properties/property.module.scss'
import Link from "next/link";
import {useEffect, useState} from "react";
import {APP_URL} from "../../globals";

const renderVideo = (item) => {
    return (
        <div>
            {
                item.original ?
                    <iframe width="560" height="315" src={item.original}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                    :
                    null
            }
        </div>
    );
}

export default function Property({sold, video, data}) {

    const [property, setProperty] = useState('')
    const [images, setImages] = useState([])
    useEffect(() => {
        setProperty(data)
        const imgs = data.attributes.images.data.map((image) => {
          /*  {
                original: 'https://www.youtube.com/embed/_mw5FCpuLMM',
                renderItem: renderVideo,
            },
           */
            return {
                original: APP_URL + image.attributes.url,
                thumbnail: APP_URL + image.attributes.url
            }
        })
        setImages(imgs)
    }, [])
    {/* zatím nechat, ale asi se bude dávat jen na detail nemovitosti */
    }

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
        if (video) {
            videoLabel = <span className={styles.videoLabel}><FontAwesomeIcon
                icon={faVideo}/><span>Videoprohlídka</span></span>
        }
        if (sold) {
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
                                {property?.attributes?.title}
                            </h3>
                            <p className={styles.params}>{property?.attributes?.description}</p>
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
