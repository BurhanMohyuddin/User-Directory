import React from 'react';
import './style.css';
const Formoutput = (props,onDelete) => {
    return (
        <div className="users">
            <div className="list-group">
            <div className="text-danger text-center" >
                <h2>User Data</h2>
            </div>
                    {props.users.map((user, i) => {
                        return (
                            
                            <div key={i}>
                                <a className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 ><b>{user.firstName}</b> <b>{user.lastName}</b></h5>
                                    {user.status === 'active' &&
                                        <small><b>Status </b><span className="badge badge-success">{user.status}</span></small>
                                    }
                                    {user.status === 'inactive' &&
                                        <small><b>Status </b><span className="badge badge-primary">{user.status}</span></small>
                                    }
                                </div>
                                <b>Age: </b>{user.age} / {user.gender}<br />
                                <b>Email: </b>{user.email}<hr/>
                                <small><button type="button" className="btn btn-danger" onClick={(e) => props.onDelete(user.id, e)}>Delete</button></small>
                                <small><button type="button" className="btn btn-success">Edit</button></small>
                                </a>
                            </div>
                        )
                    })}
                    {/* {JSON.stringify(props.users)} */}
                
            </div>
        </div>
    )
}
export default Formoutput;