import React from 'react';

const cardContentHistory = (props) => {
    let widthPersentase = `flex rounded-full h-3 w-${props.widthPersentase} bg-yellow-secondary`;
    let labelColor = `bg-white text-${props.labelColor} pt-0.3 pb-0.3 pr-2 pl-2 pt-1 pb-1  rounded-full text-11px font-bold`;
    return (
        <div className="container rounded-2xl shadow-lg">
            <div className="ml-4 mr-4">
                <div className="flex items-center justify-around">
                    <div className="rounded-xl bg-yellow-secondary w-60 h-40 mt-4 mb-4 mr-2">
                        <div className="flex justify-left">
                            <img className="shadow rounded-xl w-60 h-40 object-cover" src={props.urlImage} alt="..." />
                        </div>
                        <div className="flex -mt-6 ml-1 bg-yellow-secondary rounded-full">
                            <button className={labelColor}>{props.label}</button>
                        </div>
                    </div>
                    <div className="ml-5 m-2 w-1/2">
                        <div className="text-xl font-bold">
                            {props.title}
                        </div>
                        <div className="flex items-center">
                            <div className="mr-2 text-11px">
                             {props.subtitle}
                            </div>
                            <div className="rounded-full mt-1">
                                <img className="h-4 w-4" src="/images/vector_check.png"></img>
                            </div>
                        </div>
                    </div>                  
                </div>
                <div className="flex rounded-full h-3 bg-blue-primary mb-2">
                    <div className={widthPersentase}></div>
                </div>  
                <div className="flex justify-between pb-2">
                    <div className="flex">
                        <div className="mr-2">
                            Terkumpul
                        </div>
                        <div className="font-bold">
                            Rp {props.collected}
                        </div>
                    </div>
                    <div className="flex">
                        <div className="mr-2">
                            Sisa Hari
                        </div>
                        <div className="font-bold">
                            {props.sisaHari}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

cardContentHistory.defaultProps = {
    title: 'default title',
    subtitle: 'default sub',
    urlImage: 'https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-1-800x800-fa5a7ac2c81a43925586ea85f2fea332.jpg',
    collected: '123.456',
    sisaHari: '0',
    widthPersentase: '36',
    labelColor: 'blue-primary'
}

export default cardContentHistory;