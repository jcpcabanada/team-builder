import './App.css';
import React, {useState} from 'react'
import Form from './components/Form'
import Member from "./components/Member";

const initialFormValues = {
    fullname: '',
    email: '',
    position: '',
}

function App() {

    const [teamMembers, setTeamMembers] = useState([]);
    const [formValues, setFormValues] = useState(initialFormValues);


    const updateForm = (inputName, inputValue) => {
        setFormValues({...formValues, [inputName]: inputValue});
    }

    const submitForm = () => {
        const newFriend = {
            fullname: formValues.fullname.trim(),
            email: formValues.email.trim(),
            position: formValues.position
        }

        setTeamMembers(teamMembers.concat(newFriend));
        setFormValues(initialFormValues);
    }


    // if(newFriend.username.length <= 3) {
    //     setFormErrors("Username has to be longer than 3 characters ya chump!");
    //     return;
    // }


    return (
        <div className="App">
            <h1>Team Builder</h1>
            <Form
                values={formValues}
                update={updateForm}
                submit={submitForm}
            />
            {
                teamMembers.map((bruh, idx) => {
                    return (
                        <Member key={idx} details={bruh}/>
                    )
                })
            }
        </div>
    );
}


export default App;
