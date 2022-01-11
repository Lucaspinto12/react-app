import React from 'react';
import ListComponent from "../components/ListComponent";
import {useEffect, useState} from "react";
import {getAllCourses} from "../services/CoursesServices";
import {Container} from "react-bootstrap";
import NavbarComponent from "../components/NavbarComponent";

const ListCar = () => {
    const [courses, setCourses] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllCourses();
            console.log(response);
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
            <NavbarComponent/>
            <ListComponent title={title} head='lista' items={courses}/>
        </Container>
    )
}

export default ListCar;
