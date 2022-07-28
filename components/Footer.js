import { useMemo } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '../styles/components/footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import {
    faFacebookSquare,
    faYoutubeSquare,
    faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <div className={styles.footer}>
            <div className={styles.ctaSection}>
                <Container>
                    <Row>
                        <Col xl={6}>
                            <strong className={styles.title}>
                                Neváhejte se na <br />
                                mě obrátit
                            </strong>
                        </Col>
                        <Col xl={6}>
                            <ul className={styles.contactSection}>
                                <li>
                                    <Link href={'/pryc'}>
                                        <a>
                                            <FontAwesomeIcon
                                                className={'text-white'}
                                                color={'white'}
                                                icon={faPhoneSquare}
                                            />
                                            <span>734 522 841</span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/pryc'}>
                                        <a>
                                            <FontAwesomeIcon
                                                className={'text-white'}
                                                icon={faEnvelopeSquare}
                                            />
                                            <span>andrasiova@seznam.cz</span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className={styles.linkSection}>
                <Container>
                    <Row>
                        <Col>
                            <ul>
                                <li>
                                    <Link href={'/pryc'}>
                                        <a>O mně</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/pryc'}>
                                        <a>Nabídka nemovitostí</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/pryc'}>
                                        <a>Poptávka</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/pryc'}>
                                        <a>Blog</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/pryc'}>
                                        <a>Kontakt</a>
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className={styles.rights}>
                <Container>
                    <Row>
                        <Col xl={4}>
                            <p>
                                © {year} Eva Andrášiová. <br />
                                Všechna práva vyhrazena
                            </p>
                        </Col>
                        <Col xl={4}>
                            <ul className={styles.social}>
                                <li>
                                    <Link href={'/pryc'}>
                                        <a>
                                            <FontAwesomeIcon
                                                className={'text-white'}
                                                icon={faFacebookSquare}
                                            />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/pryc'}>
                                        <a>
                                            <FontAwesomeIcon
                                                className={'text-white'}
                                                icon={faInstagramSquare}
                                            />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/pryc'}>
                                        <a>
                                            <FontAwesomeIcon
                                                className={'text-white'}
                                                icon={faYoutubeSquare}
                                            />
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </Col>

                        <Col xl={4}>
                            <div className={styles.textRight}>
                                Developed by Martin Andráši <br />
                                UI & UX Michal Brtníček
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
