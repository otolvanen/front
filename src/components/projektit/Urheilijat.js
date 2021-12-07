import React from 'react'
import { useState } from 'react';

function Urheilijat() {
    const [urheilija, setUrheilija] = useState({id : null, enimi:'', snimi:'', laji:'', ika:''});
    const [urheilijat, setUrheilijat] = useState([]);
    const [ind, setind] = useState(0);
    const [isnan, setisnan] = useState(false);

    const onChanges = (e) =>{
        const { name, value } = e.target;
        setUrheilija({...urheilija, [name] : value});

    }
    const submitUrheilija = (e) =>{
        e.preventDefault();
        var noll = false;
        if (!urheilija.enimi){
            noll = true;
        }
        setisnan(noll)
        if(!noll){
            setUrheilija({...urheilija, id : ind});
            setind(ind +1);
            setUrheilijat([...urheilijat, urheilija])
            urheilijat.map((item, index)=> console.log(item.enimi, index))
            setUrheilija(({id : ind, enimi:'', snimi:'', laji:'', ika:''}))

        }
    }


    const poista =(e)=>{
        const lista = urheilijat.filter(item => item.id !== e)
        setUrheilijat(lista)

    }

    return (
        <>
        <div>
            <section>
            <h3>Urheilijat</h3>
            </section>
            {
                isnan &&(<h2 className ='lol'>Anna urheilijan tiedot</h2>)
            }
            
            <form className = 'formi'onSubmit = {submitUrheilija}>
                <label>Etunimi:</label>
                <input type="text" name="enimi" onChange = {onChanges}  value = {urheilija.enimi} />
                <label>Sukunimi:</label>
                <input type="text" name="snimi" onChange = {onChanges}  value = {urheilija.snimi} />
                <label>laji:</label>
                <input type="text" name="laji" onChange = {onChanges}  value = {urheilija.laji} />
                <label>ikä:</label>
                <input type="text" name="ika" onChange = {onChanges}  value = {urheilija.ika} />
                <button type="submit">Lisää</button>

            </form>
        </div>
        <div>
            <ul className = 'lista'>
                {urheilijat.map((item) => <li className ='list-item' key = {item.id}>{item.enimi}, {item.snimi}, {item.laji}, {item.ika} <button id = {item.id} onClick = {() => poista(item.id)}>x</button> </li>)}
            </ul>


        </div>
        </>
    )
}

export default Urheilijat
