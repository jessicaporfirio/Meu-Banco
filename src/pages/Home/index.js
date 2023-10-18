import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header' /*importando a pasta Header*/
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list = [
  {
  id: 1,
  label: 'Boleto conta Luz',
  value: '301,98',
  date: '18/10/2023',
  type: 0 //despesas
},
{
  id: 1,
  label: 'Pix Juan',
  value: '1.000,00',
  date: '18/10/2023',
  type: 1 //receitas
},
{
  id: 1,
  label: 'Boleto Faculdade',
  value: '700,00',
  date: '18/10/2023',
  type: 0 //despesas
},
]
export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Jéssica Porfirio"/>
      
        <Balance saldo="10.500,00" gastos="-637,98"/>

        <Actions/>
        
        <Text style={styles.title}>Ultimas novimentações</Text>

        <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => <Moviments data={item}/> }
        />
         </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',    
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});
