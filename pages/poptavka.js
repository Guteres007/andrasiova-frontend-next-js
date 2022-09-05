import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCouch, faShop, faHotel, faWheatAwn } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import BaseLayout from '../components/Base-layout'
import styles from './../styles/pages/inquiry.module.scss'
import Image from 'next/image'
import coverImage from '../public/andrasiova-cover.png'
import { Container, Row, Col } from 'react-bootstrap'
import Button from '../components/Button'
import Title from '../components/Title'
import Form from 'react-bootstrap/Form'

import Api from '../db/api'

import Post from '../components/Blog/Post'
import { useState } from 'react'

export default function KontaktPage() {
    const [propertyType, setPropertyType] = useState(1)

    function handleChange(e, propertyType) {
        setPropertyType(propertyType)
    }

    return (
        <BaseLayout>
            <div className={styles.inquirySection}>
                <Container>
                    <Row>
                        <Col>
                            <Title color={'black'} dotsColor={'white'}>
                                Poptávka nemovitosti
                            </Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12}>
                            <Form>
                                <Col xl={12}>
                                    <div className={styles.propertyTypes}>
                                        <div
                                            className={
                                                styles.propertyType +
                                                ' ' +
                                                (propertyType == 1 ? styles.propertyTypeActive : '')
                                            }
                                            onClick={(e) => handleChange(e, 1)}
                                        >
                                            {' '}
                                            <FontAwesomeIcon
                                                className={'text-orange'}
                                                icon={faCouch}
                                            />
                                            <h2>byt</h2>
                                        </div>
                                        <div
                                            className={
                                                styles.propertyType +
                                                ' ' +
                                                (propertyType == 2 ? styles.propertyTypeActive : '')
                                            }
                                            onClick={(e) => handleChange(e, 2)}
                                        >
                                            <FontAwesomeIcon
                                                className={'text-orange'}
                                                icon={faHouse}
                                            />
                                            <h2>dům</h2>
                                        </div>
                                        <div
                                            className={
                                                styles.propertyType +
                                                ' ' +
                                                (propertyType == 3 ? styles.propertyTypeActive : '')
                                            }
                                            onClick={(e) => handleChange(e, 3)}
                                        >
                                            <FontAwesomeIcon
                                                className={'text-orange'}
                                                icon={faWheatAwn}
                                            />
                                            <h2>pozemek</h2>
                                        </div>
                                        <div
                                            className={
                                                styles.propertyType +
                                                ' ' +
                                                (propertyType == 4 ? styles.propertyTypeActive : '')
                                            }
                                            onClick={(e) => handleChange(e, 4)}
                                        >
                                            <FontAwesomeIcon
                                                className={'text-orange'}
                                                icon={faHotel}
                                            />{' '}
                                            <h2>komercni</h2>
                                        </div>
                                        <div
                                            className={
                                                styles.propertyType +
                                                ' ' +
                                                (propertyType == 5 ? styles.propertyTypeActive : '')
                                            }
                                            onClick={(e) => handleChange(e, 5)}
                                        >
                                            <FontAwesomeIcon
                                                className={'text-orange'}
                                                icon={faShop}
                                            />
                                            <h2>ostatni</h2>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    <hr className={styles.hr} />
                                </Col>
                                <Row>
                                    <Col xl={6}>
                                        <select className={'select'}>
                                            <option value="default">Dispozice</option>
                                        </select>
                                    </Col>
                                    <Col xl={6}>
                                        <div className={`d-flex ${styles.saleType}`}>
                                            <Col xl={6}>
                                                <Form.Check
                                                    className={styles.saleTypeInput}
                                                    name="contact"
                                                    type={'radio'}
                                                    id={`default-radio-1`}
                                                    label={`Koupě`}
                                                />
                                            </Col>

                                            <Col xl={6}>
                                                <Form.Check
                                                    className={styles.saleTypeInput}
                                                    name="contact"
                                                    type={'radio'}
                                                    id={`default-radio-2`}
                                                    label={`Pronájem`}
                                                />
                                            </Col>
                                        </div>
                                    </Col>

                                    <Col xl={12}>
                                        <hr className={styles.hr} />
                                    </Col>

                                    <Col xl={6}>
                                        <input
                                            className={'input'}
                                            type="text"
                                            placeholder={'Město'}
                                        />

                                        <input
                                            className={'input'}
                                            type="text"
                                            placeholder={'Cena'}
                                        />
                                    </Col>

                                    <Col xl={6}>
                                        <textarea
                                            className={'textarea ' + styles.textareaHeight}
                                            placeholder="Další požadavky"
                                        ></textarea>
                                    </Col>
                                    <Col xl={12}>
                                        <hr className={styles.hr} />
                                    </Col>
                                    <Col xl={4}>
                                        <input
                                            className={'input'}
                                            type="text"
                                            placeholder={'Jméno a přijmení'}
                                        />
                                    </Col>
                                    <Col xl={4}>
                                        <input
                                            className={'input'}
                                            type="email"
                                            placeholder={'Email'}
                                        />
                                    </Col>
                                    <Col xl={4}>
                                        <input
                                            className={'input'}
                                            type="tel"
                                            placeholder={'Telefon'}
                                        />
                                    </Col>

                                    <Col xl={12}>
                                        <hr className={styles.hr} />
                                    </Col>

                                    <div className="text-center">
                                        <Button>Odeslat poptávku</Button>
                                    </div>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </BaseLayout>
    )
}
