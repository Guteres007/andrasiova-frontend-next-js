import BaseLayout from "../components/Base-layout";
import styles from '../styles/pages/blog.module.scss'
import {Container, Row, Col} from "react-bootstrap";
import Title from "../components/Title";
import Post from "../components/Blog/Post";
import Button from './../components/Button'
import Api from "../db/api";

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API

    let properties = await Api.get( '/nemovitosti')
    return {props: {properties: properties.data}}
}

export default function nabidkaNemovitosti({properties}) {

    return (
        <BaseLayout>
            <div className={styles.blogSection}>
                <Container>
                    <Row>
                        <Col>
                            <Title dotsColor={'white'}>
                                Blog ze světa nemovitostí
                            </Title>
                        </Col>
                    </Row>
                </Container>

                <div className={styles.blogContainer}>
                    <Container>
                        <Row>
                             {properties.map(((property, index) => {
                                return (<Col key={index}  xl={6}>
                                    <Post data={property}/>
                                </Col>)
                            }))}

                        </Row>
                    </Container>
                </div>

                <Container>
                    <Row>
                        <Col className={styles.textCenter}>
                            {/* Zde se asi bude načítat několik nemovitostí a na klik další */}
                            <Button>
                                Načíst další články
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </BaseLayout>
    )
}
