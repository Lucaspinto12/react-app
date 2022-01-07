import logo from './logo.svg';
import './App.css';
import ListComponent from "./componentes/ListComponent";
import {useEffect, useState} from "react";
import {getAllCourses} from "./services/CoursesServices";

function App() {
    const [courses, setCourses] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllCourses();
            if (response.length) {
                setCourses(await response);
            }
            setTitle("Tournament");
        }
        if (courses.length <= 0) {
            fetchData();
        }
    }, [courses]);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <ListComponent title={title} list={courses}/>
                <ListComponent title={title} list={courses}/>
            </header>
        </div>
    );
}

export default App;
