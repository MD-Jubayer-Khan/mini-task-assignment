import axios from 'axios';
import React, { useState } from 'react';

const AddTask = () => {

    const [message, setMessage] = useState()  
    const [priority, setPriority] = useState('')
    const [assigned_to, setAssigned] = useState('')
    const [setCreated] = useState()


    let date = new Date().toLocaleString().toString()

    console.log(message)
    const onSubmit = e => {
        e.preventDefault();

        let body = new FormData();

        body.append("message", message);
        body.append("created_on", date);
        body.append("priority", priority);
        body.append("assigned_to", assigned_to);
    

        axios
        .post("https://devza.com/tests/tasks/create", body, {
          headers: { authToken: "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a" },
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

        setMessage(' ');
        setPriority(' ');
        setAssigned(' ')
    };

    return (
        <div className='mt-4 w-11/12 mx-auto border'>
            <h1 className='text-xl font-bold my-8'>Add a new Task</h1>
            <form className='space-y-4' onSubmit={onSubmit}>
                <textarea className="input input-bordered input-ghost w-6/12" placeholder='message' type="text"
                   value={message}
                   onChange={(e) => setMessage(e.target.value)} />
                <br />
                <input className="input input-bordered input-ghost w-6/12" placeholder='created_on' type="date "value={date}
                 onChange={(e) => setCreated(e.target.value)}/> <br />
                <input className="input input-bordered input-ghost w-6/12" placeholder='priority' type="number"  
                value={priority}
                onChange={(e) => setPriority(e.target.value)} /> <br />
                <input className="input input-bordered input-ghost w-6/12" placeholder='assigned_to' 
                 value={assigned_to}
                   onChange={(e) => setAssigned(e.target.value)} /> <br />
                <input className='btn btn-outline btn-wide mb-3' type="submit" value="Add Task" />
            </form>
        </div>
    );
};

export default AddTask;