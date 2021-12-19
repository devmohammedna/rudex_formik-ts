import React from 'react'
import { useDispatch } from "react-redux";
import Moment from "react-moment";
import { initialForm } from "../../Redux/Form/actions";
export default function DataFormItem({itemDetails }) {
    const dispach = useDispatch();
    const handleUpdate = () => {
    const start = itemDetails.startDate
      ? itemDetails.startDate.slice(0, 10)
      : itemDetails.startDate;
    const end = itemDetails.endDate
      ? itemDetails.endDate.slice(0, 10)
      : itemDetails.endDate;
    dispach(initialForm({ ...itemDetails, startDate: start, endDate: end }))}
    return (
     <>
     {itemDetails &&
     
        <div className="slice">
      <span>
          {itemDetails?.jobTitle}@{itemDetails?.companyName}
      </span>
      <span>
      {itemDetails?.startDate ? (
        <Moment format="MMM/YYYY">{itemDetails?.startDate}</Moment>
        ) : (
          <span>No Date</span>
          )}
         {itemDetails?.currentlyWork ? (
           "New"
        ) : itemDetails?.endDate ? (
          <Moment format="MMM/YYYY">{itemDetails?.endDate}</Moment>
          ) : (
          <span>No Date</span>
        )}
        </span>
           <span>
        <button onClick={handleUpdate}>update</button>
        {/* <button onClick={() => dispach(deleteWorkExperiance(itemDetails._id))}> */}
          {/* delete */}
        {/* </button> */}
      </span>
        </div>
        }
        </>
    )
}
