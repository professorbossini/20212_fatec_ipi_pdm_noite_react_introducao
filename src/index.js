import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'


//arrow function
const App = () => {
    //expressão JSX: Javascript XML
    //const textoDoBotao = "Enviar";
    const obterTextoDoBotao = () => {
        return "Enviar";
    }
    const objeto = {margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 12};
    return (
        <div style={objeto}>
           <label className="rotulo" htmlFor='nome' style={{display: 'block', marginBottom: 4}}>Nome:</label>
           <input type='text' id='nome' style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', borderRadius: 8, outline: 'none', width: '100%'}}/>
           <button style={{marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', borderRadius: 8, width: '100%'}}>{obterTextoDoBotao()}</button>
        </div>
    )    
}

ReactDOM.render(
    <App />,
    document.querySelector("#root") 
)
