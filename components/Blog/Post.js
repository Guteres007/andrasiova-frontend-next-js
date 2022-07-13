import Image from "next/image";
import {faRightLong, faLeftLong, faVideo, faClipboardCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './../../styles/components/blog/post.module.scss'
import Link from "next/link";
import {useEffect, useState} from "react";
import {APP_URL} from "../../globals";


export default function Post({sold, video, data}) {
            console.log(data)
        const post = data
        const images = post.medias.map((image) => {
            /*  {
                original: 'https://www.youtube.com/embed/_mw5FCpuLMM',
                renderItem: renderVideo,
            },
           */

                return {
                original: APP_URL + "/storage/uploads/" +image.uuid,
            }

        })


    const labels = () => {
        let soldLabel
        let videoLabel
        if (video) {
            videoLabel = <span className={styles.videoLabel}><FontAwesomeIcon
                icon={faVideo}/><span>Videoprohlídka</span></span>
        }
        if (sold) {
            soldLabel = <span className={styles.soldLabel}><FontAwesomeIcon
                icon={faClipboardCheck}/><span>Prodáno</span></span>
        }
        if (sold || video) {
            return (
                <div className={styles.labels}>
                    {soldLabel}
                    {videoLabel}
                </div>
            )
        }
    }
    return (
          <Link href={'/nemovitost/'+ post?.slugs[0].slug}>
              <a className={styles.post}>
            <div className={styles.postImage}>
                 {labels()}
                  <Image src={images[0].original} layout="fill"/>
            </div>
            <div>
                <div className={styles.textSection}>
                            <h3 className={styles.title}>
                                {post?.title}
                            </h3>
                            <p className={styles.params}>{post?.short_description}</p>
                            <div className={styles.arrowAnchor}>
                                <FontAwesomeIcon className={'text-orange'} icon={faRightLong}/>
                            </div>

                </div>
            </div>
                  </a>
        </Link>
    )
}
