

// create function to display covid data and paginate


const countryCards = document.querySelector('.country-cards');
const countryInfo = document.querySelector('.country-info');

// Function to fetch COVID-19 data and create country cards
async function fetchDataAndCreateCards() {
    try {
        const response = await fetch('https://disease.sh/v3/covid-19/countries');
        const data = await response.json();

        // Loop through the data and create country cards
        data.forEach(country => {
            const card = document.createElement('div');
            card.classList.add('country-card');
            card.innerHTML = `
                <img src="${country.countryInfo.flag}" alt="${country.country}" />
                <h3>${country.country}</h3>
                <p>Continent: ${country.continent}</p>
            `;

            // Add click event to show country information
            card.addEventListener('click', () => {
                displayCountryInfo(country);
            });

            countryCards.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to display detailed information for a selected country
function displayCountryInfo(country) {
    countryInfo.innerHTML = `
        <h2>${country.country}</h2>
        <p>Population: ${country.population}</p>
        <p>Reported Cases Today: ${country.todayCases}</p>
        <p>Total Reported Cases: ${country.cases}</p>
        <p>Deaths: ${country.deaths}</p>
        <p>Recovered Cases: ${country.recovered}</p>
    `;
}

// Initialize the application
fetchDataAndCreateCards();
