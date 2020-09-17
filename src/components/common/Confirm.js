import React from 'react';
import {View, Text, Modal} from 'react-native';
import {CardSection} from './CardSection';
import {Button} from './Button';


const Confirm = ({ children, visible, onDecline, onAccept }) => {
  return (
    <Modal

        transparent
        animationType='slide'
        visible={visible}
        onRequestClose={() => {}}
      >
      <View style={styles.container}>
        <CardSection customStyle={{ justifyContent: 'center', margin: 10}}>
          <Text style={styles.textStyle}>{children}</Text>
        </CardSection>
        <CardSection customStyle={{ marginHorizontal: 10}}>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative'
  },
  textStyle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 50,
  },
}

export { Confirm };
