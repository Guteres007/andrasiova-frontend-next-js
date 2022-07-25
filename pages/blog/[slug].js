import {useRouter} from 'next/router'
import BaseLayout from "../../components/Base-layout";
import ImageGallery from 'react-image-gallery';
import {faRightLong, faLeftLong} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './../../styles/pages/post.module.scss'
import Link from "next/link";
import Image from "next/image";
import signature from '../../public/podpis.png'
import andrasiova from './../../public/andrasiova-kontaktni-foto.png'


import {Container, Row, Col} from "react-bootstrap";
import Button from "../../components/Button";
import Title from "../../components/Title";
import Property from "../../components/Properties/Property";
import Api from "../../db/api";
import {APP_URL} from "../../globals";

export async function getServerSideProps(context) {
    const {slug} = context.query;
    let blog = await Api.get('/blog/' + slug)
    const coverImage = blog.data.medias.filter(image => image.pivot.role === "cover" && image.pivot.crop === "default")[0]
    return {props: {blog: blog.data, coverImage}}
}

export default function PostPage({blog, coverImage}) {
    return (
        <BaseLayout>

            <Container>
                <Row>
                    <Col xl={8}>
                        <div className={styles.leftSite}>
                            <h1 className={styles.title}>{blog.title}</h1>
                            <p className={styles.date}>30.30.2002 (dodělat)</p>
                            <div className={`contentStyle ${styles.content}`} dangerouslySetInnerHTML={{__html: blog.description}}>
                            </div>
                            <div className={styles.signatureContainer}>
                                     <Image src={signature}/>
                            </div>

                        </div>
                    </Col>
                    <Col xl={4}>

                    </Col>
                </Row>
            </Container>


        </BaseLayout>
    )
}


