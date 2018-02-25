//Imports
import React, { Component } from 'react';

import  {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Picker,
  TextInput,
  ScrollView,
  TouchableOpacity,

} from 'react-native';

import Note from './Note';

//Componente

export default class App extends Component {

  state={
    noteArray:[{'date': 'Fecha','note': 'Producto'}],
    noteText:'',
  }

  render() {

    let notes = this.state.noteArray.map((val, key)=>{
            return <Note key={key} keyval={key} val={val}
                    deleteMethod={()=>this.deleteNote(key)}/>
    });

    return (
       <View style={styles.container}>
          <View style={styles.header}>
              <Text style={styles.headerText}>.:LISTA DE COMPRAS:.</Text>
          </View>
          <ScrollView style={styles.scrollContainer}>
            {notes}
          </ScrollView>

          <Picker
            selectedValue={this.state.language}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>

          <View style={styles.footer}>

          <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>

          <TextInput style={styles.textInput}
              onChangeText={(noteText)=> this.setState({noteText}) } value = {this.state.noteText}
              placeholder='Agrega tu producto' placeholderTextColor='white' underlineColorAndroid='transparent'>
          </TextInput>

          </View>

      </View>

    );
  }

  addNote(){
    //alert(this.state.noteText);
    if(this.state.noteText){
            var d = new Date();
            this.state.noteArray.push({
                'date':d.getFullYear()+
                "/"+(d.getMonth()+1) +
                "/"+ d.getDate(),
                'note': this.state.noteText
            });
            this.setState({ noteArray: this.state.noteArray });
            this.setState({noteText:''});
    }
  }

   deleteNote(key){
        this.state.noteArray.splice(key, 1);
        this.setState({noteArray: this.state.noteArray});
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#8bc34a',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderBottomWidth: 10,
    borderBottomColor: '#ddd'
  },
  handerText: {
    color: 'white',
    fontSize: 18,
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    alignItems: 'center',
    bottom:0,
    left: 0,
    right: 0,
  },
  addButton: {
    backgroundColor: '#5a9216',
    width:50,
    height:50,
    borderRadius:50,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    marginBottom: 45,
    zIndex:10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  textInput:{
    alignSelf: 'stretch',
    color: '#fff',
    padding:10,
    paddingTop:26,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed'
  }

});
