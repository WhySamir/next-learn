export default async function fetchAllCompanies() {
  try {
    const URL =
      "https://merolagani.com/handlers/AutoSuggestHandler.ashx?type=Company";

    const res: any = await fetch(URL);
    const companies = await res.json();

    console.log(`Total companies: ${companies.length}`);
    console.log(companies.slice(0, 5));
  } catch (err) {
    console.error("Error fetching data:", err);
  }
}

fetchAllCompanies();
