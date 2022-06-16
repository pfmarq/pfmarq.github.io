const IMAGE_NAMES = [
  // Add every image you want to render's name here
  'w1.jpg',
  'w2.jpg',
  'w3.jpg',
  'w4.jpg',
  'w5.jpg',
  'w6.jpg',
  'w7.jpg',
  'w8.jpg',
  'w9.jpg',
  'w10.jpg',
  'w11.jpg',
  'w12.jpg',
  'w13.png',
  'w14.png',
  'w15.jpg',
  'w16.jpg',
  'w17.jpg',
  'w18.png',
  'w19.jpg',
  'w20.jpg',
  'w21.png',
  'w22.jpg',
  'w23.jpg',
  'w24.png',
  'w25.jpg',
  'w26.jpg',
  'w27.jpg',
  'w28.jpg',
];

const hideBigImage = () => {
  const div = document.getElementById('big_image_div');
  div.style.display = 'none';
};
const clickBigImage = event => {
  event.stopPropagation();
};

const big_img = document.getElementById('big_image');
const big_img_div = document.getElementById('big_image_div');
const setBigImage = image_name => {
  big_img.src = "images/main/" + image_name;
  big_img_div.style.display = 'flex';
};
const cycleBigImage = (direction, event) => {
  if (big_img_div.style.display === 'flex') {
    const image_name = big_img.src.split('/').slice(-1)[0];
    const current_image_index = IMAGE_NAMES.findIndex(name => name === image_name);
    if (current_image_index !== -1) {
      const new_index = current_image_index + direction;
      if (new_index >= 0 && new_index < IMAGE_NAMES.length) {
        setBigImage(IMAGE_NAMES[new_index]);
      }
    }
  }
  if (event) event.stopPropagation();
};

document.addEventListener('keydown', event => {
  switch (event.keyCode) {
    case 37:
      cycleBigImage(-1);
      break;
    case 39:
      cycleBigImage(1);
      break;
  }
});

const left_side_panel  = document.getElementById('left_images');
const right_side_panel = document.getElementById('right_images');

let is_left_side = true;
IMAGE_NAMES.forEach(image_name => {
  const img_html = `<img
    src="images/main/${image_name}"
    class="gallery_image"
    onerror="this.style.display='none'"
    style="cursor: pointer"
    onclick="setBigImage('${image_name}')"
  >`;
  const node = document.createElement("img");
  if (is_left_side) {
    left_side_panel.appendChild(node);
  } else {
    right_side_panel.appendChild(node);
  }
  node.outerHTML = img_html;
  is_left_side = !is_left_side;
});
