import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Add() {
    const { register, handleSubmit } = useForm();
    const navi = useNavigate();

    function saveData(data) {
        axios.post('http://localhost:5000/users', data)
        navi('/user/show')
    }
    return (
        <>
            <div className='container border-color: red;'>
                <center><u><b><h1>Course form:</h1></b></u></center>

                <form onSubmit={handleSubmit(saveData)} className='col-6 m-auto '>
                    <label htmlFor='cid'>Course id</label>
                    <input type='number' id='cid' className='form-control'
                        {...register('cid')} />
                    <br /><br />
                    <label htmlFor='n'>Student Name</label>
                    <input type='text' id='n' className='form-control'
                        {...register('name')} />
                    <br /><br />
                    <label htmlFor='cn'>Course Name</label>
                    <input type='text' id='cn' className='form-control'
                        {...register('cname')} />
                    <br /><br />
                    <label htmlFor='f'>Fee</label>
                    <input type='number' id='f' className='form-control'
                        {...register('fee')} />
                    <br /><br />
                    <input type='submit' value='Add' className='btn btn-outline-success col-6 btn-lg' />
                    <input type='reset' value='cancel' className='btn btn-outline-warning col-6 btn-lg' />
                </form>

            </div>
        </>
    )
}

export default Add