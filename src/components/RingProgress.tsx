import { View } from 'react-native'
import SVG, { Circle } from 'react-native-svg'
import Animated, {
	useAnimatedProps,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated'
import { useEffect } from 'react'

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

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

	const fill = useSharedValue(0)

	useEffect(() => {
		fill.value = withTiming(progress, { duration: 1500 })
	}, [progress])

	const animatedProps = useAnimatedProps(() => ({
		strokeDasharray: [circumference * fill.value, circumference],
	}))

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
				<AnimatedCircle
					animatedProps={animatedProps}
					cx={radius}
					cy={radius}
					r={innerRadius}
					strokeWidth={strokeWidth}
					stroke={color}
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
