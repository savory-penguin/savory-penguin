// Display both users' images and an "Enjoy your lunch" message

var React = require('react-native');
var styles = require('./Styles');
var Rating = require('./rating');
var IP_address = require('../../environment.js').IP_address;


var {
  Component,
  View,
  Text,
  Image,
  Navigator
} = React;

class Enjoy extends Component{
  constructor(props) {
    super(props);
    setTimeout(this.nextPage.bind(this), 2000);
  }

  nextPage(){
    this.props.navigator.push({
      title: 'Rate your lunch buddy',
      component: Rating,
      passProps: this.props
    });
  }

  render(){
    var imageLinkMe = `${IP_address}/users/${this.props.username}/profilePhoto?date=${Date.now()}`;
    var imageLinkMatch = this.props.match.testprofileImage || `${IP_address}/users/${this.props.match.username}/profilePhoto?date=${Date.now()}`;
    return (
      <View style={styles.mainContainer}>
        <Image resizeMode="stretch" source={require('./../assets/enjoy.jpg')}
          style={styles.backgroundImage}
        />
        <View style={styles.avatarContainer}>
          <Image source={{uri: imageLinkMe}} style={styles.avatarMatch} />
          <Image source={{uri: imageLinkMatch}} style={styles.avatarMatch} />
        </View>
        <Text style={styles.title}> Enjoy your {this.props.lunchOrCoffee === 'lunch' ? 'lunch' : 'coffee'}!</Text>
      </View>
    )
  }
}

module.exports = Enjoy;
