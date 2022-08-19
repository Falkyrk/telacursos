import{NavigationContainer} from "@react-navigation/native"
import{createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from "./Home"
import Administracao from "./Administracao"
import BemEstar from "./BemEstar"
import Tecnologia from "./Tecnologia"
import Fotografia from "./Fotografia"


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Administracao" component={Administracao}/>
      <Stack.Screen name="BemEstar" component={BemEstar}/>
      <Stack.Screen name="Tecnologia" component={Tecnologia}/>
      <Stack.Screen name="Fotografia" component={Fotografia}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

