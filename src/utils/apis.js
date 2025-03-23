export const fetchSkips = async () => {
  const response = await fetch(
    "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
  );
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};
