import React from "react";
import { useDispatch } from "react-redux";
import { tasks } from "reducers/tasks";

import styled from "styled-components";

export const DeleteOne = ({ id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(tasks.actions.deleteOne(id));
  };
  return (
    <Button type="button" onClick={handleClick}>
      <ion-icon name="close-circle" style={{ color: "red" }}></ion-icon>
    </Button>
  );
};

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
