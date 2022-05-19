import BaseLayout from "../components/Base-layout";
import styles from './../styles/pages/property.module.scss'
import {Container, Row, Col} from "react-bootstrap";
import Title from "../components/Title";
import Property from "../components/Properties/Property";
import Button from './../components/Button'

export default function nabidkaNemovitosti() {

    return (
        <BaseLayout>
            <div className={styles.propertySection}>
                <Container>
                    <Row>
                        <Col>
                            <Title dotsColor={'white'}>
                                Nabídka Nemovitostí
                            </Title>
                        </Col>
                    </Row>
                </Container>

                <div className={styles.propertiesContainer}>
                    <Container>
                        <Row>
                            <Col xl={6}>
                                <Property/>
                            </Col>
                            <Col xl={6}>
                                <Property/>
                            </Col>
                            <Col xl={6}>
                                <Property/>
                            </Col>
                            <Col xl={6}>
                                <Property/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <hr className={styles.hrWhite}/>

                <div className={styles.soldedProperties}>
                    <Container>
                        <Row>
                            <Col>
                                <Title dotsColor={'white'}>
                                    Prodané Nemovitostí
                                </Title>
                            </Col>
                        </Row>
                    </Container>

                    <div className={styles.soldedPropertiesContainer}>
                        <Container>
                            <Row>
                                <Col xl={6}>
                                    <Property sold={true}/>
                                </Col>
                                <Col xl={6}>
                                    <Property video={true} sold={true}/>
                                </Col>
                                <Col xl={6}>
                                    <Property sold={true} video={true}/>
                                </Col>
                                <Col xl={6}>
                                    <Property sold={true}/>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>

                <Container>
                    <Row>
                        <Col className={styles.textCenter}>
                            {/* Zde se asi bude načítat několik nemovitostí a na klik další */}
                            <Button>
                                Načíst další prodané nemovitosti
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </BaseLayout>
    )
}
