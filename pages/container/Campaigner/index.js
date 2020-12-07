import React, {Component} from 'react';
import {goBack, goToSignIn} from './../../function/routeGlobal';

import CardCampaigner from '../../../components/Card/CardCampaigner/CardCampaigner';
import Button from '../../../components/Button/Button';
import Fragment from '../../../components/hoc/Fragment';


class Campaigner extends Component {
    render () {
        return(
            <Fragment>
                <div className="container bg-white max-w-lg">
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
                                Hi! Campaigner
                            </div>
                        </div>
                        <div className="container">
                            <div className="pt-12 text-xl pr-32">
                            Peranmu sangat penting <br></br>untuk mereka, memberikan harapan untuk mereka    
                            </div>
                        </div>
                    </div>
                    <div className="container justify-center bg-blue-primary h-88 rounded-t-customize-32 mt-16 pb-12">
                        <div className="pt-12">
                            <CardCampaigner 
                                image="/images/new_campaign.png"
                                title="Buat campaignmu sendiri!"
                                subtitle="Jadilah campaigner terbaik"/>
                            <CardCampaigner 
                                image="/images/finance_app_monochromatic.png"
                                title="Perhatikan capaian"
                                subtitle="Pantau capaian Anda secara realtime"/>
                            <CardCampaigner 
                                image="/images/money_transfer__monochromatic.png"
                                title="Pencairan Dana"
                                subtitle="Mudahnya pencairan dana"/>
                        </div>
                        <div className="flex justify-center pt-4">
                            <Button 
                                buttonName="Selanjutnya"
                                color="yellow-secondary"
                                click={goToSignIn}
                                textWeight="lg"></Button>
                        </div>
                    </div>
                </div>    
            </Fragment>
            
        );
    }
}

export default Campaigner;