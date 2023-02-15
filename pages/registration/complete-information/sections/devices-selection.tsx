import DeviceCard from "@components/molecules/DeviceCard/DeviceCard";
import { DeviceProps } from "@types/DeviceTypes";
import { Stack } from "@mui/material";
import { FunctionComponent, useState } from "react";

interface DeviceSelectionPageProps {}

const DeviceSelectionPage: FunctionComponent<DeviceSelectionPageProps> = () => {
	const [selectedDevice, SetSelectedDevice] = useState(0);
	const Devices: DeviceProps[] = [
		{
			name: "Adhesive QR",
			description: [
				"Very strong adhesive that holds to any surface.",
				"Each one links to a table on your restaurant that you can configure.",
				"Superb print quality.",
				"Water resistant.",
			],
			price: 12,
			imageURL: "/PNG/QR.png",
		},
		{
			name: "NFC Adhesive QR",
			description: [
				"Very strong adhesive that holds to any surface.",
				"Each one links to a table on your restaurant that you can configure.",
				"Superb print quality.",
				"Sealed in acrylic.",
				"NFC chip technology.",
			],
			imageURL: "/PNG/NFC QR.png",
			price: 4,
		},
	];
	return (
		<Stack gap={2}>
			{Devices.map((device, index) => (
				<DeviceCard
					key={index}
					device={device}
					selected={index == selectedDevice}
					onSelected={() => SetSelectedDevice(index)}
				/>
			))}
		</Stack>
	);
};

export default DeviceSelectionPage;
