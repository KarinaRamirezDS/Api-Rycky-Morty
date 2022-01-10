import React from 'react';
import ResidentInfo from './ResidentInfo'

const ResidentsList = ({residentes}) => {

    return (

        <div >
            {
                residentes?.map(residente =>(

                    <ResidentInfo key={residente} url={residente} />
                ))
                 
            }

        </div>
    )
}

export default ResidentsList
