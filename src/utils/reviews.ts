export interface Review {
  name: string;
  rating: number;
  service: string;
  text: string;
  date: string;
}

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (char === '"' && next === '"') {
        field += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (char === "\r") {
      continue;
    } else {
      field += char;
    }
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  return rows;
}

function findColumn(headers: string[], name: string): number {
  return headers.findIndex((header) => header.trim().toLowerCase() === name.toLowerCase());
}

export async function getReviews(): Promise<Review[]> {
  const csvUrl = import.meta.env.REVIEWS_SHEET_CSV_URL;

  if (!csvUrl) {
    return [];
  }

  try {
    const response = await fetch(csvUrl);

    if (!response.ok) {
      return [];
    }

    const text = await response.text();
    const rows = parseCsv(text);

    if (rows.length < 2) {
      return [];
    }

    const headers = rows[0];
    const timestampIndex = findColumn(headers, "Timestamp");
    const nameIndex = findColumn(headers, "Your Name");
    const ratingIndex = findColumn(headers, "Rating");
    const serviceIndex = findColumn(headers, "Which service did you experience?");
    const reviewIndex = findColumn(headers, "Your Review");

    const reviews: Review[] = [];

    for (const row of rows.slice(1)) {
      const name = nameIndex >= 0 ? row[nameIndex]?.trim() : "";
      const text2 = reviewIndex >= 0 ? row[reviewIndex]?.trim() : "";
      const ratingRaw = ratingIndex >= 0 ? row[ratingIndex]?.trim() : "";
      const rating = Number.parseInt(ratingRaw ?? "", 10);

      if (!name || !text2 || Number.isNaN(rating)) {
        continue;
      }

      reviews.push({
        name,
        rating: Math.min(5, Math.max(1, rating)),
        service: serviceIndex >= 0 ? row[serviceIndex]?.trim() ?? "" : "",
        text: text2,
        date: timestampIndex >= 0 ? row[timestampIndex]?.trim() ?? "" : "",
      });
    }

    reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return reviews;
  } catch {
    return [];
  }
}