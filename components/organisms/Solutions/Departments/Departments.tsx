

import { FunctionComponent } from "react";
import { SlideGroupSelection, SlideProp } from "@components/molecules/SlideGroupSelection/SlideGroupSelection";

interface DepartmentsProps {

}

const Departments: FunctionComponent<DepartmentsProps> = () => {



    const slides: SlideProp[] = [
        {
            label: 'Departament Category 1',
        },
        {
            label: 'Departament Category 2',
        },
        {
            label: 'Departament Category 3',
        },
        {
            label: 'Departament Category 4',
        },
        {
            label: 'Departament Category 5',
        }
    ];

    return (
        <SlideGroupSelection slides={slides} />

    )
}//Closes Departments component

export default Departments;