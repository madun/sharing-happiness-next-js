import React from 'react';
import Button from './../../Button/Button';

const cardGettingStarted = (props) => {
    return (
        <div className="w-36 h-36 bg-white rounded-2xl ml-1">
            <div className="m-3 rounded-full">
                <img className="h-5 w-6" src={props.icon}></img>
            </div>
            <div className="p-3 h-16 flex flex-col justify-end">
                <div className="font-bold pt-1">
                    {props.title}
                </div>
                <div className="text-11px">
                    {props.subtitle}
                </div>
            </div>
            <div className="flex justify-center">
                <div className="pb-2">
                    <Button 
                        buttonName='Mulai'
                        roundedSize="full"
                        textWeight="11px"
                        fontWeight="semibold"/>
                </div>
            </div>
        </div>
    );
}

export default cardGettingStarted;