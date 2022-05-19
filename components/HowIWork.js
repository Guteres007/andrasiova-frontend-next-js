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
                                    Profesionální<br/>
                                    fotograf
                                </h3>
                                <p className={styles.description}>
                                    Fotka je většinou ten první kontakt, který v inzerci potencionální kupující shlédne.
                                    Z tohoto důvodu kladu důraz na perfektní kvalitu fotografie.
                                </p>
                            </div>
                        </Col>

                        <Col xl={3}>
                            <div className={styles.item}>
                                <h3 className={styles.title + ' ' + styles.titleThree}>
                                    Video <br/>
                                    prohlídky
                                </h3>
                                <p className={styles.description}>
                                    Prodávat dneska nemovitosti bez kvalitní video prohlídky si už nedokážu představit.
                                    Je to totiž jedna z nejsilnějších "marketingových zbraní". Video má obrovskou moc -
                                    dokáže probudit v lidech touhu a naladit ty správné emoce.
                                </p>
                            </div>
                        </Col>

                        <Col xl={3}>
                            <div className={styles.item}>
                                <h3 className={styles.title + ' ' + styles.titleFour}>
                                    Marketing &<br/>
                                    Propagace
                                </h3>
                                <p className={styles.description}>
                                    Marketing a masivní propagace na internetu a sociálních sítích . Tahle část je
                                    prostě to nejvíc! Dostat vše ven mezi lidi! Umět zacílit na cílovou skupinu!
                                    Propagovat tu vaši nemovitost tak, aby o ní prostě věděl každý!
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
