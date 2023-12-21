import React from 'react';
import {Header03} from "../../src/components/Header";
import {SegundaHeader02} from "../../src/components/AnotherHeader/anotherHeader";
import GetTutorByIdForm from "../../src/components/GetTutorByIdSecretarioForm";
import Footer from "../../src/components/Footer";

function getAnimalTutorPage() {
    return (
        <>
        <div>
            < Header03 />
        </div>
        <div>
            < SegundaHeader02 />
        </div>
        <div>
            < GetTutorByIdForm />
        </div>
        <div>
            < Footer />
        </div>
        </>
    );
}

export default getAnimalTutorPage