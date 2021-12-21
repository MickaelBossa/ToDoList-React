import styled from 'styled-components';
import styles from './Item.module.css';

const List = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.1rem black solid;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;



const DeleteBtn = styled.button`
  background-color: crimson;
  color: white;
  height: 2rem;
  border-radius: 0.1rem;
  margin-right: 1rem;
`;

export default function Item() {
  return (
    <List>
      <p className={styles.textContent}>Test</p>
      <DeleteBtn>Supprimer</DeleteBtn>
    </List>
  );
}
