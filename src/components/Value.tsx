import { StyleSheet, Text, View } from 'react-native'

type ValueProps = {
	label: string
	value: string
}

export const Value = ({ label, value }: ValueProps) => {
	return (
		<View>
			<Text style={styles.label}>{label}</Text>
			<Text style={styles.value}>{value}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	label: {
		color: 'white',
		fontSize: 20,
	},

	value: {
		fontSize: 45,
		color: '#AFB3BE',
		fontWeight: '500',
	},
})
