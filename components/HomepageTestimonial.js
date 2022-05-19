import {Container, Row, Col} from "react-bootstrap";
import Image from 'next/image'
import styles from '../styles/components/homepage-testimonial.module.scss'
import ImageGallery from 'react-image-gallery';
import {faRightLong, faLeftLong} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Title from "./Title";
import Button from './Button'
import testimonialImage from '/public/reference-ukazka.png'
export default function HomepageTestimonial() {
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

    return (
        <div className={styles.testimonials}>
            <Container>
                <Row>
                    <Title dotsColor={'orange'}>
                        Co říkají klienti
                    </Title>
                </Row>
            </Container>

            <div className={styles.testimonialContainer}>
            <Container>
                <Row>
                    <Col xl={4}>
                        <div className={styles.gallerySection}>
                            <div className={styles.offset}>
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
                        <div className={styles.testimonialImage}>
                              <Image  width={300} height={200} src={testimonialImage}/>
                        </div>


                        </div>

                    </Col>

                    <Col xl={8} >
                        <div className={styles.description}>
                            <p>
                                <i>
                             Poděkování za perfektně odvedenou službu by mělo být samozřejmostí, ale ve vašem případě
                            chci
                            vyjádřit své pocity i několika slovy navíc.
                                </i>
                            </p>

                            <p>
                                <i>
                             Poděkování za perfektně odvedenou službu by mělo být samozřejmostí, ale ve vašem případě
                            chci
                            vyjádřit své pocity i několika slovy navíc.
                                </i>
                            </p> <p>
                                <i>
                             Poděkování za perfektně odvedenou službu by mělo být samozřejmostí, ale ve vašem případě
                            chci
                            vyjádřit své pocity i několika slovy navíc.
                                </i>
                            </p>
                             <p>
                                <i>
                             Poděkování za perfektně odvedenou službu by mělo být samozřejmostí, ale ve vašem případě
                            chci
                            vyjádřit své pocity i několika slovy navíc.
                                </i>
                            </p>
                             <p>
                                <i>
                             Poděkování za perfektně odvedenou službu by mělo být samozřejmostí, ale ve vašem případě
                            chci
                            vyjádřit své pocity i několika slovy navíc.
                                </i>
                            </p>
                             <p>
                                <i>
                             Poděkování za perfektně odvedenou službu by mělo být samozřejmostí, ale ve vašem případě
                            chci
                            vyjádřit své pocity i několika slovy navíc.
                                </i>
                            </p>
                            <strong className={styles.clientName}>
                                Srdečně zdraví spokojená klientka
                               <br/> Mikušková Olomouc
                            </strong>
                        </div>
                    </Col>

                </Row>
            </Container>

                 </div>
        </div>
    )
}
