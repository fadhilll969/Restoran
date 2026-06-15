import React, { useState } from "react";
import { Modal, Card, Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function User() {
    const location = useLocation();

    const [show, setShow] = useState(location.pathname === "/");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    if (location.pathname !== "/") {
        return null;
    }

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post(
            "http://localhost:8000/login",
            {
                email,
                password,
            }
        );

        alert(response.data.message);

         localStorage.setItem(
            "user",
            JSON.stringify(response.data.data)
        );

        setShow(false);
    } catch (error) {
        if (error.response) {
            alert(error.response.data.description);
        } else {
            alert("Tidak dapat terhubung ke server");
        }
    }
};

    return (
        <Modal
            show={show}
            onHide={() => setShow(false)}
            centered
            backdrop="static"
        >
            <Modal.Body className="p-4">
                <Card
                    className="border-0 shadow-none"
                    style={{ width: "450px", height: "350px" }}
                >
                    <Card.Body>
                        <h2 className="text-center fw-bold mb-4">
                            Login
                        </h2>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Masukkan email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Masukkan password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Check
                                    type="checkbox"
                                    label="Remember me"
                                />
                            </Form.Group>

                            <div className="d-flex justify-content-end gap-2">
                                <Button
                                    variant="secondary"
                                    type="button"
                                    onClick={() => setShow(false)}
                                >
                                    Close
                                </Button>

                                <Button
                                    variant="primary"
                                    type="submit"
                                >
                                    Login
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Modal.Body>
        </Modal>
    );
}