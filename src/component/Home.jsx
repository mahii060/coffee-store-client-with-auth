import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";


const Home = () => {
    const loadedCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(loadedCoffees)
    return (
        <div>
            <h1 className='text-5xl my-5 text-center text-gray-100'>Coffee Store: {loadedCoffees.length}</h1>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 m-20">
                {coffees.map(coffee => <CoffeeCard key={coffee._id} setCoffees={setCoffees} coffee={coffee} />)}
            </div>
        </div>
    );
};

export default Home;