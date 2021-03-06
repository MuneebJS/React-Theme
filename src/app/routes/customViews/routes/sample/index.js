import React from 'react';
import ListItem from "../Component/ListItem";
import {data} from '../data';

function SimpleList() {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            {data.map((data, index) => (
                <ListItem key={index} data={data} styleName="card-simple" />
            ))}
        </div>
    );
}

export default SimpleList;