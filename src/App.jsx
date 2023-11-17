import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Edit from "./components/Edit";
import Person2Icon from "@mui/icons-material/Person2";
import { Button, Typography } from "@mui/material";

function App() {
	return (
		<div>
			<header className='header'>
				<Typography variant='h4' className='name'>
					Editor
				</Typography>
				<Button startIcon={<Person2Icon />}>Sign In</Button>
			</header>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/edit' element={<Edit />} />
			</Routes>
		</div>
	);
}

export default App;
