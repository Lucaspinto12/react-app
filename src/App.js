import logo from './logo.svg';
import './App.css';
import ListComponent from "./componentes/ListComponent";
import ListComponentPurchase from "./componentes/ListComponentPurchase";
import {useEffect, useState} from "react";
import {getAllCourses, getIdCourses} from "./services/CoursesServices";
import axios from "axios";
import {instanceAxios} from "./services/config/AxiosConfig";


function App() {
    const [courses, setCourses] = useState([]);
    const [purchase, setPurchase] = useState([]);
    const [title, setTitle] = useState("");
    const [head, setHead] = useState("");


    useEffect(() => {
        const fetchData = async () => {

            const response = await getAllCourses();
            if (response.length > 0) {
                setCourses(await response);
            }
            const purchase = await getIdCourses('a3b5b3b6-66b4-4d1a-b11c-cfd31eaedb20');
            console.log("purchase: ", purchase);
            if (purchase.items.length > 0) {
                setPurchase(purchase.items);
            }
            setTitle("Car");
        }
        if (purchase.length <= 0) {
            fetchData();
        }
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <ListComponent title={title} head="Lista de carro" items={courses}/>
                <ListComponentPurchase title="Lista de Pedido" head='Purchase'  items={purchase}/>
            </header>
        </div>
    );
}

export default App;/*
export default function AppPurchase() {
    const [purchase, setPurchase] = useState([]);
    useEffect(() => {
        axios()
            getIdCourses("61d7445c8a71918492d0df44")
            .then((response) => setPurchase(response.data))
            .catch((err) => {
                console.error("ops! core um error" + err);
            });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            <p>Usurious: {purchase?.amount}</p>
            <p>Biographic: {purchase?.id}</p>
            </header>
        </div>
    );
}
*/