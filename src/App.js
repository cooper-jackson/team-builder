import './App.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Superhero from './Superhero'
import './Superhero.css';



function App() {
  const initialFormValues = {mName: "", mEmail: "", mRole: ""}
  const [formValues, setFormValues] = useState(initialFormValues)
  const [membersList, setMembersList] = useState([
    {mName: 'Batman', mEmail: 'bruce.wayne@hotmail.com', mRole: 'Superhero'},
    {mName: 'Catwoman', mEmail: 'selena.kyle@wayne-enterprises.com', mRole: 'Anti-hero'},
    {mName: 'Commissioner Gordon', mEmail: 'big_boss_gordon@yahoo-finance-advice.com', mRole: 'Police Chief'},
    {mName: 'Robin', mEmail: 'dick.grayson@whatever.com', mRole: 'Sidekick'}
  ])

  const onChange = event => {
    const {name, value} = event.target
    setFormValues({...formValues, [name]: value})
  }

  const onSubmit = event => {
    event.preventDefault()
    const newMember = {
      mName: formValues.mName.trim(),
      mEmail: formValues.mEmail.trim(),
      mRole: formValues.mRole,
    }
    setMembersList([...membersList, newMember])
    console.log(membersList)
    setFormValues(initialFormValues)
  }
  
  
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <label>Name: </label>
        <input
          value={formValues.mName}
          maxLength="20"
          placeholder="Name..."
          id="mnInput"
          name="mName"
          type="text"
          onChange={onChange}
        />

        <label>Email: </label>
        <input
          value={formValues.mEmail}
          maxLength="30"
          placeholder="Email..."
          id="meInput"
          name="mEmail"
          type="text"
          onChange={onChange}
        />

        <label>Role: </label>
        <select id="mrInput" name="mRole" onChange={onChange} value={formValues.mRole}>
          <option value="" disabled>Choose a Role...</option>
          <option value="Superhero">Superhero</option>
          <option value="Sidekick">Sidekick</option>
          <option value="Police Chief">Police Chief</option>
          <option value="Anti-hero">Anti-hero</option>
          <option value="The Help">The Help</option>
        </select>

        <br/>
        <div className='submit' onClick={onSubmit}>
          <button>Submit</button>
        </div>
      </form>
      <ul className="memberList">
        {membersList.map((member, index) => {
          return <Superhero key={index} member={member}/>
        })}
      </ul>
    </div>
  );
}

export default App;
