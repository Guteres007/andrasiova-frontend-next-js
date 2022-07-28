import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import {
    faFacebookSquare,
    faYoutubeSquare,
    faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import BaseLayout from '../components/Base-layout'
import styles from './../styles/pages/contact.module.scss'
import Image from 'next/image'
import coverImage from '../public/andrasiova-cover.png'
import { Container, Row, Col } from 'react-bootstrap'
import Button from '../components/Button'
import Title from '../components/Title'
import Api from '../db/api'

import Post from '../components/Blog/Post'

export default function KontaktPage() {
    return (
        <BaseLayout>
            <Container>
                <Row>
                    <Col xl={12}>
                        <div className={styles.contactSection}>
                            <span className={styles.coverImageContainer}>
                                <Image src={coverImage} alt={'Andrášiová'} />
                            </span>

                            <div className={styles.leftSite}>
                                <div>
                                    <h1 className={styles.header}>
                                        <span>
                                            <span className={styles.textUnderline}>
                                                Potkejme se
                                            </span>{' '}
                                            společně
                                        </span>
                                    </h1>
                                </div>

                                <p className={styles.description}>
                                    Hledáte nebo prodáváte nemovitost nebo máte jakýkoliv dotaz?
                                    Neváhejte se na mě obrátit, ráda vám se vším pomůžu.
                                </p>

                                <ul className={styles.contactLinkSection}>
                                    <li>
                                        <Link href={'/pryc'}>
                                            <a>
                                                <FontAwesomeIcon
                                                    className={'text-orange'}
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
                                                    className={'text-orange'}
                                                    icon={faEnvelopeSquare}
                                                />
                                                <span>andrasiova@seznam.cz</span>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className={styles.contactMe}>
                <div className={styles.title}>
                    <Title color={'white'} dotsColor={'super-orange'}>
                        Napište mi
                    </Title>
                </div>

                <Container>
                    <Row>
                        <Col xl={12}>
                            <Col xl={{ span: 6, offset: 3 }}>
                                <div className={styles.contactFormSection}>
                                    <Row>
                                        <Col xl={6}>
                                            <input
                                                className={'input'}
                                                type="email"
                                                placeholder={'Email'}
                                            />
                                        </Col>
                                        <Col xl={6}>
                                            <input
                                                className={'input'}
                                                type="tel"
                                                placeholder={'Telefon'}
                                            />
                                        </Col>
                                        <Col xl={12}>
                                            <textarea
                                                className={'textarea'}
                                                placeholder={'Zpráva'}
                                            />
                                        </Col>
                                        <Col>
                                            <div className="text-center">
                                                <Button>Odeslat</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        </BaseLayout>
    )
}
