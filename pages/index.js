import BaseLayout from '../components/Base-layout'
import styles from './../styles/Home.module.scss'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import coverImage from '../public/andrasiova-cover.png'
import signature from '../public/podpis.png'
import Title from '../components/Title'
import HomepageProperty from '../components/Properties/HomepageProperty'
import Button from '../components/Button'
import HowIWork from '../components/HowIWork'
import HomepageTestimonial from '../components/HomepageTestimonial'
import Api from '../db/api'
// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API

    let properties = await Api.get('/nemovitosti')
    return { props: { properties: properties.data } }
}

export default function Home({ properties }) {
    return (
        <BaseLayout>
            <Container className={styles.jumbotron}>
                <Row>
                    <Col>
                        <Row>
                            <Col sm={4}>
                                <div className={styles.mainHeaderPadding}>
                                    <h1 className={styles.mainHeader}>
                                        <span>
                                            <span className={styles.textUnderline}>Dostaňte</span>{' '}
                                            za vaši nemovitost více
                                        </span>
                                    </h1>
                                </div>
                                <div className={styles.jumbotronParagraphSection}>
                                    <p>
                                        Často se mými přáteli stávají právě klienti, kterým prodávám
                                        nemovitost a{' '}
                                        <strong>pomohu jim tak najít nový domov.</strong>
                                    </p>

                                    <p className={styles.signature}>
                                        <Image src={signature} alt={'podpis'} />
                                    </p>
                                </div>

                                <div className={styles.counter}>
                                    <strong className={styles.number}>700+</strong>
                                    <span className={styles.text}>Prodaných nemovitostí</span>
                                </div>
                            </Col>
                            <Col sm={8}>
                                <div className={styles.coverImage}>
                                    <p>
                                        <Image src={coverImage} alt={'Andrášiová'} />
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            {/* Componenta Aktuální nabídka */}
            <div className={styles.sectionOffer}>
                <Container>
                    <Row>
                        <Col>
                            <Title color={'black'} dotsColor={'white'}>
                                Nabídka nemovitostí
                            </Title>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col xl={12}>
                            <div className={styles.offers}>
                                {properties.map(function (property, index) {
                                    let isOdd = index % 2 !== 0
                                    return (
                                        <HomepageProperty
                                            key={index}
                                            data={property}
                                            rightSite={isOdd}
                                        />
                                    )
                                })}
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col className={'text-center'}>
                            <Button>Zobrazit celou nabídku</Button>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Componenta Jak pracuji */}
            <HowIWork />
            {/* Componenta Reference */}
            <HomepageTestimonial />
        </BaseLayout>
    )
}
