import BaseLayout from "../components/Base-layout";
import styles from './../styles/pages/property.module.scss'
import {Container, Row, Col} from "react-bootstrap";
import Title from "../components/Title";
export default function nabidkaNemovitosti() {
    return(
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

                <div>
                    <Container>
                        <Row>
                            <Col>
                                <div>
                                    <div>
                                        Image
                                    </div>
                                    <div>
                                        description
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>
        </BaseLayout>
    )
}
