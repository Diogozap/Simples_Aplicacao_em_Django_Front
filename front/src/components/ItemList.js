import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, ListGroup, Container, Row, Col } from "react-bootstrap";

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/Django/");
                setItems(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <Container className="mt-5">
            <h1 className="text-center">Lista de Itens</h1>
            <Row>
                {items.map((item) => (
                    <Col key={item.id} md={4} className="mb-4">
                        <Card className="border-primary">
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    Descrição:{" "}
                                    {item.description || "Sem descrição"}
                                </Card.Text>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item className="bg-light">
                                        Mais detalhes...
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ItemList;
