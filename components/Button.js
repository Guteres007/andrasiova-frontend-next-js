import styles from '../styles/components/button.module.scss'
import Link from "next/link";
import {useRouter} from "next/router";

export default function Button({href, children}) {

    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }
    if (href.length > 0) {
        return (
            <Link href={href} onClick={handleClick}>
                <a className={styles.button}>{children}</a>
            </Link>
        )
    } else {
        return (
            <button className={styles.button}  onClick={handleClick}>
                {children}
            </button>)
    }
}
