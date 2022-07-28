import styles from '../styles/components/title.module.scss'
export default function Title({ children, color, dotsColor }) {
    let titleBase = styles.title
    let titleColor = styles.titleBlack
    let dotColor = styles.dotsWhite
    if (color === 'white') {
        titleColor = styles.titleWhite
    }
    if (dotsColor === 'orange') {
        dotColor = styles.dotsOrange
    }

    if (dotsColor === 'super-orange') {
        dotColor = styles.dotsSuperOrange
    }

    return (
        <div className={styles.textCenter}>
            <h2 className={titleBase + ' ' + titleColor + ' ' + dotColor}>{children}</h2>
        </div>
    )
}
