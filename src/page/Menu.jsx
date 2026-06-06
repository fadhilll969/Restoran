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
                    src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop"
                    style={{
                      height: "230px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="fw-bold fs-5 mb-1">
                    Nasi Goreng Spesial
                  </Card.Title>
                  <Card.Text className="text-muted small flex-grow-1 mb-4">
                    Nasi goreng dengan telur, ayam suwir, dan sayuran segar.
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
                      Rp 25.000
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
                    src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop"
                    style={{
                      height: "230px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="fw-bold fs-5 mb-1">
                    Mie Ayam Bakso
                  </Card.Title>
                  <Card.Text className="text-muted small flex-grow-1 mb-4">
                    Mie ayam klasik dengan bakso sapi pilihan dan pangsit goreng.
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
                      Rp 18.000
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
                    src="data:image/jpeg;base64,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"
                    style={{
                      height: "230px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="fw-bold fs-5 mb-1">
                    Ayam Geprek
                  </Card.Title>
                  <Card.Text className="text-muted small flex-grow-1 mb-4">
                    Ayam crispy dengan sambal geprek pedas level 1-10
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
                      Rp 15.000
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
                    src="https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop"
                    style={{
                      height: "230px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="fw-bold fs-5 mb-1">
                    Soto Ayam
                  </Card.Title>
                  <Card.Text className="text-muted small flex-grow-1 mb-4">
                    Soto ayam khas Jawa dengan kuah kuning gurih dan emping
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
                      Rp 20.000
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
                    Es Teh Manis
                  </Card.Title>
                  <Card.Text className="text-muted small flex-grow-1 mb-4">
                    Teh manis dingin segar, teman makan yang pas
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
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhMSEhMVFRISFRcVGBUVFRUVFRUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0fHSUtLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS03LS0tK//AABEIAMIBAwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAQIDBQYAB//EAEUQAAEDAgMFAwkGBQEHBQAAAAEAAhEDIQQSMQVBUWFxIoGRBgcTMnOhscHCFCNCUtHhMzRy8PFiFVNjgpKy0hYkQ6LD/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJREAAgICAgICAgMBAAAAAAAAAAECEQMxEiEEQRQyIlETYYFC/9oADAMBAAIRAxEAPwCz88joxVH2H/6PWPwlGQCtr54GTiaPsfresZg6sCCglliyNF1Skh/SSbKRxcmBwGWFaUXSFWsuiqRQAQSojWMJajoUJkpDIySo3kJXFRlqAEaQmPcJTwEkhAyCpXAMJwxIGqY5omUx1NICZuJaVJSpzcaKtfTuicPUMtYLSQPFABlPDF9mgkj+9UQzZgPrVWtPC7vgtDsHZzalMCYg9vjPRX2GwFBgswE8TcrCWZLZXExH+wqe+s3w/dVlXC0mn1nHoF6j6Jm5rfAKF1Bn5G+AUfJj+g4nldajS3+k8AoTRonfU/8AqvWHYWmdWN8AoKmzKB1pt8Aj5Uf0HE8vpYGlue8dWg/AqU7JLgSx4dG4gtK9BrbAw5/AB0sgP9hsaTlkd8hUvIgwowZwzmGCIR7QrvbGz+wWnVoLp4WtdZxtRw3raMrQmgxpKcWyLqBlSVMySqEcyRonMBTmUoF1FVCAJWptRhQpJCjqvdxSAJuuVaa54pUAb/zt/wA1R9j9bljGNW+859IHE0p/3P1uWRFNiuiWAlwCnFQkKcUGalStDQigA6Uyj8O7io4akLgEUAc2nKVzQUGysU/0h4HwKKGDYhkFMOile1zjcFc6keB8EgBC5QVXI84fiCkNFvAoAAAKaHFWZw6T0I3CUUMrXsldh2w5p4OB8CrduEG9Obhm8kNAauhhmyHsPrbwYI5Hj3oztfmPeB8llMHjXC06Kzp7UdxXkzn32jZIuAXcR4J+Y8vH9lW09pdFO3HA7lnziFBmc8B4/suA6eP7KBuJHBPFYJ8kFE1hvHgUNiQCLZj0ge+6nBBRNIdlUpIKMxtzDluHqEiBFh1IEniViRTleheU5BpFvEj4rJNo30Xf47bjZnLZWDDkFF0gjPQgrm0F0USB4itZC+lR76Am6UYQDcigKp7imuMq4bhW8En2Zo3IoChdTXK7NAcFyVAa3zq1IxNIf8H63LFh5Wv87X8zR9j9bligFoiGEF5O9Ob1Q7SrTZOFzS8iQLAHSdZI3xwSlKgSsZRwpN3HK06E6noNSiBRaNGyeLv/ABCucJsV7+285Qd5u49BwVnTwlCn+Gebr+7RYTzRWy6MuxlR3qtJG/K23fChr03tBJabAn1StbV21Ra0jOwAbgR8AqmvtplejUDGmCC2TA6GOC55+UktBX9mY2fXc95YZM6RrbVHnCu/1DxS+S1AenB3taTfw+a173Dlfos8PkNR77FFdGO9CeLvFSMDvzHvgrVupg7ghauGb+ULf5MfaK4lA5p3gHpYqOlV9Yb2mFb4jDtu2mCX8JsJ0LjuCDq4MUxEySZc7i4jdyC0jkTaoddAVQrmgKR1C8ylDV0EA1Iw4o3MgT65RYXkZlUmbLQTTciKbkJTRFNc9DDKb0TTcgqZRNMpAGMcj2HsBVlMqzPqjoqjsZR7eMgDmqf0SttrG7R1QDivW8dVjRlLYI5l011OFK910oqTZdBIK6lJSFhG9TOfB0TgZQIGauOqJ9GeCb6BIYMQFym9GuQBeedj+Zpex+t6xLrhbbzsH/3NL2P1uWJlUiHsRrVudm7Pbka+m7JIDo9Zs9D8lhVrtk7QLaTAdIH6Ln8h8VZcC4q162/I7mCW+4z8ULi6AqiHsdHUfIpzMew8lKKjD+LxXByTLaMhtDydqAn0LXQeMfqE3AbCxIBDpE9PktcMKzUHwc4fNStpcz/1H9VMkmZ/xmbwOAr0JIBe8AxDYkn808OSn2DgK/pTWxIOYi1wQ08gFe/Z5Op/6j8JUjacafFKl6KURzyY0HeY9wkoZzZ1M8vVH6+9GDC75HcFKzDtHPqqui6BadIkRFukBAbeogMaB+b5FXpcqbbglo/q+RWmKV5ED0Z5zVHk4SijRgxKkptI3L0zIq6g7XcjG6Ju0WQ5vMJ9LReX5K/Jm0dErAp2KJimauRjJmIhhQ7FOxIYTR1VpV0aOSq8PqFY4g9po/0n5K4Ayh2we2AOCCg6I/HeueSDqOM2Xs4uoJGMtkYww3p5ogXSQd6QtWghKlMFK2mE4UzuSPYQkBIGDRI9pSNeAblI58nVACZRwXKS65AE3ndn7TRj/c/W5YcFbnzuMnE0fY/W5YgU1SJYtwrnBv8Auhyn4lVTWqzwPqHkf3WHkK4FR2PFWFOyueKEKe1ea0aB7cUeKnZiiq1pUzCs3EdlpTxJU7K0lVlIoqibhJoC/a6wXZlGzQJwTGOVdtUSO9WAQWObPitcL/NEvRVClvT21BpCmcLWXMJjS69WyKKralMjITxKjoaIva5JDZ3O+SFoaLz/ACtmkdErVO1QhSsXEyiZimYVA1TNSAMwmoR2IP3kcGfNBYH1gp6j5rvHBg+K1xewZXYtpLiomYbeUe9okphg2XsR0jEgbhhEoerS4o3KlNMFVYUV7BvSuaSjW0QNApHNCLCipdT8UrmKzfS3phoBKwABTK5GZVyLHQV5zMPmr0j/AML63LIMwa3PnBpzXp8qf1OWZZTVIzZXfZIKmpNgRxRjmqKu2B3rPL3FlR2BPCVqdVF0gXmM0HBSsUYUjFDAIpomjqhqaJo6qWMvqXqhOSUvVCVAzkDtHTvRyA2ibd60w/dCYGAbQpQ6yGBClZVvC9YgH2qOyP6gg6Ygkc0dtCCzvHxQdQQ9y4vKRcRykYVEXJWvXntFBLSpgUI2ouqY1jdXD4pAXOzvWCUfzFXoAqeht1rDLWl3UwF1PbBL3PyjtdVpjlFXYmWlTqkpthV42re7Rfgf2RNLFsJiYPAr04Z8ctMgJJhJmTnBcGLYQzMkbJKkDEl0wHU3nRK8HkmNYmvYUAPyLk0LkgDPOFUivT9n9TlljUkb1pfON/MUvZfW5ZSSmSEuq8Qo675aePDokLpUTxzUy0xoSpuTQE8eqEwLzZFjgnsTAntWbAIap8O66HCnw+qQzR0fVCUpKHqhK5SMa5V21T2e9WBVVtp4aySYAI+a0xfZCKwPNuKIz3VJU2swTr3BINuNtAJ7wvU/kivYlCT9F5XdLY5j4ofHWeegQI2zTJDSHAuIFxbXij9sesDyjwXPnalF0WotbBHVUBiNouFTI0CwlxPPQAcU+o9UVftlzjIzWG4wNCuFRCRZ4nEPfaYb8UjHQI3qnxOJdSyhgnNYDUf5Rnon2IMO56X5BJwpdsiiza0khFMfAvaL6qtwlJ8dtxmN1veES3BCJ1BvEk2WLqx0G0sXTcJDg5ptY7zzRtGoSJymBxHzvKrsHg2GLeqfylul+N+qvcOwAcufBPlGOhuINg8adWmQNW/pwVtQrteJH+EC3CMaeyBJ/wA/P3pjpYZb/nkurH5XB09EtFvm8EhUVGrmAI/wpYXpp32hHAFKliVyoQ0jklXLkAP8438en7L63LLsbbctL5yf49P2X1uWRm0zp70EhAMaqN8KJqlLBCQC0xYhMUzd3MfBRkLzcipmpwT2pgT2rJgThT0NVAxTUdVLGaPDeqE5ybhPUCeUMZGVReVX8B/97irtxVR5StnDv6H4FXjXYLZ522qwTJcepQ1YM1EjfZy6kaf4gNeakqBl8rR4LW2dnVheG2m1xYI9Uga31F1rcbUa8FocJFxzWGobNquhww73AHUNII59FpK+yKvpPuznEGCAQBI569ypTiouzKaTZX7drmlTc4i5sOpMKlwtdxDSdQAtTifJp9UBr3kAEEiCZcOvNL/6TH5z4BYPLjSpGE4lJS56agniimtcSIIib216KetsCqw9ntDnaEP2mHK8ZTunf0O9ZSd9oXGizoxaUVhzf4Koa8gC0yYO6BuVhg3cflpK55R6KRaMIjpqpsIIjhMAcosgQ83IEndOhI0RVEzqQOU+6Ul0FFs0g30PRD1WXlNFSx5HTluUFStm7O8AWmNeapqxD8LWyvg6O+O4q0BCp30sw0/ZWGCrz2XeuPfzXo+Fn64S/wAIaCASdNE8N1ld1Auked0L0SSMs5rk8uPBcgBPOW+MRSHGlr/zuWSBb07t61vnLP39P2Xf67lkAOJ6JkjqbhNgZT85O63RRvcBvUjXnUWEak69AolNR2XGDloSm+8cD8U9yFFXMSRpI74lF1OK4Mr5do1lGuhAnNTAntWLJJ2qSkbqFqlp6pMDS4I9hPcVFgT2EtUpDIqjlU7bqTRew/iBFtbghHV6oAJVJjKwdAOhMnoLqoy49jiuzN4LyVe93rEM3k3J6LZ7I8maVIAht+JufFGbGALZ4iwO4cZV3RpzpoFzSySkbybYE3BDgpmUhuCMNL3fHgosS0xAWLTKUERPaw+tHXehalAfhLT33QOMaVWVKpHHqimJpFrVpjeEFitnhwMQRwIkHkQgzjyBcyOcmETgtqMNiYPWQU+0S4JlTidkj/4+wYjIR2bcDuVRiHvYS3LDgNDa+7uW22hVYGZzoqF7W4gPGlSl32PPoRyWse+zPiwTAV3FjS+zt4myPoVRMzOu7fvVTiWlnZMdQbEJtGtBIm08Uq9ktl86pz70gmb/AN+CqvtPcnjEOLTldlO4xPuQkIuaRIdpbXXfvEKctkbpmx/dV1PFdkTBMai2gvZJgsRmeRu5e5V76JbLqhi7hr7Hc7ceqMzKhx+Ja0DM68Rl3iN8/JWGwsX6WmT+UxJ4bl6XjZ3J8ZElhlH5ki4k8Vy7RDfOYR6enMfwvrcsVUxBEXEArXedKpGIpex+ty8/NfNM7rJTlxVhCPJ0PrYqq905AGA2l0E89FANpuqPNMAnLaBoP+bRM2hjcoa3XOQ3xUlOplENgcf3XnyfLtndGoqkWezsSH56eUtdTAkHfJMEHuKsGmQFQeTFfPVrHNNoG71bx71oCyJjSfDkUmuqIyK1Y2E4Jsrg5ZMxJmlSMN1AHJ7XJAaXAn7tdXcosA/7s9FHiq0Nnkj0BVbXxcdlAYGia3pII7IAvuLiR9JRVDY9TEMq4gnJRZMOOr3aBrP1Q+wuy4tB1Im0Xbb9UssXGNsqJpsM3K1rZ0AHgEbg65DuHRVmIqhrST+G+8+4LsBiw5gc0z+s3XHZ0pWrNFg6hL3tOgAI75upMQ2yG2LUflOcXm3MRqiay3pcbJvspcZTVHi2wtHimKlxbQsRsoq6r6joMhWWLEXGir6+U3HFWkSWOHcK1PI50FtxCOw2xnUw8yCXmZBM/wCk30WfogyI4x4rd7OH3bQbkCEra6Lb/GjFbZ2RWBc4gZWQQGm7p/uFW0qZjPfvtB+a3e2biDEQeRCzW3KB9C2DBaY/rabX5yB4rWL5KjlaroqxWbAnUJrq4G5VD65BhMdiitFiIdlsMYNBZT4LaWV0hZ01ypsLVLjAE9J+Sp4iaZbbbrOqiQMomDe7idAOq23krsl1DDNz2c7tOG8Dd3/qs67ZLqVGnXqh0tdLaRsTzdzNrLV4CgajC95dJGhcbTu4BVCXHR048PVyDQeiRRC1p05FcvTXZzMA88Z+/pex+ty85wTy4EDSSSfhC9G88bT6el7H63LzHAvu5mmY36AEn4KM31Kw/YdtKs3sEOu1w/e6kpNL2ZpgO0ncP1UdfCvrU3BgaB+GBqR8BzRtCs00Q82gZY35tIjjK5PR1jdhfx3UmOg6g88th3kL0uhU7IdVs6O0wjNci+s2XleDo1aWKpVg0huZusXE/l3r1LZerjLsr3ZWscbidwJnKBv5LWMUzKc6M3jyW1WhjSadR7wHTYRB3Wi8dyndhnRIvytOkq58psNmAYyiWsozmcGODCCQL5jLoM3iLrPswo1HuTeC+7IWRe0RYbFF5IDSIMSdO6JRTvSD8E9HNHxIUbiDEGOMQJ9yXOT+I+AKh+M/QKcA/A7RqluUNid7spFjyJlR48VXAZnMawzMdmNLchcaSUMyq4WzgD+mfmEXlL6dMtI/iVA5zsogtFPKQCbesdOCIYX70OUof8l1tivijhgxvo6eGYGjPlu6dA2fpCyezq3o3mTyniJsffHcrrypdVp0qRqkmiwZWMmMzhqTOpNrlef1cbmcXlpDuIO7gLxCjyI8uisas9Po1A4ApafrQIy7+MrE+Tu1XF2UkxulbLD1hqvMyRceiounTNRsp8tE7rcktdpUWysQ1zcu/XqjKsQtY9wQ7plViuipceQNRKvMQ6Cs7tOpeb+IjwWdFNlHtB0aabuKrAd3BH4rDuc7si+4DU9ytdlbDyw+rFtGajq7j0TbSEuxNgbGJ+8qCG6tG881oKfZPAbua7047kFicUJuT0Ci7G2kTYmqCCLGxF9LrJ7QwIhwaY0iS5wBF95n3q1x2LaLkwBuWSxu0atZxbSADR6znSAAtcSk2Yv8ukUuLouzkmABqeYsdFZ7E2TTeM1TM4cGuDfeQnYXYFarMglk2JEB19cvDgFYV9mvaPQtnMdSJaWjeTC7HJaNY417Ra7B2ZhHOc4Um5W6ek7dxrYzJRWEpM+1vdSa0AAN7AAGk6DfdTYF1PDYcZIc42MGSTuEorydwQptc9xDS8l5Avc3171m97Nkkloi8sKkYZ5JMgA7rXsZT/Jqs+pS5Rad/MlUvl7jy9tPDtu6s8Ax+Qdp3wA71dbMqMp0gzO1pIgNkA+HyQv2N/osO0LR8FyHbUJG9Ku2LlSOR8bF86lIOr0/ZfW5eTbQoFr5G+3jZex+cb+PT9l9Tl5Zt5haZAuN66JK0c0XTLHYQikA4FoBiY1kTbx10Q21dnhtRlRpmm12d7Zabx2XW4WTMPizXbkMxAy8ARyVnsmqCHU6nrsJad39J6EQvNd2egqqyCtRFUTu1n5qxw/lLUpvb6RjHfZhOYS3MDcl2su5jigMZgy5p9EYmeyNDYju19y7DVQQabwPSCzmkWI07wnGbjphKEZbRph5a03uL3UqjQWuY9lnyHgTGnBqz1HbdF1mujgC0g24jchqv3ZlrPuyCXGRDTIiQTIBgpmOyGnmLDYagXBkCZ4QZ7iq/nkL48TQ4XyihuRpZ1GWfgoMRWY45nSSqTZxBbeHf6iLgxof73I1+xAY7MG92kg90RzR8mS2L48fRYNYx5sw6fhJEc72TtrUg1lP8FJoIBcbudYuJH5i4n3KmfgnsuKrxuAzEyeF9AB8kJja73Na15s103dNz6xjmIHctH5MZRoheO07BfKLalbEuaHvGWmMrRuA1JtqefJUIpVm8CATEOGh6q8xFQbmnhB07kFjBazYP98FnGf7NHCgWjiqrDIaZGtxELY7A8owYY+06Hnwd+qwz3HeCfFD/agx0tBHf+qJ4VkRlL+z27CY2Lgq2o7VO+/VeObJ8qHsEG7Ru1Wlp+U1MgX99wuCWCcH0CkzeVcS1yAr4djvWJI4aLP0vKCm78Xcpqm2mgarKpj5ouqTWN9UAdNfFLUrgLMVPKJnFV+I8oS6zQRzKaxS9kuTZqMZtFrR2iAqHFbZzH7vtE8N6qcJhauIf2Q4nQkmw58lr8D5LNpAGs4AngdVvHGkVHHeylw+zC85quZxP4AYaOruPIDvVvg9lPgOLcrWaNa1paJ/FJOvNW2GxtKl2KTS88Ybm8WgBTfYKlTtVuy3c2bETaTKvo6IxrRnMTgjiDloCSbZnXDSDe51VlR2Q2gztiajbWJM8euihr7aIJbhwcrTBy5ZJBiATACtMFVMzUzAC9269SDfvKC22yq2Pg6j3F7mhrjucLtaLge/3p3lJin06cNcZNhBEk7rERH6IraO2QTlojtA6xp/fBR4HC6vrFxOug8JIt3IQA3kzsf0gFXFOLqgETDWRv3CSrHFVKbbZQZMAkSRNhqldjwRDLCRwg9/v7kNRw5dUzH1AZHMj5LaEXN0jKclBWw2kS1obcwAJ105pFLl4T4rl6aPPsJ84Q+/Z7L63Lz/AG0Oz/fBKuQyDM7DP3h/q+SvMeYrg7y2/OCIlcuXBl+7O/H9Cx2Qdeh/7lDtpggGBIIvv8Vy5Y+zVEuHHbpjjTM87b1B5K/xMW38IAhu4etoNFy5S9FvYLjaTWuqBoDRY2AF55LSMP3Z6D/uC5clICTEMGSYEiN3NUW16YmIEGm8m2pERKVcpjsoyVZxBgGBBsLKwxvzXLlrLaJRS4j5oWvoOq5cuiBz5CKodE5p+SVcrkYPYYwWPQKdjjAudVy5c8gCapTAe2BukLlyzWi1s9f8mqYGGBAAOXUCDvVFtd5LoJMTpPVcuUyOuJqNh0WjDyGgGTcATqd6rttuMNubxPPqlXIYewjA0m5IyiINoELKbeeW/aA0kBrGkAWAMi4G4rlyColZs+s7I05jOQXkzqN60mzRNKTc5jc3PiuXJvQeyvm7P6h8StSNP74rly6/E0zl8raGVNSkXLl2HIf/2Q=="
                    style={{
                      height: "230px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="fw-bold fs-5 mb-1">
                    Jus Alpukat
                  </Card.Title>
                  <Card.Text className="text-muted small flex-grow-1 mb-4">
                    Jus alpukat murni dengan susu kental manis
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
                      Rp 8.000
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

      <div className="mt-5">
        <nav className="d-flex justify-content-center">
          <ul
            className="pagination"
            style={{
              '--bs-pagination-active-bg': '#dc3545',
              '--bs-pagination-active-border-color': '#dc3545',
              '--bs-pagination-color': '#dc3545'
            }}
          >            <li className="page-item active">
              <span className="page-link">1</span>
            </li>
            <li className="page-item">
              <span className="page-link">2</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
