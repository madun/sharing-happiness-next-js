import React from 'react';

const cardSignIn = (props) => {
    return (
        <div className="container">
            <div className="flex pl-16">
                <div className="w-20 h-20 flex flex-col justify-center">
                    <img src={props.image}
                    className="rounded-full"></img>
                </div>
                <div className="pl-8 flex flex-col justify-center">
                    <div className="font-bold text-white">
                        {props.title}
                    </div>
                    <div className="text-white">
                        {props.subtitle}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default cardSignIn;