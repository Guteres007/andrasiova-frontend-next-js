import {Col, Container, Row} from "react-bootstrap";
import Title from "./Title";
import styles from './../styles/components/howIwork.module.scss'

export default function HowIWork() {
    return (
        <div className={styles.section}>
            <Container>
                <Row>
                    <Col>
                        <Title dotsColor={'orange'}>
                            Jak pracuji
                        </Title>
                    </Col>
                </Row>
            </Container>

            <div className={styles.items}>
                <Container>
                    <Row>
                        <Col xl={3}>
                            <div className={styles.item}>
                                <h3 className={styles.title + ' ' + styles.titleOne}>
                                    Home <br/>
                                    Staging
                                </h3>
                                <p className={styles.description}>
                                    Emoce prodávají, tak to prostě je. Správně připravit nemovitost na prodej je klíčem
                                    k
                                    úspěchu. Když se kupující zamiluje do nemovitosti na první pohled, je napůl vyhráno.
                                </p>
                            </div>
                        </Col>

                        <Col xl={3}>
                            <div className={styles.item}>
                                <h3 className={styles.title + ' ' + styles.titleTwo}>
                                    Home <br/>
                                    Staging
                                </h3>
                                <p className={styles.description}>
                                    Emoce prodávají, tak to prostě je. Správně připravit nemovitost na prodej je klíčem
                                    k
                                    úspěchu. Když se kupující zamiluje do nemovitosti na první pohled, je napůl vyhráno.
                                </p>
                            </div>
                        </Col>

                        <Col xl={3}>
                            <div className={styles.item}>
                                <h3 className={styles.title + ' ' + styles.titleThree}>
                                    Home <br/>
                                    Staging
                                </h3>
                                <p className={styles.description}>
                                    Emoce prodávají, tak to prostě je. Správně připravit nemovitost na prodej je klíčem
                                    k
                                    úspěchu. Když se kupující zamiluje do nemovitosti na první pohled, je napůl vyhráno.
                                </p>
                            </div>
                        </Col>

                        <Col xl={3}>
                            <div className={styles.item}>
                                <h3 className={styles.title + ' ' + styles.titleFour}>
                                    Home <br/>
                                    Staging
                                </h3>
                                <p className={styles.description}>
                                    Emoce prodávají, tak to prostě je. Správně připravit nemovitost na prodej je klíčem
                                    k
                                    úspěchu. Když se kupující zamiluje do nemovitosti na první pohled, je napůl vyhráno.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
