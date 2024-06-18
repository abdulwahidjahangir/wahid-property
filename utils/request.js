const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch All Property
export const fetchProperties = async ({ showFeatured = false } = {}) => {
  try {
    if (!apiDomain) {
      return [];
    }

    // URLS
    let res = [];
    if (showFeatured) {
      res = await fetch(`${apiDomain}/properties/featured`);
    } else {
      res = await fetch(`${apiDomain}/properties?page=1&&pageSize=10`);
    }

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

// Fetch Single Property
export const fetchProperty = async (id) => {
  try {
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/properties/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};
