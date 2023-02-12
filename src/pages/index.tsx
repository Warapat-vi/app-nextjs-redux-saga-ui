import { useRouter } from 'next/router';
import { Nav, Container, Row } from 'react-bootstrap';


export default function Home() {
  const router = useRouter();

  return (
    <Container>
      <Row>
        <Nav>
          <Nav.Item>
            <Nav.Link onClick={() => { router.push('/', undefined, { shallow: true }) }}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => { router.push('/login', undefined, { shallow: true }) }}>Login</Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>
      <Row>
        <h1>Hello World!</h1>
      </Row>
    </Container>
  )
}
