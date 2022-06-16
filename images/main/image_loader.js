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
  'w13.jpg',
  'w14.jpg',
  'w15.jpg',
  'w16.jpg',
  'w17.jpg',
  'w18.jpg',
  'w19.jpg',
  'w20.jpg',
  'w21.jpg',
  'w22.jpg',
  'w23.jpg',
  'w24.jpg',
  'w25.jpg',
  'w26.jpg',
  'w27.jpg',
  'w28.jpg',
];

const left_side_panel  = document.getElementById('left_images');
const right_side_panel = document.getElementById('right_images');

let is_left_side = true;
IMAGE_NAMES.forEach(image_name => {
  const img_html = `<img
    src="images/work/${image_name}"
    class="gallery_image"
    onerror="this.style.display='none'"
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
