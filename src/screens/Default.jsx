import Logo from './_components/Logo';
import Description from "./_components/Description";
import OpenLink from "../components/OpenLink";


const Default = () => {
    return (
        <>
            <header className="App-header">
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
            </header>
        </>
    );
};

export default Default;