import { addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import React from "react";

export const decorators = [
	Story => (
		<div style={{ position: "relative", zIndex: 0 }}>
			<Story />
		</div>
	)
];

addDecorator(withInfo);
