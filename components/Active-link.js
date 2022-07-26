import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/components/header.module.scss'

function ActiveLink({ children, href }) {
    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <Link href={href}>
            <a
                onClick={handleClick}
                className={
                    router.asPath === href ? styles.active : styles.menuLink
                }
            >
                {children}
            </a>
        </Link>
    )
}

export default ActiveLink
