import { Typography } from "@mui/material";
import styles from "../styles/LandingPage.module.scss";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
	const navigate = useNavigate();

	return (
		<>
			<div className={styles.Hero}>
				<h1 className={styles.Title}>
					All you need to create amazing videos
				</h1>
				<h3 className={styles.Headline}>
					Media Editing Platform for all your needs
				</h3>
				<div>
					<button
						className={styles.Button}
						onClick={() => navigate("/edit")}
					>
						Start Editing
					</button>
				</div>
			</div>
			<div className={styles.Features}>
				<Typography variant='h3'>What we offer</Typography>
				<div className={styles.Feature}>
					<div>
						<Typography variant='h4' sx={{ textAlign: "left" }}>
							Premium-quality assets
						</Typography>
						<Typography
							variant='body1'
							sx={{ textAlign: "justify" }}
						>
							Create with assets by world-class artists.
							Royalty-free music, SFX, stock footage, video
							templates, plugins and video editing software.
						</Typography>
					</div>
					<img src='https://images.pexels.com/photos/17386454/pexels-photo-17386454/free-photo-of-summer-sunsets-at-the-12-apostles-great-ocean-road-australia.jpeg?auto=compress&cs=tinysrgb&w=800' />
				</div>
			</div>
		</>
	);
};

export default LandingPage;
