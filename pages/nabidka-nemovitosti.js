import BaseLayout from "../components/Base-layout";
import styles from '../styles/pages/properties.module.scss'
import {Container, Row, Col} from "react-bootstrap";
import Title from "../components/Title";
import Property from "../components/Properties/Property";
import Button from './../components/Button'
import {useEffect, useState} from "react";
import axios from "axios";

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    let properties = await axios.get('http://localhost:1337/api/properties?populate=%2A')
    return {props: {properties: properties.data.data}}
}

export default function nabidkaNemovitosti({properties}) {

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
                            <div> {properties.map(((property, index) => {
                                return (<Col key={index}  xl={6}>
                                    <Property data={property}/>
                                </Col>)
                            }))}</div>


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
                             <div> {properties.map(((property, index) => {
                                return (<Col key={index} xl={6}>
                                    <Property  data={property}/>
                                </Col>)
                            }))}</div>
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
