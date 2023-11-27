import { useRef } from "react";
import styles from "./App.module.css";
import { hashSet } from "./HashSet";

function App() {
  const inputRref = useRef<HTMLInputElement>(null);

  function addValueToHashSet() {
    const val : number = Number(inputRref.current?.value);
    //add the value to the Hash Set if not already present, else do nothing
    hashSet.add(val);
    //updated Hash Set
    console.log(hashSet.hashArray);
  }

  function removeValueFromHashSet() {
    const val : number = Number(inputRref.current?.value);
    //remove the value from the Hash Set if present, else do nothing
    hashSet.remove(val);
    //updated Hash Set
    console.log(hashSet.hashArray);
  }

  function isValuePresent() {
    const val : number = Number(inputRref.current?.value);
    const isPresent: boolean = hashSet.contains(val);
    console.log(isPresent);
  }

  return (
    <div className={styles.container}>
      <input type="number" ref={inputRref} placeholder="Enter a number"/>
      <button onClick={addValueToHashSet}>Add</button>
      <button onClick={removeValueFromHashSet}>Remove</button>
      <button onClick={isValuePresent}>Contains</button>
    </div>
  )
}

export default App;