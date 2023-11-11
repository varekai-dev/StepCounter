import { StyleSheet, View } from 'react-native'
import SVG, { Circle } from 'react-native-svg'

type RingProgressProps = {
	radius?: number
	strokeWidth?: number
	progress: number
}

const color = '#ee0f55'

export const RingProgress = ({
	radius = 100,
	strokeWidth = 35,
	progress,
}: RingProgressProps) => {
	const innerRadius = radius - strokeWidth / 2
	const circumference = innerRadius * 2 * Math.PI
	return (
		<View
			style={{
				width: radius * 2,
				height: radius * 2,
				alignSelf: 'center',
			}}
		>
			<SVG>
				{/*Progress*/}
				<Circle
					cx={radius}
					cy={radius}
					r={innerRadius}
					strokeWidth={strokeWidth}
					stroke={color}
					strokeDasharray={[circumference * progress, circumference]}
					strokeLinecap="round"
					rotation="-90"
					originX={radius}
					originY={radius}
				/>
				{/*Background*/}
				<Circle
					cx={radius}
					cy={radius}
					r={innerRadius}
					strokeWidth={strokeWidth}
					stroke={color}
					opacity={0.2}
				/>
			</SVG>
		</View>
	)
}

const styles = StyleSheet.create({
	ring: {
		color: 'red',
	},
})
