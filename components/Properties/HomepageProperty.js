import styles from '../../styles/components/properties/homepageProperty.module.scss'
import ImageGallery from 'react-image-gallery';
import {Col, Row} from "react-bootstrap";
import Link from "next/link";
import {faRightLong, faLeftLong} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function HomepageProperty({rightSite}) {

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
                className={"image-gallery-icon image-gallery-left-nav" + ' ' + styles.leftButton + ' ' + (rightSite ? styles.leftButtonForRightSite  : '')}
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
                className={"image-gallery-icon image-gallery-right-nav" + ' ' + styles.rightButton + ' ' + (rightSite ? styles.rightButtonForRightSite  : '') }
                disabled={disabled}
                onClick={onClick}
                aria-label="Next Slide"
            >
                <FontAwesomeIcon className={'text-black'} icon={faRightLong}/>
            </button>
        )
    }
    if (rightSite) {
        return (
            <div className={styles.overflow}>
            <Row>
                <Col xl={6}>
                    <div className={styles.textSection + ' ' + styles.textSectionRight}>
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
                </Col>

                 <Col xl={6}>
                    <ImageGallery
                        showFullscreenButton={false}
                        infinite={false}
                        showPlayButton={false}
                        showThumbnails={false}
                        items={images}
                        renderLeftNav={(onClick, disabled) => leftNavigation(onClick, disabled)}
                        renderRightNav={(onClick, disabled) => rightNavigation(onClick, disabled)}
                    />
                </Col>
            </Row>
            </div>
        )
    }

    return (
     <div className={styles.overflow}>
        <Row>
            <Col xl={6}>
                <ImageGallery
                    showFullscreenButton={false}
                    infinite={false}
                    showPlayButton={false}
                    showThumbnails={false}
                    items={images}
                    renderLeftNav={(onClick, disabled) => leftNavigation(onClick, disabled)}
                    renderRightNav={(onClick, disabled) => rightNavigation(onClick, disabled)}
                />
            </Col>
            <Col xl={6}>
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
            </Col>
        </Row>
 </div>
    )

}
