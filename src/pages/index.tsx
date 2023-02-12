import { useRouter } from 'next/router';
import { Nav, Container, Row } from 'react-bootstrap';
import { connect } from "react-redux";
import {AuthState} from '../store/rootReducer'

const mapStateToProps = (state:AuthState) => ({
  auth: state.auth
})

const Home = (props: any) => {
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
        <h1>{props.auth.token}</h1>
      </Row>
    </Container>
  )
}

export default connect(mapStateToProps, null)(Home);