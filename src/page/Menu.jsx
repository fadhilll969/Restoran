import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function Menu() {
  return (
    <div>

      <div>
        <Row className="justify-content-center mt-4">
          <Col md={8}>
            <input
              type="text"
              id="searchInput"
              className="form-control"
              style={{
                height: "40px",
                fontSize: "15px",
              }}
              placeholder="🔍 Cari nama makanan..."
            />
          </Col>
        </Row>
      </div>

      <div className="mt-5">
        <Container>
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col
              className="d-flex"
            >
              <Card
                style={{
                  transition: "transform 0.4s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
                className="h-100 w-100 shadow-sm rounded-4 transition-all duration-50 hover:scale-105 hover:shadow-md overflow-hidden">
                <div style={{ height: '230px' }}>
                  <Card.Img
                    variant="top"
                    src="data:image/webp;base64,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"
                    style={{
                      height: "230px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="fw-bold fs-5 mb-1">
                    Es teh
                  </Card.Title>
                  <Card.Text className="text-muted small flex-grow-1 mb-4">
                    Lorem ipsum dolor sit amet.
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center border rounded-3 px-2 py-1 bg-light">
                      <button className="btn btn-sm p-0 border-0 text-muted fw-bold" style={{ width: '20px' }}>−</button>
                      <span className="mx-3 fw-semibold small">
                        1
                      </span>
                      <button className="btn btn-sm p-0 border-0 text-success fw-bold hover:bg-blue-500" style={{ width: '20px' }}>+</button>
                    </div>
                    <div className="fw-bold text-secondary fs-6">
                      Rp 5.000
                    </div>
                  </div>
                  <button
                    className="w-100 py-2 fw-semibold text-white border-0 btn btn-danger"
                    style={{
                      borderRadius: "10px",
                    }}
                  >
                    Beli
                  </button>
                </Card.Body>
              </Card>
            </Col>

            <Col
              className="d-flex"
            >
              <Card
                style={{
                  transition: "transform 0.4s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
                className="h-100 w-100 shadow-sm rounded-4 transition-all duration-50 hover:scale-105 hover:shadow-md overflow-hidden">
                <div style={{ height: '230px' }}>
                  <Card.Img
                    variant="top"
                    src="data:image/webp;base64,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"
                    style={{
                      height: "230px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="fw-bold fs-5 mb-1">
                    teh
                  </Card.Title>
                  <Card.Text className="text-muted small flex-grow-1 mb-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center border rounded-3 px-2 py-1 bg-light">
                      <button className="btn btn-sm p-0 border-0 text-muted fw-bold" style={{ width: '20px' }}>−</button>
                      <span className="mx-3 fw-semibold small">
                        1
                      </span>
                      <button className="btn btn-sm p-0 border-0 text-success fw-bold hover:bg-blue-500" style={{ width: '20px' }}>+</button>
                    </div>
                    <div className="fw-bold text-secondary fs-6">
                      Rp 30.000
                    </div>
                  </div>
                  <button
                    className="w-100 py-2 fw-semibold text-white border-0 btn btn-danger"
                    style={{
                      borderRadius: "10px",
                    }}
                  >
                    Beli
                  </button>
                </Card.Body>
              </Card>
            </Col>

            <Col
              className="d-flex"
            >
              <Card
                style={{
                  transition: "transform 0.4s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
                className="h-100 w-100 shadow-sm rounded-4 transition-all duration-50 hover:scale-105 hover:shadow-md overflow-hidden">
                <div style={{ height: '230px' }}>
                  <Card.Img
                    variant="top"
                    src="data:image/webp;base64,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"
                    style={{
                      height: "230px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="fw-bold fs-5 mb-1">
                    teh
                  </Card.Title>
                  <Card.Text className="text-muted small flex-grow-1 mb-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center border rounded-3 px-2 py-1 bg-light">
                      <button className="btn btn-sm p-0 border-0 text-muted fw-bold" style={{ width: '20px' }}>−</button>
                      <span className="mx-3 fw-semibold small">
                        1
                      </span>
                      <button className="btn btn-sm p-0 border-0 text-success fw-bold hover:bg-blue-500" style={{ width: '20px' }}>+</button>
                    </div>
                    <div className="fw-bold text-secondary fs-6">
                      Rp 30.000
                    </div>
                  </div>
                  <button
                    className="w-100 py-2 fw-semibold text-white border-0 btn btn-danger"
                    style={{
                      borderRadius: "10px",
                    }}
                  >
                    Beli
                  </button>
                </Card.Body>
              </Card>
            </Col>

            <Col
              className="d-flex"
            >
              <Card
                style={{
                  transition: "transform 0.4s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
                className="h-100 w-100 shadow-sm rounded-4 transition-all duration-50 hover:scale-105 hover:shadow-md overflow-hidden">
                <div style={{ height: '230px' }}>
                  <Card.Img
                    variant="top"
                    src="data:image/webp;base64,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"
                    style={{
                      height: "230px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="fw-bold fs-5 mb-1">
                    teh
                  </Card.Title>
                  <Card.Text className="text-muted small flex-grow-1 mb-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center border rounded-3 px-2 py-1 bg-light">
                      <button className="btn btn-sm p-0 border-0 text-muted fw-bold" style={{ width: '20px' }}>−</button>
                      <span className="mx-3 fw-semibold small">
                        1
                      </span>
                      <button className="btn btn-sm p-0 border-0 text-success fw-bold hover:bg-blue-500" style={{ width: '20px' }}>+</button>
                    </div>
                    <div className="fw-bold text-secondary fs-6">
                      Rp 30.000
                    </div>
                  </div>
                  <button
                    className="w-100 py-2 fw-semibold text-white border-0 btn btn-danger"
                    style={{
                      borderRadius: "10px",
                    }}
                  >
                    Beli
                  </button>
                </Card.Body>
              </Card>
            </Col>

            <Col
              className="d-flex"
            >
              <Card
                style={{
                  transition: "transform 0.4s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
                className="h-100 w-100 shadow-sm rounded-4 transition-all duration-50 hover:scale-105 hover:shadow-md overflow-hidden">
                <div style={{ height: '230px' }}>
                  <Card.Img
                    variant="top"
                    src="data:image/webp;base64,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"
                    style={{
                      height: "230px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="fw-bold fs-5 mb-1">
                    teh
                  </Card.Title>
                  <Card.Text className="text-muted small flex-grow-1 mb-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center border rounded-3 px-2 py-1 bg-light">
                      <button className="btn btn-sm p-0 border-0 text-muted fw-bold" style={{ width: '20px' }}>−</button>
                      <span className="mx-3 fw-semibold small">
                        1
                      </span>
                      <button className="btn btn-sm p-0 border-0 text-success fw-bold hover:bg-blue-500" style={{ width: '20px' }}>+</button>
                    </div>
                    <div className="fw-bold text-secondary fs-6">
                      Rp 30.000
                    </div>
                  </div>
                  <button
                    className="w-100 py-2 fw-semibold text-white border-0 btn btn-danger"
                    style={{
                      borderRadius: "10px",
                    }}
                  >
                    Beli
                  </button>
                </Card.Body>
              </Card>
            </Col>

            <Col
              className="d-flex"
            >
              <Card
                style={{
                  transition: "transform 0.4s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
                className="h-100 w-100 shadow-sm rounded-4 transition-all duration-50 hover:scale-105 hover:shadow-md overflow-hidden">
                <div style={{ height: '230px' }}>
                  <Card.Img
                    variant="top"
                    src="data:image/webp;base64,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"
                    style={{
                      height: "230px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="fw-bold fs-5 mb-1">
                    teh
                  </Card.Title>
                  <Card.Text className="text-muted small flex-grow-1 mb-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center border rounded-3 px-2 py-1 bg-light">
                      <button className="btn btn-sm p-0 border-0 text-muted fw-bold" style={{ width: '20px' }}>−</button>
                      <span className="mx-3 fw-semibold small">
                        1
                      </span>
                      <button className="btn btn-sm p-0 border-0 text-success fw-bold hover:bg-blue-500" style={{ width: '20px' }}>+</button>
                    </div>
                    <div className="fw-bold text-secondary fs-6">
                      Rp 30.000
                    </div>
                  </div>
                  <button
                    className="w-100 py-2 fw-semibold text-white border-0 btn btn-danger"
                    style={{
                      borderRadius: "10px",
                    }}
                  >
                    Beli
                  </button>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </div>
    </div>
  )
}
