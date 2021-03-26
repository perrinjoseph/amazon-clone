import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import {db, auth} from './firebase';

function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = async e=>{
        e.preventDefault();

        //FireBase login....
        try{
            const res = await auth.signInWithEmailAndPassword(email,password);
            !res? new Error('❌'): history.push('/');
        }
        catch(e)
        {
            alert(`Custom Error: ❌ ${e}`);
        }
    }

    const createAccount = async e=>{
        e.preventDefault();

        //firebase create the account....
        try{

            const res = await auth.createUserWithEmailAndPassword(email, password);
            console.log(res);
            if(res)history.push('/');
        }
        catch(e)
        {
            alert(`Custom Error: ❌ ${e}`);
        }
    }


    return (
        <div className= "login">
            <Link to='/'>
            <img className = "login__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG6.png" alt="amazonLogo"></img>
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value = {email} onChange = {e=>setEmail(e.target.value)}></input>

                    <h5>Password</h5>
                    <input type="password" value = {password} onChange={e=> setPassword(e.target.value)}></input>

                    <button type ="submit" className="login__signInButton" onClick ={signIn}>Sign In</button>
                </form>
                    <p>By signing you agree to AMAZON CLONE terms and Conditions of Use & sale.
                        Please see out Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>
                    
            <p className="login__notice">New to Amazon clone?</p>
            <button className="login__registerButton" onClick={createAccount}>Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login
