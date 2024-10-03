export const getImage = (files:object) => {
    return `https://back.saharvata74.ru/get_image?image_path=/app/${Object.values(files)[0]}`
}