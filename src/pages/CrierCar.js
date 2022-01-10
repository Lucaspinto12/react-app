import {Button, Form} from "react-bootstrap";
import React, {useState} from 'react';
import {createCar} from "../services/CoursesServices";
const CrierCar = () => {
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [model, setModel] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        await createCar({
            name,
            year: Number(year),
            model,
            price: Number(price)
        });

        alert(`${name} cadastrado com sucesso!`);
    }


    {
        return (
            <center>
                <div style={
                    {
                        width: 220
                    }
                }>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formName">
                            <br/>
                            <Form.Label>Nome Do Carro</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite o seu carro"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formAno">
                            <Form.Label>Ano do Carro</Form.Label>
                            <Form.Control type="number" value={year} min='1880' max='2099'
                                          onChange={(e) => setYear(e.target.value)} placeholder="Ano do Carro"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formModelo">
                            <Form.Label>Modelo</Form.Label>
                            <Form.Control type="text" value={model} onChange={(e) => setModel(e.target.value)}
                                          placeholder="Fabricante do Carro"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPreco">
                            <Form.Label>Preço</Form.Label>
                            <Form.Control type="number" min='1' value={price} onChange={(e) => setPrice(e.target.value)}
                                          placeholder="Preço do Carro"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                    </Form>
                </div>
            </center>
        )
    }
}
export default CrierCar;