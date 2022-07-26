import BaseLayout from '../components/Base-layout'
import styles from './../styles/pages/post.module.scss'
import Image from 'next/image'
import signature from '../public/podpis.png'
import { Container, Row, Col } from 'react-bootstrap'
import Button from '../components/Button'
import Api from '../db/api'

import Post from '../components/Blog/Post'

export default function KontaktPage() {
    return (
        <BaseLayout>
            <Container>
                <Row>
                    <Col xl={8}>bvum</Col>
                </Row>
            </Container>
        </BaseLayout>
    )
}
