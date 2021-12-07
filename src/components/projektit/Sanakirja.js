import React from 'react'
import { useState } from 'react';
import {sanakirja} from "./sanat.json"
import Modal from './Modal';


function Sanakirja() {

    const [sana, setSana] = useState('');
    const [en, setEn] = useState('');
    const [kaannos, setKaannos] = useState();
    const [loytyiko, setloytyiko] = useState(true);
    const [modal, setModal] = useState(false);
    const [isnan, setisnan] = useState(false);
    
    


    const submitsana = (e) => {
        e.preventDefault();
        const sanat = sanakirja
        const o = en
        var test;
        if (!sana){
            setisnan(true)
        }else{
            if(o === "en"){
                sanat.map( item =>{
                    console.log(item)
                    if (item.fi === sana){
                        test = item.en
                        setKaannos(item.en)

                    }
                })
                
            }else{
                sanat.map( item =>{
                    if (item.en === sana){
                        test = item.fi
                        setKaannos(item.fi)
                    }
                })
            }
            if (!test){
                console.log('tsek')
                console.log(kaannos)
                setloytyiko(false)
            }
        }
        


    }
    return (
        <div>
            <section>
            <h3>Sanakirja</h3>
            </section>
            {
                isnan &&(<h2 className ='lol'>Anna sana</h2>)
            }
            <form className='formi' onSubmit = {submitsana}>
                <label>Sana:</label>
                <input type="text" name="name" onChange = {(e) => setSana(e.target.value)}  value = {sana} />
                <input type="radio" id="fi-en" name="fav_language" onChange = {(e) => setEn(e.target.value)} value={"en"}/>
                <label >fi-en</label>
                <input type="radio" id="en-fi" name="fav_language" onChange = {(e) => setEn(e.target.value)} value={"fi"}/>
                <label>en-fi</label>

                <button type="submit">Käännä</button>
            </form>
            <div>
                {
                    kaannos && (<h4>{kaannos}</h4>)
                }
                {
                    !loytyiko && (<div><h4>Ei löytynyt? haluatko lisata sanan</h4> <button onClick = {() => setModal(true)}>lisää</button></div>)
                }
                
            </div>
            {
                modal && (<Modal s = {setModal} word = {sana} kummin = {en} l = {setloytyiko}/>)
            }
        </div>
    )
}

export default Sanakirja
