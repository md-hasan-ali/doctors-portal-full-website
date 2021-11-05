import React from 'react';
import Navigasion from '../../Sheard/Navigasion/Navigasion';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import AvilableAppoinment from '../AvilableAppoinment/AvilableAppoinment';

const Appoinment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigasion></Navigasion>
            <AppoinmentHeader dete={date} setDate={setDate}></AppoinmentHeader>
            <AvilableAppoinment date={date}></AvilableAppoinment>
        </div>
    );
};

export default Appoinment;