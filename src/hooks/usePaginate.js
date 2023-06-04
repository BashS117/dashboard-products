import { useState } from "react";

const Paginate= (limit, currentOffSet, total)=>{
    const [offset,setOffset]=useState(currentOffSet);

    const handleNext = () => {
        if (offset<total){
            setOffset(offset+limit);
        }
    };

    const handlePrev = ()=>{
        if(offset>0){
            setOffset(offset-limit);
        }
    };

    const newOffSet= offset;
    return{
        newOffSet,
        handleNext,
        handlePrev,
    };

};

export default Paginate;