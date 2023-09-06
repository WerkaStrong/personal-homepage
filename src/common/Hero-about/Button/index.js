import { HireButton, RectangleImage } from "./styled";
import rectangle from "../../image/Message.svg"

export const Button = () => {

	return (
		<HireButton>
			<RectangleImage src={rectangle} alt=""/>
			Hire me
		</HireButton>
	)
}