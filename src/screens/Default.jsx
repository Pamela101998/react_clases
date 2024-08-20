import Logo from './_components/Logo';
import Description from "./_components/Description";
import OpenLink from "../components/OpenLink";
import LessonInfo from './_components/LessonInfo';

import Contador from './_components/Contador';


const Default = () => {
    return (
        <>
            <header className="App-header">
                <Contador />
                <Logo />
                <Description />
                <OpenLink 
                    title="Learn React" 
                    url="https://reactjs.org" 
                />

                <OpenLink 
                    title="Mi proyecto React (Git)" 
                    url="https://github.com/Pamela101998/react_clases" 
                />

                <LessonInfo 
                    unit="1" 
                    title="Introducción a React y estructura de proyecto" 
                />

                <LessonInfo 
                    unit="2" 
                    title="Context API para la gestión del estado global en aplicación React" 
                />  
            </header>
        </>
    );
};

export default Default;