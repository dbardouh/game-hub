const getCroppedImageUrl = (url: string) => {
  if (url) return url.replace("/media/", "/media/crop/600/400/");
  else return url;
};

export default getCroppedImageUrl;
