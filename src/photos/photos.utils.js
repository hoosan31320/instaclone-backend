export const processHashtags = (caption) => {
  const hashtags0 = caption.match(/[\w]+/g) || [];
  const hashtags1 = hashtags0.toLowerCase();
  const hashtags = hashtags1.map(
    (currentValue, index, array) => {
      return "#" + currentValue;
  })
  return hashtags.map((hashtag) => ({
    where: {hashtag},
    create: {hashtag}
  }));
};
