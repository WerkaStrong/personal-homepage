import styled from 'styled-components'

export const Container = styled.div`
	background: ${({theme}) => theme.webBackground};
	width: calc(100% - 28px);
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
    align-items: center;

	@media (min-width: 1226px) {
		margin: 0 auto;
		max-width: 1216px;
	}
`