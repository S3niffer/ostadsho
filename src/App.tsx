import UseScrollandMenubarReset from "./Hooks/UseScrollandMenubarReset";
import Router from "./Router";


function App() {

    return (
        <div className="App max-h-screen overflow-y-auto font-danafa">
            <div className="content  RTL text-Gray dark:text-lightWhite bg-lightWhite dark:bg-darkBlack">
                <UseScrollandMenubarReset />
                <Router />
            </div>
        </div>
    );
}

export default App;
