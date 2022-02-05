import React from "react";
import { Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function EducationalTable({ getEditableEducation, updateShowModal, educationalData, seteducationalData }) {

    const sendEducationData = (education, index) => {
        getEditableEducation(education, index)
    }
    const delets = (id) => {
        seteducationalData((old) => {
            return old.filter((v, i) => {
                return i !== id

            })
        })
    }

    return (
        <div style={{ display: 'block', width: '96vw', textAlign: 'center' }}  >
            <Table >
                <thead>
                    <tr>
                        {/* <th>*</th> */}
                        <th style={{ width: '250px', color: 'black' }}>Name</th>
                        <th style={{ width: '250px', color: 'black' }}>Course</th>
                        <th style={{ width: '250px', color: 'black' }}>Degree</th>
                        <th style={{ width: '250px', color: 'black' }}>University</th>
                        <th style={{ width: '200px', color: 'black' }}>Year of Passing</th>
                        <th style={{ width: '250px', color: 'black' }}><Button variant="outline-dark" className="add" onClick={() => { updateShowModal('add', true) }}>+</Button></th>
                    </tr>
                </thead>
                <tbody>
                    {educationalData.map((education, index) => {
                        return (
                            <tr key={index} >
                                <td className="color" >{index + 1}</td>
                                <td className="color" >{education.name}</td>
                                <td className="color">{education.course}</td>
                                <td className="color">{education.education}</td>
                                <td className="color">{education.institution}</td>
                                <td className="color">{education.yop}</td>
                                <td>
                                    <Button style={{ backgroundColor: "green", color: "white", marginRight: '10px', }}
                                        variant="outline-success" onClick={() => {
                                            sendEducationData(education, index)
                                        }}>
                                        {/* Update */}
                                        <FontAwesomeIcon icon={faEdit} className='edit-icon' />
                                    </Button>
                                    <Button variant="outline-danger" id="btn" onClick={() => {
                                        delets(index)
                                    }}>
                                        <FontAwesomeIcon icon={faTrashAlt} className='delete-icon' />
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default EducationalTable;
