    import { For } from "million/react";

    function List() {
    const countryNames = ["India", "Brazil", "Germany", "Australia"];
    console.log(countryNames);
    return (
        <div>
        <For each={countryNames}>
            {(name, index) => <p key={index}>Hello, {name}!</p>}
        </For>
        
        </div>
    );
    }
    export default List;