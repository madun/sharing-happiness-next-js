import React, { Component } from 'react';
import {goToCampaigner} from './../../function/routeGlobal';

import CardGettingStarted from './../../../components/Card/CardGettingStarted/CardGettingStarted';
import Button from './../../../components/Button/Button';
import Fragment from '../../../components/hoc/Fragment';

class GettingStarted extends Component {
    render () {
        return (
            <Fragment>
                <div className="container max-w-lg bg-hero-sm bg-cover bg-center">
                    <div className="container bg-yellow-secondary h-3"></div>
                    <div className="p-10">
                        <div className="text-white pt-20">
                            <img className="h-28" src="/images/Logo.png"></img>
                        </div>
                        <div className="text-3xl font-semibold text-white pt-8">
                            Selamat Datang!
                        </div>
                        <div className="text-lg text-white font-normal pt-8 pr-28 pb-12">
                            Kamu adalah orang terpilih yang mampu berbagi kebahagiaan di muka bumi ini
                        </div>
                    </div>
                    <div className="container">
                        <div className="flex justify-between mr-4 ml-4">
                            <CardGettingStarted 
                                icon="/images/vector_donate.png"
                                title='Donatur'
                                subtitle='Mulai berdonasi'/>
                            <CardGettingStarted 
                                icon="/images/vector_volunteering.png"
                                title='Campaigner'
                                subtitle='Mulai galang dana'/>
                            <CardGettingStarted 
                                icon="/images/vector_event.png"
                                title='Event Organizer'
                                subtitle='Mulai buat event'/>
                        </div>
                    </div>
                    <div className="container bg-blue-primary rounded-t-customize-32 h-40 -mt-20 pb-8">
                        <div className="flex justify-end pt-24">
                            <Button
                                buttonName="Masuk"
                                color="blue-primary"
                                textWeight="lg"
                                click={goToCampaigner}
                            />
                        </div>
                    </div>
                </div>    
            </Fragment>
            
        );
    }
}

export default GettingStarted;