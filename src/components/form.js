import React, { Component } from 'react';
import BasicExample from './congrats';


export default class Form extends Component {
    render() {
        return (
            <div className="form-container">
                <form className="puppy-apply">
                    First Name: <input type='text' /> <br />
                    Last Name: <input type='text' /> <br />
                    Phone Number: <input type='text' />< br />
                    Email: <input type='text' /> <br />
                    Which puppy do you want to adopt?<br />
                    <input type='radio' name="puppy" id="puppy1" /> Puppy 1 <input type='radio' name="puppy" id="puppy2" /> Puppy 2 <input type='radio' name="puppy" id="puppy3" /> Puppy 3 <br />
                    {/* <button onPress={() => this.props.navigation.navigate('Congratulations')}>
                        Submit
                    </button>  */}
                    <BasicExample />


                </form>
            </div>
        );
    }
}