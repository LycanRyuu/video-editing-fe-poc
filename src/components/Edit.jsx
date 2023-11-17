import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import MediaItem from "./MediaItem";
import Timeline from "./Timeline";

const Edit = () => {
	return (
		<DndProvider backend={HTML5Backend}>
			<div
				style={{
					height: "100vh",
					width: "100vw",
					display: "grid",
					gridTemplateColumns: "2fr 5fr",
				}}
			>
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
			</div>
		</DndProvider>
	);
};

export default Edit;
