import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  List,
  ActivityIndicator,
  TouchableRipple,
  Modal,
  Headline,
  Paragraph,
} from 'react-native-paper';
export const HistoryList = params => {
  const [modalVisible, setModalVisible] = useState(false);
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);
  if (params.isLoading === true) {
    return <ActivityIndicator animating={true} size="large" />;
  } else {
    if (modalVisible) {
      return (
        <Modal
          visible={modalVisible}
          onDismiss={() => setModalVisible(false)}
          style={{
            backgroundColor: 'white',
            borderRadius: 16,
            marginHorizontal: '10%',
            marginTop: '60%',
            height: '30%',
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignContent: 'flex-start',
              padding: 16,
            }}>
            <Headline>Kristopher Schmidth</Headline>
            <Paragraph style={{marginTop: 32}}>
              Transaction ID: 1872cnt4r1274try9c2mo
            </Paragraph>
            <Paragraph>Date: 23/11/2022</Paragraph>
            <Paragraph style={{color: 'green'}}>
              Amount credited: $34500
            </Paragraph>
          </View>
        </Modal>
      );
    } else {
      return (
        <ScrollView>
          <List.Section>
            <List.Accordion
              title="Today"
              left={props => <List.Icon {...props} icon="credit-card" />}>
              <TouchableRipple onPress={() => setModalVisible(!modalVisible)}>
                <List.Item
                  title="Kristopher Schmidt"
                  description="Amount credited: $34500"
                  descriptionStyle={{color: 'green'}}
                  right={props => (
                    <List.Icon {...props} icon="trending-up" color="green" />
                  )}
                />
              </TouchableRipple>
              <TouchableRipple onPress={() => setModalVisible(!modalVisible)}>
                <List.Item
                  title="Izzie Gunn"
                  description="Amount credited: $34500"
                  descriptionStyle={{color: 'green'}}
                  right={props => (
                    <List.Icon {...props} icon="trending-up" color="green" />
                  )}
                />
              </TouchableRipple>
              <TouchableRipple onPress={() => setModalVisible(!modalVisible)}>
                <List.Item
                  title="Mahira Griffiths"
                  description="Amount debited: $34500"
                  descriptionStyle={{color: 'red'}}
                  right={props => (
                    <List.Icon {...props} icon="trending-down" color="red" />
                  )}
                />
              </TouchableRipple>
              <TouchableRipple onPress={() => setModalVisible(!modalVisible)}>
                <List.Item
                  title="Serena Barton"
                  description="Amount credited: $34500"
                  descriptionStyle={{color: 'green'}}
                  right={props => (
                    <List.Icon {...props} icon="trending-up" color="green" />
                  )}
                />
              </TouchableRipple>
            </List.Accordion>

            <List.Accordion
              title="Yesterday"
              left={props => <List.Icon {...props} icon="credit-card" />}
              onPress={handlePress}>
              <TouchableRipple onPress={() => setModalVisible(!modalVisible)}>
                <List.Item
                  title="Nayan Hopkins"
                  description="Amount debited: $34500"
                  descriptionStyle={{color: 'red'}}
                  right={props => (
                    <List.Icon {...props} icon="trending-down" color="red" />
                  )}
                />
              </TouchableRipple>
              <TouchableRipple onPress={() => setModalVisible(!modalVisible)}>
                <List.Item
                  title="Sneha Dunlap"
                  description="Amount credited: $34500"
                  descriptionStyle={{color: 'green'}}
                  right={props => (
                    <List.Icon {...props} icon="trending-up" color="green" />
                  )}
                />
              </TouchableRipple>
              <TouchableRipple onPress={() => setModalVisible(!modalVisible)}>
                <List.Item
                  title="Izzie Gunn"
                  description="Amount debited: $34500"
                  descriptionStyle={{color: 'red'}}
                  right={props => (
                    <List.Icon {...props} icon="trending-down" color="red" />
                  )}
                />
              </TouchableRipple>
              <TouchableRipple onPress={() => setModalVisible(!modalVisible)}>
                <List.Item
                  title="Aalia Delgado"
                  description="Amount debited: $34500"
                  descriptionStyle={{color: 'red'}}
                  right={props => (
                    <List.Icon {...props} icon="trending-down" color="red" />
                  )}
                />
              </TouchableRipple>
              <TouchableRipple onPress={() => setModalVisible(!modalVisible)}>
                <List.Item
                  title="Mahira Griffiths"
                  description="Amount credited: $34500"
                  descriptionStyle={{color: 'green'}}
                  right={props => (
                    <List.Icon {...props} icon="trending-up" color="green" />
                  )}
                />
              </TouchableRipple>
              <TouchableRipple onPress={() => setModalVisible(!modalVisible)}>
                <List.Item
                  title="Sneha Dunlap"
                  description="Amount debited: $34500"
                  descriptionStyle={{color: 'red'}}
                  right={props => (
                    <List.Icon {...props} icon="trending-down" color="red" />
                  )}
                />
              </TouchableRipple>
              <TouchableRipple onPress={() => setModalVisible(!modalVisible)}>
                <List.Item
                  title="Serena Barton"
                  description="Amount debited: $34500"
                  descriptionStyle={{color: 'red'}}
                  right={props => (
                    <List.Icon {...props} icon="trending-down" color="red" />
                  )}
                />
              </TouchableRipple>
            </List.Accordion>

            <List.Accordion
              title="Past Month"
              left={props => <List.Icon {...props} icon="credit-card" />}
              onPress={handlePress}>
              <TouchableRipple onPress={() => setModalVisible(!modalVisible)}>
                <List.Item
                  title="Aalia Delgado"
                  description="Amount credited: $34500"
                  descriptionStyle={{color: 'green'}}
                  right={props => (
                    <List.Icon {...props} icon="trending-up" color="green" />
                  )}
                />
              </TouchableRipple>
              <TouchableRipple onPress={() => setModalVisible(!modalVisible)}>
                <List.Item
                  title="Kealan Madden"
                  description="Amount credited: $34500"
                  descriptionStyle={{color: 'green'}}
                  right={props => (
                    <List.Icon {...props} icon="trending-up" color="green" />
                  )}
                />
              </TouchableRipple>

              <TouchableRipple onPress={() => setModalVisible(!modalVisible)}>
                <List.Item
                  title="Kristopher Schmidt"
                  description="Amount debited: $34500"
                  descriptionStyle={{color: 'red'}}
                  right={props => (
                    <List.Icon {...props} icon="trending-down" color="red" />
                  )}
                />
              </TouchableRipple>
              <TouchableRipple onPress={() => setModalVisible(!modalVisible)}>
                <List.Item
                  title="Kealan Madden"
                  description="Amount debited: $34500"
                  descriptionStyle={{color: 'red'}}
                  right={props => (
                    <List.Icon {...props} icon="trending-down" color="red" />
                  )}
                />
              </TouchableRipple>
              <TouchableRipple onPress={() => setModalVisible(!modalVisible)}>
                <List.Item
                  title="Nayan Hopkins"
                  description="Amount credited: $34500"
                  descriptionStyle={{color: 'green'}}
                  right={props => (
                    <List.Icon {...props} icon="trending-up" color="green" />
                  )}
                />
              </TouchableRipple>
            </List.Accordion>
          </List.Section>
        </ScrollView>
      );
    }
  }
};

const styles = StyleSheet.create({});
