const getLikesStrings = (arrayOfPersons) => {
    if(arrayOfPersons.length === 1)  return `${arrayOfPersons[0]} Likes your post`;
    if(arrayOfPersons.length === 2)  return `${arrayOfPersons[0]} and ${arrayOfPersons[1]} Likes your post`;
    if(arrayOfPersons.length === 3)  return `${arrayOfPersons[0]}, ${arrayOfPersons[1]} and ${arrayOfPersons[2]} Likes your post`;
    if(arrayOfPersons.length > 3)  return `${arrayOfPersons[0]} and ${arrayOfPersons.length - 1} other Likes your post`;
};

module.exports = { getLikesStrings };
