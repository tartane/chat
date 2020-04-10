import React, {Component} from 'react'
import firebase from './Firebase'
export default class App extends Component {

    constructor (props) {
        super(props)

        this.state = {
            messages: []
        }
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

    render() {
        return <div>
            
            {this.state.messages.map(msg => {
            return <p>{msg.content}</p>
            })}
        </div>
    }
}