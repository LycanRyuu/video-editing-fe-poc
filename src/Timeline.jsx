import { useRef, useState } from "react";
import { useDrop } from "react-dnd";

const Timeline = () => {
	const timelineRef = useRef(null);
	const [layers, setLayers] = useState([[]]);

	// const layers = [
	// 	[
	// 		{
	// 			media_id: 1,
	// 			media_start_time: 10,
	// 			timeline_start: 100,
	// 			timeline_end: 150,
	// 		},
	// 	],
	// 	[
	// 		{
	// 			media_id: 1,
	// 			media_start_time: 10,
	// 			timeline_start: 200,
	// 			timeline_end: 350,
	// 		},
	// 	],
	// ];

	const renderTimeline = () => {
		const intervals = [];

		layers.forEach((layer) => {
			console.log("layer.sort", layer);

			const sortedLayer = layer.sort(
				(a, b) => a.timeline_start - b.timeline_start,
			);
			let currentEnd = 0;

			sortedLayer.forEach((item, index) => {
				if (currentEnd < item.timeline_start) {
					intervals.push(
						<div
							key={`empty-${currentEnd}-${item.timeline_start}`}
							style={{
								width: item.timeline_start - currentEnd,
								height: 100,
								display: "inline-block",
							}}
						/>,
					);
				}

				intervals.push(
					<div
						key={item.media_id}
						style={{
							width: item.timeline_end - item.timeline_start,
							height: 100,
							backgroundColor: "green",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						{item.name}
					</div>,
				);

				currentEnd = item.timeline_end;
			});
		});

		return intervals;
	};

	const [{ canDrop, isOver }, drop] = useDrop({
		accept: "media",
		// drop: (item, monitor) => {
		// 	const itemPosition = monitor.getClientOffset();
		// 	const snappedX = Math.round(itemPosition.x / 10) * 10;
		// 	console.log(itemPosition.x, itemPosition.y);
		// 	console.log(snappedX);
		// },
		drop: (item, monitor) => {
			const timelinePos = timelineRef.current.getBoundingClientRect();
			const droppedItemPos = monitor.getClientOffset();
			const itemPosition = {
				x: droppedItemPos.x - timelinePos.x,
				y: droppedItemPos.y - timelinePos.y,
			};
			const snappedX = Math.round(itemPosition.x / 10) * 10;
			const snappedY = Math.round(itemPosition.y / 10) * 10;
			console.log(itemPosition.x, itemPosition.y);
			console.log(snappedX, snappedY);

			setLayers((l) => [
				[
					...l[0],
					{
						name: item.name,
						media_id: 1,
						media_start_time: 10,
						timeline_start: snappedX,
						timeline_end: snappedX + 100,
					},
				],
			]);

			// const layers = [
			// 	[
			// 		{
			// 			media_id: 1,
			// 			media_start_time: 10,
			// 			timeline_start: 100,
			// 			timeline_end: 150,
			// 		},
			// 	],
			// 	[
			// 		{
			// 			media_id: 1,
			// 			media_start_time: 10,
			// 			timeline_start: 200,
			// 			timeline_end: 350,
			// 		},
			// 	],
			// ];
		},
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	});

	drop(timelineRef);

	return (
		<div
			ref={timelineRef}
			style={{
				border: `2px dashed ${canDrop ? "green" : "black"}`,
				backgroundColor: isOver ? "black" : "grey",
				height: "200px",
				width: "100%",
				display: "flex",
				justifyContent: "flex-start",
			}}
		>
			{/* Timeline */}
			{renderTimeline()}
		</div>
	);
};

export default Timeline;
