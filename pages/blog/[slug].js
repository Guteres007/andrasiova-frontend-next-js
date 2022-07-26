import BaseLayout from "../../components/Base-layout";
import styles from './../../styles/pages/post.module.scss'
import Image from "next/image";
import signature from '../../public/podpis.png'

import {Container, Row, Col} from "react-bootstrap";
import Button from "../../components/Button";
import Api from "../../db/api";
import Post from "../../components/Blog/Post";

export async function getServerSideProps(context) {
    const {slug} = context.query;
    let blog = await Api.get('/blog/' + slug)
    let posts = await Api.get('/blog')
    const coverImage = blog.data.medias.filter(image => image.pivot.role === "cover" && image.pivot.crop === "default")[0]
    return {props: {blog: blog.data, coverImage, posts: posts.data}}
}

export default function PostPage({blog, coverImage, posts}) {
    return (
        <BaseLayout>

            <Container>
                <Row>
                    <Col xl={8}>
                        <div className={styles.leftSite}>
                            <h1 className={styles.title}>{blog.title}</h1>
                            <p className={styles.date}>30.30.2002 (dodělat)</p>
                            <div className={`contentStyle ${styles.content}`}
                                 dangerouslySetInnerHTML={{__html: blog.description}}>
                            </div>
                            <div className={styles.signatureContainer}>
                                <Image src={signature} alt={"podpis"}/>
                            </div>
                        </div>
                    </Col>
                    <Col xl={4}>
                        <div className={styles.rightSite}>
                            <div className={styles.rightSiteOverlay}/>
                            <h2 className={styles.rightSiteTitle}>
                                Další články
                            </h2>
                            {posts.map((post, index) => {
                                return (
                                    (<Col key={index} xl={12}>
                                        <Post data={post} isRelated={true}/>
                                    </Col>)
                                )
                            })}

                            <div className={styles.loadMore}>
                                <Button>
                                    Načíst další články
                                </Button>
                            </div>

                        </div>

                    </Col>
                </Row>
            </Container>


        </BaseLayout>
    )
}


