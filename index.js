import {AppRegistry} from "react-native"
import {name as appName} from "./app.json"

import {GlobalContextProvider} from "./src/contexts/Global.context"
import {Router} from "./src/helpers/Router"

// Screens
import HomeScreen from "./src/screens/HomeScreen/HomeScreen"
import LoginScreen from "./src/screens/LoginScreen"
import RegisterScreen from "./src/screens/RegisterScreen"
import ReservationsScreen from "./src/screens/ReservationsScreen"

const App = () => {
	return (
		<GlobalContextProvider>
			<Router
				routes={{
					"home": <HomeScreen/>,
					"login": <LoginScreen/>,
					"register": <RegisterScreen/>,
					"reservations": <ReservationsScreen/>,
				}}
			/>
		</GlobalContextProvider>
	)
}

AppRegistry.registerComponent(appName, () => App)
