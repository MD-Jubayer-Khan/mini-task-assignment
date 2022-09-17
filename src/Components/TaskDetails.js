import axios from 'axios';
import React, { useState } from 'react';
import img from '../Asset/images.jpeg'
import EditModal from './EditModal';

const TaskDetails = ({ task }) => {
  const [taskid, setTaskid] = useState(null)

  const handleDelete = id => {

    let body = new FormData();

    body.append("taskid", id);

      axios
      .post("https://devza.com/tests/tasks/delete", body, {
        headers: { authToken: "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a" },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  };
  console.log(task);

    return (
        <>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={img} alt="Avatar" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{task.assigned_name}</div>
                    <div className="text-sm opacity-50">{task.due_date || "No due date found"}</div>
                  </div>
                </div>
              </td>
              <td>
                {task.message}
               <br/>
                <span className="badge badge-ghost badge-sm">Assigned to: {task.assigned_to}</span>
              </td>
              <td>{task?.priority}</td>  
              <td>{task.created_on}</td> 
              <td>
              <label onClick={()=> setTaskid(task.id)} htmlFor="edit-modal" className="btn btn-xs btn-warning">Edit</label>
              <button onClick={()=> handleDelete(task.id)} className="btn btn-xs btn-error ml-2">Delete</button>
              </td>         
            </tr>
          {
            taskid &&  <EditModal taskid={taskid} >  </EditModal>
          }
        </>
    );
};

export default TaskDetails;