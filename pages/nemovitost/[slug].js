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

export async function getServerSideProps() {
    // Fetch data from external API

    let nextProperties = await Api.get('/nemovitosti')
    return {props: {nextProperties: nextProperties.data}}
}

export default function PropertyPage({nextProperties}) {
    const router = useRouter()
    const {slug} = router.query

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

    const images = [
        {
            original: 'https://andrasiova.cz/nemovitost/93/91701647416211.jpg',
            thumbnail: 'https://andrasiova.cz/nemovitost/93/91701647416211.jpg',
        },
        {
            original: 'https://andrasiova.cz/nemovitost/93/58261647415826.jpg',
            thumbnail: 'https://andrasiova.cz/nemovitost/93/58261647415826.jpg',
        },
        {
            original: 'https://www.youtube.com/embed/_mw5FCpuLMM',
            renderItem: renderVideo,
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
        <BaseLayout>
            <Container>
                <Row>
                    <Col xl={12}>


                        <div className={'property-carousel'}>
                            <ImageGallery
                                showFullscreenButton={false}
                                infinite={false}
                                showPlayButton={false}
                                showThumbnails={false}
                                items={images}
                                renderLeftNav={(onClick, disabled) => leftNavigation(onClick, disabled)}
                                renderRightNav={(onClick, disabled) => rightNavigation(onClick, disabled)}
                            />
                            <h1>
                                Title a rozmazaný bavckground
                            </h1>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col xl={7}>
                        <div className={styles.leftSite}>
                            <p><strong>Hledáte bydlení v dobré dojezdnosti od Olomouce? Mám tu pro vás nabídku - pozemek
                                o
                                výměře 1488m2 zajišťující soukromí a samostatně stojící novostavbu postavenou na klíč ve
                                Velkém Újezdu. Čtyři pokoje v přízemí. To je základní myšlenka tohoto domu. Nabízí
                                komfort přízemního domu.</strong>
                            </p>
                            <p>
                                Dům proto vyhovuje širokému spektru zájemců pro začínající rodiny i seniory. Vzhledem k
                                tomu, že se zatím jedná o vizualizaci, lze dům postavit dle vlastních představ jak
                                přízemní bungalov, tak patrový. Vzory domů vč. nacenění přepošlu na požádání.</p>
                            <p>
                                Poloha je ideální z hlediska blízkosti větších měst s možností rychlého napojení na
                                dálnici. Olomouc 15 km, Přerov, Hranice přes 20 km. V místě pošta, obchody, základní a
                                mateřská škola, lékař, penzion, restaurace apod. Bohatý kulturní život obce, sportovní a
                                rekreační vyžití.</p>
                            <p>
                                Zajistíme výhodné financování hypotečním úvěrem. Pro zajištění financování jsme
                                připraveni rychle a výhodně prodat vaši stávající nemovitost. Pro bližší informace mne
                                kontaktujte.</p>
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
                                <div className={styles.okkk}>
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
                                    <Col xl={6} key={property.id} >
                                        <Property  data={property} sold={false} video={false}/>
                                    </Col>)
                            })}

                             <Col xl={12} className={styles.relatedPropertiesButton} >
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


