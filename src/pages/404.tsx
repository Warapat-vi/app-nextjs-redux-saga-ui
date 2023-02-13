import { connect } from "react-redux";
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router'



const error404 = (props: any) => {
    const router = useRouter();

    const homepage = () => {
        router.push('/', undefined, { shallow: true });
    };

    return <Container>
        <Row className="mb-3">
            <Col>
                <h1>404 - Page Not Found</h1>
            </Col>
        </Row>
        <Row className="mb-3">
            <Col>
                <Button
                    variant="primary"
                    onClick={() => {
                        homepage();
                    }}>Go to home page.
                </Button>
            </Col>
        </Row>

    </Container>
}

export default connect(null, null)(error404);