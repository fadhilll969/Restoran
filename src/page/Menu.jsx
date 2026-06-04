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

      <div>
        <Container>
          <Row xs={1} md={4} lg={4} className="g-4 mt-3">

            <Col
              style={{
                transition: "transform 0.4s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}>
              <Card className="h-500 shadow-sm rounded-4 transition-all duration-50 hover:scale-105 hover:shadow-md overflow-hidden">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src="data:image/jpeg;base64,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"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>

                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="fw-bold fs-5 mb-1">
                    teh
                  </Card.Title>
                  <Card.Text className="text-muted small flex-grow-1 mb-4">
                    ppp
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center border rounded-3 px-2 py-1 bg-light">
                      <button className="btn btn-sm p-0 border-0 text-muted fw-bold" style={{ width: '20px' }}>−</button>
                      <span className="mx-3 fw-semibold small">1</span>
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
              style={{
                transition: "transform 0.4s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}>
              <Card className="h-500 shadow-sm rounded-4 transition-all duration-50 hover:scale-105 hover:shadow-md overflow-hidden">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src="data:image/jpeg;base64,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"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>

                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="fw-bold fs-5 mb-1">
                    teh
                  </Card.Title>
                  <Card.Text className="text-muted small flex-grow-1 mb-4">
                    ppp
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center border rounded-3 px-2 py-1 bg-light">
                      <button className="btn btn-sm p-0 border-0 text-muted fw-bold" style={{ width: '20px' }}>−</button>
                      <span className="mx-3 fw-semibold small">1</span>
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
              style={{
                transition: "transform 0.4s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}>
              <Card className="h-500 shadow-sm rounded-4 transition-all duration-50 hover:scale-105 hover:shadow-md overflow-hidden">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src="data:image/jpeg;base64,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"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>

                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="fw-bold fs-5 mb-1">
                    teh
                  </Card.Title>
                  <Card.Text className="text-muted small flex-grow-1 mb-4">
                    ppp
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center border rounded-3 px-2 py-1 bg-light">
                      <button className="btn btn-sm p-0 border-0 text-muted fw-bold" style={{ width: '20px' }}>−</button>
                      <span className="mx-3 fw-semibold small">1</span>
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
              style={{
                transition: "transform 0.4s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}>
              <Card className="h-500 shadow-sm rounded-4 transition-all duration-50 hover:scale-105 hover:shadow-md overflow-hidden">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src="data:image/jpeg;base64,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"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>

                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="fw-bold fs-5 mb-1">
                    teh
                  </Card.Title>
                  <Card.Text className="text-muted small flex-grow-1 mb-4">
                    ppp
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center border rounded-3 px-2 py-1 bg-light">
                      <button className="btn btn-sm p-0 border-0 text-muted fw-bold" style={{ width: '20px' }}>−</button>
                      <span className="mx-3 fw-semibold small">1</span>
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
              style={{
                transition: "transform 0.4s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}>
              <Card className="h-500 shadow-sm rounded-4 transition-all duration-50 hover:scale-105 hover:shadow-md overflow-hidden">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src="data:image/jpeg;base64,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"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>

                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="fw-bold fs-5 mb-1">
                    teh
                  </Card.Title>
                  <Card.Text className="text-muted small flex-grow-1 mb-4">
                    ppp
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center border rounded-3 px-2 py-1 bg-light">
                      <button className="btn btn-sm p-0 border-0 text-muted fw-bold" style={{ width: '20px' }}>−</button>
                      <span className="mx-3 fw-semibold small">1</span>
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
