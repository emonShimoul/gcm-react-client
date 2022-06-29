import React from 'react';
import Expert from '../Expert/Expert';

const experts = [
    {
        img: "https://i.ibb.co/Kq2JvpF/mechanic-1.jpg",
        name: 'Andrew Smith',
        expertize: '-Engine Expert-'
    },
    {
        img: "https://i.ibb.co/Hn0Nv61/mechanic-2.jpg",
        name: 'John Anderson',
        expertize: '-Polish Expert-'
    },
    {
        img: "https://i.ibb.co/25zTbtd/mechanic-3.jpg",
        name: 'Zakaria Smith',
        expertize: '-Coloring Expert-'
    },
    {
        img: "https://i.ibb.co/xg14YHs/mechanic-4.jpg",
        name: 'Andrew Washington',
        expertize: '-Driving Expert-'
    },
    {
        img: "https://i.ibb.co/Pry4h9n/mechanic-5.jpg",
        name: 'Tom Hardle',
        expertize: '-Repairing Expert-'
    },
]

const Experts = () => {
    return (
        <div id='experts' className='container'>
            <h2 className='text-primary mt-5'>Our Experts</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;