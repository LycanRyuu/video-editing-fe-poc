import { useDrag } from "react-dnd";

const MediaItem = ({ name }) => {
	const [{ isDragging }, drag] = useDrag({
		type: "media",
		item: { name },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	return (
		<div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
			{name}
		</div>
	);
};

export default MediaItem;
