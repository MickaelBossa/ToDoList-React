import Item from "./Item";
import { useState } from "react";

export default function Form() {
  return (
    <div>
      <form className="form">
        <label htmlFor="todo">Chose à faire</label>
        <input type="text" className="input" />
        <button className="submitBtn">Envoyez</button>
      </form>

      <h2 className="subtitle">Liste des choses à faire : </h2>
      <ul>
        <Item />
      </ul>
    </div>
  );
}
