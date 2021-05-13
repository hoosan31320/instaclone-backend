export const processHashtags = (caption) => {
    const hashtags0 = caption.match(/[\w]+/g) || [];
    const hashtags = hashtags0.map(
        (currentValue, index, array) => {
            return "#" + currentValue;
    })
    console.log(hashtags);
    return hashtags.map((hashtag) => ({
        where: {hashtag},
        create: {hashtag}
    }));
};
