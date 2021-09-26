export function shareBusiness(
  businessName: string,
  businessDescription: string,
  businessUril: string
) {
  const shareData = {
    title: businessName,
    text: businessDescription,
    url: businessUril,
  };
  return navigator.share(shareData)
}
