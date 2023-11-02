import "./App.css";
import MediaItem from "./MediaItem";
import Timeline from "./Timeline";

function App() {
	return (
		<>
			<div>
				<MediaItem name='Media 1' />
				<MediaItem name='Media 2' />
			</div>
			<div
				style={{
					backgroundColor: "#3d3e3d",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
				}}
			>
				<div />
				<Timeline />
			</div>
		</>
	);
}

export default App;
