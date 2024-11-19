export const formUrl = ({
  partnerId: partnerProvided,
  theme = "dark",
  targetUrl,
}: {
  partnerId: string;
  theme?: string;
  targetUrl?: string;
}) => {
  const base = "https://test.mighty.study";
  
  const partnerId = partnerProvided.replaceAll(" ", "_");
  
  if (!targetUrl) return `${base}?partnerID=${partnerId}&theme=${theme}`

  return `${targetUrl}?partnerID=${partnerId}&theme=${theme}`

};
