import React from 'react';
import {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import ListComponent from "../componentes/ListComponent";
import {getAllCourses} from "../services/CoursesServices";

const ListCar = () => {
    const [courses, setCourses] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllCourses();
            if (response && response.length > 0) {
                setCourses(response);
            }
            setTitle("Lista de Carros");
        }

        if (courses.length <= 0) {
            fetchData().then();
        }

    }, [courses]);

    return (
        <Container>
            <ListComponent title={title} head='Teste' items={courses}/>
        </Container>
    )
}

export default ListCar;