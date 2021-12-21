import Item from "./Item";
import { useState } from "react";
import styled from 'styled-components';
import styles from './Form.module.css'

const AppForm = styled.form`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`;

const TextInput = styled.input`
  display: block;
  width: 80%;
  margin-top: 1rem;
`;

const SubmitBtn = styled.button`
  background-color: blue;
  color: white;
  border-radius: 0.1rem;
  height: 2rem;
  margin-top: 1rem;
`;

export default function Form() {
  return (
    <div>
      <AppForm>
        <label htmlFor="todo">Chose à faire</label>
        <TextInput type="text"/>
        <SubmitBtn>Envoyez</SubmitBtn>
      </AppForm>

      <h2 className={styles.subtitle}>Liste des choses à faire : </h2>
      <ul>
        <Item />
      </ul>
    </div>
  );
}
