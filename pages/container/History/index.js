import React , { Component } from 'react';
import CardMenuHistory from '../../../components/Card/CardMenuHistory/CardMenuHistory';
import CardContentHistory from '../../../components/Card/CardContentHistory/CardContentHistory';
import Fragment from '../../../components/hoc/Fragment';

class History extends Component {
    render () {
        return (
            <Fragment>
                <div className="container bg-white  max-w-lg">
                    <div className="p-2 rounded-b-customize-32 container bg-blue-primary shadow-xl flex justify-center text-white">
                        <img className="h-12" src="/images/Logo.png"></img>
                    </div>
                    <div className="ml-4 mr-4">
                        <div className="text-xl font-bold mt-4">
                            Hi! Gafi Fawwaz Fadillah
                        </div>
                        <div className="flex justify-around">
                            <div className="w-1/2 mr-4">
                                <div className="text-2lg font-bold pt-2">
                                    Earnings
                                </div>
                                <div className="mb-2">
                                    <CardMenuHistory
                                        icon="/images/vector_star.png"
                                        title="Ballance"
                                        subtitle="Rp 123.456.798"/>
                                </div>
                                <div className="mb-2">
                                    <CardMenuHistory
                                        icon="/images/vector_finance.png"
                                        title="Top Donatur"
                                        subtitle="Gafi Faww.."/>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="text-2lg font-bold pt-2 flex justify-end">
                                    View Detail
                                </div>
                                <div className="mb-2">
                                    <CardMenuHistory
                                        icon="/images/vector_group.png"
                                        title="Donatur"
                                        subtitle="123.456"/>
                                </div>
                                <div className="mb-2">
                                    <CardMenuHistory
                                        icon="/images/vector_megaphone.png"
                                        title="Campaign"
                                        subtitle="89"/>
                                </div>
                            </div>
                        </div>
                        <div className="container pt-5">
                            <div className="text-2lg font-bold pt-2">
                                Terakhir Dibuat
                            </div>
                            <div className="mb-2">
                                <CardContentHistory
                                    title= 'Cerdaskan Anak Bangsa, Beri Mereka Kebebasan Berkreasi'
                                    subtitle='Rumah Zakat'
                                    collected='1.234.567.890'
                                    sisaHari='12'
                                    widthPersentase='64'
                                    label="Pendidikan"
                                    labelColor="blue-primary"
                                    urlImage="/images/thumb1.png" />
                            </div>
                            <div className="mb-2">
                                <CardContentHistory
                                    title= 'Sebatang Kara, Kakek ini Tak Punya Tempat tinggal'
                                    subtitle='Sharing Happiness'
                                    collected='234.123.234'
                                    sisaHari='13'
                                    widthPersentase='20'
                                    label="Infrastruktur"
                                    labelColor="yellow-secondary"
                                    urlImage="/images/thumb2.png"/>
                            </div>
                        </div>
                    </div>
                </div>    
            </Fragment>
            
        );
    }
}

export default History;