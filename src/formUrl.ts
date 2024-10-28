export const formUrl = ({
  partnerId: partnerProvided,
  theme = "dark",
  course,
}: {
  partnerId: string;
  theme?: string;
  course?: string;
}) => {
  const base = "https://test.mighty.study";
  
  const partnerId = partnerProvided.replaceAll(" ", "_");
  let middlePart = "";
  if (!!course) {
    middlePart = course.replace(base, "");
  } else {
    middlePart = `/space/${partnerId}`;
  }

  return `${base}/${middlePart}?partnerID=${partnerId}&theme=${theme}`
    .replaceAll("//", "/")
    .replace("https:/", "https://");
};
