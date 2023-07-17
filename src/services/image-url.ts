import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

const getCroppedImageUrl = (url: string) => {
  if (url) return url.replace("/media/", "/media/crop/600/400/");
  else return noImage;
};

export default getCroppedImageUrl;
