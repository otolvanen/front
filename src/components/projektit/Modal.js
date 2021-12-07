import React from 'react'
import {useState} from 'react'
import "./Modal.css";
import {sanakirja} from "./sanat.json"

function Modal(props) {


    const [kaannos, setKaannos] = useState('');
    const [submit, setSubmit] = useState(false);

    const onChanges = (e) =>{
        const { name, value } = e.target;
        setKaannos(value)

    }
    const submitKannos = (e) =>{
        e.preventDefault();
        setSubmit(true);
        console.log(kaannos)
        var obje;
        if (props.kummin === 'en'){
            obje = {fi : props.word, en : kaannos}

        }else{
            obje = {fi : kaannos, en : props.word}
        }
        console.log(obje);
        sanakirja.push(obje);
        
    }
    const klik =()=>{
        props.s(false); 
        props.l(true);

    }

    return (
        <>
        <div className="modal">
            <div className="overlay">
                <div className="modal-content">
                    { !submit && (
                    <div>
                    <h1>Lisaa sana</h1>
                    <form className = 'formi' onSubmit = {submitKannos}>
                        <h3>{props.word}:</h3>
                        <label>Käännös:</label>
                        <input type="text" name='kaannos' onChange = {onChanges}  value = {kaannos} />
                        <button type="submit">hae</button>

                    </form>
                    </div>
                    )
                    }
                    {
                        submit &&(
                        <div>
                            <h4>Submittoitu!</h4>
                            <button onClick = {klik}>Sulje</button>

                        </div>
                        )
                    }

                    
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Modal
