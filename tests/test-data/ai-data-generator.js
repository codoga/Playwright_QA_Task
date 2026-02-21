function generateBookingData() {

  const firstNames = [
    "Kemal",
    "Efe",
    "Zeynep",
    "Elif",
    "Mert",
    "Deniz",
    "Arda",
    "Ayşe",
    "Emir",
    "Selin",
    "Doğa"
  ];

  const lastNames = [
    "Karakaya",
    "Yılmaz",
    "Kaya",
    "Demir",
    "Çelik",
    "Şahin",
    "Koç",
    "Aydın",
    "Kurt",
    "Arslan",
    "Başoğlu"
  ];

  const additionalNeedsOptions = [
    "Kahvaltı",
    "Geç Çıkış",
    "Ekstra Yatak",
    "Havaalanı Transferi"
  ];

  const randomIndex = (length) =>
    Math.floor(Math.random() * length);

  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const formatDate = (date) =>
    date.toISOString().split("T")[0];

  const generateFutureDate = (minOffset, maxOffset) => {
    const today = new Date();
    const offset = randomInt(minOffset, maxOffset);
    const futureDate = new Date(today.getTime());
    futureDate.setDate(today.getDate() + offset);
    return futureDate;
  };

  const checkinDate = generateFutureDate(1, 30);
  const checkoutDate = generateFutureDate(31, 60);

  const includeAdditionalNeeds = Math.random() > 0.5;

  return {
    firstname: firstNames[randomIndex(firstNames.length)],
    lastname: lastNames[randomIndex(lastNames.length)],
    totalprice: randomInt(100, 2000),
    depositpaid: Math.random() >= 0.5,
    bookingdates: {
      checkin: formatDate(checkinDate),
      checkout: formatDate(checkoutDate)
    },
    ...(includeAdditionalNeeds && {
      additionalneeds: additionalNeedsOptions[randomIndex(additionalNeedsOptions.length)]
    })
  };
}

module.exports = { generateBookingData };
