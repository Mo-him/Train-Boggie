import React, { useState } from 'react';
import "./TrainBoggie.css"

const stationDistances = {
    CHN: { A: 0, B: 0 },
    SLM: { A: 350, B: 0 },
    BLR: { A: 550, B: 0 },
    KRN: { A: 900, B: 0 },
    HYB: { A: 1200, B: 2000 },
    NGP: { A: 1600, B: 2400 },
    ITJ: { A: 1900, B: 2700 },
    BPL: { A: 2000, B: 2800 },
    AGA: { A: 2500, B: 0 },
    NDL: { A: 2700, B: 0 },
    NJP: { A: 0, B: 4200 },
    GHY: { A: 0, B: 4700 }
};

const TrainBoggie = () => {

    const [trainAInput, setTrainAInput] = useState('');
    const [trainBInput, setTrainBInput] = useState('');
    const [output, setOutput] = useState([]);

    const calculateBogieOrders = () => {
        const trainAArray = trainAInput.split(' ');
        const trainBArray = trainBInput.split(' ');

        const hyderabadIndexA = trainAArray.indexOf('HYB');
        const hyderabadIndexB = trainBArray.indexOf('HYB');

        const arrivalBogieOrderA = trainAArray.slice(2, hyderabadIndexA + 1);
        const arrivalBogieOrderB = trainBArray.slice(2, hyderabadIndexB + 1);

        const departureBogieOrderAB = [
            ...trainAArray.slice(1, hyderabadIndexA + 1),
            ...trainBArray.slice(1, hyderabadIndexB + 1)
        ].sort((a, b) => stationDistances[b] - stationDistances[a]);

        setOutput([
            `ARRIVAL TRAIN_A ENGINE ${arrivalBogieOrderA.join(' ')}`,
            `ARRIVAL TRAIN_B ENGINE ${arrivalBogieOrderB.join(' ')}`,
            `DEPARTURE TRAIN_AB ENGINE ENGINE ${departureBogieOrderAB.join(' ')}`
        ]);
    };

    return (
        <div className="Calculator">
            <h1>Train Bogie Order Calculator</h1>
            <div className="input-container">
                <textarea
                    placeholder="Enter Train A bogie order"
                    value={trainAInput}
                    onChange={(e) => setTrainAInput(e.target.value)}
                />
                <br/>
                <textarea
                    placeholder="Enter Train B bogie order"
                    value={trainBInput}
                    onChange={(e) => setTrainBInput(e.target.value)}
                />
            </div>
            <button className="btn btn-primary" onClick={calculateBogieOrders}>Calculate</button>
            <div className="output-container">
                {output.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
        </div>
    );
}

export default TrainBoggie;