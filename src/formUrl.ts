export const formUrl = ({
  partnerId: partnerProvided,
  theme = "dark",
  targetUrl,
}: {
  partnerId: string;
  theme?: string;
  targetUrl?: string;
}) => {
  const base = "https://app.mighty.study";
  
  const partnerId = partnerProvided.replaceAll(" ", "_");
  
  if (!targetUrl) return `${base}?partnerID=${partnerId}&theme=${theme}`

  let newTarget = targetUrl;

  if (targetUrl[targetUrl.length - 1] === '/') {
    newTarget = targetUrl.slice(0, - 1)
  }
  

  return `${newTarget}?partnerID=${partnerId}&theme=${theme}`

};
