import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { assignElementRevealedStatus } from '../../features/rowOfTestTubes/rowOfTestTubesSlice';

const RevealElement = (props) => {

    const metalName = props.metal.metal;
    //const metalSection = useSelector(state => state.rowOfTubes.unreactedMetals[metalName]);
    const dispatch = useDispatch();
/*
    useEffect(() => {
        dispatch(assignElementRevealedStatus({metalName: metalName}));
        //console.log(metalName);


    }, [])
*/
const textToRender = () => {
    return '?';
}


    return (
        <div>
            <button><p>{textToRender()}</p></button>
              
        </div>
    )
}

export default RevealElement;