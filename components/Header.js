import styles from '../styles/components/header.module.scss'
import Image from 'next/image'
import logo from '../public/andrasiova-logo.webp'
import ActiveLink from "./Active-link";
import Button from "./Button";
import Link from "next/link";
import {faFacebookSquare, faInstagramSquare, faYoutubeSquare} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


export default function Header() {

    return (
        <div className={styles.header}>
            <div className={styles.logoSection}>
                <Link href={'/'}>
                    <a>
                        <Image src={logo}/>
                    </a>
                </Link>
            </div>

            <div className={styles.menuSection}>
                <ul>
                    <li>
                        <ActiveLink href={'/'}>
                            O mně
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href={'/nabidka-nemovitosti'}>
                            Nabídka nemovitostí
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href={'/a'}>
                            Poptávka
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href={'/a'}>
                            Blog
                        </ActiveLink>
                    </li>
                    <li>
                        <Button href={'/kontakt'}>
                            Kontakt
                        </Button>
                    </li>
                </ul>


            </div>
            <div className={styles.socialSection}>
                <ul>
                    <li>
                        <Link href={'/pryc'}>
                            <a>
                                <FontAwesomeIcon className={'text-black'} icon={faFacebookSquare}/>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/pryc'}>
                            <a>
                                <FontAwesomeIcon className={'text-black'} icon={faInstagramSquare}/>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/pryc'}>
                            <a>
                                <FontAwesomeIcon className={'text-black'} icon={faYoutubeSquare}/>
                            </a>
                        </Link>
                    </li>
                </ul>


            </div>
        </div>
    )
}
