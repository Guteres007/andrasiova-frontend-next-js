import BaseLayout from "../components/Base-layout";
import styles from './../styles/pages/property.module.scss'
import {Container, Row, Col} from "react-bootstrap";
import Title from "../components/Title";
import Property from "../components/Properties/Property";

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
                                  <Property/>

                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>
        </BaseLayout>
    )
}
