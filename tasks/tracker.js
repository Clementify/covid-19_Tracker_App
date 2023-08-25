// Write something
const fetchapi = `https://disease.sh/v3/covid-19/countries`;
// Function to fetch COVID-19 data for a selected country
function getCountryData() {
    const countrySelect = document.getElementById("country");
    const selectedCountry = countrySelect.value;
    fetchapi(`https://disease.sh/v3/covid-19/countries`)
        .then((response) => response.json())
        .then((data) => {
            // Calculate total cases, deaths, and recovered
            const totalCases = data[data.length - 1].Confirmed;
            const totalDeaths = data[data.length - 1].Deaths;
            const totalRecovered = data[data.length - 1].Recovered;
            // Update the UI with the data
            document.getElementById("totalCases").textContent = totalCases;
            document.getElementById("totalDeaths").textContent = totalDeaths;
            document.getElementById("totalRecovered").textContent =
                totalRecovered;
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}
 getCountryData()
// Fetch a list of countries when the page loads
fetchapi("https://disease.sh/v3/covid-19/countries")
    .then((response) => response.json())
    .then((countries) => {
        const countrySelect = document.getElementById("country");
        countries.forEach((country) => {
            const option = document.createElement("option");
            option.value = country.Slug;
            option.textContent = country.Country;
            countrySelect.appendChild(option);
        });
    })
    .catch((error) => {
        console.error("Error fetching country data:", error);
    });



// create function to display covid data and paginate

