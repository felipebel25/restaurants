import {
	Box,
	Button,
	ButtonGroup,
	Collapse,
	ListItem,
	Stack,
	Typography,
} from "@mui/material";
import { FunctionComponent, useState } from "react";
import { DeviceProps } from "./DeviceTypes";
import TextField from "@mui/material/TextField";

interface DeviceCardProps {
	device: DeviceProps;
	selected: boolean;
	onSelected: () => void;
}

const DeviceCard: FunctionComponent<DeviceCardProps> = ({
	device,
	selected,
	onSelected,
}) => {
	const [amount, SetAmount] = useState(0);
	return (
		<Button
			disableRipple={selected}
			sx={{ textTransform: "none", gap: 3 }}
			color="secondary"
			onClick={onSelected}
			variant={!selected ? "contained" : "outlined"}
		>
			{!selected && (
				<img
					src={device.imageURL}
					width={40}
				/>
			)}
			<Box
				flexGrow={1}
				display={"flex"}
				flexDirection="column"
				gap={selected ? 2 : 0}
				p={selected ? 3 : 0}
			>
				{selected && (
					<img
						src={device.imageURL}
						width={100}
					/>
				)}

				<Box
					display="flex"
					flexGrow={1}
					justifyContent="space-between"
				>
					<Typography variant={selected ? "h5" : "subtitle1"}>
						<b>{device.name}</b>
					</Typography>

					<Typography variant="subtitle1">
						<b>{`$${device.price}`}</b>
					</Typography>
				</Box>
				<Collapse
					timeout={350}
					in={selected}
				>
					<Stack gap={5}>
						<Stack>
							{selected &&
								device.description.map((description, index) => (
									<ListItem
										key={index}
										sx={{
											padding: 0,
											listStyleType: "disc",
											display: "list-item",
										}}
									>
										{description}
									</ListItem>
								))}
						</Stack>

						<ButtonGroup
							color="secondary"
							sx={{ flexGrow: 1, alignItems: "center" }}
						>
							<Typography
								variant="h5"
								sx={{ flexGrow: 1, textAlign: "left" }}
							>
								<b>{`$${amount * device.price}`}</b>
							</Typography>

							{amount > 0 && (
								<Button
									variant="contained"
									onClick={() => SetAmount(amount - 1)}
								>
									-
								</Button>
							)}

							<TextField
								type={"tel"}
								color={"secondary"}
								variant="standard"
								sx={{
									input: { fontSize: 24, textAlign: "center" },
									width: 80,
									paddingInline: 1,
								}}
								value={amount}
								onChange={(e) => {
									const value = parseInt(e.target.value);
									SetAmount(!isNaN(value) ? value : amount);
								}}
							/>

							<Button
								variant="contained"
								onClick={() => SetAmount(amount + 1)}
							>
								+
							</Button>
						</ButtonGroup>
					</Stack>
				</Collapse>
			</Box>
		</Button>
	);
};

export default DeviceCard;
