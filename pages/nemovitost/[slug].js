import {useRouter} from 'next/router'
import BaseLayout from "../../components/Base-layout";
import ImageGallery from 'react-image-gallery';
import {faRightLong, faLeftLong} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './../../styles/pages/property.module.scss'
import Link from "next/link";
import {Container} from "react-bootstrap";


export default function PropertyPage() {
    const router = useRouter()
    const {slug} = router.query

    const renderVideo = (item) => {
        return (
            <div>
                {
                    item.original ?
                        <iframe width="560" height="315" src={item.original}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>
                        :
                        null
                }
            </div>
        );
    }

    const images = [
        {
            original: 'https://andrasiova.cz/nemovitost/93/91701647416211.jpg',
            thumbnail: 'https://andrasiova.cz/nemovitost/93/91701647416211.jpg',
        },
        {
            original: 'https://andrasiova.cz/nemovitost/93/58261647415826.jpg',
            thumbnail: 'https://andrasiova.cz/nemovitost/93/58261647415826.jpg',
        },
        {
            original: 'https://www.youtube.com/embed/_mw5FCpuLMM',
            renderItem: renderVideo,
        },
    ];

    let leftNavigation = (onClick, disabled) => {

        return (
            <button
                type="button"
                className={"image-gallery-icon image-gallery-left-nav" + ' ' + styles.leftButton}
                disabled={disabled}
                onClick={onClick}
                aria-label="Previous Slide"
            >
                <FontAwesomeIcon className={'text-black'} icon={faLeftLong}/>
            </button>
        )
    }

    let rightNavigation = (onClick, disabled) => {
        return (
            <button
                type="button"
                className={"image-gallery-icon image-gallery-right-nav" + ' ' + styles.rightButton}
                disabled={disabled}
                onClick={onClick}
                aria-label="Next Slide"
            >
                <FontAwesomeIcon className={'text-black'} icon={faRightLong}/>
            </button>
        )
    }


    return (
        <BaseLayout>
            <Container>
                    <div className={'property-carousel'}>

            <ImageGallery
                showFullscreenButton={false}
                infinite={false}
                showPlayButton={false}
                showThumbnails={false}
                items={images}
                renderLeftNav={(onClick, disabled) => leftNavigation(onClick, disabled)}
                renderRightNav={(onClick, disabled) => rightNavigation(onClick, disabled)}
            />

                   </div>
            </Container>

        </BaseLayout>
    )
}


