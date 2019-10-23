import * as React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  Dimensions,
  View,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import { setTitleExample } from '~/store/main/actions';

const Main = props => {
  React.useEffect(() => {
    props.setTitleExample('Bem-vindo ao Template Básico!');
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Image
        source={{
          uri: 'https://s3-sa-east-1.amazonaws.com/prod-jobsite-files.kenoby.com/uploads/goKdigital-1570109201-gopng.png',
        }}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.welcome}>{props.title}</Text>
      <Text style={styles.instructions}>Essa é a tela principal da sua aplicação =)</Text>
      <Text style={styles.instructions}>Você pode editar a tela no arquivo:</Text>
      <Text style={[styles.instructions, styles.fileName]}>src/pages/Main/index.js</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#FFF'
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  instructions: {
    color: '#333',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  logo: {
    height: Dimensions.get('window').height * 0.11,
    marginVertical: Dimensions.get('window').height * 0.11,
    width: Dimensions.get('window').height * 0.11 * (1950 / 662),
  },
  welcome: {
    color: '#50cc1a',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#50cc1a',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
  }
});

const mapStateToProps = state => ({
  title: state.Main.title
});

const mapStateToDispatch = {
  setTitleExample
}

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Main);
