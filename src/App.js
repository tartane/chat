import React, {Component} from 'react'
import firebase from './Firebase'
export default class App extends Component {

    constructor (props) {
        super(props)

        this.state = {
            messages: [],
            messageValue: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClearClick = this.handleClearClick.bind(this);
    }

    componentDidMount() {
        const db = firebase.firestore()

        db.collection('messages').onSnapshot((snapshot) => {
            let messages = [];
            snapshot.forEach((msg) => {
              messages.push(msg.data());
            });
            this.setState({ messages });
            console.log(messages)
        })
        
    }

    handleChange(event) {
        this.setState({messageValue: event.target.value});
    }

    handleSubmit(event) {
        const db = firebase.firestore()

        db.collection('messages').add({
                content: this.state.messageValue
            })
        event.preventDefault();
    }

    handleClearClick(event) {
        const db = firebase.firestore()
        db.collection('messages').get().then((snapshot) => {
            snapshot.docs.map(doc => doc.ref.delete());
        })
        
        /*
        db.collection('messages').get().then(val => {
            val.map((val) => {
                val.delete()
            })
        })*/
        event.preventDefault();
    }

    render() {
        return (
            <div>
                {this.state.messages.map(msg => {
                return <p>{msg.content}</p>
                })}
                
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="message" onChange={this.handleChange}></input>
                    <input type="submit" value="Send" />
                    
                </form>

                <input type="button" onClick={this.handleClearClick} value="clear"></input>
            </div>
        )
    }
}