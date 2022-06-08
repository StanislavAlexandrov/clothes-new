import './App.css';
import Card from './components/Card';

import DATA from './data/data.js';

function App() {
    return (
        <div className="App">
            <header className="App-header"></header>
            <div className="flex justify-center">
                <div className="flex justify-center flex-col w-[600px]">
                    {DATA.map((element) => {
                        return (
                            <Card
                                name={element.name}
                                size={element.size}
                                price={element.price}
                                description={element.description}
                                image={element.image}
                            ></Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
