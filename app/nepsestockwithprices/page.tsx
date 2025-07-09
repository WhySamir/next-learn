import axios from "axios";
import * as cheerio from "cheerio";

export default async function scrapeData() {
  const url = "https://merolagani.com/latestmarket.aspx";
  try {
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    const $ = cheerio.load(data);
    const rows = $("#ctl00_ContentPlaceHolder1_LiveTrading table tr");
    const result: any = [];

    rows.each((i: any, row: any) => {
      const cols = $(row).find("td");
      if (cols.length >= 9) {
        result.push({
          Symbol: $(cols[0]).text().trim(),
          LTP: $(cols[1]).text().trim(),
          "% Change": $(cols[2]).text().trim(),
          Open: $(cols[3]).text().trim(),
          High: $(cols[4]).text().trim(),
          Low: $(cols[5]).text().trim(),
          Qty: $(cols[6]).text().trim(),
          Pclose: $(cols[7]).text().trim(),
          Diff: $(cols[8]).text().trim(),
        });
      }
    });

    // Preview first 5 items
    console.log(result.slice(0, 5));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

scrapeData();
