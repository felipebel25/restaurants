
import { FunctionComponent } from "react";
import { SlideGroupSelection, SlideProp } from "@components/molecules/SlideGroupSelection/SlideGroupSelection";

interface DepartmentsProps {

}

const UseCases: FunctionComponent<DepartmentsProps> = () => {


    const slides: SlideProp[] = [
        {
            label: 'Use Case 1',
        },
        {
            label: 'Use Case 2',
        },
        {
            label: 'Use Case 3',
        },
        {
            label: 'Use Case 4',
        },
        {
            label: 'Use Case 5',
        }
    ];

    return (
        <SlideGroupSelection slides={slides} />

    )
}//Closes Departments component

export default UseCases;