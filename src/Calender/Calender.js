import React from "react";
import { DAYS } from "./Cont";
import { Wrapper, CalenderHead, SavenColGrid, HeadDay,CalenderBody,StyledDay } from "./styled";
import IonIcon from "@reacticons/ionicons";
import { range } from "./Utils";
const Calender = () => {
  console.log(DAYS, "DAYS..");
  return (
    <Wrapper>
      <CalenderHead>
        <IonIcon name="arrow-back-circle"></IonIcon>
        <p>oct 2023</p>
        <IonIcon name="arrow-forward-circle"></IonIcon>
        <p>sep 2023</p>
      </CalenderHead>
      <SavenColGrid>
      {DAYS.map((day,ind)=> (
      <HeadDay key={ind}>{day}</HeadDay>
      ))}
      </SavenColGrid>
      <CalenderBody>
        {range(31).map((day,ind) => (
        <StyledDay key={ind}>{day}</StyledDay>))}
      </CalenderBody>
    </Wrapper>
  );
};

export default Calender;
