import {useRouter} from 'next/router'
import BaseLayout from "../../components/Base-layout";
import ImageGallery from 'react-image-gallery';
import {faRightLong, faLeftLong} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './../../styles/pages/property.module.scss'
import Link from "next/link";
import Image from "next/image";
import andrasiova from './../../public/andrasiova-kontaktni-foto.png'


import {Container, Row, Col} from "react-bootstrap";
import Button from "../../components/Button";
import Title from "../../components/Title";
import Property from "../../components/Properties/Property";
import Api from "../../db/api";
import {APP_URL} from "../../globals";

export async function getServerSideProps(context) {
    const {slug} = context.query;
    let property = await Api.get('/nemovitosti/' + slug)
    const coverImage = property.data.medias.filter(image => image.pivot.role === "cover" && image.pivot.crop === "default")[0]
    const images = property.data.medias.filter(image => image.pivot.crop === "default").map((image) => {
        /*  {
              original: 'https://www.youtube.com/embed/_mw5FCpuLMM',
              renderItem: renderVideo,
          },
         */

        return {
            original: APP_URL + "/storage/uploads/" + image.uuid,
            thumbnail: APP_URL + "/storage/uploads/" + image.uuid
        }
    })
    let nextProperties = await Api.get('/nemovitosti')
    return {props: {nextProperties: nextProperties.data, property: property.data, images, coverImage}}
}

export default function PropertyPage({nextProperties, property, images, coverImage}) {

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
        <BaseLayout>
            <div className={styles.coverImage} style={{backgroundImage: "url(" +  APP_URL + '/storage/uploads/' + coverImage.uuid + "), linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.9))",  backgroundBlendMode: 'overlay'}}>
            <Container>
                <Row>
                    <Col xl={12}>
                        <div className={'property-carousel'}>
                            <ImageGallery
                                showFullscreenButton={false}
                                infinite={false}
                                showPlayButton={false}
                                showThumbnails={false}
                                renderCustomControls={() => {
                                    return (<div className={styles.propertyTitle}><h1 className={styles.propertyH1}>{property.title}</h1></div>)
                                }}
                                items={images}
                                renderLeftNav={(onClick, disabled) => leftNavigation(onClick, disabled)}
                                renderRightNav={(onClick, disabled) => rightNavigation(onClick, disabled)}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>


            <Container>
                <Row>
                    <Col xl={7}>
                        <div className={styles.leftSite} dangerouslySetInnerHTML={{__html: property.description}}>
                        </div>

                    </Col>
                    <Col xl={5}>
                        <div className={styles.rightSite}>
                            <ul>
                                <li>
                                    <span>
                                        Dispozice
                                    </span>
                                    <p>
                                        4+kk
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        Dispozice
                                    </span>
                                    <p>
                                        4+kk
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        Dispozice
                                    </span>
                                    <p>
                                        4+kk
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        Dispozice
                                    </span>
                                    <p>
                                        4+kk
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        Dispozice
                                    </span>
                                    <p>
                                        4+kk
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        Dispozice
                                    </span>
                                    <p>
                                        4+kk
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        Dispozice
                                    </span>
                                    <p>
                                        4+kk
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className={styles.contactMe}>
                <div className={styles.title}>
                    <Title color={'white'} dotsColor={'super-orange'}>
                        Domluvte si prohlídku
                    </Title>
                </div>

                <Container>
                    <Row>
                        <Col xl={7}>
                            <Col xl={10}>
                                <div className={styles.contactSection}>
                                    <Row>
                                        <Col xl={6}>
                                            <input className={'input'} type="email" placeholder={'Email'}/>
                                        </Col>
                                        <Col xl={6}>
                                            <input className={'input'} type="tel" placeholder={'Telefon'}/>
                                        </Col>
                                        <Col xl={12}>
                                            <textarea className={'textarea'} placeholder={'Zpráva'}/>
                                        </Col>
                                        <Col>
                                            <Button>
                                                Odeslat
                                            </Button>
                                        </Col>

                                    </Row>
                                </div>

                            </Col>
                        </Col>
                        <Col xl={5}>
                            <div className={styles.imageSection}>
                                <div className={styles.rightBackgroundOffset}>
                                </div>
                                <div className={styles.image}>
                                    <Image src={andrasiova} alt={'andrasiova'}/>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>


            <div className={styles.propertySection}>
                <Title color={'black'} dotsColor={'white'}>
                    Další nemovitosti
                </Title>
                <div className={styles.relatedProperties}>
                    <Container>
                        <Row>
                            {nextProperties.map((property) => {
                                return (
                                    <Col xl={6} key={property.id}>
                                        <Property data={property} sold={false} video={false}/>
                                    </Col>)
                            })}

                            <Col xl={12} className={styles.relatedPropertiesButton}>
                                <Button>
                                    Načíst další nemovitosti
                                </Button>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </div>

        </BaseLayout>
    )
}


