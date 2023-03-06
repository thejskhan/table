import { useState } from "react"
import { Popover } from "@headlessui/react"
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid"

type User = {
	userId: string
	familyName: string
	givenName: string
	userName: string
	programs: number
	status: string
	averageSession: string
	lastActive: string
	customOne: string
	customTwo: string
}

type Column = keyof User

const LabelMap: Record<Column, string> = {
	userId: "User ID",
	familyName: "Family Name",
	givenName: "Given Name",
	userName: "User Name",
	programs: "Programs",
	status: "Status",
	averageSession: "Avg. Session",
	lastActive: "Last Active",
	customOne: "Custom One",
	customTwo: "Custom Two"
}

const GivenData: User[] = [
	{
		userId: "0c32f834a7@example.edu",
		familyName: "Rutherford",
		givenName: "Kayleigh",
		userName: "KabeRuth",
		programs: 2,
		status: "Active",
		averageSession: "0:00",
		lastActive: "2018-08-17",
		customOne: "Custom 1",
		customTwo: "Custom 2",
	},
	{
		userId: "8667ffbf61@example.edu",
		familyName: "Pouros",
		givenName: "Selina",
		userName: "Pou",
		programs: 1,
		status: "Active",
		averageSession: "0:02",
		lastActive: "2017-09-15",
		customOne: "Custom 1",
		customTwo: "Custom 2",
	},
	{
		userId: "b9067a5741@example.edu",
		familyName: "Hyatt",
		givenName: "Miracle",
		userName: "Kiseki",
		programs: 1,
		status: "Active",
		averageSession: "0:03",
		lastActive: "2017-09-15",
		customOne: "Custom 1",
		customTwo: "Custom 2",
	},
]

const App = () => {
	const [columns, setColumns] = useState<Column[]>(Object.keys(LabelMap).map((key) => key as Column))
	const [hiddenColumns, setHiddenColumns] = useState<Column[]>([
		"customOne",
		"customTwo",
	])

	const createHandler = (from: Column, to: Column) => () => {
		setHiddenColumns((hiddenColumns) => hiddenColumns.map((column) => {
			return column === to ? from : column
		}))

		setColumns((columns) => columns.map((column) => {
			return column === from ? to : column === to ? from : column
		}))
	}

	return (
		<table className="w-full">
			<thead>
				<Popover.Group as="tr">
					{
						columns.map((key, index) => (
							<Popover
								key={key}
								as="th"
								className={hiddenColumns.includes(key as Column) ? "hidden" : "relative border py-4 px-2 text-left bg-blue-500 text-white"}
							>
								<div className="flex items-center gap-1">
									{LabelMap[key as Column]}
									<Popover.Button><EllipsisVerticalIcon className="w-6 h-6" /></Popover.Button>
								</div>
								<Popover.Panel className="absolute z-10 text-black bg-white">
									<div className="relative w-full group">
										<span className="border block px-4 py-2">Change Data</span>
										<div className={`absolute ${index < columns.length - hiddenColumns.length - 1 ? "left-full" : "right-full"} top-0 hidden group-hover:flex flex-col w-full max-w-max`}>
											{
												hiddenColumns.map((column) => (
													<button key={column} onClick={createHandler(key as Column, column)} className="bg-white px-4 py-2 border">{LabelMap[column]}</button>
												))
											}
										</div>
									</div>
								</Popover.Panel>
							</Popover>
						))
					}
				</Popover.Group>
			</thead>
			<tbody>
				{
					GivenData.map((user) => (
						<tr key={user.userId}>
							{
								columns.map((key) => (
									<td key={key} className={hiddenColumns.includes(key as Column) ? "hidden" : "py-4 px-2 border"} >{user[key as Column]}</td>
								))
							}
						</tr>
					))
				}
			</tbody>
		</table>
	)
}

export default App
