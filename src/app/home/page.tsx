'use client'

import Datepicker from "../ui/components/datePicker";
import Dropdown from "../ui/components/dropDown";
import Search from "../ui/components/search";
import Sidemenu from "../ui/components/sideMenu";
import { EmployeeCard } from './../ui/components/employeeCard';


function TableRow() {
    return (
        <tr className="relative">
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Gary Barlow</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">Singer</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">$20,000</td>
            <td className="whitespace-nowrap px-4 py-2">
                <Dropdown />
            </td>
        </tr>
    );
}


export default function Page() {
    return (
        <Sidemenu>
            <div className="relative h-screen">
                <div className="flow-root h-fit rounded-lg border border-gray-100 py-3 shadow-sm overflow-x-auto m-4 sm:m-6 lg:m-8 p-4 sm:p-6 lg:p-8">

                    {/* Inicia buscador */}

                    <div className="flex">
                        <Search />
                        <Datepicker />
                    </div>



                    {/* Inicia tabla */}

                    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                        <thead className="ltr:text-left rtl:text-right">
                            <tr>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date of Birth</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Role</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Salary</th>
                                <th className="px-4 py-2"></th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                            <TableRow></TableRow>
                        </tbody>
                    </table>
                </div>



            </div>
        </Sidemenu>
    );
}