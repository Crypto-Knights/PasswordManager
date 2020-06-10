import React from "react"
import FormComponent from "../components/FormComponent";
import createUser from "../api/user/createUser";
import Navbar from "../components/Navbar";
import FieldErrorCheck from "../components/FieldErrorCheck";
import Redirect from "react-router-dom/es/Redirect";

const securityQuestions = [
    {key: '1', value: '1', text: 'What primary school did you attend?'},
    {key: '2', value: '2', text: 'What was the house number and street name you lived in as a child?'},
    {key: '3', value: '3', text: 'What were the last four digits of your childhood telephone number?'},
    {key: '4', value: '4', text: 'In what town or city was your first full time job?'},
    {key: '5', value: '5', text: 'n what town or city did you meet your spouse or partner?'},
    {key: '6', value: '6', text: 'What is the middle name of your oldest child?'},
    {key: '7', value: '7', text: 'What are the last five digits of your driver\'s license number?'},
    {key: '8', value: '8', text: 'What is your grandmother\'s (on your mother\'s side) maiden name?'},
    {key: '9', value: '9', text: 'What is your spouse or partner\'s mother\'s maiden name?'},
];

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            answerOne: "",
            questionOne: "",
            errorMsg: "",
            redirect: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
            errorMsg: null
        })

    }

    handleSubmit = async () => {
        const userObj = this.state;
        const fieldError = FieldErrorCheck(userObj);
        if (fieldError) {
            await this.setState({
                errorMsg: fieldError
            });
            console.log(this.state.errorMsg)
        } else {
            createUser(userObj);
            this.setState({
                redirect: true
            })
        }
    };

    render() {
        if(this.state.redirect) {
            return <Redirect to="../"/>
        }
        return (
            <div>
                <Navbar/>
                <FormComponent
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    securityQuestions={securityQuestions}
                    {...this.state}
                />
            </div>
        )
    }
}

export default Signup