import React from 'react'
import avatarImg from '../../assets/logo.eff2ce3e.png'
import img from '../../assets/profile-img.43b59e59.png'
import './FormStyleSheet.css'

export const LoginForm = () => {
    return (
        <>
            <form className='MainForm'>

                <div className='container-fluid p-0'>
                    <div className='row m-0 p-0 w-100'>
                        <div className='col-12 row p-0 m-0 w-100' style={{ backgroundColor: "#d5dbfb" }}>
                            <div className='FormHeadings col-6 p-3'>
                                <p className='FormTitle'>Welcome Back</p>
                                <p className='FormMessage m-0'>Sign in to continue to RAC</p>
                                <p className='FormMessage'>Admin Panel</p>
                            </div>

                            <div className='FormHeadings col-6 p-0'>
                                <img className='imgStyle' src={img} alt='icon'/>
                            </div>
                        </div>

                        <div className='col-12' style={{ marginTop: "-2.5rem" }}>
                            <div className='AvatarSection'>
                                <img className='AvatarSectionImg' src={avatarImg} alt='Avatar'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='FormInnerDiv p-4'>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"><b>Email</b></label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label"><b>Password</b></label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1"><b>Remember me</b></label>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                    <div className="mb-3">
                        <p className="btn-primary w-100 mt-3 DF-AIC-JCC ">
                            <img src="https://img.icons8.com/material-rounded/16/null/lock--v1.png" />
                            Forget your password
                        </p>
                    </div>
                </div>

            </form>
        </>
    )
}