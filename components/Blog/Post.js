import Image from 'next/image'
import {
    faRightLong,
    faLeftLong,
    faVideo,
    faClipboardCheck,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './../../styles/components/blog/post.module.scss'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { APP_URL } from '../../globals'

export default function Post({ data, isRelated }) {
    console.log(data)
    const post = data
    const images = post.medias.map((image) => {
        return {
            original: APP_URL + '/storage/uploads/' + image.uuid,
        }
    })

    return (
        <Link href={'/blog/' + post?.slugs[0].slug}>
            <a className={styles.post}>
                <div
                    className={`${styles.postImage} ${
                        isRelated ? styles.postImageSmall : ''
                    }`}
                >
                    <div className={styles.date}>
                        <span className={styles.dateDay}>28.2.</span>
                        <span className={styles.dateYear}>2001</span>
                    </div>
                    <Image src={images[0].original} layout="fill" alt="img" />
                </div>
                <div>
                    <div className={styles.textSection}>
                        <h3
                            className={`${styles.title} ${
                                isRelated ? styles.titleSmall : ''
                            }`}
                        >
                            {post?.title}
                        </h3>
                        <div
                            className={`${styles.params} ${
                                isRelated ? styles.paramsSmall : ''
                            }`}
                            dangerouslySetInnerHTML={{
                                __html: post?.short_description,
                            }}
                        />
                        <div className={styles.arrowAnchor}>
                            <FontAwesomeIcon
                                className={'text-orange'}
                                icon={faRightLong}
                            />
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}
