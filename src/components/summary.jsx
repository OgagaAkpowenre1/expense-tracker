import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import TransactionForm from "./add-transaction";
import TransactionChartSummary from "./chart";

export default function Summary({
	totalExpense,
	totalIncome,
	onClose,
	isOpen,
}) {
	return (
		<Box
			p={"6"}
			border={"1px solid"}
			borderColor={"gray.100"}
			overflow={"hidden"}
			borderRadius={"10"}
			bg={"white"}
		>
			<Flex
				w={"full"}
				alignItems={"center"}
				justifyContent={"center"}
				flexDirection={{
					base: "column",
					sm: "column",
					md: "column",
					lg: "row",
					xl: "row",
				}}
			>
				<Flex
					flex={"1"}
					flexDirection={"column"}
					w={"full"}
					alignItems={"center"}
					justifyContent={"space-evenly"}
					ml={"-20"}
					mr={"2"}
				>
					<Heading size={"md"} mb={"4"} color={"gray.600"}>
						Balance is ${totalIncome - totalExpense}
					</Heading>

					<Flex
						justifyContent={"space-evenly"}
						alignItems={"center"}
						bg={"gray.50"}
						w={"full"}
						h={"100px"}
						border={"1px solid"}
						borderColor={"gray.100"}
					>
						<Flex flexDirection={"column"}>
							<Heading>${totalIncome}</Heading>
							<Text color={"gray.600"}>Total Income</Text>
						</Flex>
					</Flex>

					<Flex
						justifyContent={"space-evenly"}
						alignItems={"center"}
						bg={"gray.50"}
						w={"full"}
						h={"100px"}
						border={"1px solid"}
						borderColor={"gray.100"}
					>
						<Flex flexDirection={"column"}>
							<Heading>${totalExpense}</Heading>
							<Text color={"gray.600"}>Total Expense</Text>
						</Flex>
					</Flex>
				</Flex>

				<Box
					flex={"1"}
					mt={"10"}
					ml={"-90px"}
					mr={"5"}
					w={"300px"}
					h={"300px"}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					<TransactionChartSummary income={totalIncome} expense={totalExpense} />
				</Box>
			</Flex>
			<TransactionForm onClose={onClose} isOpen={isOpen} />
		</Box>
	);
}
