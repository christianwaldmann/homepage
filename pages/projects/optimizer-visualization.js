import Layout from "../../components/layouts/article";
import Paragraph from "../../components/paragraph";
import {
	Title,
	ProjectImage,
	ProjectBadge,
	ProjectList,
	ProjectListItem,
} from "../../components/project";
import StyledLink from "../../components/styled-link";

import thumbImage1 from "../../public/images/optimizer_visualization.png";

export default function Project() {
	return (
		<Layout>
			<Title>Optimizer Visualization</Title>
			<Paragraph>
				This simulation visualizes gradient descent methods in different
				situations. The main motivation behind that is to better
				understand optimizers which are being used by deep learning
				frameworks. The following optimizers are implemented: SGD, SGD
				Momentum, Nesterov Momentum, AdaGrad, RMSProp, Adam
			</Paragraph>
			<ProjectList>
				<ProjectListItem>
					<ProjectBadge>Languages</ProjectBadge>
					Python
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>Libraries</ProjectBadge>
					Numpy, Matplotlib
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>Tools</ProjectBadge>
					Git
				</ProjectListItem>
				<ProjectListItem>
					<ProjectBadge>Source Code</ProjectBadge>
					<a href="https://github.com/christianwaldmann/optimizer-visualization">
						<StyledLink>Github Repository</StyledLink>
					</a>
				</ProjectListItem>
			</ProjectList>
			<ProjectImage src={thumbImage1} alt="Optimizer Visualization" />
		</Layout>
	);
}
