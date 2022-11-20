extern crate wasm_bindgen;
use image::GenericImageView;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn get_image_view() {
    let img = image::open("pink.jpg").unwrap();
    let (width, height) = img.dimensions();
    alert(&format!("图片宽度: {:?} 图片高度: {:?}!", width, height));
}
