const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetech all properties 
// will return the properperties data from the mongodb atlas db
async function fetchProperties () {
  try {
    // handle the case if the the api domain is not available yet 
    if (!apiDomain) {
        return [];
    }

    const res = await fetch(`${apiDomain}/properties`);
    console.log("res:", res);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Fetch single property
// NOTE: the id here is the the MongoDB's _id => 13q6436910308424 and not the properties.json id example => 3
async function fetchProperty (id) {
  try {
    // handle the case if the the api domain is not available yet 
    if (!apiDomain) {
        return [];
    }

    const res = await fetch(`${apiDomain}/properties/${id}`);
    console.log("res:", res);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}


export { fetchProperties, fetchProperty };