import React, { useEffect } from "react";
import { useState } from "react";

const ApiData: React.FC = () => {

    const [testo, setTesto] = useState();

    async function getData() {
        const response = await fetch("https://goldfish-app-dnyak.ondigitalocean.app/api/hello");
        const data = await response.json();
        setTesto(data);
        console.log(data);
    };


    useEffect(() => {
        getData();
    }, []);


    return(
        <div>
            {testo}
        </div>
    );
}

export default ApiData;