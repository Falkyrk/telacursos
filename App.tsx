import{NavigationContainer} from "@react-navigation/native"
import{createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from "./Home"
import Administracao from "./Administracao"


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Administracao" component={Administracao}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

