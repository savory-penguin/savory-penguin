var React = require('react-native');
var styles = require('./Styles');
var api = require('../utils/api');
var Firebase = require('firebase');

var {
  View,
  Text,
  ListView,
  TextInput,
  StyleSheet,
  TouchableHighlight
} = React;


class Messenger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      //message: '',
      error: ''
    };
    
    console.log('userLeft: ', this.props.userLeft);
    console.log('userRight.username: ', this.props.userRight);

    var timestamp = this.props.dbNameTimestamp;
    console.log('timestamp: ', timestamp);

    var dbNameChat = this.props.userLeft + this.props.userRight + ' ' + timestamp;
    console.log('dbNameChat: ', dbNameChat);
    
    this.db = new Firebase(`https://native-messenger.firebaseio.com/${dbNameChat}`);
  }
  listenForMessages(db) {
    db.on('value', (snap) => {
      var messages = [];
      snap.forEach((child) => {
        messages.push({
          username: child.val().username,
          message: child.val().message,
          _key: child.key()
        });
      });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(messages)
      });
    });
  }
  componentDidMount() {
    this.listenForMessages(this.db);
  }
  handleChange(e){
    this.setState({
      message: e.nativeEvent.text
    });
  }
  handleSubmit(){
    var message = this.state.message;
    this.setState({
      message: ''
    });
    api.addMessage(this.props.userLeft, message, this.db)
      // .then((data) => {
      // })
      .catch((err) => {
        console.log('Request failed', err);
        this.setState({error}) //same as {error: error} - ES6 thing
      });
  }
  footer(){
    return (
      <View style={styles.footerContainer}>
        <TextInput
          style={styles.searchInput}
          value={this.state.message}
          onChange={this.handleChange.bind(this)}
          placeholder="New message"
          placeholderTextColor="#b6b6b6" />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="white">
            <Text style={styles.buttonText}> Submit </Text>
        </TouchableHighlight>
      </View>
    )
  }
  messageViewer(rowData) {
    if (rowData.username === this.props.userLeft.toLowerCase()) {
      return (
        <Text style={styles.messageTextLeft}>{rowData.message}</Text>
      )
    } else {
      return (
        <Text style={styles.messageTextRight}>{rowData.message}</Text>
      )
    }
  }
  render(){
    return (
      <View style={styles.mainContainer}>
        <View style={styles.messengerContainer}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => this.messageViewer(rowData)}
            enableEmptySections={true} />
          {this.footer()}
        </View>
      </View>
    )
  }
};

Messenger.propTypes = {
  userLeft: React.PropTypes.string.isRequired,
  // messages: React.PropTypes.string.isRequired
};

module.exports = Messenger;