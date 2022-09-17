import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskDetails from './TaskDetails';

const AllTask = () => {
    const [tasks, setTasks] = useState([])
    const [ search, setSearch] = useState('')


    const allTasks = tasks.tasks;

    useEffect(()=>{
        fetch('https://devza.com/tests/tasks/list',{
            headers:{
                authToken: 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a'
            }
            })
        .then(res => res.json())
        .then(data => {

            setTasks(data)
        })
    },[])

    if(!tasks.tasks){
        return <p>Loading</p>
    }

    const handleSearch = (event) => {
        event.preventDefault()
    console.log(search);
        const searchText = search;
        setSearch(searchText);

        // if( search){
        //      const match = allTasks.filter(task => task.message.toLowerCase().includes(search));
        //         console.log(match);
        //         setTasks(match)
        // }
        // else{
        //     return <p>No matching task found</p>
        // }



    };
    const handleDragEnd = (results) => {
        if (!results.destination) {
            return
          }
        let tempTask = [...tasks];
       const [reorderData] = tempTask.splice(results.source.index,1);
       tempTask.splice(results.destination.index, 0 , reorderData)
       setTasks(tempTask)
    } 


    return (

        <div className='mt-8'>


            <form className='space-y-4 my-4' onSubmit={handleSearch}>
            <input className="input input-bordered input-ghost w-96" placeholder='your message' type="date "
                 onChange={(e) => setSearch(e.target.value)}/>
                 <input className='btn btn-info btn-wide ml-3' type="submit" value="Search" />
            </form>


            <div className="overflow-x-auto w-full px-12">
        <DragDropContext onDragEnd={ (results) => handleDragEnd(results)}>
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
               <Droppable droppableId="droppable-1" type="PERSON">
                {
                    (provided, snapshot)=>(
                        <tbody ref={provided.innerRef}
                        {...provided.droppableProps}>
                        {
                          allTasks.map(task => <TaskDetails key={task.id} task={task}></TaskDetails>)
    
                        }
                        {provided.placeholder}
                   </tbody>
                    )
                }
               </Droppable>
             </table> 
       </DragDropContext>
            </div>
        </div>

    );
};

export default AllTask;