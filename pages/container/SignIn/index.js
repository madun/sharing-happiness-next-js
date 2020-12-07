import React, { Component } from 'react';
import Router from 'next/router';
import {goBack, goToHistory} from './../../function/routeGlobal';

import Button from '../../../components/Button/Button';
import Fragment from '../../../components/hoc/Fragment';


class SignIn extends Component {
    render () {
        return (
            <Fragment>
                <div className="container max-w-lg bg-white ">
                    <div className="container bg-yellow-secondary h-3"></div>
                    <div className="pl-8">
                        <div className="h-12">
                            <div className="pt-8">
                                <button 
                                    onClick={goBack}
                                    className="focus:outline-none">
                                    <img src="/images/vector_back.png"></img>
                                </button>   
                            </div>
                        </div>
                        <div className="container">
                            <div className="pt-10 text-4xl font-semibold">
                                Sign In
                            </div>
                        </div>
                    </div>
                    <div className="container bg-blue-primary h-86 rounded-t-customize-32 mt-12 pb-8">
                        <div className="pl-12 pt-10">
                            <div>
                                <div className="text-white font-semibold">
                                    Email
                                </div>
                                <div className="container pr-12">
                                    <input type="text" name="email" id="email" placeholder="yourmail@example.com"
                                    className="border-b-2 border-default-text-field container text-default-text-field bg-transparent p-2 focus:outline-none"/>
                                </div>  
                            </div>
                            <div className="pt-6">
                                <div className="text-white font-semibold">
                                    Password
                                </div>
                                <div className="container pr-12">
                                    <input type="password" name="password" id="password" placeholder="Password"
                                    className="border-b-2 container text-default-text-field border-default-text-field bg-transparent p-2 focus:outline-none"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-10">
                            <Button 
                                buttonName="Selanjutnya"
                                color="yellow-secondary"
                                click={goToHistory}
                                roundedSize="full"></Button>
                        </div>
                        <div className="text-white text-sm font-semibold flex justify-center mt-5">
                            Atau
                        </div>
                        <div className="flex justify-center mt-5">
                            <Button buttonName="Masuk dengan Google" 
                                    color="blue-primary"
                                    borderWeight="2"
                                    borderColor="white"
                                    roundedSize="full"></Button>
                        </div>
                        <div className="flex justify-center mt-8">
                            <Button buttonName="Masuk dengan Facebook" 
                                    color="blue-primary"
                                    borderWeight="2"
                                    borderColor="white"
                                    roundedSize="full"></Button>
                        </div>
                        <div className="flex justify-end mt-6">
                            <Button buttonName="Daftar" 
                                    color="blue-primary"
                                    textWeight="lg"></Button>
                        </div>
                    </div>
                </div>      
            </Fragment>
             
        );
    }
}

export default SignIn;