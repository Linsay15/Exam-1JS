import url from "./API";

async function getData() { 
    try {
        const casa = await fetch (url);

        const casaJson = await casa.json()
        console.log(casaJson.results)
        return casaJson.results

    } catch (error) {
        alert("error")
    }
}
export default getData;