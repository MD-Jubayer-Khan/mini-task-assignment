import axios from 'axios';
import React, { useState } from 'react';

const EditModal = ({taskid}) => {
    const [message, setMessage] = useState()  
  
    const onSubmit =(taskid)=> {
        let body = new FormData();

        body.append("taskid", taskid);
        body.append("message", message);

        axios
        .post("https://devza.com/tests/tasks/update", body, {
          headers: { authToken: "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a" },
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

        alert('update successfully')

    }
    return (
        <div> 
            <input type="checkbox" id="edit-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="edit-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold text-center mb-4">Update your task</h3>
                <form className='space-y-4'>
                <textarea className="input input-bordered input-ghost w-full" placeholder='message' type="text"
                   value={message}
                   onChange={(e) => setMessage(e.target.value)} />
                <br />
                <div className="modal-action">
                   <label onClick={() => onSubmit(taskid)} htmlFor="edit-modal" className='btn btn-outline btn-wide mx-auto' type="submit">Update</label>
                 </div>
            </form>
            </div>
            </div>
        </div>
    );
};

export default EditModal;