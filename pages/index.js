import BaseLayout from "../components/base-layout";
import Image from 'next/image'
import logo from '../public/andrasiova-logo.webp'
import {Container, Row, Col} from 'react-bootstrap'

export default function Home() {
  return (
   <BaseLayout>
        <Container fluid={'xl'}>
            <Row>
                <Col>
                  <Image src={logo}/>
                </Col>
            </Row>
        </Container>
   </BaseLayout>
  )
}
