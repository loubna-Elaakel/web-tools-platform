import { useState } from "react";
import BackHome from "../components/BackHome"


function AgeCalculator() {

  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);

  function calculateAge() {

    if (!birthDate) return;

    const today = new Date();
    const birth = new Date(birthDate);

    let years = today.getFullYear() - birth.getFullYear();

    const month = today.getMonth() - birth.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
      years--;
    }

    setAge(years);
  }

  return (
    <div style={{padding:"30px"}}>
<BackHome/>

      <h2>Age Calculator</h2>

<p>Calculate your exact age from birthdate.</p>

      <input
        type="date"
        value={birthDate}
        onChange={(e)=>setBirthDate(e.target.value)}
      />

      <br/><br/>

      <button onClick={calculateAge}>
        Calculate Age
      </button>

      {age !== null && (
        <h3>Your age is: {age} years</h3>
      )}

    </div>
  );
}

export default AgeCalculator;