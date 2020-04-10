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
        const db = firebase.database()

        var asdf = db.ref('messages')
        console.log(asdf)
        db.ref("messages").on("value", snapshot => {
            console.log('on message')
            let messages = [];
            snapshot.forEach((msg) => {
              messages.push(msg.val());
            });
            this.setState({ messages });
          });
    }

    render() {
        return <div>
            {this.state.messages.map(msg => {
            return <p>{msg.content}</p>
            })}
            <h1>{this.state.messages}</h1>
        </div>
    }
}