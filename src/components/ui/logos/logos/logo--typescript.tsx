import type { LogoComponent } from "../SvgLogo";

const TypeScript = ({ width, height }: LogoComponent) => (
	<svg
		viewBox="0 0 48 48"
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
		aria-label="TypeScript logo"
		role="img"
	>
		<title>TypeScript logo</title>
		<rect
			width="47.93"
			height="47.93"
			x="-0.04"
			y="0.11"
			fill="#1976d2"
			transform="matrix(1, 0, 0, 1, 1.7763568394002505e-15, 8.881784197001252e-16)"
		/>
		<polygon
			fill="#fff"
			points="28.572 21.412 10.913 21.412 10.913 25.758 17.247 25.758 17.247 45.378 22.265 45.378 22.265 25.758 28.572 25.758"
			transform="matrix(1, 0, 0, 1, 1.7763568394002505e-15, 8.881784197001252e-16)"
		/>
		<path
			fill="#fff"
			d="M 44.154 26.85 C 44.154 26.85 41.775 25.263 39.086 25.263 C 36.396 25.263 35.428 26.541 35.428 27.907 C 35.428 31.432 45.255 31.08 45.255 38.175 C 45.255 49.104 30.272 44.256 30.272 44.256 L 30.272 39.013 C 30.272 39.013 33.137 41.173 36.573 41.173 C 40.01 41.173 39.879 38.926 39.879 38.617 C 39.879 35.356 30.14 35.356 30.14 28.128 C 30.14 18.301 44.33 22.178 44.33 22.178 L 44.154 26.85 Z"
			transform="matrix(1, 0, 0, 1, 1.7763568394002505e-15, 8.881784197001252e-16)"
		/>
	</svg>
);

export default TypeScript;
