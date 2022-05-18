import BaseLayout from "../components/Base-layout";
import styles from "./../styles/Home.module.scss";
import {Container, Row, Col} from 'react-bootstrap'
import Image from 'next/image'
import coverImage from '../public/andrasiova-cover.png'
import signature from '../public/podpis.png'
import Title from "../components/Title";
import HomepageProperty from "../components/Properties/HomepageProperty";

export default function Home() {
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
                                           <span className={styles.textUnderline}>Dostaňte</span> za vaši nemovitost více
                                       </span>
                                </h1>
                                </div>
                                <div className={styles.jumbotronParagraphSection}>
                                       <p>
                                        Často se mými přáteli stávají právě klienti, kterým prodávám nemovitost a <strong>pomohu jim tak najít nový domov.</strong>
                                       </p>

                                    <p className={styles.signature}>
                                      <Image src={signature}/>
                                    </p>
                                </div>

                            <div className={styles.counter}>
                                <strong className={styles.number}>
                                    700+
                                </strong>
                                <span className={styles.text}>Prodaných nemovitostí</span>
                            </div>


                            </Col>
                            <Col sm={8}>
                                <div className={styles.coverImage}>
                                    <p>
                                           <Image src={coverImage}/>
                                    </p>

                                </div>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

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
                        <Col>
                            <div className={styles.offers}>

                                     <HomepageProperty/>
                                     <HomepageProperty site={'right'}/>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </BaseLayout>
    )
}
