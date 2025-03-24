import React from 'react'
import "./todo.css"
import Button from 'react-bootstrap/Button';


function Todo() {
    return (
        <> 
        
            <div class="d-flex justify-content-center align-items-center flex-column mt-5">
                <form className='form ' >
                    <div className="mb-3 bgcolor" >
                        <h3>TODO LIST</h3>
                        <input type="text" className='form-control' placeholder='Add Your Task' />
                        <div className='d-flex justify-content-end mt-2 me-3 bgcolor' >
                            <button className=' btn btn-success w-25 ' >ADD</button>
                        </div>
                    </div>
                </form>
                <form className='form mt-4'>
                    <div className='d-flex justify-content-between bgcolor' >
                        <p>CLimb the tree</p>
                        <div className=' d-flex w-25 ms-5 button ' >
                            <Button><i className="fa-solid fa-square-check " ></i></Button>
                            <Button ><i class="fa-solid fa-trash"></i></Button>
                            <Button style={{ display: 'none' }}><i className="fa-solid fa-check-double"></i></Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Todo