import { SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity, Pressable } from 'react-native';
import Accordion, { AccordionData } from './Accordion';
import { Fragment } from 'react';

export default function App() {

  const data:AccordionData =  [
    {
      title: "First",
      children: (
        <View>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Quod sint amet, aspernatur voluptas minima facilis, eos totam, fugit 
            pariatur at repellat cum earum dolorem deserunt voluptate provident 
            neque dolorum velit. 
            Mollitia, incidunt sint. 
            Voluptates porro optio numquam ipsum esse sequi eum eos 
            odio voluptatibus nam! Facilis nulla incidunt quam inventore?
          </Text>
          <TouchableOpacity style={{paddingVertical: 10, paddingHorizontal: 24, borderRadius: 24, backgroundColor: "#b942f5", alignSelf: "flex-start", marginTop: 5}} activeOpacity={0.7}>
            <Text style={{color: "#fff"}}>More</Text>
          </TouchableOpacity>
        </View>
      )
    },
    {
      title: "Second",
      onPress: ()=>{},
      // children: <View> <Text>Hello</Text> </View>
    },
    {
      title: "Third",
      onPress: ()=>{},
      // children: <View> <Text>Hello</Text> </View>
    },
  ]
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar  />

      {
        data.map((accordionData, idx)=>(
          <Fragment key={accordionData.title}>
            <Accordion 
              title={accordionData.title}
            >
              {accordionData.children}
            </Accordion>
            {idx !== data.length-1 && <View style={{marginTop: 8}} />}
          </Fragment>
        ))
      }
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
