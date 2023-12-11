CREATE TABLE food_menu
(
    id                INT AUTO_INCREMENT PRIMARY KEY,
    foodName          VARCHAR(255),
    price             DECIMAL(10, 2),
    preview3dModelObj VARCHAR(255),
    preview3dModelMtl VARCHAR(255),
    previewImage      VARCHAR(255)
);
