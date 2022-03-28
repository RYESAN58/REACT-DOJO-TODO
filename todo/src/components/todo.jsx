import React, {useState} from "react";


const TODO = () => {
    const [todo, settodo] = useState({
        description: "",
        completed: false,
        key: 0
    });
    const[todolist, settodolist] = useState([]);
    const[id, setid] = useState(1000)
    const [style, setsyle] = useState({BackgroundColor:''});
    const [checked, setChecked] = useState(true);

    const addBtn = {
    borderRadius:'0.2em',
    boxSizing: 'border-box',
    textDecoration:'none',
    fontFamily:"'Roboto',sans-serif",
    fontWeight:'400',
    color:'#FFFFFF',
    backgroundColor:'#3369ff',
    boxShadow:'inset 0 -0.6em 1em -0.35em rgba(0,0,0,0.17),inset 0 0.6em 2em -0.3em rgba(255,255,255,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12)'
    }

    const handleForm = (e) => {
        setid(id+1)
        e.preventDefault()
        settodolist([...todolist, {
            description: todo.description,
            completed: false,
            key: id
        }])
        settodo({description:''})
    }

    const handleToDo = (e) => {
        settodo({...todo, description: e.target.value});
    }

    const handleCompleted = (e, idFromBelow) => {
        console.log(e.target.checked)
        if (e.target.checked){
        const x = todolist.filter(x => x.key === idFromBelow);
        x[0].completed = true
        setsyle({backgroundColor: 'green'})
        }else{
        const y = todolist.filter(y => y.key === idFromBelow);
        y[0].completed = false
        setsyle({backgroundColor: ''})
        }
    }

    const handleDelete = (id) => {

        const newArr = todolist.filter( x => x.key !== id)
        settodolist([...newArr])

    }

    return (
        <form onSubmit={handleForm}>
            <label>What to do?</label>
            <input type='text' onChange={handleToDo} value={todo.description}></input>
            <input type="hidden"/>
            <button type="submit" style={addBtn}>Add</button>

            <div>
                {todolist.map((obj)=> {
                    if (obj.completed === true){
                        return (<div key={obj.key} style={{backgroundColor:'green'}}>
                            <p>{obj.description}</p>
                                <label>Completed?</label>
                                <input type="checkbox" onChange={(event) => handleCompleted(event, obj.key)}/>
                                <br></br>
                                <button type="button" onClick={()=>handleDelete(obj.key)}>Delete</button>
                            <hr></hr>
                        </div>
                    )}else if (obj.completed === false){
                        return (<div key={obj.key}>
                            <p>{obj.description}</p>
                                <label>Completed?</label>
                                <input type="checkbox" onChange={(event) => handleCompleted(event, obj.key)}/>
                                <br></br>
                                <button type="button" onClick={()=>handleDelete(obj.key)}>Delete</button>
                            <hr></hr>
                        </div>
                )}})}
            </div>
        </form>
    )

}


export default TODO