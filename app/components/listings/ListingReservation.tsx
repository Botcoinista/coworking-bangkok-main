"use client";

import { Range } from "react-date-range";

import Calender from "../inputs/Calender";


interface ListingReservationProps {
 
  dateRange: Range;
  onChangeDate: (value: Range) => void;
  disabledDates: Date[];
}

const ListingReservation = ({
  
  dateRange,
  onChangeDate,
  disabledDates,
}: ListingReservationProps) => {



  return <div 
  className="
    bg-white
    rounded-xl
    border-[1px]
    border-neutral-200
    overflow-hidden
  ">
    <Calender
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
    />
   
   
  </div>;
};

export default ListingReservation;
