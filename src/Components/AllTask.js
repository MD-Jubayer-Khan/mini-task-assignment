import React, { useEffect, useState } from 'react';
import TaskDetails from './TaskDetails';

const AllTask = () => {
    const [tasks, setTasks] = useState([])
    const allTasks = tasks.tasks;
    useEffect(()=>{
        fetch('https://devza.com/tests/tasks/list',{
            headers:{
                authToken: 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a'
            }
            })
        .then(res => res.json())
        .then(data => {
            setTasks(data)})
    },[tasks])

    if(!tasks.tasks){
        return <p>Loading</p>
    }

    return (
        <div className='mt-8'>
            <div className="overflow-x-auto w-full px-12">
             <table className="table w-full">
               {/* /* <!-- head -->  */}
               <thead>
                 <tr>
                   <th>Name</th>
                   <th>Message</th>
                   <th>priority</th>
                   <th>Created date</th>
                   <th>Action</th>
                 </tr>
               </thead>
               <tbody>
                    {
                        allTasks.map(task => <TaskDetails
                             key={task.id} task={task}></TaskDetails>)
                    }
               </tbody>
             </table>
            </div>
        </div>
    );
};

export default AllTask;