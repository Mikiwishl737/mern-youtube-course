import React, { useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook.js'
import { useMessage } from '../hooks/message.hook.js'



export const CreatePage = () => {

    
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState ( {
      ID: '', name: '', surname: ''
    })

    useEffect ( () => {
      message(error)
      clearError()
    }, [error, message, clearError])

    useEffect ( () => {
      window.M.updateTextFields()
    }, [])

    
    const changeHandler = event => {
      setForm({ ...form, [event.target.name]: event.target.value})
    }


    const registerHandler = async () => {
      try {
        const data = await request('/api/product/register', 'POST', {...form})
        message(data.message)
      } catch (e) {
        
      }
    }

    return (
        <div className="row">
          <div className="col s6 offset-s3">
            <h1>Добавление клиента</h1>
            <div className="card pink lighten-3">
              <div className="card-content white-text">
                <span className="card-title ">Клиент</span>
                <div>

                <div className="input-field">
                 <input
                placeholder="ID клиента"
                id="ID"
                type="number"
                name="ID"
                className="blue-input"
                onChange={changeHandler}
                   />
               <label htmlFor="ID">ID</label>
                </div>
                
                <div className="input-field"><div>Имя:</div>
                
                 <input 
                placeholder="Имя клиента"
                id="name"
                 type="string"
                 name="name"
                 className="blue-input"
                 onChange={changeHandler}
                   />
               
                </div>
                
                
                <div className="input-field"><div>Фамилия:</div>
                 <input
                placeholder="Фамилия клиента"
                id="surname"
                type="string"
                name="surname"
                className="blue-input"
                onChange={changeHandler}
                   />
               
                </div>

                <div className="input-field"><div>Телефон:</div>
                 <input
                placeholder="Телефон клиента"
                id="telephone"
                type="string"
                name="telephone"
                className="blue-input"
                onChange={changeHandler}
                   />
               
                </div>

                <div className="input-field"><div>Секция:</div>
                 <input
                placeholder="Секция клиента"
                id="section"
                type="string"
                name="section"
                className="blue-input"
                onChange={changeHandler}
                   />
               
                </div>

                <div className="input-field"><div>Дата регистрация клиента и его абонемента сроком на 30 дней</div>

                 <input
                placeholder="Дата регистрации"
                id="updated"
                type="Date"
                name="updated"
                className="blue-input"
                onChange={changeHandler}
                   />
               
                </div>
                <div className="input-field"><div>Срок закончится по истечению 30 дней,<div>ТОЧНАЯ ДАТА:</div> </div>
                 <input
                id="updated2"
                type="Date"
                name="updated2"
                className="blue-input"
                onChange={changeHandler}
                   />

                </div>

                
                </div>
              </div>
              <div className="card-action">
                <button
                 className="btn light-blue lighten-1 black-text"
                 onClick={registerHandler}
                 disabled={loading}
                 >
                   Зарегистрировать клиента
                </button>
            </div>
            </div>
            </div>
        </div>
    )
}