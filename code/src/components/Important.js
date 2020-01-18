import React from "react";
import { useDispatch } from "react-redux";
import { tasks } from "reducers/tasks";

import styled from "styled-components";

export const Important = ({ ifImportant, id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(tasks.actions.toggleImportant(id));
  };
  return (
    <Button type="button" onClick={handleClick}>
      {ifImportant === true && (
        <ion-icon name="star" style={{ color: "orange" }}></ion-icon>
      )}
      {ifImportant === false && (
        <ion-icon name="star-outline" style={{ color: "orange" }}></ion-icon>
      )}
    </Button>
  );
};

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
