import styles from '../styles/components/header.module.scss'
import Image from 'next/image'
import logo from '../public/andrasiova-logo.webp'
import {useRouter} from "next/router";
import ActiveLink from "./Active-link";
import Button from "./Button";
import Link from "next/link";


export default function Header() {
    const router = useRouter();
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
                        <ActiveLink href={'/ss'}>
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
                socky
            </div>
        </div>
    )
}
